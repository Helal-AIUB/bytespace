import { Navbar } from "../components/navigation/Navbar";
import { HeroSection } from "../components/home/HeroSection";
import { PartnerLogos } from "../components/home/PartnerLogos";
import { CourseDiscovery } from "../components/home/CourseDiscovery"

export default function Home() {
  return (
    <main className="bg-primary min-h-screen selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <HeroSection />
      <PartnerLogos />
      <CourseDiscovery />
    </main>
  );
}