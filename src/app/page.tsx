import Image from "next/image";
import HeroSection from "@/components/HeroComponent";
import FeatureSection from "@/components/FeatureSection";
import SolutionBlock from "@/components/SolutionBlock";

export default function Home() {
  return (
    <main>
      <HeroSection></HeroSection>
      <FeatureSection></FeatureSection>
      <SolutionBlock
        title="Scan, Detect, Fix — All in One Place"
        description="Our Accessibility Checker scans your website for common WCAG 2.1 issues like missing alt text, low contrast, and improper heading structure.
Once scanned, we show you exactly what’s wrong — and how to fix it — with clear, actionable guidance for each issue. Whether you're a developer or content creator, our tool helps you create an inclusive, standards-compliant experience for everyone."
        imageSrc="solutionsectiontwo.svg"
        buttonleft="Start Scan"
        buttonright="Check Guidelines"
      ></SolutionBlock>
      <SolutionBlock
        title="Accessibility is Smart Design — and Smart Business"
        description="By addressing accessibility issues, you’re not just meeting legal requirements — you're improving usability for everyone.
From keyboard navigation to color contrast, each fix makes your site smoother, more intuitive, and more inclusive."
        imageSrc="solutionsection.svg"
        buttonleft="Run a Scan"
        buttonright="View Results"
      ></SolutionBlock>
    </main>
  );
}
