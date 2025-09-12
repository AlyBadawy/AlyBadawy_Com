import React, { JSX } from "react";

type HomeSolutionProps = {
  title: string;
  icon: JSX.Element;
  children: JSX.Element;
};

export const HomeSolution = ({ title, icon, children }: HomeSolutionProps) => {
  return (
    <div
      className="group relative bg-gradient-to-br from-gray-900/50 via-gray-800/30 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 transition-all duration-500 hover:scale-105 border border-gray-700/50 hover:border-gray-600/70 shadow-lg hover:shadow-2xl"
      data-aos="fade-up"
    >
      {/* Simple border glow on hover */}
      <div className="absolute -inset-0.5 bg-gray-600 rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000"></div>

      <div className="relative">
        {/* Icon with solid color styling */}
        <div
          className={`inline-flex p-4 rounded-2xl bg-cyan-400 shadow-lg mb-6 transform transition-transform group-hover:rotate-6 group-hover:scale-110`}
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <div className="text-3xl text-zinc-800">{icon}</div>
        </div>

        {/* Title with solid color */}
        <h3
          className={`text-xl md:text-2xl font-bold mb-4 text-purple-400 group-hover:scale-105 transition-transform duration-300 h-16 flex items-center justify-center text-center`}
          data-aos="fade-down"
          data-aos-delay="200"
        >
          <span className="leading-tight">{title}</span>
        </h3>

        {/* Content with smaller font */}
        <div
          className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
          data-aos="fade-in"
          data-aos-delay="300"
        >
          {children}
        </div>
      </div>
    </div>
  );
};
