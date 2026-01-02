import ContactSection from "../sections/ContactSection";
import EducationSection from "../sections/EducationSection";
import ExperienceSection from "../sections/ExperienceSection ";
import Footer from "../sections/Footer";
import StickyHeader from "../sections/Header";
import HeroSection from "../sections/HeroSection";
import ProjectSection from "../sections/ProjectSection";
import SkillSection from "../sections/SkillSection";

export default function Home() {
  return (
    <div>
      <StickyHeader />
      <HeroSection />
      <ExperienceSection />
      <ProjectSection />
      <EducationSection />
      <SkillSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
