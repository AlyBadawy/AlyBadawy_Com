import { FaLinkedin } from "react-icons/fa";
import { TESTIMONIALS } from "@/data/testimonials";
import Link from "next/link";

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
            Trusted by Professionals
          </h2>
          <div className="flex flex-col gap-6 w-full">
            {TESTIMONIALS.slice(0, 3).map((t) => (
              <div
                key={t.title}
                className="bg-zinc-900 border border-cyan-800 rounded-lg shadow-md shadow-cyan-900 p-6 flex flex-row items-center w-full"
                data-aos="flip-left"
                data-aos-delay={200}
              >
                <FaLinkedin className="text-cyan-500 text-3xl mr-6 flex-shrink-0" />
                <div className="flex flex-col flex-1">
                  <p className="italic text-gray-400 mb-4 text-sm">
                    "{t.quote}"
                  </p>
                  <div className="flex flex-col">
                    <div className="font-semibold text-cyan-200 ">{t.name}</div>
                    <div className="text-xs text-fuchsia-400 italic">
                      {t.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/real-client-stories"
            className="mt-8 px-6 py-2 rounded-full bg-cyan-500 text-white font-semibold text-sm shadow hover:bg-cyan-600 transition-colors duration-200"
          >
            Read More Client Stories
          </Link>
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
