import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Team" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms-of-use", label: "Terms of Use" },
  { href: "/complaints-procedure", label: "Complaints Procedure" },
];

export default function Footer() {
  return (
    <footer className="bg-[#161c19] text-[#f5f0e6] border-t border-white/10">

      <div className="max-w-6xl mx-auto px-6 py-14 grid gap-10 md:grid-cols-4">

        {/* Brand */}
        <div>

          <Link href="/" className="inline-block leading-none">

            <span className="block text-sm md:text-base font-semibold tracking-[0.14em] uppercase">
              Leah Hanson
            </span>

            <span className="mt-1 block text-[10px] tracking-[0.22em] uppercase text-[#c8a96a]">
              Private Client Solicitor
            </span>

          </Link>

          <p className="mt-5 text-sm text-[#b9b2a6] leading-relaxed max-w-sm">
            Specialist support in Wills, Powers of Attorney, Trusts, Probate and Estate administration — delivered with clarity, care, and precision.
          </p>

        </div>

        {/* Navigation */}
        <div>

          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a96a]">
            Navigation
          </h4>

          <ul className="mt-5 space-y-3 text-sm text-[#b9b2a6]">

            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="hover:text-[#f5f0e6] transition"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}

          </ul>

        </div>

        {/* Legal */}
        <div>

          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a96a]">
            Legal
          </h4>

          <ul className="mt-5 space-y-3 text-sm text-[#b9b2a6]">

            {legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  className="hover:text-[#f5f0e6] transition"
                  href={link.href}
                >
                  {link.label}
                </Link>
              </li>
            ))}

          </ul>

        </div>

        {/* Contact */}
        <div>

          <h4 className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c8a96a]">
            Contact
          </h4>

          <div className="mt-5 space-y-4 text-sm text-[#b9b2a6]">

            <p className="flex gap-3">
              <Phone
                size={16}
                className="mt-0.5 shrink-0 text-[#c8a96a]"
              />

              <span>01482 762484</span>
            </p>

            <p className="flex gap-3">
              <Mail
                size={16}
                className="mt-0.5 shrink-0 text-[#c8a96a]"
              />

              <span>leah.hanson@gunnercooke.co.uk</span>
            </p>

            <p className="flex gap-3">
              <MapPin
                size={16}
                className="mt-0.5 shrink-0 text-[#c8a96a]"
              />

              <span>Studio 6, Salters House, High Street, Hull, HU1 1NQ</span>
            </p>

          </div>

        </div>

      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">

        <div className="max-w-6xl mx-auto px-6 py-5 text-xs text-[#b9b2a6] flex flex-col md:flex-row justify-between gap-2">

          <p>
            © {new Date().getFullYear()} Leah Hanson Private Client Solicitor. All rights reserved.
          </p>

          <p>
            Legal services provided subject to engagement terms.
          </p>

        </div>

      </div>

    </footer>
  );
}