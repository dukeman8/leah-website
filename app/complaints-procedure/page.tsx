export default function ComplaintsProcedurePage() {
  return (
    <main className="bg-[#f6f1e7] text-[#1f1f1f]">
      <section className="bg-[#161c19] text-[#f5f0e6]">
        <div className="max-w-4xl mx-auto px-6 py-24">
          <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
            Legal
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight">
            Complaints Procedure
          </h1>

          <p className="mt-6 text-[#b9b2a6] leading-relaxed">
            We are committed to providing a high standard of service. If something goes wrong, we want to know so we can put it right.
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="rounded-xl border border-[#d8d2c7] bg-[#fffaf0] p-8 space-y-8">
          <div>
            <h2 className="text-2xl font-semibold">Raising a complaint</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              If you have a concern about the service provided, please contact us as soon as possible with details of the issue.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">What happens next</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              Your complaint will be acknowledged and reviewed. We will aim to respond clearly and fairly, and explain any steps we propose to take.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Legal Ombudsman</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              If a complaint cannot be resolved, you may be able to refer it to the Legal Ombudsman. Time limits apply, so you should check the Legal Ombudsman’s latest guidance.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold">Contact</h2>
            <p className="mt-4 text-[#5f5a52] leading-relaxed">
              Please contact leah.hanson@gunnercooke.co.uk with any complaint or concern.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}