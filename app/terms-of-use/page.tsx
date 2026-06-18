export default function TermsOfUsePage() {
  return (
    <main className="bg-[#f6f1e7] text-[#1f1f1f]">
      <section className="bg-[#161c19] text-[#f5f0e6]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Legal
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Terms of Use
          </h1>

          <p className="mt-6 text-[#b9b2a6] leading-relaxed">
            These terms apply to your use of this website.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="rounded-xl border border-[#d8d2c7] bg-[#fffaf0] p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Website information</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              The information on this website is provided for general information only and does not constitute legal advice.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">No solicitor-client relationship</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              Contacting us through this website does not create a solicitor-client relationship. Legal services are provided only once formal engagement terms have been agreed.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Accuracy</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              We aim to keep website information accurate and up to date, but no guarantee is given that all content is complete, current or suitable for your circumstances.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">External links</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              This website may link to third-party websites. We are not responsible for the content or practices of external websites.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}