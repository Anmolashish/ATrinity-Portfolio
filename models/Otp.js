// models/Otp.js
import mongoose from "mongoose";

const otpSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      lowercase: true,
      index: true,
    },
    otp: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: Date,
      default: () => new Date(Date.now() + 5 * 60 * 1000), // 5 minutes expiry
      index: { expires: "5m" }, // Auto-delete after 5 minutes
    },
  },
  { timestamps: true }
);

export default mongoose.models.Otp || mongoose.model("Otp", otpSchema);
