"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/language-context";

interface AboutProps {
  id: string;
  setActive: () => void;
}

export default function About({ id, setActive }: AboutProps) {
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

  return (
    <section id={id} ref={ref} className="md:ml-64 px-6 py-20 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-foreground mb-12">
          {t("aboutMe")}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left column */}
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("aboutParagraph1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("aboutParagraph2")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("aboutParagraph3")}
            </p>
          </div>

          {/* Right column (education + facts) */}
          <div className="bg-secondary rounded-2xl p-8 space-y-6">
            <div>
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                {t("educationTitle")}
              </h3>
              <p className="text-foreground font-semibold">
                {t("educationDegree")}
              </p>
              <p className="text-muted-foreground">{t("educationSchool")}</p>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                {t("quickFacts")}
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>✓ {t("factExperience")}</li>
                <li>✓ {t("factFullstack")}</li>
                <li>✓ {t("factEcommerce")}</li>
                <li>✓ {t("factRealtime")}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
