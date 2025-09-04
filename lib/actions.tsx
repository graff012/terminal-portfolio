"use server"

import { Resend } from "resend"

export async function submitContactForm(prevState: any, formData: FormData) {
  console.log("[v0] Server action called")

  // Check environment variable
  const apiKey = process.env.RESEND_API_KEY
  console.log("[v0] Environment check:", apiKey ? "API key found" : "API key missing")

  if (!apiKey) {
    console.log("[v0] Missing RESEND_API_KEY environment variable")
    return {
      success: false,
      message: "Email service configuration error. Please try again later.",
    }
  }

  // Extract form data
  const firstName = formData.get("firstName") as string
  const lastName = formData.get("lastName") as string
  const email = formData.get("email") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  console.log("[v0] Form data extracted:", { firstName, lastName, email, subject, message })

  // Validate required fields
  if (!firstName || !lastName || !email || !subject || !message) {
    console.log("[v0] Validation failed - missing fields")
    return {
      success: false,
      message: "Please fill in all fields.",
    }
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    console.log("[v0] Invalid email format")
    return {
      success: false,
      message: "Please enter a valid email address.",
    }
  }

  try {
    // Initialize Resend client
    const resend = new Resend(apiKey)
    console.log("[v0] Resend client initialized")

    // Send email
    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: ["sobirjonovnuriddin43@gmail.com"],
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: 'Courier New', monospace; background-color: #0a0a0a; color: #00ff00; padding: 20px; border: 1px solid #00ff00;">
          <h2 style="color: #00ff00; border-bottom: 1px solid #00ff00; padding-bottom: 10px;">
            $ new_message --from="${firstName} ${lastName}"
          </h2>
          
          <div style="margin: 20px 0;">
            <p><span style="color: #ffaa00;">user@portfolio:~$</span> cat contact_info</p>
            <div style="margin-left: 20px; border-left: 2px solid #00ff00; padding-left: 15px;">
              <p><strong>Name:</strong> ${firstName} ${lastName}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
          </div>

          <div style="margin: 20px 0;">
            <p><span style="color: #ffaa00;">user@portfolio:~$</span> cat message.txt</p>
            <div style="margin-left: 20px; border-left: 2px solid #00ff00; padding-left: 15px; background-color: #111; padding: 15px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>

          <div style="margin-top: 30px; padding-top: 15px; border-top: 1px solid #00ff00; font-size: 12px; color: #888;">
            <p>Sent from your terminal portfolio website</p>
            <p>Timestamp: ${new Date().toISOString()}</p>
          </div>
        </div>
      `,
    })

    if (error) {
      console.log("[v0] Resend error:", error)
      return {
        success: false,
        message: "Failed to send message. Please try again.",
      }
    }

    console.log("[v0] Email sent successfully:", data)
    return {
      success: true,
      message: "Thank you for your message! I'll get back to you soon.",
    }
  } catch (error) {
    console.log("[v0] Server action error:", error)
    return {
      success: false,
      message: "An error occurred. Please try again later.",
    }
  }
}
