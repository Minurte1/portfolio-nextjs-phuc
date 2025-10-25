"use client";

import { useState, useEffect } from "react";
import {
  Home,
  User,
  Briefcase,
  Code,
  Mail,
  Moon,
  Sun,
  Globe,
  Wifi,
  Clock,
  MoreVertical,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/lib/language-context";

interface TaskbarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Taskbar({
  activeSection,
  setActiveSection,
}: TaskbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [time, setTime] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: "hero", label: t("home"), icon: Home },
    { id: "about", label: t("about"), icon: User },
    { id: "skills", label: t("skills"), icon: Code },
    { id: "experience", label: t("experience"), icon: Briefcase },
    { id: "projects", label: t("projects"), icon: Briefcase },
    { id: "contact", label: t("contact"), icon: Mail },
  ];

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Đóng menu sau khi chọn
  };

  if (!mounted) return null;

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      <div
        className="relative backdrop-blur-xl bg-card/40 border border-border/20 rounded-full 
        px-3 py-2 sm:px-4 sm:py-3 shadow-2xl flex items-center gap-1 sm:gap-2
        max-w-full w-auto justify-center"
      >
        {/* === MOBILE MENU BUTTON === */}
        <div className="flex sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all"
          >
            {menuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <MoreVertical className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* === NAVIGATION ICONS === */}
        <div
          className={`${
            menuOpen
              ? "flex absolute bottom-full mb-3 left-1/2 -translate-x-1/2 bg-card/90 border border-border/30 backdrop-blur-xl rounded-2xl p-3 shadow-xl gap-2 animate-in slide-in-from-bottom-5"
              : "hidden"
          } sm:flex sm:static sm:translate-x-0 sm:bottom-auto sm:mb-0 sm:bg-transparent sm:border-0 sm:shadow-none sm:p-0 sm:gap-1`}
        >
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative p-2 sm:p-3 rounded-full transition-all duration-300 group ${
                  isActive
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5" />
              </button>
            );
          })}
        </div>

        {/* === DESKTOP SEPARATOR === */}
        <div className="hidden sm:block w-px h-6 bg-border/30 mx-1" />

        {/* === SYSTEM TRAY === */}
        <div className="flex items-center gap-0.5 sm:gap-1">
          {/* Time */}
          <div className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full text-xs text-muted-foreground group hover:bg-secondary/50 transition-colors cursor-default">
            <Clock className="w-4 h-4" />
            <span className="font-mono">{time}</span>
          </div>

          {/* WiFi */}
          <button
            className="p-2 sm:p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
            title="WiFi Connected"
          >
            <Wifi className="w-5 h-5" />
          </button>

          {/* Theme Switcher */}
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-2 sm:p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* Language Switcher */}
          <button
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
            className="p-2 sm:p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300"
            title={`Switch to ${language === "en" ? "Vietnamese" : "English"}`}
          >
            <Globe className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
