"use client";

import { useState } from "react";

export default function UploadMusic() {
  const [file, setFile] = useState<File | null>(null);

  const handleUpload = () => {
    if (!file) return;
    alert(`Đã chọn file: ${file.name}`);
    // Thực tế: Gửi file lên API hoặc Firebase Storage
  };

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Tải nhạc lên</h2>
      <input
        type="file"
        accept="audio/*"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        className="block mx-auto mb-4"
      />
      <button
        onClick={handleUpload}
        className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition"
      >
        Upload
      </button>
    </section>
  );
}
