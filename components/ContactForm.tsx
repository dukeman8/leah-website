"use client";

import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [captchaValue, setCaptchaValue] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const inputClassName = `
    w-full
    rounded-md
    border
    border-[#d8d2c7]
    bg-white
    px-4
    py-3
    text-[#1f1f1f]
    placeholder:text-[#8a847b]
    outline-none
    transition
    focus:border-[#c8a96a]
  `;

  const labelClassName = "mb-2 block text-sm font-medium text-[#1f1f1f]";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess(false);
    setError(null);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      telephone: formData.get("telephone"),
      enquiry: formData.get("enquiry"),
      message: formData.get("message"),
      token: captchaValue,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error || "Something went wrong");
      }

      setSuccess(true);
      e.currentTarget.reset();
      setCaptchaValue(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Heading */}
      <div>
        <p className="text-xs uppercase tracking-[0.22em] text-[#c8a96a]">
          Enquiry Form
        </p>

        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-[#1f1f1f]">
          Send a Message
        </h2>

        <p className="mt-3 leading-relaxed text-[#5f5a52]">
          Complete the form below and we will respond as soon as possible.
        </p>
      </div>

      {/* Success / Error */}
      {success && (
        <p className="text-green-600 text-sm">
          Message sent successfully.
        </p>
      )}

      {error && (
        <p className="text-red-600 text-sm">
          {error}
        </p>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClassName}>Name</label>
        <input id="name" name="name" required className={inputClassName} />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClassName}>Email</label>
        <input id="email" name="email" type="email" required className={inputClassName} />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="telephone" className={labelClassName}>
          Phone <span className="text-[#5f5a52]">(optional)</span>
        </label>
        <input id="telephone" name="telephone" type="tel" className={inputClassName} />
      </div>

      {/* Enquiry Type */}
      <div>
        <label htmlFor="enquiry" className={labelClassName}>
          Enquiry type
        </label>
        <select
          id="enquiry"
          name="enquiry"
          required
          defaultValue=""
          className={inputClassName}
        >
          <option value="" disabled>Select enquiry type</option>
          <option value="Wills & Estate Planning">Wills & Estate Planning</option>
          <option value="Estate Administration">Estate Administration</option>
          <option value="Lasting Powers of Attorney">Lasting Powers of Attorney</option>
          <option value="Trusts">Trusts</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelClassName}>Message</label>
        <textarea id="message" name="message" rows={5} required className={inputClassName} />
      </div>

      {/* CAPTCHA */}
      <div className="pt-2">
        <ReCAPTCHA
          sitekey="6LdSF-UsAAAAAJA6LaQlpUFkOfiiWVZKLoUyy3vS"
          onChange={(value) => setCaptchaValue(value)}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading || !captchaValue}
        className="
          w-full
          rounded-md
          bg-[#c8a96a]
          px-6
          py-3
          text-sm
          font-medium
          text-black
          transition
          hover:bg-[#d8bb7a]
          disabled:cursor-not-allowed
          disabled:opacity-50
        "
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}