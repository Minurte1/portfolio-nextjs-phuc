"use client";

import SongCard from "./song-card";

const songs = [
  {
    id: 1,
    title: "Cứ Thở Đi",
    artist: "Đức Phúc x Juky San",
    src: "/music/CỨ THỞ ĐI - ĐỨC PHÚC X JUKY SAN - OFFICIAL LIVE PERFORMANCE.mp3",
    cover: "https://i.ytimg.com/vi/8DKMuee0ZR8/maxresdefault.jpg",
  },
  {
    id: 2,
    title: "Cô Gái Bàn Bên",
    artist: "Đen ft. Lynk Lee",
    src: "/music/Đen - Cô Gái Bàn Bên ft. Lynk Lee (w-lyrics).mp3",
    cover: "https://i.ytimg.com/vi/XFEOsvsshOE/maxresdefault.jpg",
  },
  {
    id: 3,
    title: "Đưa Nhau Đi Trốn",
    artist: "Đen ft. Linh Cáo",
    src: "/music/Đen - Đưa Nhau Đi Trốn ft. Linh Cáo [M-V].mp3",
    cover: "https://i.ytimg.com/vi/5e7e_KZINA4/maxresdefault.jpg",
  },
  {
    id: 4,
    title: "Mất Kết Nối",
    artist: "Dương Domic",
    src: "/music/Dương Domic - Mất Kết Nối - EP 'Dữ Liệu Quý'.mp3",
    cover:
      "https://dichvumarketing.net/wp-content/uploads/2025/02/Mat-ket-noi-lyrics.jpeg",
  },
  {
    id: 5,
    title: "Gác Lại Âu Lo",
    artist: "Da LAB & Juky San",
    src: "/music/Gác Lại Âu Lo - Da LAB & Juky San - [the live music show Cứ Thở Đi].mp3",
    cover: "https://i.ytimg.com/vi/ECxVfrwwTp0/maxresdefault.jpg",
  },
  {
    id: 6,
    title: "Nếu Ngày Ấy",
    artist: "Unknown",
    src: "/music/Nếu Ngày Ấy.mp3",
    cover:
      "https://i.ytimg.com/vi/BMtaUb-E5Uc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBSznPNJ6zMF5oJ_hNwwLqpZmkIGA",
  },
  {
    id: 7,
    title: "Những Lời Hứa Bỏ Quên",
    artist: "Vũ ft. Dear Jane",
    src: "/music/Nhưng Lơi Hưa Bo Quên - Vu. ft. Dear Jane (tư Album -Bao Tang Cua Nuôi Tiêc-).mp3",
    cover: "https://i.ytimg.com/vi/kOU7a6BzDEk/maxresdefault.jpg",
  },
  {
    id: 8,
    title: "Tràn Bộ Nhớ",
    artist: "Dương Domic",
    src: "/music/Tràn Bộ Nhớ - Dương Domic - Lyrics Video.mp3",
    cover:
      "https://i.ytimg.com/vi/qRuSS93OEfw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBmijP92GVCts-MTSo6di1BAbc_cw",
  },
  {
    id: 9,
    title: "Trước Khi Em Tồn Tại (Piano Version)",
    artist: "Thắng - Việt Anh Cover",
    src: "/music/Trước Khi Em Tồn Tại (Piano Version) - Thắng - Việt Anh Cover (MV Lyric).mp3",
    cover: "https://i.ytimg.com/vi/jtFsZRHUyPE/sddefault.jpg",
  },
];

export default function MusicLibrary({ setCurrentSong }: any) {
  return (
    <section>
      <h2 className="text-3xl font-bold mb-6 text-foreground text-center">
        Thư viện nhạc
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {songs.map((song) => (
          <SongCard
            key={song.id}
            song={song}
            onPlay={() => setCurrentSong(song)}
          />
        ))}
      </div>
    </section>
  );
}
