import { useState, useEffect, useRef } from "react";
import ScrollEffect from "../ui/ScrollEffect";

interface TrackInfo {
  title: string;
  artist: string;
  album: string;
  albumImage: string;
  songUrl: string;
  durationMs: number;
  progressMs: number;
}

interface UserInfo {
  displayName: string;
  profileImage: string;
  externalUrl: string;
}

function formatDurationMs(durationMs: number) {
  if (!durationMs || durationMs <= 0) return "0:00";
  const totalSeconds = Math.floor(durationMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}

function TrackCard({
  track,
  user,
  progressMs,
  progressPercent,
  onTrackClick,
  onUserClick,
}: {
  track: TrackInfo;
  user: UserInfo | null;
  progressMs: number;
  progressPercent: number;
  onTrackClick: (track: TrackInfo | null) => void;
  onUserClick: (user: UserInfo | null) => void;
}) {
  return (
    <div
      onClick={() => onTrackClick(track)}
      className="flex flex-col gap-4 items-start justify-start bg-[rgb(25,20,20)] border border-[rgb(29,185,84)] p-5 w-auto rounded-3xl overflow-hidden origin-left cursor-pointer box-select-hover sm:scale-100 sm:w-52 sm:p-4 sm:rounded-xl"
    >
      <div className="relative w-54 h-auto flex-shrink-0 sm:w-12 sm:h-12">
        <img
          src={track.albumImage || ""}
          alt="Album Art"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
      <div className="flex flex-col gap-2 w-52 sm:gap-0 sm:w-28">
        <ScrollEffect
          title={track.title}
          subtitle={track.artist}
          titleClassName="text-xl sm:text-lg"
          subtitleClassName="text-md text-gray-400 sm:text-[10px]"
        />
        <div className="mt-2">
          <div className="h-1 w-full rounded-full bg-white/10">
            <div
              className="h-full rounded-full bg-white transition-all duration-100 ease-linear"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
          <div className="mt-1 flex justify-between text-[12px] text-white/70">
            <span>{formatDurationMs(Math.max(0, progressMs))}</span>
            <span>{formatDurationMs(track.durationMs)}</span>
          </div>
        </div>
      </div>
      <div
        onClick={() => onUserClick(user)}
        className="flex flex-row justify-between w-full"
      >
        <div className="flex flex-row gap-2">
          <img
            src={user?.profileImage}
            alt="User Profile"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex self-center">{user?.displayName}</div>
        </div>
      </div>
    </div>
  );
}

function MusicPlayer() {
  const [user, setUser] = useState<UserInfo | null>(null);
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

  const handleUserClick = (user: UserInfo | null) => {
    if (user?.externalUrl) {
      window.open(user.externalUrl, "_blank", "noopener noreferrer");
    }
  };

  const handleTrackClick = (track: TrackInfo | null) => {
    if (track?.songUrl) {
      window.open(track.songUrl, "_blank", "noopener noreferrer");
    }
  };

  useEffect(() => {
    async function fetchTracks() {
      try {
        const res = await fetch("/api/spotify");
        const data = await res.json();

        if (data.error) {
          console.error("API error:", data.error);
          setUser(null);
          setNowPlaying(null);
          setLastPlayed(null);
          return;
        }

        setUser(data.user);
        setNowPlaying(data.nowPlaying);
        setLastPlayed(data.lastPlayed);
      } catch (error) {
        console.error("Error fetching tracks:", error);
        setUser(null);
        setNowPlaying(null);
        setLastPlayed(null);
      }
    }

    fetchTracks();
    const interval = setInterval(fetchTracks, 30000);

    return () => clearInterval(interval);
  }, []);

  const activeTrack = nowPlaying ?? lastPlayed;
  const isNowPlaying = Boolean(nowPlaying);
  const activeProgressMs = isNowPlaying
    ? smoothProgress
    : (lastPlayed?.progressMs ?? 0);
  const activeProgressPercent = isNowPlaying
    ? getSmoothProgressPercent()
    : getProgressPercent(lastPlayed);

  return (
    <div className="text-white">
      {activeTrack ? (
        <div className="flex flex-col gap-4 sm:gap-4">
          {isNowPlaying ? (
            <h2 className="text-x">Currently listening to...</h2>
          ) : null}
          <TrackCard
            track={activeTrack}
            user={user}
            progressMs={activeProgressMs}
            progressPercent={activeProgressPercent}
            onTrackClick={handleTrackClick}
            onUserClick={handleUserClick}
          />
          {!isNowPlaying ? (
            <h2 className="text-m text-center">Spotify</h2>
          ) : null}
        </div>
      ) : (
        <div className="mt-3">
          <h2 className="text-lg text-[rgb(29,185,84)]">
            Spotify widget down, check back later!
          </h2>
        </div>
      )}
    </div>
  );
}

export default MusicPlayer;
