import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Leah Hanson for clear, confidential legal advice and consultations.",
};

export default function ContactPage() {
  return (
    <main className="bg-[#f6f1e7] text-[#1f1f1f]">

      {/* HERO */}
      <section className="bg-[#161c19] text-[#f5f0e6]">
        <div className="max-w-6xl mx-auto px-6 py-24">

          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Contact
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-4xl">
            Speak with me directly about your legal needs
          </h1>

          <p className="mt-6 text-lg text-[#b9b2a6] max-w-3xl leading-relaxed">
            Request a confidential, no-obligation call at a time that suits you.
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="bg-[#f6f1e7]">
        <div className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="rounded-xl border border-[#d8d2c7] bg-[#fffaf0] p-8">

              <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
                Contact details
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Get in touch
              </h2>

              <div className="mt-6 space-y-5 text-[#5f5a52]">

                <p className="flex gap-3">
                  <Phone
                    size={18}
                    className="mt-0.5 shrink-0 text-[#c8a96a]"
                  />

                  <span>01482 762484</span>
                </p>

                <p className="flex gap-3">
                  <Mail
                    size={18}
                    className="mt-0.5 shrink-0 text-[#c8a96a]"
                  />

                  <span>leah.hanson@gunnercooke.co.uk</span>
                </p>

                <p className="flex gap-3">
                  <MapPin
                    size={18}
                    className="mt-0.5 shrink-0 text-[#c8a96a]"
                  />

                  <span>Studio 6, Salters House, High Street, Hull, HU1 1NQ</span>
                </p>

              </div>

            </div>

            <div className="rounded-xl border border-[#d8d2c7] bg-[#fffaf0] p-8">

              <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
                Locations
              </p>

              <h2 className="mt-3 text-2xl font-semibold tracking-tight">
                Working with clients across the UK
              </h2>

              <p className="mt-5 flex gap-3 text-[#5f5a52] leading-relaxed">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#c8a96a]"
                />

                <span>Hull • Leeds • Manchester • London</span>
              </p>

            </div>

          </div>

          {/* RIGHT */}
          <div className="rounded-xl border border-[#d8d2c7] bg-[#fffaf0] p-8">
            <ContactForm />
          </div>

        </div>
      </section>

    </main>
  );
}