// app/api/auth/send-otp/route.js
import { generateOTP, storeOTP } from "@/lib/otp";
import { sendEmail } from "@/lib/email";
import { NextResponse } from "next/server";

// List of authorized emails
const AUTHORIZED_EMAILS = [
  "atrinity9928@gmail.com",
  "anmolashish20@gmail.com",
  "aniketsharm090503@gmail.com",
  // Add more emails as needed
];

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    // Check if email is in the authorized list
    if (!AUTHORIZED_EMAILS.includes(email.toLowerCase())) {
      return NextResponse.json(
        {
          message: "This email is not authorized to receive OTP",
          validEmails: AUTHORIZED_EMAILS, // Optional: return list of valid emails
        },
        { status: 403 }
      );
    }

    const otp = generateOTP();
    await storeOTP(email, otp);

    await sendEmail({
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP code is: ${otp}`,
      html: `<p>Your OTP code is: <strong>${otp}</strong></p>`,
    });

    return NextResponse.json(
      { message: "OTP sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to send OTP" },
      { status: 500 }
    );
  }
}
