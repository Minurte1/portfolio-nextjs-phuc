"use client";

import { useEffect, useState } from "react";
import { Play } from "lucide-react";

export default function SongCard({ song, onPlay }: any) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 550);
    handleResize(); // check lần đầu
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className="rounded-2xl bg-secondary/50 p-4 hover:bg-secondary transition-all shadow-sm group cursor-pointer"
      onClick={isMobile ? onPlay : undefined} // toàn bộ div chỉ click khi mobile
    >
      <div className="relative">
        <img
          src={song.cover}
          alt={song.title}
          className="rounded-xl mb-4 object-cover w-full h-48"
        />
        {!isMobile && (
          <button
            onClick={onPlay}
            className="absolute bottom-3 right-3 bg-accent text-accent-foreground p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <Play size={20} />
          </button>
        )}
      </div>
      <h3 className="font-semibold text-foreground">{song.title}</h3>
      <p className="text-sm text-muted-foreground">{song.artist}</p>
    </div>
  );
}
