import Link from "next/link";
import {
  FileText,
  BriefcaseBusiness,
  ShieldCheck,
  Landmark,
} from "lucide-react";

import { services } from "@/lib/services";

const icons = [FileText, BriefcaseBusiness, ShieldCheck, Landmark];

export default function ServicesSection() {
  return (
    <section className="bg-[#f6f1e7] py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Services
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1f]">
            How we can help
          </h2>

          <p className="mt-4 text-[#6b6b6b] leading-relaxed">
            Practical legal support designed to help you plan ahead and protect what matters most.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
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
                  border-white/10
                  bg-[#161c19]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-[#c8a96a]/40
                  hover:bg-[#1c2420]
                  hover:shadow-lg
                "
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#c8a96a]/30 bg-[#c8a96a]/10">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                    className="text-[#c8a96a]"
                  />
                </div>

                <h3 className="text-lg font-semibold text-[#f5f0e6]">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-[#b9b2a6]">
                  {service.description}
                </p>

                <div className="mt-5 flex items-center gap-2 text-sm text-[#c8a96a]">
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
  );
}