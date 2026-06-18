import {
  MessageCircleQuestion,
  BadgePoundSterling,
  UserRoundCheck,
} from "lucide-react";

const trustItems = [
  {
    title: "Clear advice",
    description: "No jargon, just straightforward legal guidance.",
    icon: MessageCircleQuestion,
  },
  {
    title: "Fixed pricing where possible",
    description: "We aim to provide upfront costs to remove uncertainty.",
    icon: BadgePoundSterling,
  },
  {
    title: "Personal service",
    description: "Direct access and tailored advice for every client.",
    icon: UserRoundCheck,
  },
];

export default function TrustSection() {
  return (
    <section className="bg-[#161c19] text-[#f5f0e6] py-20">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Why choose us
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight">
            Why clients trust us
          </h2>

          <p className="mt-4 text-[#b9b2a6] leading-relaxed">
            We focus on clarity, communication, and removing uncertainty throughout the legal process.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">

          {trustItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  rounded-xl
                  border
                  border-[#d8d2c7]
                  bg-[#f6f1e7]
                  p-6
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >

                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-[#c8a96a]/40 bg-[#c8a96a]/10">
                  <Icon
                    size={22}
                    strokeWidth={1.7}
                    className="text-[#c8a96a]"
                  />
                </div>

                {/* Title */}
                <h3 className="font-semibold text-lg text-[#1f1f1f]">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-[#5f5a52]">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}
