"use client"

import { useState } from "react"

interface NavigationProps {
  activeSection: string
  setActiveSection: (section: string) => void
}

export default function Navigation({ activeSection, setActiveSection }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const sections = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  const handleNavClick = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setIsOpen(false)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed left-0 top-0 h-screen w-64 flex-col border-r border-border bg-sidebar p-8 z-40">
        <div className="mb-12">
          <h1 className="text-2xl font-bold text-foreground">Phúc</h1>
          <p className="text-sm text-muted-foreground mt-1">Full-Stack Developer</p>
        </div>

        <div className="space-y-1 flex-1">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                activeSection === section.id
                  ? "bg-accent text-accent-foreground font-semibold"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>

        <div className="space-y-2 pt-8 border-t border-border">
          <a
            href="mailto:hohoangphucjob@gmail.com"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            hohoangphucjob@gmail.com
          </a>
          <a
            href="tel:0327434821"
            className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            0327434821
          </a>
          <div className="flex gap-3 pt-4">
            <a
              href="https://github.com/Minurte1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-sidebar border-b border-border p-4 z-50 flex justify-between items-center">
        <h1 className="text-xl font-bold">Phúc</h1>
        <button onClick={() => setIsOpen(!isOpen)} className="p-2 hover:bg-secondary rounded-lg transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-16 left-0 right-0 bg-sidebar border-b border-border p-4 z-40 space-y-2">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleNavClick(section.id)}
              className={`w-full text-left px-4 py-2 rounded-lg transition-all ${
                activeSection === section.id
                  ? "bg-accent text-accent-foreground font-semibold"
                  : "text-foreground hover:bg-secondary"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </>
  )
}
