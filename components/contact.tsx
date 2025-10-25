"use client"

import { useRef, useEffect } from "react"

interface ContactProps {
  id: string
  setActive: () => void
}

export default function Contact({ id, setActive }: ContactProps) {
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
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-foreground mb-6">Let's Work Together</h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <a
            href="mailto:hohoangphucjob@gmail.com"
            className="bg-secondary rounded-2xl p-8 hover:shadow-lg transition-shadow group"
          >
            <div className="text-3xl mb-4">✉️</div>
            <h3 className="font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground group-hover:text-accent transition-colors">hohoangphucjob@gmail.com</p>
          </a>

          <a href="tel:0327434821" className="bg-secondary rounded-2xl p-8 hover:shadow-lg transition-shadow group">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground group-hover:text-accent transition-colors">0327434821</p>
          </a>

          <a
            href="https://github.com/Minurte1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary rounded-2xl p-8 hover:shadow-lg transition-shadow group"
          >
            <div className="text-3xl mb-4">💻</div>
            <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
            <p className="text-muted-foreground group-hover:text-accent transition-colors">@Minurte1</p>
          </a>
        </div>

        <div className="border-t border-border pt-12">
          <p className="text-muted-foreground mb-6">Connect with me on social media</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Minurte1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
            >
              <span>GH</span>
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-colors"
            >
              <span>LI</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
