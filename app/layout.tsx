import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { LanguageProvider } from "@/components/language-provider";
import "./globals.css";
import FloatingCircleMenu from "@/components/floating-music-menu";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Hoàng Phúc",
  description:
    "Khám phá các dự án và kỹ năng của tôi trong lĩnh vực phát triển phần mềm.",
  keywords: ["Hoàng Phúc", "portfolio", "developer", "Next.js", "React"],
  openGraph: {
    title: "Portfolio của Hoàng Phúc",
    description:
      "Khám phá các dự án và kỹ năng của tôi trong lĩnh vực phát triển phần mềm.",
    url: "https://portfolio-phuc2px-2025.vercel.app/",
    siteName: "Portfolio của Hoàng Phúc",
    images: [
      {
        url: "https://portfolio-phuc2px-2025.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
        alt: "Ảnh đại diện của Hoàng Phúc",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio của Hoàng Phúc",
    description:
      "Khám phá các dự án và kỹ năng của tôi trong lĩnh vực phát triển phần mềm.",
    images: ["https://portfolio-phuc2px-2025.vercel.app/favicon.ico"],
    creator: "@hoangphucdev",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="/favicon.ico" // thay bằng đường dẫn tới icon của bạn
          type="image/x-icon"
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <LanguageProvider>
            {children}
            <Analytics />
            <FloatingCircleMenu />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
