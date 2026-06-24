import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section
      className="
        mt-16
        overflow-hidden
        rounded-xl
        border
        border-border
        bg-card
        px-6
        py-14
        text-center
        shadow-soft
      "
    >

      {/* Accent label */}
      <p className="text-xs uppercase tracking-[0.22em] text-accent">
        Contact
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-foreground">
        Need legal advice?
      </h2>

      <p className="mt-5 max-w-2xl mx-auto text-muted leading-relaxed">
        Speak with a solicitor today to get clear, practical guidance tailored to your situation.
      </p>

      {/* CTA */}
      <div className="mt-8 flex justify-center">

        <Link
          href="/contact"
          className="
            group
            inline-flex
            items-center
            gap-2
            rounded-md
            bg-[#1f1f1f]
            px-6
            py-3
            text-sm
            font-medium
            text-[#f6f1e7]
            transition
            hover:bg-[#2a2a2a]
          "
        >
          <span>Get in touch</span>

          <ArrowRight
            size={16}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>

      </div>

    </section>
  );
}