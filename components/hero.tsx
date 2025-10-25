"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="md:ml-64 min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-secondary">
      <div
        className={`max-w-2xl text-center transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-6 inline-block">
          <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">Hồ Hoàng Phúc</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          Full-Stack Developer crafting beautiful, performant digital experiences
        </p>
        <p className="text-base text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          Specializing in React, Next.js, Node.js, and modern web technologies. Passionate about building scalable
          applications and solving complex problems.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-foreground text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}
