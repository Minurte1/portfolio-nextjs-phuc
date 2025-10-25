"use client"

import { useRef, useEffect } from "react"

interface ExperienceProps {
  id: string
  setActive: () => void
}

export default function Experience({ id, setActive }: ExperienceProps) {
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

  const experiences = [
    {
      title: "Remote Front-End Developer",
      company: "BigCode",
      period: "03/2025 – 10/2025",
      description: "Developed e-commerce platform Chợ Thông Minh connecting traditional markets with consumers.",
      highlights: [
        "Built order placement, shopping cart, payment, and order tracking workflows",
        "Developed CMS with React.js and Material-UI for product, price, and inventory management",
        "Implemented Node.js + Express.js APIs and microservices architecture",
        "Created dynamic permission system with MySQL and JWT",
      ],
      tech: ["Next.js", "React", "MUI", "Node.js", "Express", "MongoDB", "MySQL", "JWT"],
    },
    {
      title: "Full-Stack Developer Intern",
      company: "VNPT Trà Vinh",
      period: "02/2025 – 03/2025",
      description: "Built Chành Xe Management system for transportation logistics.",
      highlights: [
        "Designed admin dashboard with Next.js, React, MUI, and PrimeReact",
        "Developed CRUD APIs with Express.js and MySQL with optimized queries",
        "Implemented business logic and database optimization",
      ],
      tech: ["Next.js", "React", "MUI", "Express", "MySQL", "JWT"],
    },
  ]

  return (
    <section id={id} ref={ref} className="md:ml-64 px-6 py-20 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-2 border-accent pl-8 pb-8">
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] mt-1"></div>
              <h3 className="text-2xl font-bold text-foreground">{exp.title}</h3>
              <p className="text-accent font-semibold mt-1">{exp.company}</p>
              <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((highlight, i) => (
                  <li key={i} className="text-muted-foreground flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 bg-secondary text-muted-foreground rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
