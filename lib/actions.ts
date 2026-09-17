"use server";

import { Resend } from "resend";

const CONTACT_EMAIL = "sobirjonovnuriddin43@gmail.com";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function submitContactForm(_prevState: unknown, formData: FormData) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return {
      success: false,
      message: "Email service configuration error. Please try again later.",
    };
  }

  const firstName = String(formData.get("firstName") ?? "");
  const lastName = String(formData.get("lastName") ?? "");
  const email = String(formData.get("email") ?? "");
  const subject = String(formData.get("subject") ?? "");
  const message = String(formData.get("message") ?? "");

  if (!firstName || !lastName || !email || !subject || !message) {
    return { success: false, message: "Please fill in all fields." };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: "Please enter a valid email address." };
  }

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: 'Courier New', monospace; background-color: #0a0a0a; color: #00ff00; padding: 20px; border: 1px solid #00ff00;">
          <h2 style="color: #00ff00; border-bottom: 1px solid #00ff00; padding-bottom: 10px;">
            $ new_message --from="${escapeHtml(firstName)} ${escapeHtml(lastName)}"
          </h2>

          <div style="margin: 20px 0;">
            <p><span style="color: #ffaa00;">user@portfolio:~$</span> cat contact_info</p>
            <div style="margin-left: 20px; border-left: 2px solid #00ff00; padding-left: 15px;">
              <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
            </div>
          </div>

          <div style="margin: 20px 0;">
            <p><span style="color: #ffaa00;">user@portfolio:~$</span> cat message.txt</p>
            <div style="margin-left: 20px; border-left: 2px solid #00ff00; padding-left: 15px; background-color: #111; padding: 15px;">
              ${escapeHtml(message).replace(/\n/g, "<br>")}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #00ff00; font-size: 12px; color: #888;">
            <p>Sent from your terminal portfolio website</p>
            <p>Timestamp: ${new Date().toISOString()}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      return {
        success: false,
        message: "Failed to send message. Please try again.",
      };
    }

    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    };
  } catch {
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    };
  }
}
