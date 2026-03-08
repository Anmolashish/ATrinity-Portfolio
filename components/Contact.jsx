"use client";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState({ text: "", type: "" });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+917888346624";
    const message = encodeURIComponent("Hi, I want to work with you");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage({ text: "", type: "" });

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "838aa2c7-920d-434d-af00-69bcefda38e1",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitMessage({
          text: "Thank you for your message! We will get back to you soon.",
          type: "success",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error(result.message || "Form submission failed");
      }
    } catch (error) {
      setSubmitMessage({
        text:
          error.message ||
          "There was an error submitting your message. Please try again.",
        type: "error",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqs = [
    {
      question: "What services does Atrinity Agency provide?",
      answer:
        "Atrinity Agency is a full-service digital agency specializing in custom website design, Next.js and React development, SEO optimization, UI/UX design, performance optimization, and brand-focused web solutions. We help startups, creators, and growing businesses build fast, scalable, and conversion-driven websites that rank well on search engines.",
    },
    {
      question: "How does Atrinity Agency help with SEO and website ranking?",
      answer:
        "We follow a search-engine-first development approach. Atrinity Agency focuses on technical SEO, clean code structure, Core Web Vitals optimization, keyword-rich content architecture, mobile responsiveness, fast page load speed, and SEO-friendly frameworks like Next.js. This ensures better Google rankings, improved visibility, and long-term organic traffic growth.",
    },
    {
      question: "Do you build custom websites or use templates?",
      answer:
        "Atrinity Agency builds fully custom websites tailored to your brand, goals, and target audience. We do not rely on generic templates. Every project is designed with custom UI/UX, scalable architecture, SEO best practices, and performance optimization to ensure your website stands out and converts visitors into customers.",
    },
    {
      question: "What industries does Atrinity Agency work with?",
      answer:
        "We work with startups, personal brands, agencies, e-commerce businesses, service providers, and creative professionals. Atrinity Agency adapts its web design, SEO strategy, and development process to match your industry, competition, and audience intent for maximum impact.",
    },
    {
      question: "Who owns Atrinity IT Agency?",
      answer:
        "Atrinity IT Agency is owned by Anmol Ashish and Aniket Sharma, two engineers and college colleagues who founded the company with a shared vision of delivering high-quality digital solutions. Combining technical expertise with a passion for innovation, they work together to lead Atrinity in building modern, scalable, and performance-focused web experiences for businesses.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Left Column - Contact Form */}
          <div className="flex flex-col">
            {/* Header */}
            <div className="mb-10">
              <h2 className="text-4xl md:text-5xl font-light mb-4 text-gray-900">
                <span className="block">HAVE ANY</span>
                <span className="block text-blue-600 font-bold">
                  QUESTIONS?
                </span>
              </h2>
              <p className="text-gray-600 max-w-md">
                Feel free to reach out with any questions or inquiries. We're
                here to help!
              </p>
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-8 flex-1 flex flex-col"
            >
              <div className="space-y-6 flex-1">
                {/* Name Field */}
                <div className="relative group">
                  <label className="absolute left-4 -top-3 bg-white px-2 text-sm text-gray-500 transition-all duration-200 group-focus-within:text-blue-600">
                    Enter your name here
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:shadow-lg transition-all duration-300 bg-white text-gray-900 placeholder-transparent"
                    placeholder="Enter your name here"
                  />
                </div>

                {/* Email Field */}
                <div className="relative group">
                  <label className="absolute left-4 -top-3 bg-white px-2 text-sm text-gray-500 transition-all duration-200 group-focus-within:text-blue-600">
                    Enter email here
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:shadow-lg transition-all duration-300 bg-white text-gray-900 placeholder-transparent"
                    placeholder="Enter email here"
                  />
                </div>

                {/* Message Field - Full height */}
                <div className="relative group flex-1 min-h-[250px]">
                  <label className="absolute left-4 -top-3 bg-white px-2 text-sm text-gray-500 transition-all duration-200 group-focus-within:text-blue-600">
                    Add your message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full h-full px-6 py-5 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:shadow-lg transition-all duration-300 bg-white text-gray-900 placeholder-transparent resize-none min-h-[250px]"
                    placeholder="Add your message"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold text-lg py-5 px-8 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
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
                      Sending...
                    </span>
                  ) : (
                    "Submit"
                  )}
                </button>

                {/* Success/Error Message */}
                {submitMessage.text && (
                  <div
                    className={`mt-4 text-center py-4 px-6 rounded-xl ${
                      submitMessage.type === "success"
                        ? "bg-green-50 text-green-800 border border-green-200"
                        : "bg-red-50 text-red-800 border border-red-200"
                    }`}
                  >
                    {submitMessage.text}
                  </div>
                )}
              </div>
            </form>
          </div>

          {/* Right Column - FAQs */}
          <div className="flex flex-col">
            <h3 className="text-3xl font-semibold mb-10 text-gray-900">
              Frequently Asked Questions
            </h3>

            <div className="space-y-4 flex-1">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl border transition-all duration-300 ${
                    openFaq === index
                      ? "border-blue-300 shadow-lg"
                      : "border-gray-200 hover:border-gray-300 shadow-md hover:shadow-lg"
                  }`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-6 text-left focus:outline-none"
                  >
                    <div className="flex items-center justify-between gap-4">
                      {/* Number and Question */}
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-lg">
                            {index + 1}
                          </span>
                        </div>

                        <h4 className="text-md font-normal text-gray-900">
                          {faq.question}
                        </h4>
                      </div>

                      {/* Chevron Icon */}
                      <div className="flex-shrink-0">
                        <svg
                          className={`w-6 h-6 text-gray-500 transition-transform duration-300 ${
                            openFaq === index ? "transform rotate-180" : ""
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </div>
                    </div>
                  </button>

                  {/* Answer (Collapsible) */}
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaq === index
                        ? "max-h-96 opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-6 pb-6 pt-2">
                      <div className="ml-14">
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info - Updated with more contact options */}
            <div className="mt-12 pt-10 border-t border-gray-200">
              <h4 className="text-md font-bold mb-6 text-gray-900">
                Need More Help?
              </h4>

              {/* Contact Cards - Now with 3 items */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {/* Email Card */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        ></path>
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900 text-sm">
                      Email Us
                    </h5>
                  </div>
                  <a
                    href="mailto:atrinity9928@gmail.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors text-xs block"
                  >
                    atrinity9928@gmail.com
                  </a>
                </div>

                {/* Primary Phone Card */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        ></path>
                      </svg>
                    </div>
                    <h5 className="font-semibold text-gray-900 text-sm">
                      Call Us
                    </h5>
                  </div>
                  <div className="space-y-1">
                    <a
                      href="tel:+917888346624"
                      className="text-blue-600 hover:text-blue-800 transition-colors text-xs block"
                    >
                      +91 7888346624
                    </a>
                    <a
                      href="tel:+919485337387"
                      className="text-blue-600 hover:text-blue-800 transition-colors text-xs block"
                    >
                      +91 9485337387
                    </a>
                  </div>
                </div>

                {/* WhatsApp Card */}
                <div className="bg-gradient-to-br from-blue-50 to-white p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.093 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                      </svg>
                    </div>
                    <h5 className="font-semibold text-sm text-gray-900">
                      WhatsApp
                    </h5>
                  </div>
                  <button
                    onClick={handleWhatsAppClick}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white text-sm font-medium py-2 px-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.479 5.093 1.479 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path>
                    </svg>
                    Message Us
                  </button>
                </div>
              </div>

              <p className="text-gray-500 text-xs mt-6">
                We typically respond within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
