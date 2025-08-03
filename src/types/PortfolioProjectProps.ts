import { PortfolioProject } from "./../components/home/PortfolioProject";
import { StaticImageData } from "next/image";

export type PortfolioProjectData = {
  img: StaticImageData;
  title: string;
  desc: string;
  tech: string;
  href?: string;
};
export type PortfolioProjectProps = {
  project: PortfolioProjectData;
  index: number;
};
