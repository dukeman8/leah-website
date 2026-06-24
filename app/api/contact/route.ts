import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

// Hard fail early (best practice)
if (!resendApiKey) throw new Error("Missing RESEND_API_KEY");
if (!recaptchaSecret) throw new Error("Missing RECAPTCHA_SECRET_KEY");

const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { token, name, email, message, telephone, enquiry } = body;

    console.log("📩 Incoming submission:", { name, email, enquiry });

    if (!token || !name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // -----------------------------
    // RECAPTCHA VERIFY (FIXED)
    // -----------------------------
    const formData = new URLSearchParams();

    // IMPORTANT: guaranteed strings
    formData.append("secret", String(recaptchaSecret));
    formData.append("response", String(token));

    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    );

    const verifyData = await verifyRes.json();

    console.log("🛡️ reCAPTCHA result:", verifyData);

    if (!verifyData.success) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // -----------------------------
    // SEND EMAIL
    // -----------------------------
    console.log("📨 Sending email via Resend...");

    const emailResponse = await resend.emails.send({
      from: "Leah Hanson <mail@leahhanson.co.uk>",
      to: "leah.hanson@gunnercooke.com",
      subject: "New Contact Form Submission",
      replyTo: email,
      html: `
        <h2>New Enquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${telephone || "N/A"}</p>
        <p><strong>Enquiry Type:</strong> ${enquiry || "N/A"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    console.log("📬 Resend response:", emailResponse);

    if (emailResponse.error) {
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("🔥 Server error:", error);

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}