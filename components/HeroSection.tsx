import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex items-center bg-[#1c1c1c] text-[#f5f0e6]">

      <div className="max-w-5xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div>
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Leah Hanson • Private Client Solicitor
          </p>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight tracking-tight text-[#f5f0e6]">
            Clear, trusted legal advice for your future and your family
          </h1>

          <p className="mt-6 text-lg text-[#b9b2a6] max-w-2xl leading-relaxed">
            Specialist support in Wills, Powers of Attorney, Trusts, Probate and Estate administration — delivered with clarity, care, and precision.
          </p>

          <p className="mt-6 text-sm text-[#b9b2a6]">
            Serving Clients in Hull and East Yorkshire
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">

            <a
              href="/contact"
              className="px-6 py-3 bg-[#c8a96a] text-black text-sm rounded-md font-medium hover:bg-[#d8bb7a] transition"
            >
              Get in Touch
            </a>

            <a
              href="/services"
              className="px-6 py-3 border border-white/20 text-sm rounded-md text-[#f5f0e6] hover:border-[#c8a96a] transition"
            >
              View Services
            </a>

          </div>
        </div>

        {/* IMAGE */}
        <div className="relative hidden md:block w-full h-130">

          <Image
            src="/images/you.jpg"
            alt="Solicitor portrait"
            fill
            sizes="(max-width: 768px) 0vw, 50vw"
            className="rounded-xl object-cover object-top shadow-lg"
            priority
          />

          <div className="absolute inset-0 rounded-xl bg-black/20 pointer-events-none" />

        </div>

      </div>
    </section>
  );
}