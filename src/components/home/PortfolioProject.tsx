import Image from "next/image";
import { PortfolioProjectProps } from "@/types/PortfolioProjectProps";

export const PortfolioProject = ({ project, index }: PortfolioProjectProps) => {
  return (
    <div
      className="bg-zinc-950 border border-zinc-700 rounded-lg shadow-lg max-w-xs p-5 flex flex-col items-center hover:scale-105 transition-transform"
      data-aos-delay={index * 75}
      data-aos="fade-up"
    >
      <Image
        src={project.img}
        alt={project.title}
        className="h-24 w-24 rounded mb-4"
      />
      <h3 className="font-bold text-lg text-cyan-300 mb-1">{project.title}</h3>
      <p className="text-gray-400 text-center mb-2 text-sm">{project.desc}</p>
      <div className="text-xs text-fuchsia-400 italic mb-2">{project.tech}</div>
    </div>
  );
};
