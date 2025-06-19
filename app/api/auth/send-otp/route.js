// app/api/auth/send-otp/route.js
import { generateOTP, storeOTP } from "@/lib/otp";
import { sendEmail } from "@/lib/email";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email } = await request.json();
    console.log("Received email:", email); // Debug

    if (!email) {
      return NextResponse.json(
        { message: "Email is required" },
        { status: 400 }
      );
    }

    const otp = generateOTP();
    console.log("Generated OTP:", otp); // Debug

    // THIS IS THE CRUCIAL LINE THAT MUST EXECUTE
    await storeOTP(email, otp);
    console.log("OTP stored successfully"); // Debug

    // Send email (in development, just log it)

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
    console.error("Error in send-otp:", error);
    return NextResponse.json(
      { message: "Failed to send OTP" },
      { status: 500 }
    );
  }
}
