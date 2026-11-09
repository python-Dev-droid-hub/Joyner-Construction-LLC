import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { LandingSections } from "@/components/sections/LandingSections";

export const metadata: Metadata = {
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

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
