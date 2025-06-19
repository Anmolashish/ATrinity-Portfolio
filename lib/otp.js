// lib/otp.js
import Otp from "@/models/Otp";

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function storeOTP(email, otp) {
  await Otp.create({ email, otp });
  console.log(`OTP stored for ${email}`);
}

export async function verifyOTP(email, otp) {
  try {
    // Find and delete in one atomic operation
    const record = await Otp.findOneAndDelete({
      email: email.toLowerCase(),
      otp,
      expiresAt: { $gt: new Date() },
    });

    return !!record; // Returns true if found and valid
  } catch (error) {
    console.error("OTP verification error:", error);
    return false;
  }
}
