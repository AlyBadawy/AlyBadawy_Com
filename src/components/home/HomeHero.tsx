import Image from "next/image";
import AlyPicture from "@/assets/images/aly-badawy-profile.jpg";
import Link from "next/link";
import { FaFileAlt, FaUser } from "react-icons/fa";

export const HomeHero = () => {
  return (
    <div className="container mx-auto p-4 min-h-full">
      <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 mt-4 items-center">
        {/* MAIN HEADLINE + BIO */}
        <div className="col-span-5" data-aos="flip-right">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl lg:leading-[1] font-extrabold font-sans text-shadow-lg text-gray-200">
            Crafting
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-fuchsia-500 animate-gradient">
              Practical Solutions
            </span>
            <br />
            <span className="font-light">
              as a <em>Software Engineer</em>
            </span>
          </h1>
          <section className="mt-8 max-w-3xl text-gray-400" id="bio">
            <p className="font-normal text-dimWhite">
              Hi 👋 I'm <strong>Aly Badawy</strong>,
            </p>
            <p className="mt-2">
              A senior software and embedded systems engineer based in Wayne,
              NJ.
            </p>
            <p className="mt-2">
              I specialize in secure web applications (Ruby on Rails), custom
              STM32/ARM firmware, and advanced PCB/IoT systems. I deliver robust
              solutions across web, embedded, and hardware domains—focused on
              security, reliability, and continuous delivery.
            </p>
            <p className="mt-2">
              Whether I'm architecting web, desktop, or mobile applications,
              <br className="hidden md:inline" />
              building reusable embedded frameworks,
              <br className="hidden md:inline" />
              or prototyping hardware,
              <br className="hidden md:inline" />I help teams solve real-world
              challenges with{" "}
              <span className="text-gradient animate-gradient">
                tailored, high-quality software
              </span>
              .
            </p>
          </section>
          {/* CTA BUTTONS */}
          <div className="flex flex-wrap gap-4 mt-8" data-aos="fade-up">
            <Link
              href="/hire"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-fuchsia-400 text-fuchsia-300 bg-zinc-900 hover:bg-zinc-800 font-bold transition-colors"
            >
              <FaUser /> Contact Me
            </Link>

            <Link
              href="/resume"
              className="flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-400 text-cyan-300 bg-zinc-900 hover:bg-zinc-800 font-bold transition-colors"
            >
              <FaFileAlt /> See Resume
            </Link>
          </div>
        </div>
        <div className="col-span-2 mx-auto flex flex-col justify-between items-center align-middle">
          <Image
            src={AlyPicture}
            alt="Aly Badawy profile"
            className="hidden lg:inline-block w-full max-w-sm md:max-w-md h-auto rounded-xl  shadow-blue-950 shadow-sm"
            data-aos="flip-left"
            width={800}
            height={800}
            priority
          />
        </div>
      </div>
    </div>
  );
};
