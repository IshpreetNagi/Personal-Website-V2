import { useState, useEffect } from 'react';

interface TrackInfo {
  name: string;
  artist: { ['#text']: string };
  album: { ['#text']: string };
  image: { ['#text']: string; size : string }[];
}

function Waves() {
  const [heights, setHeights] = useState([10, 15, 7, 12, 20]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights(heights.map(() => 5 + Math.floor(Math.random() * 20)));
    }, 300);

    return () => clearInterval(interval);
  }, [heights]);

  return (
    <div className="flex space-x-1 mb-2 justify-center items-end h-8">
      {heights.map((height, i) => (
        <div
          key={i}
          style={{ height: `${height}px` }}
          className="w-1 bg-[rgb(29,185,84)] rounded transition-all duration-300 ease-in-out"
        />
      ))}
    </div>
  );
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
    <div className="text-white">
      {nowPlaying ? (
        <div className="flex flex-row gap-9 sm:flex-col sm:gap-4 md:flex-col md:gap-4">
          <h2 className='text-lg text-[rgb(29,185,84)] mt-3'>Currently jamming to...</h2>
          <div className="flex flex-row items-center justify-start bg-[rgb(25,20,20)] border border-[rgb(29,185,84)] px-5 py-4 w-104 rounded-2xl overflow-hidden origin-left scale-80">
            <div className="relative w-20 h-20 flex-shrink-0">
              <img
                src={nowPlaying.image.find(img => img.size === 'extralarge')?.['#text'] || ''}
                alt="Album Art"
                className="w-full h-full object-cover rounded-xl shadow-lg "
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
                <Waves />
              </div>
            </div>
            <div className="flex flex-col ml-6 gap-1">
              <p className='text-2xl sm:text-3xl'>{nowPlaying.name}</p>
              <p className='text-base sm:text-lg'>{nowPlaying.artist['#text']}</p>
            </div>
          </div>
        </div>
      ) :
      lastPlayed ? (
        <div className="flex flex-row gap-9 sm:flex-col sm:gap-4 md:flex-col md:gap-4">
          <h2 className='text-lg text-[rgb(29,185,84)] mt-3 sm:text-sm sm:mt-9'>Previously jamming to...</h2>
          <div className="flex flex-row items-center justify-start bg-[rgb(25,20,20)] border border-[rgb(29,185,84)] px-5 py-4 w-104 rounded-2xl overflow-hidden origin-left scale-80 sm:scale-100 sm:w-52 sm:px-5 sm:py-0">
            <div className="relative w-20 h-20 flex-shrink-0 sm:w-12 sm:h-12">
              <img
                src={lastPlayed.image.find(img => img.size === 'extralarge')?.['#text'] || ''}
                alt="Album Art"
                className="w-full h-full object-cover rounded-xl shadow-lg "
              />
            </div>
            <div className="flex flex-col ml-6 gap-1">
              <p className='text-2xl sm:text-3xl'>{lastPlayed.name}</p>
              <p className='text-base sm:text-lg'>{lastPlayed.artist['#text']}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <h2 className='text-lg text-[rgb(29,185,84)] items-center justify-center'>Error accessing music data. Last.fm unavailable.</h2>
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
