import type { APIRoute } from "astro";

const TOKEN_ENDPOINT = "https://accounts.spotify.com/api/token";
const NOW_PLAYING_ENDPOINT =
  "https://api.spotify.com/v1/me/player/currently-playing";
const RECENTLY_PLAYED_ENDPOINT =
  "https://api.spotify.com/v1/me/player/recently-played?limit=1";

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
    const access_token = await getAccessToken();

    // Fetch currently playing and recently played tracks
    const [nowPlayingRes, recentRes] = await Promise.all([
      fetch(NOW_PLAYING_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` },
      }),
      fetch(RECENTLY_PLAYED_ENDPOINT, {
        headers: { Authorization: `Bearer ${access_token}` },
      }),
    ]);

    let nowPlaying: any = null;
    let lastPlayed: any = null;
    let progressMs = 0;

    // Handle currently playing track
    if (nowPlayingRes.status === 200) {
      const nowData = await nowPlayingRes.json();
      if (nowData?.item) {
        if (nowData.is_playing) {
          nowPlaying = nowData.item;
          progressMs = nowData.progress_ms || 0;
        }
      }
    }

    // Handle most recent track
    if (recentRes.status === 200) {
      const recentData = await recentRes.json();
      lastPlayed = recentData.items?.[0]?.track || null;
    }

    // Format tracks for frontend
    const formatTrack = (track: any, progress = 0) => {
      if (!track) return null;
      return {
        title: track.name,
        artist: track.artists.map((a: any) => a.name).join(", "),
        album: track.album.name,
        albumImage: track.album.images[0]?.url,
        songUrl: track.external_urls.spotify, // clickable link to Spotify
        durationMs: track.duration_ms,
        progressMs: progress,
      };
    };

    return new Response(
      JSON.stringify({
        nowPlaying: formatTrack(nowPlaying, progressMs),
        lastPlayed: formatTrack(lastPlayed),
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache, no-store, must-revalidate",
          Pragma: "no-cache",
          Expires: "0",
        },
      },
    );
  } catch (err) {
    console.error(err);
    return new Response(
      JSON.stringify({ error: "Failed to fetch Spotify data" }),
      { status: 500 },
    );
  }
};
