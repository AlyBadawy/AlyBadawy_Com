import { PageOgMeta } from "@/utils/ogMeta";
import { Metadata } from "next";
import HireForm from "./HireForm";

export const generateMetadata = async (): Promise<Metadata> => {
  return await PageOgMeta({
    title: "Hire me for your next project",
    description:
      "Work with Aly Badawy to build production-ready, scalable solutions tailored to your vision.",
  });
};

export default function Hire() {
  return (
    <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row gap-8 items-stretch justify-center min-h-[600px]">
      {/* Intro Card */}
      <section className="flex-1 bg-gradient-to-br from-purple-900 via-zinc-950 to-cyan-900 rounded-2xl shadow-xl p-8 mb-8 md:mb-0 border-2 border-fuchsia-400/30 flex flex-col justify-between min-h-[600px] h-full">
        <h2
          className="text-3xl md:text-4xl font-bold mb-4 text-fuchsia-400 text-center"
          data-aos="fade-up"
        >
          Hire me for your next project
        </h2>
        <div className="flex flex-col gap-4 text-gray-300 text-base flex-1 justify-center">
          <p>Ready to get started?</p>
          <p>
            Share your project details below. I build robust, production-ready
            solutions tailored to your needs—whether it’s a web app, embedded
            system, or something new. Your info is confidential and helps me
            deliver the best results.
          </p>
          <p>
            I’ll review your submission and get back to you within 48 hours.
            Let’s turn your vision into reality.
          </p>
        </div>
      </section>
      {/* Form Card */}
      <section className="flex-1 bg-zinc-950 rounded-2xl shadow-xl p-8 border-2 border-cyan-400/30 flex flex-col justify-between min-h-[600px] h-full">
        <h3 className="text-xl font-semibold mb-4 text-cyan-400 text-center">
          Contact Form
        </h3>
        <div className="w-full flex-1 flex flex-col justify-center">
          <HireForm />
        </div>
      </section>
    </div>
  );
}
