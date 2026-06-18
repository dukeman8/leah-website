"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  title: string;
  snippet: string;
  fullText: string;
  image: string;
};

export default function BlogCard({
  title,
  snippet,
  fullText,
  image,
}: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-xl
        border
        border-white/10
        bg-[#1a1a1a]
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#c8a96a]/30
        hover:shadow-lg
      "
    >

      {/* IMAGE */}
      <div className="relative w-full aspect-video overflow-hidden">

        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-500
            hover:scale-105
          "
        />

      </div>

      {/* CONTENT */}
      <div className="flex flex-1 flex-col p-6">

        <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
          Article
        </p>

        <h3 className="mt-3 text-xl font-semibold tracking-tight text-[#f5f0e6]">
          {title}
        </h3>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-[#b9b2a6]">
          {open ? fullText : snippet}
        </p>

        <button
          onClick={() => setOpen(!open)}
          className="
            mt-5
            self-start
            text-sm
            font-medium
            text-[#c8a96a]
            transition
            hover:text-[#d8bb7a]
          "
        >
          {open ? "Show Less" : "Read More"}
        </button>

      </div>

    </div>
  );
}