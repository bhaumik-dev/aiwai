import Image from "next/image";
import HeroSection from "@/components/HeroComponent";
import FeatureSection from "@/components/FeatureSection";

export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
    </main>
  );
}
