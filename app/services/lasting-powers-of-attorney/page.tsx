import type { Metadata } from "next";
import Image from "next/image";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Powers of Attorney",
  description:
    "Professional advice on powers of attorney to help protect your future decisions and wellbeing.",
};

export default function Page() {
  return (
    <ServiceLayout
      title="Powers of Attorney"
      description="Putting the right arrangements in place so those you trust can support you when it matters most."
    >
      <div className="grid gap-10 md:grid-cols-2 md:items-start">

        {/* TEXT */}
        <div>

          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Powers of Attorney
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1f] leading-tight">
            Appoint trusted decision-makers for the future
          </h2>

          <div className="mt-6 space-y-5 text-[#5f5a52] leading-relaxed">

            <p>
              We advise on Lasting Powers of Attorney, helping you appoint trusted individuals to make decisions on your behalf in relation to your finances, health and care. Each document is carefully tailored to reflect your wishes and provide appropriate flexibility.
            </p>

            <p>
              Where a Lasting Power of Attorney is not possible we can also advise on Court of Protection applications, supporting families in obtaining the necessary authority to act on behalf of a loved one.
            </p>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative h-105 overflow-hidden rounded-xl">

          <Image
            src="/images/lasting-power-attorney.jpg"
            alt="Lasting power of attorney consultation"
            fill
            quality={100}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />

        </div>

      </div>
    </ServiceLayout>
  );
}