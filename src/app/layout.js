// app/layout.js or your layout file
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeClient from "./ThemeClient"; // Import ThemeClient

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Muhammad Ashraf | MERN Stack Developer Portfolio",
  description:
    "Explore the portfolio of Muhammad Ashraf, a passionate MERN stack developer. Discover projects, skills, and experience in building stunning web applications using React, Next.js, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Wrap your entire content with ThemeClient */}
        <ThemeClient>
          <Navbar />
          {children}
        </ThemeClient>
      </body>
    </html>
  );
}
