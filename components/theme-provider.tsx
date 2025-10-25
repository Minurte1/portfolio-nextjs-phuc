"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // 👇 ép kiểu an toàn, đảm bảo attribute luôn được truyền vào
  return (
    <NextThemesProvider
      attribute={props.attribute ?? "data-theme"}
      defaultTheme={props.defaultTheme ?? "light"}
      enableSystem={props.enableSystem ?? true}
    >
      {children}
    </NextThemesProvider>
  );
}
