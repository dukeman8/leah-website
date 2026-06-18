import type { Metadata } from "next";
import ServiceLayout from "@/components/ServiceLayout";

export const metadata: Metadata = {
  title: "Other Legal Services",
  description:
    "Additional legal support and tailored advisory services for individuals and families.",
};

export default function Page() {
  return (
    <ServiceLayout
      title="Other Services"
      description="Additional legal support tailored to your personal and family needs."
    >
      <div className="space-y-8">

        <div>

          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Additional Services
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1f] leading-tight">
            Tailored legal support for a wide range of circumstances
          </h2>

          <div className="mt-6 space-y-5 text-[#5f5a52] leading-relaxed">

            <p>
              We provide a range of additional legal services depending on your circumstances, offering practical guidance with a clear and personal approach.
            </p>

            <p>
              Every client situation is different, and where appropriate we can provide tailored support designed around your specific legal and family needs.
            </p>

          </div>

        </div>

        <div>

          <h3 className="text-lg font-semibold text-[#1f1f1f]">
            We can assist with
          </h3>

          <ul className="mt-5 space-y-3">

            <li className="rounded-lg border border-[#d8d2c7] bg-white px-4 py-3 text-[#5f5a52]">
              General legal guidance
            </li>

            <li className="rounded-lg border border-[#d8d2c7] bg-white px-4 py-3 text-[#5f5a52]">
              Document drafting and review
            </li>

            <li className="rounded-lg border border-[#d8d2c7] bg-white px-4 py-3 text-[#5f5a52]">
              Tailored advisory services
            </li>

          </ul>

        </div>

      </div>
    </ServiceLayout>
  );
}