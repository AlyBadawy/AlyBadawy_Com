import { BsAppIndicator, BsCpu, BsShieldLock } from "react-icons/bs";
import { HomeSolution } from "./HomeSolution";

export const HomeSolutionSection = () => {
  return (
    <div className="bg-zinc-900">
      <div className="container mx-auto my-8 p-4">
        <section
          id="solutions"
          className="flex flex-col p-4 pt-14 text-neutral-400"
        >
          <h2
            className="text-2xl md:text-5xl font-semibold text-cyan-500 text-center"
            data-aos="fade-up"
          >
            Solutions
          </h2>
          <div className="grid grid-flow-row xl:grid-flow-col auto-cols-auto gap-8 py-4">
            <HomeSolution title="DevSecOps" icon={<BsShieldLock />}>
              <p>
                I build secure, scalable, and resilient applications with
                DevSecOps at their core. From designing CI/CD pipelines to
                automating compliance, I ensure software is delivered
                efficiently and safely—ready for mission-critical use.
              </p>
            </HomeSolution>
            <HomeSolution title="Mobile Apps" icon={<BsAppIndicator />}>
              <p>
                I develop intuitive iOS apps that connect users to powerful
                backend systems. My expertise covers the full app lifecycle,
                from UX design to App Store launch, always focused on
                performance and usability.
              </p>
            </HomeSolution>
            <HomeSolution title="IoT & Embedded" icon={<BsCpu />}>
              <p>
                I create smart, efficient embedded and IoT solutions—firmware
                for microcontrollers, sensor integration, and cloud
                connectivity. My work bridges hardware and software to deliver
                real-time, reliable systems.
              </p>
            </HomeSolution>
          </div>
        </section>
      </div>
    </div>
  );
};
