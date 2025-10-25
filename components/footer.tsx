"use client";

import { useLanguage } from "@/lib/language-context";
import { useState, useEffect } from "react";

export default function Footer() {
  const lastUpdate = new Date("2025-10-25"); // Ngày cập nhật lần cuối
  const [daysAgo, setDaysAgo] = useState<number>(0);
  const { t, language } = useLanguage();
  useEffect(() => {
    const today = new Date();
    const diffTime = today.getTime() - lastUpdate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDaysAgo(diffDays);
  }, []);

  return (
    <footer className="bg-background border-t border-border py-12 px-6">
      <div className="max-w-4xl mx-auto space-y-4 text-justify">
        <p className="text-muted-foreground">
          {t("footerLastUpdate")}{" "}
          <span className="font-semibold">25-10-2025</span>,{" "}
          {t("footerDaysAgo")} <span className="font-semibold">{daysAgo}</span>.
        </p>
        <p className="text-muted-foreground">
          {t("footerDescription")}{" "}
          <a
            href="https://portfolio-phuc2px.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline"
          >
            {t("footerPortfolioLinkText")}
          </a>
          .
        </p>
        <p className="text-sm text-muted-foreground">
          &copy; 2023 - 2025 Hoàng Phúc. {t("footerRights")}
        </p>
      </div>
    </footer>
  );
}
