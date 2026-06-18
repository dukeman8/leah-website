import type { Metadata } from "next";
import Image from "next/image";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Trusts",
  description:
    "Helping you protect your assets and plan for the future with confidence.",
};

export default function Page() {
  return (
    <ServiceLayout
      title="Trusts"
      description="Helping you protect your assets and plan for the future with confidence."
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-start">

        {/* TEXT */}
        <div>

          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Trust Services
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1f] leading-tight">
            Flexible structures designed to protect long-term interests
          </h2>

          <div className="mt-6 space-y-5 text-[#5f5a52] leading-relaxed">

            <p>
              Trusts allow you to control how assets are held and distributed over time, providing flexibility and protection for beneficiaries.
            </p>

            <p>
              Carefully structured trusts can help preserve family wealth, support vulnerable beneficiaries, and create long-term certainty for future generations.
            </p>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative h-105 overflow-hidden rounded-xl">

          <Image
            src="/images/trusts-v3.jpg"
            alt="Trust and estate planning"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

        </div>

      </div>
    </ServiceLayout>
  );
}