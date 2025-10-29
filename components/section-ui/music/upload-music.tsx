"use client";

import { useState } from "react";

export default function UploadMusic() {
  const [file, setFile] = useState<File | null>(null);

  // Function xử lý khi chọn file
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
    if (selectedFile) {
      console.log("File được chọn:", selectedFile.name);
    }
  };

  const handleUpload = () => {
    if (!file) return;
    alert(`Đã chọn file: ${file.name}`);
    // Thực tế: Gửi file lên API hoặc Firebase Storage
  };

  return (
    <section className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-foreground">Tải nhạc lên</h2>

      <label
        htmlFor="music-file"
        className="block mb-2 font-medium text-foreground cursor-pointer"
      >
        Chọn file nhạc:
      </label>
      <input
        id="music-file"
        type="file"
        accept="audio/*"
        onChange={handleFileChange}
        className="block mx-auto mb-4 cursor-pointer"
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
