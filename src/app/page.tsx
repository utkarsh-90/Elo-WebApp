import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import TrendingSection from '@/components/TrendingSection';
import CategoryGrid from '@/components/CategoryGrid';
import PrimeBanner from '@/components/PrimeBanner';
import PopularRightNow from '@/components/PopularRightNow';
import RelatedResources from '@/components/RelatedResources';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <TrendingSection />
      <CategoryGrid />
      <PrimeBanner />
      <PopularRightNow />
      <RelatedResources />
    </main>
  );
}
