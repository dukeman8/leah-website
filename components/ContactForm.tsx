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

  const labelClassName =
    "mb-2 block text-sm font-medium text-[#1f1f1f]";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setSuccess(false);
    setError(null);

    if (!captchaValue) {
      setError("Please complete the captcha.");
      return;
    }

    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      telephone: String(formData.get("telephone") || ""),
      enquiry: String(formData.get("enquiry") || ""),
      message: String(formData.get("message") || ""),
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
        throw new Error(data?.error || "Failed to send message");
      }

      setSuccess(true);
      e.currentTarget.reset();
      setCaptchaValue(null);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
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

        <h2 className="mt-2 text-2xl font-semibold text-[#1f1f1f]">
          Send a Message
        </h2>

        <p className="mt-3 text-[#5f5a52]">
          Complete the form below and we will respond shortly.
        </p>
      </div>

      {/* Success */}
      {success && (
        <p className="text-green-600 text-sm">
          Message sent successfully.
        </p>
      )}

      {/* Error */}
      {error && (
        <p className="text-red-600 text-sm">
          {error}
        </p>
      )}

      {/* Name */}
      <div>
        <label className={labelClassName}>Name</label>
        <input name="name" required className={inputClassName} />
      </div>

      {/* Email */}
      <div>
        <label className={labelClassName}>Email</label>
        <input name="email" type="email" required className={inputClassName} />
      </div>

      {/* Phone */}
      <div>
        <label className={labelClassName}>Phone (optional)</label>
        <input name="telephone" type="tel" className={inputClassName} />
      </div>

      {/* Enquiry */}
      <div>
        <label className={labelClassName}>Enquiry type</label>
        <select
          name="enquiry"
          required
          defaultValue=""
          className={inputClassName}
        >
          <option value="" disabled>
            Select enquiry type
          </option>
          <option value="Wills & Estate Planning">
            Wills & Estate Planning
          </option>
          <option value="Estate Administration">
            Estate Administration
          </option>
          <option value="Lasting Powers of Attorney">
            Lasting Powers of Attorney
          </option>
          <option value="Trusts">Trusts</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* Message */}
      <div>
        <label className={labelClassName}>Message</label>
        <textarea
          name="message"
          rows={5}
          required
          className={inputClassName}
        />
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
          disabled:opacity-50
          disabled:cursor-not-allowed
        "
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}