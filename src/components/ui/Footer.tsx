import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const Footer = () => {
  return (
    <footer className="w-full py-6 mt-auto bg-gradient-to-r from-cyan-950 via-zinc-900 to-cyan-950 border-t border-zinc-700">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4">
        {/* Brand / Copyright */}
        <div className="text-gray-400 text-sm flex flex-col md:flex-row items-center gap-2">
          <span>
            &copy; {new Date().getFullYear()} Aly Badawy. All rights reserved.
          </span>
        </div>
        {/* Social Links */}
        <div className="flex gap-4 text-2xl">
          <a
            href="https://www.linkedin.com/in/aly-badawy/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:text-cyan-200 transition-colors"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/alybadawy"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-600 hover:text-yellow-200 transition-colors"
          >
            <FaGithub />
          </a>
          <a
            href="https://x.com/AlyBadawy"
            aria-label="X"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-200 transition-colors"
          >
            <FaXTwitter />
          </a>
          <a
            href="mailto:me@alybadawy.com"
            aria-label="Email"
            className="text-fuchsia-400 hover:text-fuchsia-200 transition-colors"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
      {/* Optional: Last updated */}
      <div className="text-xs text-center text-gray-300 mt-2">
        Last updated: August 2025
      </div>
    </footer>
  );
};
