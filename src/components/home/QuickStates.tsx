import { STATS } from "@/data/home-states";

export const QuickStats = () => {
  return (
    <div className="relative bg-gradient-to-br from-zinc-600 via-zinc-700 to-zinc-800 overflow-hidden">
      <div className="container mx-auto px-4">
        <section className="py-14 flex flex-col items-center">
          <h2
            className="text-2xl md:text-4xl font-semibold mb-10 text-center text-fuchsia-400"
            data-aos="fade-up"
          >
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full max-w-5xl">
            {STATS.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center bg-zinc-900 border border-zinc-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 hover:border-purple-400/40 group"
                data-aos="zoom-in"
                data-aos-delay={i * 120}
              >
                <span className="text-4xl md:text-5xl mb-3 select-none">
                  {stat.icon}
                </span>
                <span className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                  {stat.value}
                </span>
                <span className="text-xs md:text-sm text-emerald-300 text-center mt-1">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};
