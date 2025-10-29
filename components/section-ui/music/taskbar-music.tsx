"use client";

import { Home, ListMusic, Upload, Library } from "lucide-react";

export default function TaskbarMusic({ activeSection, setActiveSection }: any) {
  const tabs = [
    { id: "library", label: "Thư viện", icon: <Library /> },
    { id: "playlist", label: "Playlist", icon: <ListMusic /> },
    { id: "upload", label: "Tải lên", icon: <Upload /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background/70 backdrop-blur-lg border-t border-border flex justify-around py-3 rounded-t-2xl shadow-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveSection(tab.id)}
          className={`flex flex-col items-center text-sm ${
            activeSection === tab.id
              ? "text-accent"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {tab.icon}
          <span>{tab.label}</span>
        </button>
      ))}
    </div>
  );
}
