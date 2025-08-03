import Image from "next/image";
import { PROJECTS } from "@/data/home-projects";
import { PortfolioProject } from "./PortfolioProject";

export const PortfolioSection = () => {
  return (
    <div className="bg-zinc-900">
      <div className="container mx-auto my-8 p-4">
        <section id="portfolio" className="flex flex-col p-4 pt-14">
          <h2
            className="text-2xl md:text-5xl font-semibold mb-6 text-center text-cyan-500"
            data-aos="fade-up"
          >
            Featured Projects
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {PROJECTS.map((proj, i) => (
              <PortfolioProject key={proj.title} project={proj} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center" data-aos="fade-in">
            <p className="text-gray-400 text-sm">
              Want a closer look or a private demo?
              <br />
              <a
                href="#contact"
                className="text-gradient font-semibold underline hover:text-cyan-300 transition-colors"
              >
                Let's connect!
              </a>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};
