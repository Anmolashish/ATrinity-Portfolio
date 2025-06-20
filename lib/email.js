import nodemailer from "nodemailer";

// Create transporter outside the function so it's reused
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
  // Better debugging
  logger: process.env.NODE_ENV === "development",
  debug: process.env.NODE_ENV === "development",
});

export async function sendEmail({ to, subject, text, html }) {
  try {
    const info = await transporter.sendMail({
      from: `"Your App Name" <${process.env.EMAIL_FROM}>`,
      to: Array.isArray(to) ? to.join(", ") : to,
      subject,
      text,
      html: html || text, // Fallback to text if no HTML
    });

    // console.log("Email sent to", to, "Message ID:", info.messageId);
    return info;
  } catch (error) {
    // console.error("Email send error:", error);
    throw new Error(`Failed to send email: ${error.message}`);
  }
}
