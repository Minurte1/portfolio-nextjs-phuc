"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Home, Rocket, Sparkles, Frown, Search } from "lucide-react";

export default function NotFoundClient() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const [screen, setScreen] = useState({ w: 0, h: 0 });

  useEffect(() => {
    setScreen({ w: window.innerWidth, h: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-pink-950/20 relative px-4">
      {/* Background floating blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-300/30 dark:bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-32 right-0 w-64 h-64 bg-pink-300/30 dark:bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-0 left-32 w-60 h-60 bg-blue-300/30 dark:bg-blue-600/20 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 text-center max-w-xl mx-auto flex flex-col items-center">
        {/* 404 tilt effect */}
        <div
          className="relative inline-block mb-6"
          style={{
            transform: `perspective(1000px) rotateY(${
              (mousePosition.x - screen.w / 2) / 50
            }deg) rotateX(${-(mousePosition.y - screen.h / 2) / 50}deg)`,
          }}
        >
          <h1 className="text-7xl md:text-9xl font-black bg-gradient-to-br from-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-2xl">
            404
          </h1>

          <Sparkles className="absolute -top-3 -right-3 w-10 h-10 text-yellow-400 animate-spin-slow" />
          <Sparkles className="absolute -bottom-4 -left-4 w-8 h-8 text-pink-400 animate-spin-slow delay-700" />
        </div>

        {/* Sad face */}
        <div className="flex justify-center my-4">
          <div className="relative">
            <Frown className="w-20 h-20 text-gray-400 dark:text-gray-600" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-6 h-6 bg-red-400/20 rounded-full animate-ping" />
            </div>
          </div>
        </div>

        {/* Text */}
        <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-3">
          Ối! Trang này bị lạc rồi
        </h2>

        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-sm mx-auto">
          Có thể nó đang nghe nhạc ở /music hoặc ngủ quên đâu đó trong vũ trụ.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
          <Link
            href="/"
            className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-xl hover:shadow-purple-500/30 transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            <Home className="w-5 h-5" />
            Về trang chủ
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 backdrop-blur-xl bg-card/60 border border-border/50 rounded-full font-medium hover:bg-accent/50 transition-all duration-300 flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            Quay lại
          </button>
        </div>

        {/* Footer text */}
        <p className="mt-8 text-xs text-muted-foreground/60">
          P/s: Nếu bạn thấy con mèo hồng biết code, bảo nó về nhà giúp mình nhé.
        </p>
      </div>
    </div>
  );
}
