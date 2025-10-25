"use client"

import { useRef, useEffect } from "react"

interface SkillsProps {
  id: string
  setActive: () => void
}

export default function Skills({ id, setActive }: SkillsProps) {
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

  const skillCategories = [
    {
      title: "Languages",
      skills: ["JavaScript", "TypeScript", "PHP"],
    },
    {
      title: "Frontend",
      skills: ["React.js", "Next.js", "React Native", "Material-UI", "Bootstrap", "SASS", "SEO"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "REST APIs", "JWT", "Socket.io"],
    },
    {
      title: "Database & ORM",
      skills: ["MySQL", "MongoDB", "Prisma ORM"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker", "npm", "Postman", "Swagger", "Jira"],
    },
    {
      title: "Soft Skills",
      skills: ["Teamwork", "Communication", "Time Management", "Problem Solving"],
    },
  ]

  return (
    <section id={id} ref={ref} className="md:ml-64 px-6 py-20 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">Skills & Expertise</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title} className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium hover:bg-accent/20 transition-colors"
                  >
                    {skill}
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
