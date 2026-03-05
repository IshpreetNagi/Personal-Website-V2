import { useEffect, useRef, useState } from "react";

interface MovieData {
  title: string;
  poster: string | null;
  watched_date?: string;
  release_year?: string | null;
  description?: string | null;
  genres?: string[];
  runtime?: number | null;
  tmdb_score?: number | null;
}

function ScrollingMovieName({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);
  const [titleOffset, setTitleOffset] = useState(0);
  const [titleOverflow, setTitleOverflow] = useState(0);

  // Track current offsets with refs for animation loop
  const currentTitleOffset = useRef(0);

  // Check overflow distances
  useEffect(() => {
    const checkOverflow = () => {
      if (!containerRef.current || !titleRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const titleWidth = titleRef.current.scrollWidth;

      setTitleOverflow(Math.max(0, titleWidth - containerWidth));
    };

    checkOverflow();
    window.addEventListener("resize", checkOverflow);
    return () => window.removeEventListener("resize", checkOverflow);
  }, [title]);

  // Coordinated scroll effect
  useEffect(() => {
    const maxOverflow = Math.max(titleOverflow);
    if (maxOverflow === 0) {
      setTitleOffset(0);
      currentTitleOffset.current = 0;
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

      // Check if both have reached their limits
      const titleAtEnd =
        direction === "left"
          ? newTitleOffset <= -titleOverflow
          : newTitleOffset >= 0;

      if (titleAtEnd && !isPaused) {
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
  }, [titleOverflow]);

  return (
    <>
      <div ref={containerRef} className="overflow-hidden whitespace-nowrap">
        <p
          ref={titleRef}
          className={`inline-block ${className || ""}`}
          style={{ transform: `translateX(${titleOffset}px)` }}
        >
          {title}
        </p>
      </div>
    </>
  );
}

export default function MovieShower() {
  const [movie, setMovie] = useState<MovieData | null>(null);

  useEffect(() => {
    async function fetchLatestMovie() {
      try {
        const res = await fetch("/api/movies");
        const data: MovieData = await res.json();

        if ((data as any).error) {
          console.error("API error:", (data as any).error);
          setMovie(null);
          return;
        }

        setMovie(data);
      } catch (error) {
        console.error("Error fetching latest movie:", error);
        setMovie(null);
      }
    }

    fetchLatestMovie();

    const interval = setInterval(fetchLatestMovie, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col text-white gap-4 sm:gap-4">
      {movie ? (
        <div className="flex flex-col gap-4 items-start justify-start bg-[rgb(20,24,28)] border border-[rgb(255,128,0)] p-5 w-auto rounded-3xl overflow-hidden origin-left sm:scale-100 sm:w-52 sm:p-4 sm:rounded-xl">
          <div className="text-lg text-[rgb(153,170,187)]">
            Watched on{" "}
            {movie.watched_date
              ? new Date(movie.watched_date).toLocaleDateString(undefined, {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })
              : "Unknown date"}
          </div>
          <div className="flex flex-row gap-4 justify-start w-full">
            <div className="relative w-58 h-auto flex-shrink-0 sm:w-12 sm:h-12">
              {movie.poster && (
                <img
                  src={movie.poster}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              )}
            </div>
            <div className="flex flex-col w-80 gap-10">
              <div className="flex flex-col gap-3">
                <ScrollingMovieName title={movie.title} className="text-2xl" />
                <div className="flex flex-col gap-1 text-md text-[rgb(153,170,187)]">
                  <div className="flex flex-row gap-5">
                    <div>
                      {movie.release_year ? (
                        <>
                          <span className="text-[rgb(255,128,0)]">
                            Released:
                          </span>{" "}
                          {movie.release_year}
                        </>
                      ) : (
                        ""
                      )}
                    </div>
                    <div>
                      {movie.runtime ? (
                        <>
                          <span className="text-[rgb(255,128,0)]">
                            Runtime:
                          </span>{" "}
                          {movie.runtime} min
                        </>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    {movie.genres ? (
                      <>
                        <span className="text-[rgb(255,128,0)]">Genres:</span>{" "}
                        {movie.genres.join(", ")}
                      </>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1 text-md text-[rgb(153,170,187)]">
                <div>
                  {movie.tmdb_score !== null ? (
                    <>
                      <span className="text-[rgb(255,128,0)]">TMDB:</span>{" "}
                      {movie.tmdb_score?.toFixed(1)}/10
                    </>
                  ) : null}
                </div>
              </div>
              <div className="text-md text-[rgb(153,170,187)] overflow-auto">
                {movie.description ? movie.description : ""}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <h2 className="text-lg text-[rgb(255,128,0)]">
            Movies widget down, check back later!
          </h2>
        </div>
      )}
      <h2 className="text-md text-center text-white">Movies</h2>
    </div>
  );
}
