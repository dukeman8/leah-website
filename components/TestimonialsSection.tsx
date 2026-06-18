import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Leah made the entire process feel straightforward and reassuring. Everything was explained clearly and professionally.",
    name: "Private Client",
    location: "Hull",
  },
  {
    quote:
      "Clear, practical advice from start to finish. I felt supported and confident throughout.",
    name: "Private Client",
    location: "Leeds",
  },
  {
    quote:
      "A professional and compassionate service during a difficult time. The guidance was calm, clear and helpful.",
    name: "Private Client",
    location: "Manchester",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f6f1e7] py-24">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-2xl">

          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Client Testimonials
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#1f1f1f]">
            Trusted by individuals and families
          </h2>

          <p className="mt-4 text-[#5f5a52] leading-relaxed">
            Clear guidance, compassionate support, and practical legal advice during important life decisions.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial) => (
            <div
              key={`${testimonial.name}-${testimonial.location}`}
              className="
                rounded-xl
                border
                border-white/10
                bg-[#1a1a1a]
                p-6
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-[#c8a96a]/30
                hover:shadow-lg
              "
            >

              <Quote
                size={28}
                strokeWidth={1.7}
                className="text-[#c8a96a]"
              />

              <div className="mt-5 flex gap-1 text-[#c8a96a]">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    size={16}
                    fill="currentColor"
                    strokeWidth={1.7}
                  />
                ))}
              </div>

              <p className="mt-5 text-[#b9b2a6] leading-relaxed">
                “{testimonial.quote}”
              </p>

              <div className="mt-6 border-t border-white/10 pt-4">

                <p className="text-sm font-semibold text-[#f5f0e6]">
                  {testimonial.name}
                </p>

                <p className="mt-1 text-sm text-[#b9b2a6]">
                  {testimonial.location}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* Location strip */}
        <div className="mt-12 rounded-xl border border-[#d8d2c7] bg-[#161c19] p-6 text-center">

          <p className="text-sm text-[#b9b2a6]">
            Serving clients across{" "}
            <span className="text-[#f5f0e6]">
              Hull and East Yorkshire
            </span>
          </p>

        </div>

      </div>
    </section>
  );
}