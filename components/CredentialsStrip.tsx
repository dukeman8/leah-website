import {
  BadgeCheck,
  Building2,
  MapPin,
  PoundSterling,
} from "lucide-react";

const credentials = [
  {
    label: "Qualified solicitor",
    icon: BadgeCheck,
  },
  {
    label: "Gunnercooke partner",
    icon: Building2,
  },
  {
    label: "Fixed-fee guidance where possible",
    icon: PoundSterling,
  },
  {
    label: "Hull • Leeds • Manchester • London",
    icon: MapPin,
  },
];

export default function CredentialsStrip() {
  return (
    <section className="bg-[#f6f1e7] py-4">

      <div className="bg-[#161c19] border-y border-white/10">

        <div className="max-w-6xl mx-auto px-6 py-6">

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {credentials.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 text-[#f5f0e6]"
                >

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#c8a96a]/30 bg-[#c8a96a]/10">

                    <Icon
                      size={17}
                      strokeWidth={1.8}
                      className="text-[#c8a96a]"
                    />

                  </div>

                  <p className="text-sm text-[#b9b2a6]">
                    {item.label}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
}