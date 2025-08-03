import { FaLinkedin } from "react-icons/fa";
import { TESTIMONIALS } from "@/data/testimonials";

export const TestimonialsSection = () => {
  return (
    <div className="bg-zinc-900">
      <div className="container mx-auto">
        <section
          id="testimonials"
          className="flex flex-col items-center p-4 pt-14"
        >
          <h2
            className="text-2xl md:text-4xl font-semibold mb-8 text-center text-cyan-500"
            data-aos="fade-up"
          >
            Testimonials
          </h2>
          <div className="flex flex-wrap gap-6 justify-center">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className="bg-zinc-900 border border-cyan-800 rounded-sm shadow-lg shadow-cyan-900 max-w-xs p-6 flex flex-col items-center justify-between"
                data-aos="flip-left"
                data-aos-delay={i * 200}
              >
                <div className="flex flex-col items-center">
                  <FaLinkedin className="text-cyan-500 text-3xl mb-3" />
                  <p className="italic text-gray-400 mb-4 text-sm">
                    "{t.quote}"
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="font-semibold text-cyan-200 ">{t.name}</div>
                  <div className="text-xs text-fuchsia-400 italic">
                    {t.title}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 text-xs text-semibold text-cyan-700 py-8 max-w-xs md:max-w-sm lg:max-w-lg text-center">
            All testimonials are from real clients and colleagues on{" "}
            <a
              href="https://www.linkedin.com/in/aly-badawy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 underline"
            >
              LinkedIn
            </a>
            .
          </div>
        </section>
      </div>
    </div>
  );
};
