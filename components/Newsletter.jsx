"use client";
import { useState } from "react";
import { Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: "", type: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ text: "", type: "" });

    try {
      // Create a formatted email message
      const formattedMessage = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
        <div style="background: linear-gradient(135deg, #2003FF 0%, #4169E1 100%); padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
          <h2 style="color: white; margin: 0;">🎉 New Newsletter Subscriber!</h2>
        </div>
        
        <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px;">
          <p style="font-size: 16px; color: #333;">You have a new subscriber:</p>
          
          <div style="background: #f0f7ff; padding: 20px; border-left: 4px solid #2003FF; margin: 20px 0;">
            <p style="margin: 0; color: #666;">Email:</p>
            <p style="margin: 5px 0 0; font-size: 18px; font-weight: bold; color: #2003FF;">${email}</p>
          </div>
          
          <p style="color: #666; font-size: 14px;">
            <strong>Subscription Date:</strong> ${new Date().toLocaleDateString(
              "en-US",
              {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              },
            )}
          </p>
          
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />
          
          <p style="color: #999; font-size: 12px; text-align: center;">
            This subscriber was added to your newsletter list.
          </p>
        </div>
      </div>
    `;

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "838aa2c7-920d-434d-af00-69bcefda38e1",
          email: email,
          subject: "🎉 New Newsletter Subscription - Atrinity",
          from_name: "Atrinity Newsletter",
          message: formattedMessage,
          // Add these fields to help with filtering
          newsletter: "true",
          subscriber_email: email,

          // You can also add these to organize your Web3Forms inbox
          botcheck: "",
          cc: "", // Add CC if needed
          bcc: "", // Add BCC if needed
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({
          text: "Successfully subscribed to our newsletter! Check your email for confirmation.",
          type: "success",
        });
        setEmail("");

        setTimeout(() => {
          setSubmitMessage({ text: "", type: "" });
        }, 5000);
      } else {
        throw new Error(result.message || "Subscription failed");
      }
    } catch (error) {
      setSubmitMessage({
        text: error.message || "Failed to subscribe. Please try again.",
        type: "error",
      });

      setTimeout(() => {
        setSubmitMessage({ text: "", type: "" });
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="my-16 min-h-[200px] p-8 text-center w-full shadow-sm relative bg-[#2003FF] overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute -left-15 -bottom-20 blur-xs w-60 aspect-square border-3 border-white rounded-full opacity-30"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-xs w-150 aspect-square border-3 border-white rounded-full opacity-30"></div>
      <div className="absolute -right-15 -top-20 blur-xs w-60 aspect-square border-3 border-white rounded-full opacity-30"></div>

      <div className="relative z-10">
        <div className="flex justify-center mb-4">
          <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
            <Mail className="text-white" size={32} />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Stay Updated
        </h3>
        <p className="text-white/90 mb-6 max-w-2xl mx-auto text-sm md:text-base">
          Subscribe to our newsletter to get the latest blog posts and web
          development tips delivered directly to your inbox.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <div className="relative flex-grow">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 border border-blue-200 bg-white text-gray-900 placeholder-gray-400"
              required
              disabled={isSubmitting}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white hover:bg-blue-700 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:transform-none min-w-[120px]"
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Subscribing...</span>
              </span>
            ) : (
              "Subscribe"
            )}
          </button>
        </form>

        {/* Status Message */}
        {submitMessage.text && (
          <div className="mt-4 flex justify-center">
            <div
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm ${
                submitMessage.type === "success"
                  ? "bg-green-500/20 text-green-100 backdrop-blur-sm border border-green-400/30"
                  : "bg-red-500/20 text-red-100 backdrop-blur-sm border border-red-400/30"
              }`}
            >
              {submitMessage.type === "success" ? (
                <CheckCircle size={16} className="flex-shrink-0" />
              ) : (
                <AlertCircle size={16} className="flex-shrink-0" />
              )}
              <span>{submitMessage.text}</span>
            </div>
          </div>
        )}

        <p className="text-xs text-white/70 mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}
