import { Navbar } from "../components/navigation/Navbar";
import { HeroSection } from "../components/home/HeroSection";
import { PartnerLogos } from "../components/home/PartnerLogos";
import { LearningPaths } from "../components/home/LearningPaths";
import { CourseDiscovery } from "../components/home/CourseDiscovery";
import { CourseManagement } from "../components/home/CourseManagement";
import { CreatorSection } from "../components/home/CreatorSection";
import { ProfessionalGrowth } from "../components/home/ProfessionalGrowth";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <HeroSection />
      <PartnerLogos />
      <CourseDiscovery />
      <LearningPaths />
      <ProfessionalGrowth />
      <CourseManagement />
      <CreatorSection />
    </main>
  );
}