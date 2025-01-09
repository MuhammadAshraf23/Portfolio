"use client";

import About from "@/components/About";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr />
      <About />
      <Skills/>
      <Projects />
      <Experience />
    </>
  );
}
