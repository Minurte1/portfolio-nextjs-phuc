"use client";

import { useRef, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";

interface ProjectsProps {
  id: string;
  setActive: () => void;
}

export default function Projects({ id, setActive }: ProjectsProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActive();
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [setActive]);

  const projects = [
    {
      title: t("proj1Title"),
      period: "10/2024 – 01/2025",
      description: t("proj1Description"),
      features: [
        t("proj1F1"),
        t("proj1F2"),
        t("proj1F3"),
        t("proj1F4"),
        t("proj1F5"),
      ],
      tech: [
        "React.js",
        "Material-UI",
        "Node.js",
        "Express.js",
        "MySQL",
        "JWT",
      ],
      link: "https://github.com/Minurte1/CN_DA21TTA_HoHoangPhuc_Shoes",
    },
    {
      title: t("proj2Title"),
      period: "02/2025 – 03/2025",
      description: t("proj2Description"),
      features: [t("proj2F1"), t("proj2F2"), t("proj2F3"), t("proj2F4")],
      tech: ["Next.js", "React", "MUI", "Express", "MySQL", "JWT"],
      link: "https://github.com/Minurte1/ChanhXe-Management",
    },
  ];

  return (
    <section id={id} ref={ref} className=" px-6 py-20 bg-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">
          {t("myProjects")}
        </h2>
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {project.period}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                {project.description}
              </p>
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">
                  {t("keyFeatures")}
                </h4>
                <ul className="grid md:grid-cols-2 gap-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="text-muted-foreground text-sm flex gap-2"
                    >
                      <span className="text-accent">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tch) => (
                  <span
                    key={tch}
                    className="text-[13px] font-medium px-3 py-1 rounded-full
             bg-accent/30 text-accent-foreground border border-accent/40
             hover:bg-accent/40 transition-colors duration-200"
                  >
                    {tch}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-semibold transition-colors"
              >
                {t("viewOnGithub")} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
