import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

import { getHtmlString, escapeHtml } from "@/app/utils/getHtmlString";

const sendMailSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
});

function createTransporter(): Transporter {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_PORT === "465",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

export async function POST(request: NextRequest) {
  try {
    const json = await request.json();
    const parsed = sendMailSchema.safeParse(json);

    if (!parsed.success) {
      const issue = parsed.error.issues[0]?.message || "Invalid input";
      return NextResponse.json({ error: issue }, { status: 400 });
    }

    const { name, email, message } = parsed.data;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    const subject = `New contact form message from ${safeName}`;
    const html = getHtmlString(safeName, safeEmail, safeMessage);

    const to = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    const transporter = createTransporter();

    const info = await transporter.sendMail({
      from: `"${safeName}" <${process.env.SMTP_USER}>`,
      to,
      replyTo: safeEmail,
      subject,
      html,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Mail send error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}