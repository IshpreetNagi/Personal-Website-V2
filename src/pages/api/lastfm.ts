import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  //process.env for server-side when deployed, import.meta.env for local development
  const API_KEY = process.env.LASTFM_API_KEY || import.meta.env.LASTFM_API_KEY;
  const USERNAME = process.env.LASTFM_USERNAME || import.meta.env.LASTFM_USERNAME;

  const response = await fetch(
    `https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=${USERNAME}&api_key=${API_KEY}&format=json`
  );

  if (!response.ok) {
    return new Response(JSON.stringify({ error: 'Failed to fetch Last.fm data' }), {
      status: 500,
    });
  }

  const data = await response.json();

  const recentTracks = data.recenttracks?.track || [];

  let nowPlaying = null;
  let lastPlayed = null;

  if (recentTracks.length > 0) {
    if (recentTracks[0]['@attr']?.nowplaying) {
      nowPlaying = recentTracks[0];
      lastPlayed = recentTracks[1] || null;
    }
    else {
      nowPlaying = null;
      lastPlayed = recentTracks[0];
    }
  }

  return new Response(JSON.stringify({ nowPlaying, lastPlayed }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};