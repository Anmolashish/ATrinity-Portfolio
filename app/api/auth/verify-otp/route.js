import { verifyOTP } from "@/lib/otp";
import { createSession } from "@/lib/session";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { email, otp } = await request.json();
    console.log("Verifying OTP for:", email, "OTP:", otp); // Debug log

    if (!email || !otp) {
      console.error("Missing email or OTP");
      return NextResponse.json(
        { message: "Email and OTP are required" },
        { status: 400 }
      );
    }

    const isValid = await verifyOTP(email, otp);
    console.log("OTP validation result:", isValid); // Debug log

    if (!isValid) {
      console.error("Invalid OTP attempt for:", email);
      return NextResponse.json({ message: "Invalid OTP" }, { status: 401 });
    }

    const session = await createSession(email);
    console.log("Session created:", session); // Debug log

    const response = NextResponse.json(
      { message: "Login successful" },
      { status: 200 }
    );

    response.cookies.set({
      name: "session",
      value: session.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return response;
  } catch (error) {
    console.error("Error in verify-otp:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
