import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Leah Hanson Legal Services",
    template: "%s | Leah Hanson Legal Services",
  },
  description:
    "Clear, trusted legal advice for wills, estate planning, trusts, probate and lasting powers of attorney.",

  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Leah Hanson Legal Services",
    description:
      "Clear, trusted legal advice for wills, estate planning, trusts, probate and lasting powers of attorney.",
    url: "https://leahhanson.co.uk",
    siteName: "Leah Hanson Legal Services",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Leah Hanson Legal Services",
      },
    ],
    locale: "en_GB",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Leah Hanson Legal Services",
    description:
      "Clear, trusted legal advice for wills, estate planning, trusts, probate and lasting powers of attorney.",
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#f6f1e7] text-[#1f1f1f] antialiased">

        <Header />

        <main>
          {children}
        </main>

        <Footer />

        <StickyCTA />

      </body>
    </html>
  );
}