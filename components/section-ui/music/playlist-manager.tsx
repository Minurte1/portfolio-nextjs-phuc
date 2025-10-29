"use client";

import { useState } from "react";

export default function PlaylistManager() {
  const [playlists, setPlaylists] = useState<string[]>([]);
  const [newPlaylist, setNewPlaylist] = useState("");

  const addPlaylist = () => {
    if (!newPlaylist.trim()) return;
    setPlaylists([...playlists, newPlaylist]);
    setNewPlaylist("");
  };

  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-center text-foreground">
        Playlist của bạn
      </h2>

      <div className="flex justify-center gap-3 mb-6">
        <input
          value={newPlaylist}
          onChange={(e) => setNewPlaylist(e.target.value)}
          placeholder="Tên playlist..."
          className="border rounded-lg px-4 py-2 w-64 bg-background/50"
        />
        <button
          onClick={addPlaylist}
          className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold"
        >
          Tạo
        </button>
      </div>

      <ul className="space-y-3">
        {playlists.map((p, i) => (
          <li
            key={i}
            className="bg-secondary/50 rounded-lg px-4 py-3 flex justify-between"
          >
            <span>{p}</span>
            <button className="text-sm text-muted-foreground hover:text-destructive">
              Xoá
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
