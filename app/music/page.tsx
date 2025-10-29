"use client";

import { useState } from "react";

import MusicLibrary from "@/components/section-ui/music/music-library";
import PlaylistManager from "@/components/section-ui/music/playlist-manager";
import UploadMusic from "@/components/section-ui/music/upload-music";
import MusicPlayer from "@/components/section-ui/music/music-player";

export default function Music() {
  const [activeSection, setActiveSection] = useState("library");
  const [currentSong, setCurrentSong] = useState<any>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-10 pb-[calc(10px+77px)]">
        {activeSection === "library" && (
          <MusicLibrary setCurrentSong={setCurrentSong} />
        )}
        {activeSection === "playlist" && <PlaylistManager />}
        {activeSection === "upload" && <UploadMusic />}
      </main>

      <MusicPlayer song={currentSong} />
    </div>
  );
}
