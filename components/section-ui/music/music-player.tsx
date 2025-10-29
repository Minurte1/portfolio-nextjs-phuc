"use client";

import { useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Home as HomeIcon,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function MusicPlayer({ song }: any) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (song && audioRef.current) {
      audioRef.current.src = song.src;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }, [song]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const goHome = () => {
    router.push("/");
  };

  if (!song) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border p-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          onClick={goHome}
          className="p-2 rounded-full hover:bg-secondary"
          title="Quay về Home"
        >
          <HomeIcon size={20} />
        </button>

        <div>
          <h4 className="font-semibold">{song.title}</h4>
          <p className="text-sm text-muted-foreground">{song.artist}</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="p-2 rounded-full hover:bg-secondary">
          <SkipBack size={20} />
        </button>
        <button
          className="p-3 rounded-full bg-accent text-accent-foreground"
          onClick={togglePlay}
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
        </button>
        <button className="p-2 rounded-full hover:bg-secondary">
          <SkipForward size={20} />
        </button>
      </div>

      <audio ref={audioRef} onEnded={() => setIsPlaying(false)} />
    </div>
  );
}
