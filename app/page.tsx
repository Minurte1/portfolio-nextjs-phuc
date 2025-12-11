"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "@/components/section-ui/home/hero";
import About from "@/components/section-ui/home/about";
import Skills from "@/components/section-ui/home/skills";
import Experience from "@/components/section-ui/home/experience";
import Projects from "@/components/section-ui/home/projects";
import Contact from "@/components/section-ui/home/contact";
import Taskbar from "@/components/taskbar";
import Footer from "@/components/footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState("hero");

  // animation variants để tái sử dụng
  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        <motion.div
          key="hero"
          initial="hidden"
          whileInView="visible" // <-- chỉ animation khi vào viewport
          viewport={{ once: true, amount: 0.2 }} // chạy 1 lần khi 20% section hiển thị
          variants={sectionVariant}
        >
          <Hero id="hero" setActive={() => setActiveSection("hero")} />
        </motion.div>

        <motion.div
          key="about"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <About id="about" setActive={() => setActiveSection("about")} />
        </motion.div>

        <motion.div
          key="skills"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <Skills id="skills" setActive={() => setActiveSection("skills")} />
        </motion.div>

        <motion.div
          key="experience"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <Experience
            id="experience"
            setActive={() => setActiveSection("experience")}
          />
        </motion.div>

        <motion.div
          key="projects"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <Projects
            id="projects"
            setActive={() => setActiveSection("projects")}
          />
        </motion.div>

        <motion.div
          key="contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={sectionVariant}
        >
          <Contact id="contact" setActive={() => setActiveSection("contact")} />
        </motion.div>

        <motion.div
          key="footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          <Footer />
        </motion.div>
      </main>

      <Taskbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </div>
  );
}
