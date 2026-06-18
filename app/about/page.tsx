import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  BadgeCheck,
  FileText,
  Landmark,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn more about Leah Hanson and her approach to wills, probate, trusts and estate planning.",
};

const helpItems = [
  { label: "Probate and Estate Administration", icon: BadgeCheck },
  { label: "Wills & Estate Planning", icon: FileText },
  { label: "Trust Creation & Management", icon: Landmark },
  { label: "Powers of Attorney", icon: ShieldCheck },
];

export default function AboutPage() {
  return (
    <main className="bg-[#f6f1e7] text-[#1f1f1f]">

      {/* HERO */}
      <section className="bg-[#161c19] text-[#f5f0e6]">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            About
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-4xl">
            Clarity in complexity 
          </h1>

          <p className="mt-6 text-lg text-[#b9b2a6] max-w-3xl leading-relaxed">
            We help individuals protect what matters most through clear, personal and expert legal advice.
          </p>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="bg-[#f6f1e7]">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <div className="grid md:grid-cols-2 gap-12 items-stretch">

            {/* IMAGE */}
            <div className="relative h-full min-h-130 overflow-hidden rounded-xl shadow-lg">

              <Image
                src="/images/about.jpg"
                alt="Leah Hanson"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />

            </div>

            {/* TEXT CARD */}
            <div className="rounded-xl border border-[#d8d2c7] bg-[#fffaf0] p-8 flex flex-col justify-center">

              <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
                Our approach
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                By translating complex issues into straightforward solutions we give our clients confidence.
              </h2>

              <p className="mt-5 text-[#5f5a52] leading-relaxed">
                We treat every client as an individual, offering a bespoke service that recognises the unique circumstances.
              </p>

              <p className="mt-5 text-[#5f5a52] leading-relaxed">
                Unlike traditional legal advisors we provide fixed fees for our services, not uncertain, never ending, time based quotes.
              </p>

            </div>

          </div>

          {/* Experience */}
          <div className="mt-16 rounded-xl border border-[#d8d2c7] bg-[#161c19] p-8 text-[#f5f0e6]">

            <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
              Experience
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Leah and her Team are qualified solicitors who specialise in private client law
            </h2>

            <p className="mt-5 text-[#b9b2a6] leading-relaxed max-w-3xl">
              The Team have extensive experience advising individuals and families on estate planning and related legal matters, dealing with a variety of types of clients including business owners and high networth individuals.
            </p>

            <p className="mt-5 text-[#b9b2a6] leading-relaxed max-w-3xl">
              We also support families who experience issues that impact mental capacity.
            </p>

          </div>

          {/* What we can help with */}
          <div className="mt-12">

            <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
              Services
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              What we can help with
            </h2>

            <div className="mt-8 grid gap-6 md:grid-cols-4">

              {helpItems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[#d8d2c7] bg-[#fffaf0] p-6"
                  >
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#c8a96a]/40 bg-[#c8a96a]/10">

                      <Icon
                        size={20}
                        strokeWidth={1.7}
                        className="text-[#c8a96a]"
                      />

                    </div>

                    <p className="font-medium text-[#1f1f1f]">
                      {item.label}
                    </p>

                  </div>
                );
              })}

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#f6f1e7]">
        <div className="max-w-6xl mx-auto px-6 pb-24">

          <div className="rounded-xl border border-[#d8d2c7] bg-[#161c19] p-8 text-[#f5f0e6]">

            <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
              Contact
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight">
              Arrange an appointment
            </h2>

            <p className="mt-4 text-[#b9b2a6] max-w-2xl leading-relaxed">
              If you would like to discuss your situation, I offer confidential consultations at a time that suits you.
            </p>

            <Link
              href="/contact"
              className="inline-block mt-7 px-6 py-3 bg-[#c8a96a] text-black text-sm rounded-md font-medium hover:bg-[#d8bb7a] transition"
            >
              Get in touch
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}