"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ServiceStickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-0 w-full z-50">

      <div className="max-w-3xl mx-auto flex items-center justify-between px-6 py-3 bg-[#1a1a1a] border border-white/10 rounded-lg shadow-lg">

        <p className="text-sm text-[#f5f0e6]">
          Need legal advice?
        </p>

        <Link
          href="/contact"
          className="bg-[#f5f0e6] text-[#1a1a1a] px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
        >
          Book Consultation
        </Link>

      </div>

    </div>
  );
}