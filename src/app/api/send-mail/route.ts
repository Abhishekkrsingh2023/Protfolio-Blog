import nodemailer from "nodemailer";
import type { Transporter } from "nodemailer";
import { z } from "zod";
import { NextRequest, NextResponse } from "next/server";

import {getHtmlString, escapeHtml} from "@/app/utils/getHtmlString";

const sendMailSchema = z.object({
  name: z.string().min(2).max(100),
  email: z.email(),
  message: z.string().min(10).max(1000),
});

function createTransporter(): Transporter {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
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
      return NextResponse.json(
        { error: z.treeifyError(parsed.error) },
        { status: 400 }
      );
    }
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_USER:", process.env.SMTP_USER);


    const { name, email, message } = parsed.data;

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    
    const subject = `New contact form message from ${safeName}`;
    const html = getHtmlString(safeName, safeEmail, safeMessage);

    const to = process.env.CONTACT_EMAIL || process.env.SMTP_USER;

    const transporter = createTransporter();

    const info = await transporter.sendMail({
      from: `<${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (error) {
    console.error("Mail send error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}