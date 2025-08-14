"use client";
import React, { useState } from "react";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    priceRange: "₹5,000 - ₹15,000",
    description: "Perfect for simple websites and getting started",
    bgColor: "bg-white",
    features: {
      "Base Inclusions": [
        "Static 1-page site = ₹5,000 base",
        "Each extra page = ₹1,000",
        "First 2 extra pages at 50% off (₹500 each)",
        "Contact feature (WhatsApp/email) = ₹500 each",
      ],
      "Optional Add-ons": [
        "Basic image optimization = ₹500",
        "Responsive testing = ₹500",
        "Basic SEO Setup = ₹1,000",
        "Domain setup assistance = ₹500",
      ],
    },
  },
  {
    id: 2,
    name: "Standard Plan",
    priceRange: "₹20,000 - ₹35,000",
    description: "Ideal for growing businesses with more complex needs",
    bgColor: "bg-white",
    features: {
      "Base Inclusions": [
        "3 Pages: Landing + Admin + Dynamic Page",
        "Admin backend (basic login/table view)",
        "1 backend table included",
        "First 2 extra pages at 50% off",
      ],
      "Add-ons": [
        "Extra backend tables = ₹1,000 each",
        "Email notifications = ₹1,000",
        "File upload feature = ₹1,500",
        "Advanced SEO Setup = ₹2,000",
      ],
    },
  },
  {
    id: 3,
    name: "Advanced Plan",
    priceRange: "₹40,000 - ₹90,000",
    description: "Comprehensive solution for enterprise-level requirements",
    bgColor: "bg-white",
    features: {
      "Base Inclusions": [
        "Unlimited pages",
        "Admin dashboard",
        "Content management system",
        "3 backend tables included",
      ],
      "Add-ons": [
        "Payment gateway = ₹3,000-₹5,000",
        "Advanced user roles = ₹2,000",
        "Analytics dashboard = ₹2,500",
        "API integrations = ₹2,000-₹5,000",
      ],
    },
  },
];

const additionalServices = [
  {
    title: "Payment Gateway Integration",
    icon: (
      <svg
        className="w-6 h-6 text-blue-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
        />
      </svg>
    ),
    items: [
      "UI/UX payment flow design",
      "Razorpay, Stripe, PayPal integration",
      "Success/failure webhook handling",
      "Cost: ₹3,000-₹5,000",
    ],
  },
  {
    title: "Hosting & Domain",
    icon: (
      <svg
        className="w-6 h-6 text-blue-500 mr-2"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
        />
      </svg>
    ),
    items: [
      "Domain (.in/.com) = ₹800-₹1,200/year",
      "Shared Hosting = ₹1,000-₹2,000/year",
      "VPS Hosting = ₹3,000-₹7,000/year",
      "Deployment Setup = ₹500-₹1,000",
    ],
  },
];

export default function PricingComponents() {
  const [selectedPlan, setSelectedPlan] = useState(2); // Default to Standard Plan
  const [isHovered, setIsHovered] = useState(null);

  return (
    <div className="w-full min-h-[100vh] bg-gradient-to-b from-gray-50 to-white py-8 px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full mt-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Pricing Plans
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Website <span className="text-blue-600">Development</span>
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Choose the perfect package for your business needs and budget.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`relative flex flex-col rounded-xl border-2 transition-all duration-300 cursor-pointer
                ${
                  selectedPlan === plan.id
                    ? "border-blue-500 bg-blue-50 scale-[1.02]"
                    : "border-gray-200 bg-white"
                }
                ${
                  isHovered === plan.id && selectedPlan !== plan.id
                    ? "border-blue-300"
                    : ""
                }
              `}
              onClick={() => setSelectedPlan(plan.id)}
              onMouseEnter={() => setIsHovered(plan.id)}
              onMouseLeave={() => setIsHovered(null)}
            >
              {plan.id === 2 && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-tr-xl rounded-bl-lg">
                  POPULAR
                </div>
              )}

              <div className="px-5 py-6">
                <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-2 text-gray-600">{plan.description}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-3xl font-extrabold text-gray-900">
                    {plan.priceRange.split(" - ")[0]}
                  </span>
                  <span className="ml-1 text-md font-medium text-gray-500">
                    {plan.priceRange.includes(" - ")
                      ? ` - ${plan.priceRange.split(" - ")[1]}`
                      : ""}
                  </span>
                </div>

                <div className="mt-6 space-y-6">
                  {Object.entries(plan.features).map(([title, items]) => (
                    <div key={title}>
                      <h4 className="font-semibold text-gray-800">{title}:</h4>
                      <ul className="mt-2 space-y-2 text-gray-600">
                        {items.map((item, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-blue-500 mr-2">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl border border-gray-200 p-6">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Additional Services
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white p-5 rounded-lg border border-gray-200"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                  {service.icon}
                  {service.title}
                </h4>
                <ul className="space-y-2 text-gray-600">
                  {service.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
