import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ServiceLayout({
  title,
  description,
  children,
}: Props) {
  return (
    <main className="bg-[#f6f1e7] text-[#1f1f1f]">

      {/* HERO */}
      <section className="bg-[#161c19] text-[#f5f0e6]">

        <div className="max-w-4xl mx-auto px-6 py-24">

          {/* Breadcrumb */}
          <div className="text-sm text-[#b9b2a6]">

            <Link
              href="/services"
              className="hover:text-[#f5f0e6] transition"
            >
              Services
            </Link>

            <span className="mx-2 text-white/20">/</span>

            <span className="text-[#f5f0e6]">
              {title}
            </span>

          </div>

          {/* Label */}
          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Legal Service
          </p>

          {/* Title */}
          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight leading-tight">
            {title}
          </h1>

          {/* Description */}
          <p className="mt-6 text-lg text-[#b9b2a6] leading-relaxed max-w-3xl">
            {description}
          </p>

          {/* CTA */}
          <div className="mt-10">

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-2
                rounded-md
                bg-[#c8a96a]
                px-6
                py-3
                text-sm
                font-medium
                text-black
                transition
                hover:bg-[#d8bb7a]
              "
            >
              <span>Get in touch</span>

              <ArrowRight size={16} />

            </Link>

          </div>

        </div>

      </section>

      {/* CONTENT */}
      <section className="bg-[#f6f1e7]">

        <div className="max-w-4xl mx-auto px-6 py-20">

          <div
            className="
              rounded-xl
              border
              border-[#d8d2c7]
              bg-[#fffaf0]
              p-8
              md:p-10
              shadow-sm
            "
          >

            <div
              className="
                prose
                prose-neutral
                max-w-none
                prose-headings:text-[#1f1f1f]
                prose-p:text-[#5f5a52]
                prose-li:text-[#5f5a52]
                prose-strong:text-[#1f1f1f]
                prose-headings:tracking-tight
              "
            >
              {children}
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}