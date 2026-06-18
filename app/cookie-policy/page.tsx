export default function CookiePolicyPage() {
  return (
    <main className="bg-[#f6f1e7] text-[#1f1f1f]">
      <section className="bg-[#161c19] text-[#f5f0e6]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Legal
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Cookie Policy
          </h1>

          <p className="mt-6 text-[#b9b2a6] leading-relaxed">
            This page explains how cookies and similar technologies may be used on this website.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="rounded-xl border border-[#d8d2c7] bg-[#fffaf0] p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">What are cookies?</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              Cookies are small files placed on your device to help websites function, improve user experience and understand how visitors use the site.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">How we use cookies</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              This website may use essential cookies for website functionality and may use analytics cookies to understand website performance and visitor behaviour.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Managing cookies</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              You can control or delete cookies through your browser settings. Disabling some cookies may affect how the website functions.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              For questions about cookies, please contact leah.hanson@gunnercooke.co.uk.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}