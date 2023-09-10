import HeroSection from '@/components/homepage/HeroSection';
import HireSection from '@/components/homepage/HireSection';
import PortfolioSection from '@/components/homepage/PortfolioSection';
import SolutionsSection from '@/components/homepage/SolutionsSection';

// export const generateMetadata = async (): Promise<Metadata> => {
//   return await PageOgMeta({
//     title: 'Crafting Practical Solutions as a Software Engineer',
//     description:
//       'Aly Badawy is a senior software engineer based in Wayne, NJ. Over the course of my 15-year career, I have immersed myself in the art of crafting software solutions that seamlessly align with real-world scenarios',
//   });
// };

export default function Home() {
  return (
    <>
      <HeroSection />
      <SolutionsSection />
      <HireSection />
      <PortfolioSection />
    </>
  );
}
