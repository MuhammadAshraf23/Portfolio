"use client";

import About from "@/components/About";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <hr />
      <About />
      <SkillsSection/>
      <Projects />
      <Experience />
    </>
  );
}
