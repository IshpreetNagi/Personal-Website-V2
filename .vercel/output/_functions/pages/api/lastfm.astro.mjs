export { renderers } from '../../renderers.mjs';

const GET = async () => {
  const API_KEY = process.env.LASTFM_API_KEY || "b5756a92bbc3c46a77efffda0b7d8248";
  const USERNAME = process.env.LASTFM_USERNAME || "Bapple_Boi";
  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`
  );
  if (!response.ok) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch Last.fm data" }),
      {
        status: 500
      }
    );
  }
  const data = await response.json();
  console.log(
    "Last.fm API response:",
    JSON.stringify(data.recenttracks?.track?.[0], null, 2)
  );
  const recentTracks = data.recenttracks?.track || [];
  let nowPlaying = null;
  let lastPlayed = null;
  if (recentTracks.length > 0) {
    if (recentTracks[0]["@attr"]?.nowplaying) {
      nowPlaying = recentTracks[0];
      lastPlayed = recentTracks[1] || null;
    } else {
      nowPlaying = null;
      lastPlayed = recentTracks[0];
    }
  }
  return new Response(JSON.stringify({ nowPlaying, lastPlayed }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0"
    }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
