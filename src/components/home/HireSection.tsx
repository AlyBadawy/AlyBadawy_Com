import Image from "next/image";
import HirePic from "@/assets/images/home-hire.png";
import Link from "next/link";
import { FaHandshake } from "react-icons/fa";

export const HireSection = () => {
  return (
    <div className="container mx-auto">
      <section id="hire" className="flex flex-col p-4 pt-14">
        <h2
          className="text-2xl md:text-5xl font-semibold mb-2 text-center text-cyan-500"
          data-aos="fade-up"
        >
          Need Robust, Tailored Solutions?
        </h2>

        <div className="flex flex-col lg:flex-row justify-between items-center my-4 gap-8">
          <div className="w-1/2 md:w-1/3 flex-shrink-0" data-aos="flip-right">
            <Image
              src={HirePic}
              alt="Hire Me"
              className="w-full rounded-lg shadow-lg"
              width={500}
            />
          </div>
          <div className="flex-1 flex flex-col gap-5" data-aos="flip-left">
            <p>
              Tired of cookie-cutter software? I deliver{" "}
              <span className="text-gradient">bespoke engineering</span> for
              real-world needs—whether that’s secure web apps, custom embedded
              frameworks, or hardware that just works.
            </p>
            <p>
              My approach is simple: listen deeply, design smart, and build
              reliable systems that help you get ahead. I specialize in projects
              where quality and security aren’t optional, and where innovation
              meets accountability.
            </p>
            <p>
              From first sketches to final deployment, I’m your partner for
              bringing ideas to life—on time, and ready for tomorrow’s
              challenges. Let’s collaborate to create solutions that make an
              impact.
            </p>
            <Link href="/hire" className="mt-2">
              <span className="inline-block py-2 px-4 rounded-md border-2 border-cyan-700 hover:bg-cyan-900/30 transition-colors font-semibold text-gradient cursor-pointer">
                Contact Me
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
