"use client";

import { useRef, useEffect } from "react";
import { useLanguage } from "@/lib/language-context";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

interface ContactProps {
  id: string;
  setActive: () => void;
}

export default function Contact({ id, setActive }: ContactProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setActive(),
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [setActive]);

  return (
    <section id={id} ref={ref} className="px-6 py-20 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        {/* Tiêu đề */}
        <h2 className="text-4xl font-bold text-foreground mb-6 animate-fade-in">
          {t("letsWorkTogether")}
        </h2>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in-up">
          {t("contactIntro")}
        </p>

        {/* Contact Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Email */}
          <a
            href="mailto:hohoangphucjob@gmail.com"
            className="bg-secondary rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group"
          >
            <div className="flex justify-center mb-4 text-accent">
              <Mail className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{t("email")}</h3>
            <p className="text-muted-foreground group-hover:text-accent transition-colors">
              hohoangphucjob@gmail.com
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:0327434821"
            className="bg-secondary rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group"
          >
            <div className="flex justify-center mb-4 text-accent">
              <Phone className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">{t("phone")}</h3>
            <p className="text-muted-foreground group-hover:text-accent transition-colors">
              0327434821
            </p>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Minurte1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-secondary rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group"
          >
            <div className="flex justify-center mb-4 text-accent">
              <Github className="w-8 h-8" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">
              {t("github")}
            </h3>
            <p className="text-muted-foreground group-hover:text-accent transition-colors">
              @Minurte1
            </p>
          </a>
        </div>

        {/* Social links */}
        <div className="border-t border-border pt-12">
          <p className="text-muted-foreground mb-6">{t("connectSocial")}</p>
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/Minurte1"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all hover:-translate-y-1 shadow-md hover:shadow-accent/30"
            >
              <Github className="w-6 h-6" />
            </a>

            <a
              href="https://www.linkedin.com/in/ho%C3%A0ng-ph%C3%BAc-h%E1%BB%93-a59586267/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-secondary hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all hover:-translate-y-1 shadow-md hover:shadow-accent/30"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
