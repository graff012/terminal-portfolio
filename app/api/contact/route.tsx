import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  console.log("[v0] API route called");

  try {
    // Initialize Resend inside the function, not at the top
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is missing");
    }
    const resend = new Resend(process.env.RESEND_API_KEY);

    const body = await request.json();
    console.log("[v0] Request body:", body);

    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      console.log("[v0] Missing required fields");
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.log("[v0] Invalid email format");
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("[v0] Sending email via Resend...");

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["nuriddinsobirjonov@gmail.com"], // change this to your real email if needed
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: 'Courier New', monospace; background-color: #0a0a0a; color: #00ff00; padding: 20px; border: 1px solid #00ff00;">
          <h2 style="color: #00ff00; border-bottom: 1px solid #00ff00; padding-bottom: 10px;">
            > New Contact Form Submission
          </h2>
          <div style="margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          <div style="margin: 20px 0; padding: 15px; border: 1px solid #00ff00; background-color: #001100;">
            <h3 style="color: #00ff00; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
          <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #00ff00; font-size: 12px; color: #888;">
            Sent from your terminal portfolio website
          </div>
        </div>
      `,
    });

    if (error) {
      console.log("[v0] Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    console.log("[v0] Email sent successfully:", data);
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("[v0] API route error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
