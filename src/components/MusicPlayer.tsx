import { useState, useEffect, useRef } from "react";

interface TrackInfo {
  title: string;
  artist: string;
  album: string;
  albumImage: string;
  songUrl: string;
  durationMs: number;
  progressMs: number;
}

function ScrollingText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLParagraphElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const [offset, setOffset] = useState(0);

  // Check if text overflows container
  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current || !textRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const textWidth = textRef.current.scrollWidth;

      setIsOverflowing(textWidth > containerWidth);
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [text]);

  // Scroll effect
  useEffect(() => {
    if (!isOverflowing) {
      setOffset(0);
      return;
    }

    let animationFrame: number;
    let timeoutId: number;
    let direction: "left" | "right" = "left";
    let lastTime = 0;
    let isPaused = false;
    const delay = 2000;

    const step = (time: number) => {
      if (!containerRef.current || !textRef.current) return;

      if (!lastTime) lastTime = time;
      const deltaSeconds = (time - lastTime) / 1000;
      lastTime = time;

      const containerWidth = containerRef.current.clientWidth;
      const textWidth = textRef.current.scrollWidth;
      const distance = textWidth - containerWidth;
      const maxOffset = -distance; // full scrollable distance
      const speed = Math.max(20, distance / 6); // px/s

      setOffset((prev) => {
        const delta = speed * deltaSeconds;
        const next = direction === "left" ? prev - delta : prev + delta;

        if (direction === "left" && next <= maxOffset) {
          if (!isPaused) {
            isPaused = true;
            cancelAnimationFrame(animationFrame);
            timeoutId = window.setTimeout(() => {
              direction = "right";
              isPaused = false;
              lastTime = 0;
              animationFrame = requestAnimationFrame(step);
            }, delay);
          }
          return maxOffset;
        }

        if (direction === "right" && next >= 0) {
          if (!isPaused) {
            isPaused = true;
            cancelAnimationFrame(animationFrame);
            timeoutId = window.setTimeout(() => {
              direction = "left";
              isPaused = false;
              lastTime = 0;
              animationFrame = requestAnimationFrame(step);
            }, delay);
          }
          return 0;
        }

        return next;
      });

      if (!isPaused) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    timeoutId = window.setTimeout(() => {
      animationFrame = requestAnimationFrame(step);
    }, delay);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeoutId);
    };
  }, [isOverflowing, text]);

  return (
    <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
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

function ScrollingTrackInfo({
  title,
  subtitle,
  titleClassName,
  subtitleClassName,
}: {
  title: string;
  subtitle: string;
  titleClassName?: string;
  subtitleClassName?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const [titleOffset, setTitleOffset] = useState(0);
  const [subtitleOffset, setSubtitleOffset] = useState(0);
  const [titleOverflow, setTitleOverflow] = useState(0);
  const [subtitleOverflow, setSubtitleOverflow] = useState(0);

  // Track current offsets with refs for animation loop
  const currentTitleOffset = useRef(0);
  const currentSubtitleOffset = useRef(0);

  // Check overflow distances
  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current || !titleRef.current || !subtitleRef.current)
        return;

      const containerWidth = containerRef.current.clientWidth;
      const titleWidth = titleRef.current.scrollWidth;
      const subtitleWidth = subtitleRef.current.scrollWidth;

      setTitleOverflow(Math.max(0, titleWidth - containerWidth));
      setSubtitleOverflow(Math.max(0, subtitleWidth - containerWidth));
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [title, subtitle]);

  // Coordinated scroll effect
  useEffect(() => {
    const maxOverflow = Math.max(titleOverflow, subtitleOverflow);
    if (maxOverflow === 0) {
      setTitleOffset(0);
      setSubtitleOffset(0);
      currentTitleOffset.current = 0;
      currentSubtitleOffset.current = 0;
      return;
    }

    let animationFrame: number;
    let timeoutId: number;
    let direction: "left" | "right" = "left";
    let lastTime = 0;
    let isPaused = false;
    const delay = 2000;
    const speed = Math.max(20, maxOverflow / 6); // px/s

    const step = (time: number) => {
      if (!lastTime) lastTime = time;
      const deltaSeconds = (time - lastTime) / 1000;
      lastTime = time;

      const delta = speed * deltaSeconds;

      // Update title offset
      let newTitleOffset = currentTitleOffset.current;
      if (direction === "left") {
        newTitleOffset = Math.max(-titleOverflow, newTitleOffset - delta);
      } else {
        newTitleOffset = Math.min(0, newTitleOffset + delta);
      }
      currentTitleOffset.current = newTitleOffset;
      setTitleOffset(newTitleOffset);

      // Update subtitle offset
      let newSubtitleOffset = currentSubtitleOffset.current;
      if (direction === "left") {
        newSubtitleOffset = Math.max(
          -subtitleOverflow,
          newSubtitleOffset - delta,
        );
      } else {
        newSubtitleOffset = Math.min(0, newSubtitleOffset + delta);
      }
      currentSubtitleOffset.current = newSubtitleOffset;
      setSubtitleOffset(newSubtitleOffset);

      // Check if both have reached their limits
      const titleAtEnd =
        direction === "left"
          ? newTitleOffset <= -titleOverflow
          : newTitleOffset >= 0;
      const subtitleAtEnd =
        direction === "left"
          ? newSubtitleOffset <= -subtitleOverflow
          : newSubtitleOffset >= 0;

      if (titleAtEnd && subtitleAtEnd && !isPaused) {
        isPaused = true;
        cancelAnimationFrame(animationFrame);
        timeoutId = window.setTimeout(() => {
          direction = direction === "left" ? "right" : "left";
          isPaused = false;
          lastTime = 0;
          animationFrame = requestAnimationFrame(step);
        }, delay);
        return;
      }

      if (!isPaused) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    timeoutId = window.setTimeout(() => {
      animationFrame = requestAnimationFrame(step);
    }, delay);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearTimeout(timeoutId);
    };
  }, [titleOverflow, subtitleOverflow]);

  return (
    <>
      <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
        <p
          ref={titleRef}
          className={`${titleClassName} inline-block`}
          style={{ transform: `translateX(${titleOffset}px)` }}
        >
          {title}
        </p>
      </div>
      <div className="overflow-hidden whitespace-nowrap">
        <p
          ref={subtitleRef}
          className={`${subtitleClassName} inline-block`}
          style={{ transform: `translateX(${subtitleOffset}px)` }}
        >
          {subtitle}
        </p>
      </div>
    </>
  );
}

