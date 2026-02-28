import type { APIRoute } from "astro";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";
const USER_ENDPOINT = "https://api.spotify.com/v1/me";

// In-memory cache
let cachedResponse: any = null;
let cacheTimestamp = 0;
let rateLimitResetTime = 0;
const CACHE_DURATION = 15000; // 15 seconds

async function getAccessToken() {
  const client_id =
    process.env.SPOTIFY_CLIENT_ID || import.meta.env.SPOTIFY_CLIENT_ID;
  const client_secret =
    process.env.SPOTIFY_CLIENT_SECRET || import.meta.env.SPOTIFY_CLIENT_SECRET;
  const refresh_token =
    process.env.SPOTIFY_REFRESH_TOKEN || import.meta.env.SPOTIFY_REFRESH_TOKEN;

  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

  const res = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });

  if (!res.ok) throw new Error("Failed to get Spotify access token");

  const data = await res.json();
  return data.access_token;
}

export const GET: APIRoute = async () => {
  try {
    // Check if cache is still valid
    const now = Date.now();
    if (cachedResponse && now - cacheTimestamp < CACHE_DURATION) {
      return new Response(JSON.stringify(cachedResponse), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const access_token = await getAccessToken();

    // Fetch user profile, currently playing and recently played tracks
    const [userRes, nowPlayingRes, recentRes] = await Promise.all([
      fetch(USER_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` },
      }),
      fetch(NOW_PLAYING_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` },
      }),
      fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` },
      }),
    ]);

    let user: any = null;
    let nowPlaying: any = null;
    let lastPlayed: any = null;
    let progressMs = 0;

    // Handle user profile
    if (userRes.status === 200) {
      user = await userRes.json();
    }

    // Handle currently playing track
    if (nowPlayingRes.status === 200 || nowPlayingRes.status === 204) {
      // 200 = has content, 204 = no content (not currently playing)
      if (nowPlayingRes.status === 200) {
        const nowData = await nowPlayingRes.json();
        if (nowData?.item) {
          if (nowData.is_playing) {
            nowPlaying = nowData.item;
            progressMs = nowData.progress_ms || 0;
          }
        }
      }
    } else if (nowPlayingRes.status === 429) {
      const retryAfter = nowPlayingRes.headers.get("Retry-After");
      const retrySeconds = parseInt(retryAfter || "60", 10);
      console.log(
        "Now playing rate limited. Retry after:",
        retrySeconds,
        "seconds",
      );
      rateLimitResetTime = Math.max(
        rateLimitResetTime,
        now + retrySeconds * 1000,
      );
      // Return cache if available during rate limit
      if (cachedResponse) {
        return new Response(JSON.stringify(cachedResponse), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "X-Cache": "stale",
            "X-Reason": "Rate limited, returning cached response",
          },
        });
      }
    } else {
      console.log("Now playing endpoint status:", nowPlayingRes.status);
    }

    // Handle most recent track
    if (recentRes.status === 200) {
      const recentData = await recentRes.json();
      lastPlayed = recentData.items?.[0]?.track || null;
    } else if (recentRes.status === 429) {
      const retryAfter = recentRes.headers.get("Retry-After");
      const retrySeconds = parseInt(retryAfter || "60", 10);
      console.log(
        "Recently played rate limited. Retry after:",
        retrySeconds,
        "seconds",
      );
      rateLimitResetTime = Math.max(
        rateLimitResetTime,
        now + retrySeconds * 1000,
      );
      // Return cache if available during rate limit
      if (cachedResponse) {
        return new Response(JSON.stringify(cachedResponse), {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "X-Cache": "stale",
            "X-Reason": "Rate limited, returning cached response",
          },
        });
      }
    } else {
      console.log("Recently played endpoint status:", recentRes.status);
      const text = await recentRes.text();
      console.log("Response body:", text);
    }

    // Format tracks for frontend
    const formatTrack = (track: any, progress = 0) => {
      if (!track) return null;
      try {
        return {
          title: track.name,
          artist: track.artists?.map((a: any) => a.name).join(", "),
          album: track.album?.name,
          albumImage: track.album?.images?.[0]?.url,
          songUrl: track.external_urls?.spotify,
          durationMs: track.duration_ms,
          progressMs: progress,
        };
      } catch (error) {
        console.error("Error formatting track:", error);
        return null;
      }
    };

    const responseData = {
      user: user
        ? {
            displayName: user.display_name,
            profileImage: user.images?.[0]?.url,
            externalUrl: user.external_urls?.spotify,
          }
        : null,
      nowPlaying: formatTrack(nowPlaying, progressMs),
      lastPlayed: lastPlayed
        ? formatTrack(lastPlayed, lastPlayed.duration_ms || 0)
        : null,
    };

    // Update cache and reset rate limit timer on successful fetch
    cachedResponse = responseData;
    cacheTimestamp = now;
    rateLimitResetTime = 0;

    return new Response(JSON.stringify(responseData), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch Spotify data" }),
      { status: 500 },
    );
  }
};
