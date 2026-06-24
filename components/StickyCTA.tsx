"use client";

import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-0 w-full z-[9999] md:hidden">

      <div className="mx-4 flex items-center justify-between px-4 py-3 bg-[#1f1f1f] border border-[#2a2a2a] rounded-lg shadow-lg">

        <p className="text-sm text-[#f6f1e7]">
          Get in touch
        </p>

        <Link
          href="/contact"
          className="
            shrink-0
            bg-[#2a2a2a]
            text-[#f6f1e7]
            px-4 py-2
            rounded-md
            text-sm
            font-medium
            hover:bg-[#3a3a3a]
            transition
          "
        >
          Enquire
        </Link>

      </div>

    </div>
  );
}