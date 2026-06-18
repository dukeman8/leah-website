import type { Metadata } from "next";
import Image from "next/image";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Wills & Estate Planning",
  description:
    "Professional advice on wills and estate planning to help protect your family and your future.",
};

export default function Page() {
  return (
    <ServiceLayout
      title="Wills & Estate Planning"
      description="Helping you structure your affairs to protect your wealth and provide long-term security"
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-start">

        {/* TEXT */}
        <div>

          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Wills & Estate Planning
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1f] leading-tight">
            Protect your wishes with a clear legal plan
          </h2>

          <div className="mt-6 space-y-5 text-[#5f5a52] leading-relaxed">

            <p>
              Putting the right plans in place is one of the most important steps you can take to protect your family and your future.
            </p>

            <p>
              We provide clear, tailored advice on Wills and estate planning, helping you ensure your wishes are properly reflected while taking into account your personal circumstances, family dynamics and tax considerations.
            </p>

            <p>
              We will work with you to create a plan that gives you peace of mind and long-term security.
            </p>

          </div>

          <div className="mt-8">

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative h-105 overflow-hidden rounded-xl">

          <Image
            src="/images/wills-estate-planning-v5.jpg"
            alt="Estate planning documents"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

        </div>

      </div>
    </ServiceLayout>
  );
}