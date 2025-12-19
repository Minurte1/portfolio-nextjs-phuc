"use client";

import { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Music, Home, X, Library, User, Settings } from "lucide-react";
import { themeVariants } from "@/utils/floating-music-menu.utils";

export default function FloatingCircleMenu() {
  const router = useRouter();
  const pathname = usePathname();

  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false); // xuất hiện khi scroll lên

  // ============================
  // SCROLL-UP DETECTOR
  // ============================
  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;

      if (currentY < lastY - 10) {
        // scroll lên → hiển thị
        setShow(true);
      } else if (currentY > lastY + 10) {
        // scroll xuống → ẩn
        setShow(false);
        setOpen(false);
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ============================
  // MENU TÙY THEO TRANG
  // ============================
  const menuItems =
    pathname === "/music"
      ? [
          { icon: Home, label: "Home", to: "/" },
          { icon: Library, label: "Library (demo)", to: "/library" },
        ]
      : [
          { icon: Music, label: "Music", to: "/music" },
          { icon: User, label: "Profile (demo)", to: "/profile" },
          { icon: Settings, label: "Settings (demo)", to: "/settings" },
          { icon: Library, label: "Library images", to: "/gallery" },
        ];

  // Auto close khi chuyển trang
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      className={`
        fixed bottom-24 right-4 z-999 transition-all duration-500
        ${
          show
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      {/* Nút bung ra */}
      <div
        className={`flex flex-col items-end gap-3 mb-3 transition-all duration-300 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {menuItems.map((item, i) => (
          <button
            key={i}
            onClick={() => router.push(item.to)}
            className="
    w-10 h-10 flex items-center justify-center
    rounded-full

    /* Solid background – no glass */
    bg-white dark:bg-neutral-800

    /* Subtle shadow + border */
    shadow-md border border-neutral-200 dark:border-neutral-700

    transition-all duration-300
    hover:scale-110 active:scale-90
  "
            style={{ animationDelay: `${i * 60}ms` }}
            title={item.label}
          >
            <item.icon className="w-4 h-4 text-black/70 dark:text-white/70" />
          </button>
        ))}
      </div>

      {/* Nút chính */}
      <button
        onClick={() => setOpen(!open)}
        className={`
          w-12 h-12 flex items-center justify-center rounded-full
          text-white
          shadow-lg transition-all duration-300
          hover:scale-110 active:scale-95 ${themeVariants.pastelPink}
          ${open ? "rotate-45" : ""}
        `}
      >
        {open ? (
          <X className="w-5 h-5" />
        ) : pathname === "/music" ? (
          <Home className="w-6 h-6" />
        ) : (
          <Home className="w-6 h-6" />
        )}
      </button>
    </div>
  );
}
