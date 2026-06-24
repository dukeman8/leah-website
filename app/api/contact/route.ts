import { NextResponse } from "next/server";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY in environment variables");
}

if (!recaptchaSecret) {
  throw new Error("Missing RECAPTCHA_SECRET_KEY in environment variables");
}

const resend = new Resend(resendApiKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { token, name, email, message, telephone, enquiry } = body;

    console.log("📩 Incoming form submission:", {
      name,
      email,
      enquiry,
    });

    // Validate required fields
    if (!token || !name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // -----------------------------
    // VERIFY RECAPTCHA
    // -----------------------------
    const verifyRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: recaptchaSecret,
          response: token,
        }),
      }
    );

    const verifyData = await verifyRes.json();

    console.log("🛡️ reCAPTCHA response:", verifyData);

    if (!verifyData.success) {
      return NextResponse.json(
        { error: "Captcha verification failed" },
        { status: 400 }
      );
    }

    // -----------------------------
    // SEND EMAIL VIA RESEND
    // -----------------------------
    console.log("📨 Sending email via Resend...");

    const emailResponse = await resend.emails.send({
      from: "Leah Hanson <mail@leahhanson.co.uk>", // ✅ FIXED
      to: "leah.hanson@gunnercooke.com",
      subject: "New Contact Form Submission",
      reply_to: email, // optional but useful
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
      console.error("❌ Resend error:", emailResponse.error);

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