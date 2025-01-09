"use client";

import About from "@/components/About";
import Experience from "@/components/Experience";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <HeroSection />
      <hr  className="mt-3"/>
      <About />
      <hr/>
      <SkillsSection/>
      <hr/>
      <Projects />
      <hr/>
      <Experience />
    </div>
  );
}
