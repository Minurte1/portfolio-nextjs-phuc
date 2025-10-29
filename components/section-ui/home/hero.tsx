"use client";

import { useLanguage } from "@/lib/language-context";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-secondary">
      <div
        className={`max-w-2xl text-center transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="mb-6 inline-block">
          <div className="w-24 h-24 rounded-full bg-accent/10 flex items-center justify-center">
            <span className="text-4xl">👨‍💻</span>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
          {t("heroName")}
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
          {t("fullStackDeveloper")}
        </p>

        {/* Description */}
        <p className="text-base text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          {t("heroDescription")}
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            {t("viewMyWork")}
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-foreground text-foreground rounded-lg font-semibold hover:bg-secondary transition-colors"
          >
            {t("getInTouch")}
          </a>
        </div>

        {/* Language toggle (optional) */}
        <div className="mt-10">
          <button
            onClick={() => setLanguage(language === "en" ? "vi" : "en")}
            className="text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            🌐 {language === "en" ? "Tiếng Việt" : "English"}
          </button>
        </div>
      </div>
    </section>
  );
}
