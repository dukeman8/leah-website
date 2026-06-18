import Link from "next/link";

export default function FloatingCTA() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 right-6 z-50 bg-foreground text-background px-5 py-3 rounded-full shadow-lg hover:opacity-90 transition text-sm font-medium"
    >
      Book consultation
    </Link>
  );
}