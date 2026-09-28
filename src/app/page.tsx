import { Navbar } from "../components/navigation/Navbar";
import { HeroSection } from "../components/home/HeroSection";

export default function Home() {
  return (
    <main className="bg-primary min-h-screen selection:bg-accent selection:text-accent-foreground">
      <Navbar />
      <HeroSection />
    </main>
  );
}