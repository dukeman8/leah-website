import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import CredentialsStrip from "@/components/CredentialsStrip";
import ServicesSection from "@/components/ServicesSection";
import TrustSection from "@/components/TrustSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export const metadata: Metadata = {
  title: "Wills & Estate Planning Solicitor",
  description:
    "Clear, trusted legal advice for wills, estate planning, trusts, probate and lasting powers of attorney.",
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <HeroSection />
      <CredentialsStrip />
      <ServicesSection />
      <TrustSection />
      <TestimonialsSection />
    </main>
  );
}