function MusicPlayer() {
  const [nowPlaying, setNowPlaying] = useState<TrackInfo | null>(null);
  const [lastPlayed, setLastPlayed] = useState<TrackInfo | null>(null);
  const [smoothProgress, setSmoothProgress] = useState(0);
  const lastUpdateTimeRef = useRef<number>(Date.now());

  const getProgressPercent = (track: TrackInfo | null) => {
    if (!track || track.durationMs <= 0) return 0;
    return Math.min(
      100,
      Math.max(0, (track.progressMs / track.durationMs) * 100),
    );
  };

  // Get smooth progress percent for animated bar
  const getSmoothProgressPercent = () => {
    if (!nowPlaying || nowPlaying.durationMs <= 0) return 0;
    return Math.min(
      100,
      Math.max(0, (smoothProgress / nowPlaying.durationMs) * 100),
    );
  };

  // Smooth progress animation for now playing
  useEffect(() => {
    if (!nowPlaying) {
      setSmoothProgress(0);
      return;
    }

    // Initialize smooth progress from API data
    setSmoothProgress(nowPlaying.progressMs);
    lastUpdateTimeRef.current = Date.now();

    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = now - lastUpdateTimeRef.current;
      lastUpdateTimeRef.current = now;

      setSmoothProgress((prev) => {
        const next = prev + elapsed;
        return Math.min(next, nowPlaying.durationMs);
      });
    }, 100); // Update every 100ms for smooth animation

    return () => clearInterval(interval);
  }, [nowPlaying?.progressMs, nowPlaying?.durationMs]);

  const formatDurationMs = (durationMs: number) => {
    if (!durationMs || durationMs <= 0) return "0:00";
    const totalSeconds = Math.floor(durationMs / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    async function fetchTracks() {
      try {
        const res = await fetch("/api/spotify");
        const data = await res.json();

        if (data.error) {
          console.error("API error:", data.error);
          setNowPlaying(null);
          setLastPlayed(null);
          return;
        }

        setNowPlaying(data.nowPlaying);
        setLastPlayed(data.lastPlayed);
      } catch (error) {
        console.error("Error fetching tracks:", error);
        setNowPlaying(null);
        setLastPlayed(null);
      }
    }

    fetchTracks();
    // Fetch every 60 seconds, progress bar animates smoothly in between
    const interval = setInterval(fetchTracks, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-white">
      {nowPlaying ? (
        <div className="flex flex-col gap-4 sm:gap-4">
          <h2 className="text-lg text-white">Currently listening to...</h2>
          <div className="flex flex-col gap-4 items-start justify-start bg-[rgb(25,20,20)] border border-[rgb(29,185,84)] p-5 w-auto rounded-3xl overflow-hidden origin-left sm:scale-100 sm:w-52 sm:p-4 sm:rounded-xl">
            <div className="relative w-54 h-auto flex-shrink-0 sm:w-12 sm:h-12">
              <img
                src={nowPlaying.albumImage || ""}
                alt="Album Art"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-2 w-52 sm:gap-0 sm:w-28">
              <ScrollingTrackInfo
                title={nowPlaying.title}
                subtitle={`${nowPlaying.artist}`}
                titleClassName="text-xl sm:text-lg"
                subtitleClassName="text-md text-gray-400 sm:text-[10px]"
              />
              <div className="mt-2">
                <div className="h-1 w-full rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-100 ease-linear"
                    style={{ width: `${getSmoothProgressPercent()}%` }}
                  />
                </div>
                <div className="mt-1 flex justify-between text-[12px] text-white/70">
                  <span>
                    {formatDurationMs(
                      Math.max(0, nowPlaying.durationMs - smoothProgress),
                    )}
                  </span>
                  <span>{formatDurationMs(nowPlaying.durationMs)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : lastPlayed ? (
        <div className="flex flex-col gap-4 sm:gap-4">
          <h2 className="text-lg text-white">Previously listening to...</h2>
          <div className="flex flex-col gap-4 items-start justify-start bg-[rgb(25,20,20)] border border-[rgb(29,185,84)] p-5 w-auto rounded-3xl overflow-hidden origin-left sm:scale-100 sm:w-52 sm:p-4 sm:rounded-xl">
            <div className="relative w-54 h-auto flex-shrink-0 sm:w-12 sm:h-12">
              <img
                src={lastPlayed.albumImage || ""}
                alt="Album Art"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex flex-col gap-2 w-52 sm:gap-0 sm:w-28">
              <ScrollingText
                text={lastPlayed.title}
                className="text-xl sm:text-lg"
              />
              <ScrollingText
                text={`${lastPlayed.artist}`}
                className="text-md text-gray-400 sm:text-[10px]"
              />
              <div className="mt-2">
                <div className="h-1 w-full rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-white transition-all duration-100 ease-linear"
                    style={{ width: `${getProgressPercent(lastPlayed)}%` }}
                  />
                </div>
                <div className="mt-1 flex justify-between text-[12px] text-white/70">
                  <span>
                    {formatDurationMs(
                      Math.max(
                        0,
                        lastPlayed.durationMs - lastPlayed.progressMs,
                      ),
                    )}
                  </span>
                  <span>{formatDurationMs(lastPlayed.durationMs)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <h2 className="text-lg text-[rgb(29,185,84)]">
            Spotify being goofy right now, check back later!
          </h2>
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
