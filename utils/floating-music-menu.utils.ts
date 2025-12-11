export const themeVariants = {
  purple: `
    bg-gradient-to-br from-purple-500/70 to-pink-500/70
  `,

  primary: `
    bg-gradient-to-br from-purple-500/70 to-pink-500/70 
    dark:from-purple-400/50 dark:to-pink-400/50
  `,

  blue: `
    bg-gradient-to-br from-blue-500/70 to-cyan-500/70
    dark:from-blue-400/50 dark:to-cyan-400/50
  `,

  green: `
    bg-gradient-to-br from-green-500/70 to-emerald-500/70
    dark:from-green-400/50 dark:to-emerald-400/50
  `,

  orange: `
    bg-gradient-to-br from-orange-500/70 to-yellow-500/70
    dark:from-orange-400/50 dark:to-yellow-400/50
  `,

  gray: `
    bg-gradient-to-br from-neutral-400/70 to-neutral-600/70
    dark:from-neutral-700/70 dark:to-neutral-900/70
  `,

  // ============================
  // 🌌 NEW THEMES (your colors)
  // ============================

  galaxy: `
    bg-gradient-to-br from-[#572f62]/90 to-[#2b213b]/90
    dark:from-[#2b213b]/70 dark:to-[#10061e]/70
  `,

  night: `
    bg-gradient-to-br from-[#090215]/85 to-[#10061e]/85
    dark:from-[#10061e]/60 dark:to-[#2b213b]/60
  `,

  vividDark: `
    bg-gradient-to-br from-[#10061e]/85 to-[#2b213b]/85
    dark:from-[#2b213b]/65 dark:to-[#090215]/65
  `,
  pastelPink: `
  /* Light mode = dark pastel */
  bg-gradient-to-br from-[#dc74b6] to-[#dc74b6]
  
  /* Dark mode = light pastel (slightly deeper) */
  dark:from-[#572e61] dark:to-[#572e61]
`,
};
