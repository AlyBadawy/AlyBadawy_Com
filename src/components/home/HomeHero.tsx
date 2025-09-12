import Image from "next/image";
import AlyPicture from "@/assets/images/aly-badawy-profile.jpg";
import Link from "next/link";
import { FaFileAlt, FaUser, FaArrowRight } from "react-icons/fa";

export const HomeHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-600 rounded-full opacity-10 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 -right-4 w-96 h-96 bg-cyan-600 rounded-full opacity-10 blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* MAIN CONTENT */}
          <div className="lg:col-span-8 order-2 lg:order-1" data-aos="fade-up">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 border border-emerald-400/40 text-emerald-300 text-sm font-medium mb-6 shadow-lg shadow-emerald-500/10">
              <span className="w-2 h-2 bg-emerald-400 rounded-full mr-2 animate-pulse shadow-sm shadow-emerald-400/50"></span>
              Available for new opportunities
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
              <span className="text-white">Crafting</span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-gradient">
                Practical Solutions
              </span>
              <br />
              <span className="text-gray-300 font-light text-3xl md:text-4xl lg:text-5xl">
                as a{" "}
                <em className="text-cyan-300 not-italic font-medium">
                  Software Engineer
                </em>
              </span>
            </h1>

            {/* Bio Section */}
            <div className="space-y-4 text-gray-300 leading-relaxed max-w-4xl mb-8">
              <p className="text-base">
                A senior software engineer with{" "}
                <span className="text-emerald-400 font-semibold">
                  strong opinions
                </span>{" "}
                about building reliable systems. I've spent{" "}
                <span className="text-cyan-400 font-semibold">17+ years</span>{" "}
                turning complex problems into elegant solutions that actually
                work.
              </p>

              <p>
                I don't just write code—
                <span className="text-red-400 font-semibold">
                  I architect systems
                </span>{" "}
                that{" "}
                <span className="text-white font-semibold">
                  stand the test of time
                </span>
                , mentor teams to excellence, and have strong opinions about
                what makes software truly great.
              </p>

              <p>
                I specialize in{" "}
                <span className="text-red-400 font-semibold">
                  secure web applications
                </span>
                ,{" "}
                <span className="text-yellow-400 font-semibold">
                  custom STM32/ARM firmware
                </span>
                , and{" "}
                <span className="text-green-400 font-semibold">
                  advanced PCB/IoT systems
                </span>
                . I deliver robust solutions across web, embedded, and hardware
                domains—focused on{" "}
                <span className="text-yellow-400 font-semibold">security</span>,{" "}
                <span className="text-green-400 font-semibold">
                  reliability
                </span>
                , and{" "}
                <span className="text-blue-400 font-semibold">
                  continuous delivery
                </span>
                .
              </p>

              <p>
                Whether I'm architecting{" "}
                <span className="text-blue-400 font-semibold">
                  software systems
                </span>
                , building reusable{" "}
                <span className="text-red-400 font-semibold">
                  embedded frameworks
                </span>
                , or{" "}
                <span className="text-orange-400 font-semibold">
                  prototyping hardware
                </span>
                , I help teams solve real-world challenges with{" "}
                <span className="text-fuchsia-400 font-semibold">
                  tailored, high-quality software
                </span>
                .
              </p>
            </div>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-8" data-aos="fade-up">
              <Link
                href="/hire"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-fuchsia-400 text-fuchsia-300 bg-zinc-900 hover:bg-zinc-800 font-bold transition-colors"
              >
                <FaUser /> Let's Work Together
              </Link>

              <Link
                href="/resume"
                className="flex items-center gap-2 px-6 py-3 rounded-lg border border-cyan-400 text-cyan-300 bg-zinc-900 hover:bg-zinc-800 font-bold transition-colors"
              >
                <FaFileAlt /> See Resume
              </Link>
            </div>
          </div>

          {/* PROFILE IMAGE */}
          <div
            className="lg:col-span-4 order-1 lg:order-2 flex flex-col justify-center lg:justify-end items-center"
            data-aos="fade-left"
          >
            {/* Introduction Text Above Image */}
            <p className="text-xl text-gray-300 mb-6 text-center lg:text-right">
              Hi 👋 I'm{" "}
              <span className="text-white font-bold text-2xl">Aly Badawy</span>
            </p>

            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

              {/* Image container */}
              <div className="relative">
                <Image
                  src={AlyPicture}
                  alt="Aly Badawy - Software Engineer"
                  className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-2xl shadow-2xl ring-4 ring-white/10"
                  width={800}
                  height={800}
                  quality={100}
                  priority
                  placeholder="blur"
                />

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse opacity-80"></div>
                <div className="absolute top-1/2 -right-6 w-4 h-4 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
