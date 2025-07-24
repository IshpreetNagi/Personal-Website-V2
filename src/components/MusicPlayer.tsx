import { useState, useEffect } from 'react';

interface TrackInfo {
  name: string;
  artist: { ['#text']: string };
  album: { ['#text']: string };
}

function MusicPlayer() {
  const [nowPlaying, setNowPlaying] = useState<TrackInfo | null>(null);
  const [lastPlayed, setLastPlayed] = useState<TrackInfo | null>(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const res = await fetch('/api/lastfm'); // Changed from `.ts` to endpoint-like path
        const data = await res.json();

        setNowPlaying(data.nowPlaying);
        setLastPlayed(data.lastPlayed);
      } catch (error) {
        console.error('Error fetching tracks:', error);
      }
    }

    fetchTracks();
    const interval = setInterval(fetchTracks, 15000); // Refresh every 15s

    return () => clearInterval(interval); // Clean up interval
  }, []);

  return (
    <div>
      {nowPlaying ? (
        <div>
          <h2>Now Playing</h2>
          <p>{nowPlaying.name} by {nowPlaying.artist['#text']}</p>
          <p>Album: {nowPlaying.album['#text']}</p>
        </div>
      ) : (
        <div>
          <h2>Previous Song</h2>
          {lastPlayed ? (
            <div>
              <p>{lastPlayed.name} by {lastPlayed.artist['#text']}</p>
              <p>Album: {lastPlayed.album['#text']}</p>
            </div>
          ) : (
            <p>No previous songs found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
