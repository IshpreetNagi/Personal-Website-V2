import { useEffect, useState } from "react";

interface MovieData {
  title: string;
  poster: string | null;
  link?: string;
  watched_date?: string;
  tmdbId?: string;
}

export default function MovieShower() {
  const [movie, setMovie] = useState<MovieData | null>(null);

  useEffect(() => {
    async function fetchLatestMovie() {
      try {
        const res = await fetch("/api/movies"); // <- changed endpoint
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

    const interval = setInterval(fetchLatestMovie, 15000); // refresh every 15s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col gap-4 sm:gap-4">
      <div className="flex flex-col gap-4 items-start justify-start bg-[rgb(20,24,28)] border border-[rgb(255,128,0)] p-5 w-auto rounded-3xl overflow-hidden origin-left sm:scale-100 sm:w-52 sm:p-4 sm:rounded-xl">
        <h2 className="text-lg text-[rgb(153,170,187)]">Last watched...</h2>
        {movie && (
          <>
            <div className="relative w-58 h-auto flex-shrink-0 sm:w-12 sm:h-12">
              {movie.poster && (
                <img
                  src={movie.poster}
                  className="w-full h-full object-cover rounded-lg shadow-lg"
                />
              )}
            </div>
          </>
        )}
      </div>
      <h2 className="text-md text-center text-white">Movies</h2>
    </div>
  );
}
