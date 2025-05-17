import { Footer } from "@/components/footer";
import { InfiniteScrollSlider } from "@/components/infinite-scroll-slider";
import { CTA } from "@/components/sections/cta";
import { FeaturedProfiles } from "@/components/sections/featured-profiles";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-100 via-pink-50 to-white">
      <Header />
      <Hero />
      <Stats />
      <FeaturedProfiles />
      <InfiniteScrollSlider />
      <CTA />
      <Footer />
    </div>
  );
}
