// Simple in-memory storage for OTPs (replace with database in production)
const otpStore = new Map();

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function storeOTP(email, otp) {
  // In production, store in database with expiration
  otpStore.set(email, {
    otp,
    expiresAt: Date.now() + 5 * 60 * 1000, // 5 minutes
  });
}

export async function verifyOTP(email, otp) {
  const stored = otpStore.get(email);

  if (!stored || stored.otp !== otp) {
    return false;
  }

  if (Date.now() > stored.expiresAt) {
    otpStore.delete(email);
    return false;
  }

  otpStore.delete(email);
  return true;
}
