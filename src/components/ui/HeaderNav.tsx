"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const HeaderNav = () => {
  const pathname = usePathname();

  const links = [
    { name: "Home", href: "/" },
    // { name: "About", href: "/about" },
    // { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
    { name: "Hire Me", href: "/hire" },
  ];

  const isActive = (href: string) => (pathname === href ? "active" : "");

  const linkClasses = (href: string) => {
    return `text-cyan-500 pb-2 border-b-2 ${
      isActive(href)
        ? "border-cyan-500"
        : "border-slate-800 hover:border-cyan-500"
    } ease-in-out transition duration-200`;
  };

  return (
    <>
      <nav className="flex w-1/2 justify-end">
        <span className="flex space-x-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={linkClasses(link.href)}
            >
              {link.name}
            </Link>
          ))}
        </span>
      </nav>
    </>
  );
};
