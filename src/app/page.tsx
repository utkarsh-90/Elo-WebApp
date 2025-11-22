import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrendingSection from '@/components/TrendingSection';
import CategoryGrid from '@/components/CategoryGrid';
import StillInterestedSection from '@/components/StillInterestedSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TrendingSection />
      <CategoryGrid />
      <StillInterestedSection />
    </main>
  );
}
