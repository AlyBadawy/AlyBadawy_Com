import { BsAppIndicator, BsCpu, BsShieldLock, BsGlobe } from "react-icons/bs";
import { HomeSolution } from "./HomeSolution";
import Link from "next/link";

export const HomeSolutionSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 overflow-hidden">
      <div className="relative container mx-auto px-6 py-20">
        <section id="solutions" className="text-center">
          {/* Enhanced section header */}
          <div className="mb-16" data-aos="fade-up">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-purple-400">Cutting-Edge Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Transforming complex challenges into elegant, scalable solutions
              across
              <span className="text-cyan-400 font-semibold"> web</span>,
              <span className="text-orange-400 font-semibold"> mobile</span>,
              and
              <span className="text-blue-400 font-semibold">
                {" "}
                embedded systems
              </span>
            </p>
          </div>

          {/* Solutions grid with enhanced layout */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            <HomeSolution title="Software development" icon={<BsGlobe />}>
              <p className="text-base">
                I build modern{" "}
                <span className="text-cyan-400 font-semibold">
                  web applications
                </span>{" "}
                and{" "}
                <span className="text-emerald-400 font-semibold">
                  cross-platform apps
                </span>
                . I focus on{" "}
                <span className="text-blue-400 font-semibold">performance</span>
                ,{" "}
                <span className="text-yellow-400 font-semibold">
                  accessibility
                </span>
                , and{" "}
                <span className="text-fuchsia-400 font-semibold">
                  maintainability
                </span>{" "}
                —sharing code where it makes sense, designing resilient
                offline-first experiences, and shipping with reliable CI/CD,
                testing, and observability.
              </p>
            </HomeSolution>
            <HomeSolution title="DevSecOps Excellence" icon={<BsShieldLock />}>
              <p className="text-base">
                I architect{" "}
                <span className="text-emerald-400 font-semibold">
                  secure, scalable systems
                </span>{" "}
                with DevSecOps at their foundation. From designing{" "}
                <span className="text-blue-400 font-semibold">
                  automated CI/CD pipelines
                </span>{" "}
                to implementing compliance frameworks, I ensure software is
                delivered
                <span className="text-white font-semibold">
                  {" "}
                  efficiently and safely
                </span>
                —ready for mission-critical environments.
              </p>
            </HomeSolution>
            <HomeSolution title="IoT & Embedded Systems" icon={<BsCpu />}>
              <p className="text-base">
                I engineer{" "}
                <span className="text-yellow-400 font-semibold">
                  intelligent embedded solutions
                </span>
                —from custom firmware for microcontrollers to comprehensive
                <span className="text-pink-400 font-semibold">
                  {" "}
                  sensor integration
                </span>{" "}
                and cloud connectivity. My work bridges hardware and software to
                deliver
                <span className="text-white font-semibold">
                  real-time, reliable systems
                </span>
                .
              </p>
            </HomeSolution>
            <HomeSolution
              title="Mobile App Innovation"
              icon={<BsAppIndicator />}
            >
              <p className="text-base">
                I craft{" "}
                <span className="text-orange-400 font-semibold">
                  intuitive mobile experiences
                </span>{" "}
                that seamlessly connect users to powerful backend systems. My
                expertise spans the
                <span className="text-red-400 font-semibold">
                  {" "}
                  complete app lifecycle
                </span>
                —from UX design to App Store success, always prioritizing{" "}
                <span className="text-white font-semibold">
                  performance and usability
                </span>
                .
              </p>
            </HomeSolution>
          </div>

          {/* Call to action */}
          <div className="mt-16" data-aos="fade-up" data-aos-delay="400">
            <p className="text-lg text-gray-300 mb-6">
              Ready to bring your next project to life with cutting-edge
              technology?
            </p>
            <Link href="/hire">
              <div className="inline-flex items-center px-6 py-3 text-sm font-medium text-cyan-400 border border-cyan-500/30 rounded-full hover:bg-cyan-500/10 transition-colors duration-300 cursor-pointer">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                Let's discuss your vision
              </div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};
