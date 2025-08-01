import { ContactHireSection } from "@/components/home/ContactHireSection";
import { HireSection } from "@/components/home/HireSection";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeSolutionSection } from "@/components/home/HomeSolutionSection";
import { PortfolioSection } from "@/components/home/PortfolioSection";
import { QuickStats } from "@/components/home/QuickStates";
import { TestimonialsSection } from "@/components/home/Testimonials";
import { PageOgMeta } from "@/utils/ogMeta";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return await PageOgMeta({
    title: "Aly Badawy - Senior Software Engineer | Full Stack Developer",
    description:
      "Aly Badawy is a senior software engineer based in Wayne, NJ. Over the course of my 15-year career, I have immersed myself in the art of crafting software solutions that seamlessly align with real-world scenarios",
  });
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <HomeSolutionSection />
      <HireSection />
      <PortfolioSection />
      <QuickStats />
      <TestimonialsSection />
      <ContactHireSection />
    </>
  );
}
