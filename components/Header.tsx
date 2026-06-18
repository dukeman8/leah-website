"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (path: string) =>
    `relative pb-1 text-sm transition ${
      pathname === path
        ? "text-[#1f1f1f] after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:bg-[#c8a96a] after:content-['']"
        : "text-[#6b6b6b] hover:text-[#1f1f1f]"
    }`;

  return (
    <header className="w-full border-b border-[#d8d2c7] bg-[#f6f1e7]/95 text-[#1f1f1f] relative z-50 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="group leading-none hover:opacity-90 transition"
          onClick={() => setOpen(false)}
        >
          <span className="block text-sm md:text-base font-semibold tracking-[0.14em] uppercase">
            Leah Hanson
          </span>

          <span className="mt-1 block text-[10px] tracking-[0.22em] uppercase text-[#c8a96a]">
            Private Client Solicitor
          </span>
        </Link>

        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.href}
              className={linkClass(item.href)}
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d8d2c7] text-[#1f1f1f]"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="text-xl leading-none">
            {open ? "×" : "☰"}
          </span>
        </button>
      </div>

      {open && (
        <>
          <div
            className="fixed inset-0 bg-black/60 md:hidden z-40"
            onClick={() => setOpen(false)}
          />

          <div className="md:hidden fixed top-0 left-0 w-full bg-[#f6f1e7] border-b border-[#d8d2c7] z-50 shadow-lg">
            <div className="flex items-center justify-between px-6 py-4 border-b border-[#d8d2c7]">
              <Link
                href="/"
                className="leading-none"
                onClick={() => setOpen(false)}
              >
                <span className="block text-sm font-semibold tracking-[0.14em] uppercase">
                  Leah Hanson
                </span>

                <span className="mt-1 block text-[10px] tracking-[0.22em] uppercase text-[#c8a96a]">
                  Legal Services
                </span>
              </Link>

              <button
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#d8d2c7] text-[#1f1f1f]"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <span className="text-xl leading-none">×</span>
              </button>
            </div>

            <nav className="flex flex-col p-6 gap-5 text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  className={
                    pathname === item.href
                      ? "text-[#1f1f1f]"
                      : "text-[#6b6b6b] hover:text-[#1f1f1f] transition"
                  }
                  onClick={() => setOpen(false)}
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </header>
  );
}