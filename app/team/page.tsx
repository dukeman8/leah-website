import Image from "next/image";

const teamMembers = [
  {
    name: "Leah Hanson TEP",
    title: "Partner",
    role: "Works closely with individuals and families to put the right plans in place for the future, providing clear, practical advice on Probate, Wills, Power of Attorney and Trusts.",
    image: "/images/team-1.jpg",
    position: "object-[50%_15%]",
  },
  {
    name: "Lana Fairfield",
    title: "Partner",
    role: "Works alongside Leah to support clients on private client matters, offering a thoughtful and collaborative approach to ensure every client feels supported and well advised.",
    image: "/images/team-2.jpg",
    position: "object-[50%_30%]",
  },
  {
    name: "Rebecca Morris",
    title: "Legal Assistant",
    role: "Supports clients with Wills, Powers of Attorney, Probate and Estate Administration, providing a friendly and organised approach to keep everything progressing efficiently and with attention to detail.",
    image: "/images/team-3.jpg",
    position: "object-[50%_30%]",
  },
  {
    name: "Lorraine Greenwood",
    title: "Consultant",
    role: "Specialises in Probate and Estate Administration, guiding families through the process with sensitivity and care while ensuring matters are handled as smoothly as possible.",
    image: "/images/team-4.jpg",
    position: "object-[50%_25%]",
  },
];

export default function TeamPage() {
  return (
    <main className="bg-[#f6f1e7] text-[#1f1f1f]">
      {/* HERO */}
      <section className="bg-[#161c19] text-[#f5f0e6]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Our Team
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight max-w-4xl">
            We pride ourselves on offering a personal and supportive service
          </h1>

          <p className="mt-6 text-lg text-[#b9b2a6] max-w-3xl leading-relaxed">
            A dedicated team committed to providing thoughtful legal support
            with professionalism, clarity, and care.
          </p>
        </div>
      </section>

      {/* TEAM GRID */}
      <section className="bg-[#f6f1e7]">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="grid gap-8 md:grid-cols-2">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-[#d8d2c7]
                  bg-[#fffaf0]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                {/* IMAGE */}
                <div className="relative w-full h-105 overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className={`object-cover ${member.position}`}
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
                    {member.title}
                  </p>

                  <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1f1f1f]">
                    {member.name}
                  </h2>

                  <p className="mt-4 text-[#5f5a52] leading-relaxed">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}