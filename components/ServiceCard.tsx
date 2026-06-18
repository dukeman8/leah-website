import Link from "next/link";

type Props = {
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({ title, description, href }: Props) {
  return (
    <Link
      href={href}
      className="
        group
        p-6
        bg-[#1a1a1a]
        border border-white/10
        rounded-lg
        transition-all duration-200
        hover:border-white/30
        hover:bg-[#1f1f1f]
        hover:-translate-y-0.5
      "
    >
      {/* Title */}
      <h3 className="text-lg font-semibold text-[#f5f0e6] tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-2 text-sm text-[#cfc7b8] leading-relaxed">
        {description}
      </p>

      {/* CTA */}
      <div className="mt-5 text-sm text-[#f5f0e6]/70 group-hover:text-[#f5f0e6] transition flex items-center gap-1">
        Learn more
        <span className="transition group-hover:translate-x-1">→</span>
      </div>
    </Link>
  );
}