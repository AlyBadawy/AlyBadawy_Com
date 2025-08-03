"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export const HeaderNav = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "Resume", href: "/resume" },
    { name: "Hire Me", href: "/hire" },
  ];

  const isActive = (href: string) => (pathname === href ? "active" : "");

  const desktopLinkClasses = (href: string) =>
    `text-cyan-500 pb-2 border-b-2 ${
      isActive(href)
        ? "border-cyan-500"
        : "border-slate-800 hover:border-cyan-500"
    } ease-in-out transition duration-200`;

  const mobileLinkClasses = (href: string) =>
    `px-6 py-3 text-gray-300 hover:bg-zinc-800 hover:text-cyan-500 ${
      isActive(href) ? "bg-cyan-800 text-cyan-500" : ""
    } transition-colors duration-200`;

  return (
    <nav className="flex w-full justify-end items-center relative">
      {/* Desktop menu */}
      <span className="hidden md:flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={desktopLinkClasses(link.href)}
          >
            {link.name}
          </Link>
        ))}
      </span>
      {/* Hamburger button (mobile only) */}
      <button
        className="md:hidden p-2 focus:outline-none"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? <HiX size={28} /> : <HiMenu size={28} />}
      </button>

      {/* Mobile menu dropdown */}
      {open && (
        <span className="absolute top-full right-0 mt-2 flex flex-col w-40 bg-zinc-900 border border-zinc-600 rounded-lg shadow-lg shadow-cyan-950 z-50 animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-6 py-3 ${mobileLinkClasses(
                link.href
              )} border-0 text-left`}
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </span>
      )}
    </nav>
  );
};
