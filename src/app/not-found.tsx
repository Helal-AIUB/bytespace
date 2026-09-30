import Link from "next/link";
import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0c40e8] font-sans selection:bg-[#d9fc36] selection:text-[#0F172A] flex flex-col justify-between relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.07)_1px,transparent_1px)] bg-[size:70px_70px] pointer-events-none" />

      {/* Navbar */}
      <div className="relative z-10 w-full">
        <Navbar />
      </div>

      {/* 404 Hero Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center flex flex-col items-center justify-center my-auto">
        <h1 className="text-[120px] md:text-[200px] lg:text-[240px] font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-[#d9fc36] to-[#d9fc36]/40 leading-none select-none mb-4 drop-shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
          404
        </h1>

        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          The page you are looking for doesn’t exist
        </h2>

        <p className="text-xs md:text-sm text-white/80 font-medium mb-10 max-w-md border border-white/10 bg-white/5 backdrop-blur-md px-6 py-2.5 rounded-full">
          Try to use a correct url or go back to homepage to start again
        </p>

        <Link
          href="/"
          className="bg-[#d9fc36] text-[#0F172A] font-extrabold text-base px-8 py-4 rounded-full shadow-[0_10px_30px_rgba(217,252,54,0.4)] hover:scale-105 active:scale-95 transition-all duration-300"
        >
          Back to Home
        </Link>
      </div>

      {/* Footer */}
      <div className="relative z-10 w-full bg-white">
        <Footer />
      </div>
    </main>
  );
}