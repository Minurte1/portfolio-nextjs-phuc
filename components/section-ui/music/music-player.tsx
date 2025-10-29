"use client";

import { useEffect, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

export default function MusicPlayer({ song }: any) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

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

  if (!song) return null;

  return (
    <div className="fixed bottom-16 left-0 right-0 bg-background/80 backdrop-blur-lg border-t border-border p-4 flex items-center justify-between">
      <div>
        <h4 className="font-semibold">{song.title}</h4>
        <p className="text-sm text-muted-foreground">{song.artist}</p>
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
