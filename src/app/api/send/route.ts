import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import validator from "validator";

const recipient = process.env.CONTACT_TO_EMAIL || "workframe79@gmail.com";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const formData = body as Record<string, unknown>;
  const { senderName, senderEmail, reasonToContact, senderMsg } = formData;

  if (
    typeof senderName !== "string" ||
    typeof senderEmail !== "string" ||
    typeof reasonToContact !== "string" ||
    typeof senderMsg !== "string"
  ) {
    return NextResponse.json({ error: "Please complete all form fields" }, { status: 400 });
  }

  const name = senderName.trim();
  const email = senderEmail.trim();
  const reason = reasonToContact.trim();
  const message = senderMsg.trim();

  if (
    !name ||
    !email ||
    !reason ||
    !message ||
    name.length > 120 ||
    email.length > 254 ||
    reason.length > 100 ||
    message.length > 5000
  ) {
    return NextResponse.json(
      { error: "Please complete all fields and keep your message under 5000 characters" },
      { status: 400 }
    );
  }

  if (!validator.isEmail(email)) {
    return NextResponse.json(
      { error: "Email format is not valid" },
      { status: 400 }
    );
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_APP_PASSWORD;

  if (!emailUser || !emailPassword) {
    console.error("Contact form email is not configured");
    return NextResponse.json(
      { error: "Email delivery is not configured on the server" },
      { status: 500 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: emailUser,
      pass: emailPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${emailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `Portfolio contact form: ${reason}`,
      text: `Name: ${name}\nEmail: ${email}\nReason: ${reason}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${escapeHtml(name)} (${escapeHtml(email)})</p>
        <p><strong>Reason:</strong> ${escapeHtml(reason)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      `,
    });

    return NextResponse.json({ message: "Your message has been sent" });
  } catch (error) {
    console.error("Contact form email delivery failed:", error);
    return NextResponse.json(
      { error: "Failed to send your message. Please try again later." },
      { status: 500 }
    );
  }
}
