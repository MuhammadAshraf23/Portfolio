// app/layout.js or your layout file
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";

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
  title: "Muhammad Ashraf | MERN Stack Developer & Full-Stack Web Engineer",
  description:
    "Welcome to the professional portfolio of Muhammad Ashraf — a skilled MERN stack developer specializing in modern web development with MongoDB, Express.js, React, Node.js, and Next.js. Explore innovative projects, technical expertise, and proven experience in building high-performance, scalable, and visually stunning web applications.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >      
          <Navbar />
          {children}
    
      </body>
    </html>
  );
}
