"use client"

import { useEffect, useRef } from "react"

interface AboutProps {
  id: string
  setActive: () => void
}

export default function About({ id, setActive }: AboutProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive()
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [setActive])

  return (
    <section id={id} ref={ref} className="md:ml-64 px-6 py-20 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full-Stack Developer with a strong foundation in both frontend and backend technologies.
              My journey in web development has been driven by a desire to create elegant solutions to complex problems.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Currently pursuing my degree in Information Technology at Trà Vinh University (2021-2025), I've gained
              practical experience through internships and freelance projects, working with modern frameworks and best
              practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My goal is to become a comprehensive Full-Stack Developer, specializing in React.js, Next.js for frontend
              and Node.js, Express.js for backend, while continuously learning and adapting to new technologies.
            </p>
          </div>
          <div className="bg-secondary rounded-2xl p-8 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">Education</h3>
              <p className="text-foreground font-semibold">Bachelor of Information Technology</p>
              <p className="text-muted-foreground">Trà Vinh University • 2021 - 2025</p>
            </div>
            <div className="border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ 2+ years of development experience</li>
                <li>✓ Full-stack web development</li>
                <li>✓ E-commerce platforms</li>
                <li>✓ Real-time applications</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
