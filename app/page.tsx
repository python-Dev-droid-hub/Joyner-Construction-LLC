import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LandingSections } from "@/components/sections/LandingSections";

export default function Home() {
  return (
    <>
      <main id="main-content">
        <Hero />
        <LandingSections />
      </main>
      <Footer />
    </>
  );
}
