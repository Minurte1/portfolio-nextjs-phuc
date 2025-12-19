"use client";

import ListGallery from "@/components/gallary/list-gallary";

export default function Gallery() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary flex flex-col">
      <main className="flex-1 container mx-auto px-4 py-10 pb-[calc(10px+77px)]">
        <ListGallery />
      </main>
    </div>
  );
}
