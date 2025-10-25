"use client";

import { useState } from "react";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Contact from "@/components/contact";
import Taskbar from "@/components/taskbar";
import Footer from "@/components/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        <Hero id="hero" setActive={() => setActiveSection("hero")} />
        <About id="about" setActive={() => setActiveSection("about")} />
        <Skills id="skills" setActive={() => setActiveSection("skills")} />
        <Experience
          id="experience"
          setActive={() => setActiveSection("experience")}
        />
        <Projects
          id="projects"
          setActive={() => setActiveSection("projects")}
        />
        <Contact id="contact" setActive={() => setActiveSection("contact")} />
        <Footer />
      </main>

      <Taskbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}
