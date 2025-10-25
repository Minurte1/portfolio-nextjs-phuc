"use client"

import { useRef, useEffect } from "react"

interface ProjectsProps {
  id: string
  setActive: () => void
}

export default function Projects({ id, setActive }: ProjectsProps) {
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

  const projects = [
    {
      title: "PhucShoe2 – E-Commerce Platform",
      period: "10/2024 – 01/2025",
      description:
        "Modern e-commerce platform specializing in shoes with secure payment integration and real-time chat.",
      features: [
        "Advanced filtering and search functionality",
        "Shopping cart and checkout system",
        "Payment integration (VNPAY, MoMo)",
        "Real-time chat with Socket.io",
        "Rich text editor with React-Quill",
      ],
      tech: ["React.js", "Material-UI", "Node.js", "Express.js", "MySQL", "JWT"],
      link: "https://github.com/Minurte1/CN_DA21TTA_HoHoangPhuc_Shoes",
    },
    {
      title: "Chành Xe Management",
      period: "02/2025 – 03/2025",
      description: "Transportation logistics management system with comprehensive admin dashboard.",
      features: [
        "Admin dashboard with real-time data",
        "CRUD operations for shipments",
        "Optimized database queries",
        "User authentication and authorization",
      ],
      tech: ["Next.js", "React", "MUI", "Express", "MySQL", "JWT"],
      link: "https://github.com/Minurte1/ChanhXe-Management",
    },
  ]

  return (
    <section id={id} ref={ref} className="md:ml-64 px-6 py-20 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Featured Projects</h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{project.period}</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{project.description}</p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Key Features</h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-2">
                      <span className="text-accent">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs px-3 py-1 bg-accent/10 text-accent rounded-full">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
