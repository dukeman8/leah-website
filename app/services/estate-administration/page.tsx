import type { Metadata } from "next";
import Image from "next/image";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Probate and Estate Administration",
  description:
    "Guidance and support through the legal process of managing and distributing an estate of someone who has died.",
};

export default function Page() {
  return (
    <ServiceLayout
      title="Probate and Estate Administration"
      description="Guidance and support through the legal process of managing and distributing an estate of someone who has died."
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-start">

        {/* TEXT */}
        <div>

          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Probate and Estate Administration
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1f] leading-tight">
            Support through every stage of Probate
          </h2>

          <div className="mt-6 space-y-5 text-[#5f5a52] leading-relaxed">

            <p>
              Losing a loved one is difficult. We provide clear, structured support to help you manage the legal and financial responsibilities that follow.
            </p>

            <p>
              Our approach focuses on reducing stress, ensuring compliance, and helping families navigate estate administration with confidence and clarity.
            </p>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative h-105 overflow-hidden rounded-xl">

          <Image
            src="/images/estate-administration.jpg"
            alt="Estate administration support"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

        </div>

      </div>
    </ServiceLayout>
  );
}