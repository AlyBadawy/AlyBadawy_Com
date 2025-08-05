import ResendClient from "@/utils/resend";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export const POST = async (req: NextRequest) => {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { name, email, message } = await req.json();
    const emailData = await resend.emails.send({
      to: process.env.RESEND_EMAIL_TO!,
      from: process.env.RESEND_EMAIL_FROM!,
      subject: "New Hire Me Message",
      html: `
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Message: ${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true, data: emailData }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
};
