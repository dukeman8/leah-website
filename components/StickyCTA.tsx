"use client";

import Link from "next/link";

export default function StickyCTA() {
  return (
    <div className="fixed bottom-4 left-0 w-full z-9999 md:hidden">

      <div className="mx-4 flex items-center justify-between px-4 py-3 bg-card border border-border rounded-lg shadow-lg">

        <p className="text-sm text-foreground">
          Book a consultation
        </p>

        <Link
          href="/contact"
          className="shrink-0 bg-foreground text-background px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition"
        >
          Enquire
        </Link>

      </div>

    </div>
  );
}