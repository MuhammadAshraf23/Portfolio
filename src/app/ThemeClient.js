"use client"
import { ThemeProvider } from "next-themes";

export default function ThemeClient({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
