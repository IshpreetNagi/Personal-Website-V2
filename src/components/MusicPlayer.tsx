import { useState, useEffect, useRef } from "react";

interface TrackInfo {
  name: string;
  artist: { ["#text"]: string };
  album: { ["#text"]: string };
  image: { ["#text"]: string; size: string }[];
}

function Waves() {
  const [heights, setHeights] = useState([10, 15, 7, 12, 20]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHeights((prev) => prev.map(() => 5 + Math.floor(Math.random() * 20)));
    }, 300);

    return () => clearInterval(interval);
  }, []);

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

function ScrollingText({ text, className }: { text: string; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (containerRef.current && textRef.current) {
      setIsOverflowing(textRef.current.scrollWidth > containerRef.current.clientWidth);
    }
  }, [text]);

  useEffect(() => {
    if (!isOverflowing) {
      setOffset(0);
      return;
    }

    let animationFrame: number;
    let timeoutId: number;
    let direction: "left" | "right" = "left";
    const speed = 1.5; // px per frame
    const delay = 2000; // ms pause at each end

    const step = () => {
      if (!containerRef.current || !textRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const textWidth = textRef.current.scrollWidth;
      
      const cutoff = window.innerWidth < 640 ? 50 : 0; 
      const maxOffset = -(textWidth - containerWidth - cutoff);

      setOffset((prev) => {
        if (direction === "left") {
          if (prev > maxOffset) {
            return prev - speed;
          } else {
            // reached end
            cancelAnimationFrame(animationFrame);
            timeoutId = window.setTimeout(() => {
              direction = "right";
              animationFrame = requestAnimationFrame(step);
            }, delay);
            return maxOffset;
          }
        } else {
          if (prev < 0) {
            return prev + speed;
          } else {
            // reached start
            cancelAnimationFrame(animationFrame);
            timeoutId = window.setTimeout(() => {
              direction = "left";
              animationFrame = requestAnimationFrame(step);
            }, delay);
            return 0;
          }
        }
      });

      animationFrame = requestAnimationFrame(step);
    };

    // initial pause at the start
    timeoutId = window.setTimeout(() => {
      animationFrame = requestAnimationFrame(step);
    }, delay);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeoutId);
    };
  }, [isOverflowing, text]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap w-full max-w-xs">
      <p
        ref={textRef}
        className={`${className} inline-block`}
        style={{ transform: `translateX(${offset}px)` }}
      >
        {text}
      </p>
    </div>
  );
}

function MusicPlayer() {
  const [nowPlaying, setNowPlaying] = useState<TrackInfo | null>(null);
  const [lastPlayed, setLastPlayed] = useState<TrackInfo | null>(null);

  useEffect(() => {
    async function fetchTracks() {
      try {
        const res = await fetch("/api/lastfm");
        const data = await res.json();

        setNowPlaying(data.nowPlaying);
        setLastPlayed(data.lastPlayed);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    }

    fetchTracks();
    const interval = setInterval(fetchTracks, 15000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">
      {nowPlaying ? (
        <div className="flex flex-row gap-9 sm:flex-col sm:gap-4 md:flex-col md:gap-4">
          <h2 className="text-lg text-[rgb(29,185,84)] mt-3 sm:text-sm sm:mt-9">
            Currently jamming to...
          </h2>
          <div className="flex flex-row items-center justify-start bg-[rgb(25,20,20)] border border-[rgb(29,185,84)] px-5 py-4 w-104 rounded-2xl overflow-hidden origin-left scale-80 sm:scale-100 sm:w-52 sm:px-4 sm:py-3 sm:rounded-xl">
            <div className="relative w-20 h-20 flex-shrink-0 sm:w-12 sm:h-12">
              <img
                src={
                  nowPlaying.image.find((img) => img.size === "extralarge")?.["#text"] || ""
                }
                alt="Album Art"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 rounded-2xl">
                <Waves />
              </div>
            </div>
            <div className="flex flex-col ml-6 gap-1 sm:ml-4 sm:gap-0 w-52 sm:w-32">
              <ScrollingText text={nowPlaying.name} className="text-3xl sm:text-lg" />
              <p className="text-base sm:text-[10px]">{nowPlaying.artist["#text"]}</p>
            </div>
          </div>
        </div>
      ) : lastPlayed ? (
        <div className="flex flex-row gap-9 sm:flex-col sm:gap-4 md:flex-col md:gap-4">
          <h2 className="text-lg text-[rgb(29,185,84)] mt-3 sm:text-sm sm:mt-9">
            Previously jamming to...
          </h2>
          <div className="flex flex-row items-center justify-start bg-[rgb(25,20,20)] border border-[rgb(29,185,84)] px-5 py-4 w-104 rounded-2xl overflow-hidden origin-left scale-80 sm:scale-100 sm:w-52 sm:px-4 sm:py-3 sm:rounded-xl">
            <div className="relative w-20 h-20 flex-shrink-0 sm:w-12 sm:h-12">
              <img
                src={
                  lastPlayed.image.find((img) => img.size === "extralarge")?.["#text"] ||
                  ""
                }
                alt="Album Art"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div className="flex flex-col ml-6 gap-1 sm:ml-4 sm:gap-0 w-52 sm:w-32">
              <ScrollingText text={lastPlayed.name} className="text-3xl sm:text-lg" />
              <p className="text-base sm:text-[10px]">{lastPlayed.artist["#text"]}</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <h2 className="text-lg text-[rgb(29,185,84)] items-center justify-center">
            Error accessing music data. Last.fm unavailable.
          </h2>
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
