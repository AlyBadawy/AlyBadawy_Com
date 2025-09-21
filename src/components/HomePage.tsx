import React from "react";
import Link from "next/link";
import { Header } from "@/components/ui/Header";
import { Footer } from "@/components/ui/Footer";
import { useTheme } from "next-themes";
import {
  FaSun,
  FaMoon,
  FaCamera,
  FaFileAlt,
  FaBroadcastTower,
} from "react-icons/fa";

const AccentClasses = {
  emerald: "text-emerald-300 dark:text-emerald-300",
  cyan: "text-cyan-300 dark:text-cyan-300",
  red: "text-red-400 dark:text-red-400",
  yellow: "text-yellow-400 dark:text-yellow-400",
  green: "text-green-400 dark:text-green-400",
  blue: "text-blue-400 dark:text-blue-400",
  fuchsia: "text-fuchsia-400 dark:text-fuchsia-400",
  fuchsiaLight: "text-fuchsia-300 dark:text-fuchsia-300",
  orange: "text-orange-400 dark:text-orange-400",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-slate-800 dark:text-gray-300 transition-colors duration-300">
      <main className="container mx-auto px-6 py-12">
        {/* HERO */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          <div className="lg:col-span-7">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
              <span className="block text-slate-800 dark:text-white">
                Aly Badawy
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Software Engineer • Photographer • Amateur Radio Operator
              </span>
            </h1>

            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
              I design and build dependable systems across web, embedded, and
              hardware domains. I like small teams, pragmatic engineering, and
              clear documentation.
            </p>

            <div className="flex flex-wrap gap-4 mt-6">
              <Link
                href="/work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border bg-slate-50 dark:bg-zinc-900 text-slate-800 dark:text-gray-200 border-slate-200 hover:shadow-lg transition"
              >
                <FaFileAlt className={AccentClasses.emerald} />
                See My Work
              </Link>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-md border bg-slate-50 dark:bg-zinc-900 text-slate-800 dark:text-gray-200 border-slate-200 hover:shadow-lg transition"
              >
                Read My Story
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="mt-8 grid grid-cols-3 sm:grid-cols-6 gap-4 max-w-md">
              <div className="text-center">
                <div className="text-2xl font-bold">17+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Years experience
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold">30+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Countries
                </div>
              </div>

              <div className="text-center">
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  Side projects
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-72 h-72 rounded-2xl shadow-2xl overflow-hidden ring-4 ring-white/10 bg-slate-100 dark:bg-zinc-900">
              {/* Placeholder image */}
              <div className="w-full h-full flex items-center justify-center text-4xl text-gray-400">
                📷
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT & STRONG OPINIONS */}
        <section className="mb-12">
          <div className="prose dark:prose-invert max-w-4xl">
            <h2>About & Strong Opinions</h2>
            <p>
              I have strong opinions about software quality, testing, and team
              culture. I prefer small, well-documented APIs and reliable
              observability.
            </p>
            <Link
              href="/blog"
              className="text-sm font-medium underline underline-offset-2"
            >
              Read more
            </Link>
          </div>
        </section>

        {/* PERSONAL INTERESTS */}
        <section className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg shadow hover:shadow-xl transition p-6 border hover:border-cyan-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-md bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                <FaCamera className="text-2xl text-fuchsia-400" />
              </div>
              <div>
                <h3 className="font-semibold">Photography</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Landscape, travel, and portrait work.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Gallery and prints available.{" "}
              <Link href="/photography" className="text-cyan-400">
                View gallery
              </Link>
            </p>
          </div>

          <div className="rounded-lg shadow hover:shadow-xl transition p-6 border hover:border-emerald-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-md bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                <FaBroadcastTower className="text-2xl text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold">Amateur Radio & EmComms</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  HF/VHF/UHF, emergency communications and community service.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Learn more about operating and deploying EmComms kits.
            </p>
          </div>

          <div className="rounded-lg shadow hover:shadow-xl transition p-6 border hover:border-yellow-500">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-md bg-gray-100 dark:bg-zinc-800 flex items-center justify-center">
                <div className="text-2xl text-emerald-300">⚙️</div>
              </div>
              <div>
                <h3 className="font-semibold">Embedded & Hardware</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  STM32/ARM, PCB design, firmware and prototyping.
                </p>
              </div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Open-source frameworks and reusable drivers.
            </p>
          </div>
        </section>

        {/* FEATURED PROJECTS & IDEAS */}
        <section className="mb-12">
          <h2 className="mb-4">Featured Projects & Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              ["/places", "Countries/Places Visited"],
              ["/now", "Now Page"],
              ["/uses", "Uses Page"],
              ["/snippets", "Snippets Library"],
              ["/reading", "Reading Notes"],
              ["/brag", "Brag Document"],
              ["/principles", "Principles & Playbooks"],
              ["/projects", "Project Cards"],
            ].map(([href, title]) => (
              <Link
                key={href as string}
                href={href as string}
                className="block rounded-lg shadow hover:shadow-xl transition p-6 border hover:border-emerald-500"
              >
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Short description or status.
                </p>
              </Link>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS (placeholder) */}
        <section className="mb-12">
          <h2 className="mb-4">Testimonials</h2>
          <div className="rounded-lg p-6 bg-slate-50 dark:bg-zinc-900 border">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              "A placeholder testimonial — add real ones here."
            </p>
          </div>
        </section>

        {/* CTA */}
        <section className="mb-12">
          <div className="rounded-lg p-8 bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white">
            <h3 className="text-2xl font-bold">Want to work together?</h3>
            <p className="mt-2">
              I'm available for consulting and full-time opportunities.
            </p>
            <div className="mt-4 flex gap-4">
              <Link
                href="/resume"
                className="px-5 py-3 rounded-md bg-white text-slate-800 font-bold"
              >
                Resume
              </Link>
              <Link
                href="/hire"
                className="px-5 py-3 rounded-md border border-white/30 text-white"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
