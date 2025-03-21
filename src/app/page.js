import About from "@/components/About";
import Contact from "@/components/Contact";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Projects from "@/components/Projects";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import SkillsSection from "@/components/SkillsSection";

export default function Home() {
  return (
    <div className="bg-gray-900">
      <HeroSection />
      <hr className="max-sm:mt-2"/>
      <About />
      <hr/>
      <SkillsSection/>
      <hr/>
      <Projects />
      <hr/>
      <Experience />
      <hr/>
      <Education />
      <hr/>
      <Contact />
      <hr />
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
