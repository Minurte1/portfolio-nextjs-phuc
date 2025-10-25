"use client";

import { useRef, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";

interface ExperienceProps {
  id: string;
  setActive: () => void;
}

export default function Experience({ id, setActive }: ExperienceProps) {
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

  const experiences = [
    {
      title: t("exp1Title"),
      company: "BigCode",
      period: "03/2025 – 10/2025",
      description: t("exp1Description"),
      highlights: [t("exp1H1"), t("exp1H2"), t("exp1H3"), t("exp1H4")],
      tech: [
        "Next.js",
        "React",
        "MUI",
        "Node.js",
        "Express",
        "MongoDB",
        "MySQL",
        "JWT",
      ],
    },
    {
      title: t("exp2Title"),
      company: "VNPT Trà Vinh",
      period: "02/2025 – 03/2025",
      description: t("exp2Description"),
      highlights: [t("exp2H1"), t("exp2H2"), t("exp2H3")],
      tech: ["Next.js", "React", "MUI", "Express", "MySQL", "JWT"],
    },
  ];

  return (
    <section id={id} ref={ref} className="md:ml-64 px-6 py-20 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">
          {t("workExperience")}
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-accent pl-8 pb-8 relative"
            >
              <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-2"></div>
              <h3 className="text-2xl font-bold text-foreground">
                {exp.title}
              </h3>
              <p className="text-accent font-semibold mt-1">{exp.company}</p>
              <p className="text-muted-foreground text-sm mb-4">{exp.period}</p>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <ul className="space-y-2 mb-4">
                {exp.highlights.map((h, i) => (
                  <li key={i} className="text-muted-foreground flex gap-3">
                    <span className="text-accent mt-1">→</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-3 py-1 bg-secondary text-muted-foreground rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
