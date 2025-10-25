"use client"

import { useState, useEffect } from "react"
import { Home, User, Briefcase, Code, Mail, Moon, Sun, Globe, Wifi, Clock } from "lucide-react"
import { useTheme } from "next-themes"
import { useLanguage } from "@/lib/language-context"

interface TaskbarProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Taskbar({ activeSection, setActiveSection }: TaskbarProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [time, setTime] = useState<string>("")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { language, setLanguage, t } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 50)
      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const navItems = [
    { id: "hero", label: t("home"), icon: Home },
    { id: "about", label: t("about"), icon: User },
    { id: "skills", label: t("skills"), icon: Code },
    { id: "experience", label: t("experience"), icon: Briefcase },
    { id: "projects", label: t("projects"), icon: Briefcase },
    { id: "contact", label: t("contact"), icon: Mail },
  ]

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      {/* Taskbar Container */}
      <div className="backdrop-blur-xl bg-card/40 border border-border/20 rounded-full px-4 py-3 shadow-2xl">
        <div className="flex items-center gap-1">
          {/* Navigation Items */}
          {navItems.map((item) => {
            const Icon = item.icon
            const isActive = activeSection === item.id

            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative p-3 rounded-full transition-all duration-300 group ${
                  isActive
                    ? "bg-accent text-accent-foreground shadow-lg"
                    : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                }`}
                title={item.label}
              >
                <Icon className="w-5 h-5" />

                {/* Tooltip */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                  {item.label}
                </div>

                {/* Active indicator */}
                {isActive && <div className="absolute inset-0 rounded-full bg-accent/20 animate-pulse" />}
              </button>
            )
          })}

          {/* Separator */}
          <div className="w-px h-6 bg-border/30 mx-1" />

          {/* System Tray */}
          <div className="flex items-center gap-1">
            {/* Time */}
            <div className="flex items-center gap-2 px-3 py-2 rounded-full text-xs text-muted-foreground group hover:bg-secondary/50 transition-colors cursor-default">
              <Clock className="w-4 h-4" />
              <span className="font-mono">{time}</span>
            </div>

            {/* WiFi */}
            <button
              className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300 group"
              title="WiFi"
            >
              <Wifi className="w-5 h-5" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                WiFi Connected
              </div>
            </button>

            {/* Theme Switcher */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300 group"
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </div>
            </button>

            {/* Language Switcher */}
            <button
              onClick={() => setLanguage(language === "en" ? "vi" : "en")}
              className="p-3 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-all duration-300 group"
              title={`Switch to ${language === "en" ? "Vietnamese" : "English"}`}
            >
              <Globe className="w-5 h-5" />
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1 bg-foreground text-background text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                {language === "en" ? "Tiếng Việt" : "English"}
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
