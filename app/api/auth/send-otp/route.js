import { generateOTP, storeOTP } from "@/lib/otp";
import { sendEmail } from "@/lib/email";

export async function POST(request) {
  const { email } = await request.json();

  // Validate email (add your admin emails check here)
  const allowedEmails = ["atrinity9928@gmail.com"]; // Add your admin emails
  if (!allowedEmails.includes(email)) {
    return new Response(
      JSON.stringify({ message: "Unauthorized email address" }),
      { status: 401 }
    );
  }

  const otp = generateOTP();
  await storeOTP(email, otp);

  try {
    await sendEmail({
      to: email,
      subject: "Your Admin Login OTP",
      text: `Your OTP code is: ${otp}`,
      html: `<p>Your OTP code is: <strong>${otp}</strong></p>`,
    });

    return new Response(JSON.stringify({ message: "OTP sent successfully" }), {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending OTP:", error);
    return new Response(JSON.stringify({ message: "Failed to send OTP" }), {
      status: 500,
    });
  }
}
