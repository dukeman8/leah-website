export default function RegulatoryInformationPage() {
  return (
    <main className="bg-[#f6f1e7] text-[#1f1f1f]">
      <section className="bg-[#161c19] text-[#f5f0e6]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Legal
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Regulatory Information
          </h1>

          <p className="mt-6 text-[#b9b2a6] leading-relaxed">
            Information about the regulatory position of legal services provided.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="rounded-xl border border-[#d8d2c7] bg-[#fffaf0] p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Legal services</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              Legal services are provided subject to formal engagement terms and professional regulatory requirements.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Regulation</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              Before going live, this section should be updated with the correct regulatory wording, including the relevant authorised entity, regulator details and any required SRA information.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Professional indemnity insurance</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              Details of professional indemnity insurance and territorial coverage should be included here where required.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Important note</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              This page should be reviewed and completed before launch to ensure the correct regulatory information is displayed.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}