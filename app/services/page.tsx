import type { Metadata } from "next";
import Link from "next/link";
import {
  BriefcaseBusiness,
  FileText,
  ShieldCheck,
  Landmark,
} from "lucide-react";

import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Legal Services",
  description:
    "Legal services covering wills, estate planning, probate, trusts and lasting powers of attorney.",
};

const icons = [
  BriefcaseBusiness,
  FileText,
  ShieldCheck,
  Landmark,
];

export default function ServicesPage() {
  return (
    <main className="bg-[#f6f1e7] text-[#1f1f1f]">
      <section className="bg-[#161c19] text-[#f5f0e6]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Services
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-4xl">
            How we can help
          </h1>

          <p className="mt-6 text-lg text-[#b9b2a6] max-w-3xl leading-relaxed">
            Practical legal support designed to help you plan ahead and protect
            what matters most.
          </p>
        </div>
      </section>

      <section className="bg-[#f6f1e7]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = icons[index % icons.length];

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="
                    group
                    rounded-xl
                    border
                    border-[#d8d2c7]
                    bg-[#fffaf0]
                    p-8
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-[#c8a96a]/40
                    hover:shadow-lg
                  "
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#c8a96a]/40 bg-[#c8a96a]/10">
                    <Icon
                      size={22}
                      strokeWidth={1.7}
                      className="text-[#c8a96a]"
                    />
                  </div>

                  <h2 className="text-xl font-semibold text-[#1f1f1f]">
                    {service.title}
                  </h2>

                  <p className="mt-3 text-sm leading-relaxed text-[#5f5a52]">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm text-[#c8a96a]">
                    <span>Learn more</span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}