"use client";
import React, { useState } from "react";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    priceRange: "₹5,000 - ₹15,000",
    description: "Ideal for small businesses, individuals, and startups",
    summary: [
      "Single-page static website",
      "Mobile-responsive design",
      "Basic contact features",
      "1 round of revisions included",
    ],
    details: {
      includes: [
        "Single-Page Static Website (₹5,000 base)",
        "Additional Pages: ₹1,000 per page (50% off first two)",
        "Contact Features: ₹500 each (WhatsApp, email forms, redirects)",
        "Basic SEO Meta Tag Setup: ₹1,000",
        "Domain Configuration Support: ₹500",
        "Hosting Setup: ₹1,000",
        "Content Assistance: ₹1,000 (structure & stock images)",
      ],
      timeline: [
        "Delivery: 3-5 business days (base plan)",
        "Add-ons extend delivery by 1-2 days per item",
        "Timeline adjusts if client delays content",
      ],
      notes: [
        "Domain registration fees not included",
        "Hosting charges paid separately by client",
        "Does not include long-term maintenance",
      ],
      revisions: [
        "1 round of revisions within 14 days",
        "Additional revisions: ₹500/hour",
        "Bug fixes within 3 days of launch included",
      ],
    },
  },
  {
    id: 2,
    name: "Standard Plan",
    priceRange: "₹20,000 - ₹35,000",
    description: "Dynamic websites with admin control",
    summary: [
      "3 core pages",
      "Admin dashboard",
      "Database integration",
      "Email notifications",
    ],
    details: {
      includes: [
        "3 Core Pages: Landing, Admin Dashboard, Dynamic Display",
        "Basic Admin Functionality (single user login)",
        "1 Backend Table Included (basic CRUD operations)",
        "Responsive & Optimized Design",
        "Data Management Integration (MongoDB/Firebase)",
      ],
      addons: [
        "Additional Pages: ₹1,000 per page (50% off first two)",
        "Extra Backend Tables: ₹1,000 each",
        "Email Notification System: ₹1,000",
        "File Upload Feature: ₹1,500",
        "Filter/Search Module: ₹1,000",
        "Advanced SEO Setup: ₹2,000",
      ],
      timeline: [
        "Delivery: 7-12 business days (base package)",
        "Add-ons extend delivery by 1-3 days per item",
      ],
      tech: [
        "Frontend: React/Next.js",
        "Backend: Node.js/Firebase/Express",
        "Database: MongoDB/Firebase Firestore",
        "Hosting: Vercel/Netlify/Render",
      ],
      notes: [
        "Does not include full copywriting/custom graphics",
        "Role-based access requires Advanced Plan",
      ],
    },
  },
  {
    id: 3,
    name: "Advanced Plan",
    priceRange: "₹40,000 - ₹90,000",
    description: "Full-featured web applications",
    summary: [
      "Unlimited pages",
      "CMS included",
      "3 backend tables",
      "Payment integration",
    ],
    details: {
      includes: [
        "Multi-Page Web Application (Up to 10 pages initially)",
        "Admin Dashboard with CMS Functionality",
        "3 Backend Tables Included",
        "Basic Role-Based Access",
        "Database Integration (Firebase/MongoDB/Supabase)",
      ],
      addons: [
        "Payment Gateway Integration: ₹3,000-₹5,000",
        "Advanced User Roles: ₹2,000",
        "File Upload + Storage: ₹2,000",
        "Analytics Dashboard: ₹2,500",
        "API Integrations: ₹2,000-₹5,000",
      ],
      timeline: [
        "Delivery: 12-18 business days (base project)",
        "Add-ons extend timeline by 1-3 days each",
      ],
      tech: [
        "Frontend: React/Next.js with Tailwind/MUI",
        "Backend: Node.js/Express/Firebase Functions",
        "Database: MongoDB/Firebase/Supabase",
        "Hosting: Vercel/Netlify/Render or custom VPS",
      ],
      idealFor: [
        "E-commerce platforms",
        "Booking/appointment systems",
        "Admin-controlled directories",
        "SaaS-style dashboards",
      ],
    },
  },
];

const termsAndConditions = [
  "Booking fee (10%) is non-refundable",
  "50% advance required at project start",
  "Final 40% payment before delivery",
  "2 free revisions included (Basic: 1 revision)",
  "Additional revisions at ₹500/hour",
  "Project marked inactive after 21 days of no response (₹1,000 reactivation fee)",
  "Client responsible for content legality",
  "Post-delivery security not included without maintenance plan",
];

export default function PricingComponents() {
  const [selectedPlan, setSelectedPlan] = useState(2);
  const [showModal, setShowModal] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  const openModal = (plan) => {
    setCurrentPlan(plan);
    setShowModal(true);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Pricing Plans
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Website <span className="text-blue-600">Development</span>
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Choose the perfect package for your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl border-2 p-6 transition-all duration-300 cursor-pointer h-full flex flex-col
                ${
                  selectedPlan === plan.id
                    ? "border-blue-500 bg-blue-50 shadow-lg"
                    : "border-gray-200 bg-white hover:shadow-md"
                }
              `}
              onClick={() => {
                setSelectedPlan(plan.id);
                openModal(plan);
              }}
            >
              {plan.id === 2 && (
                <div className="bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
                  MOST POPULAR
                </div>
              )}

              <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
              <div className="text-xl font-extrabold text-gray-900 my-3">
                {plan.priceRange}
              </div>
              <p className="text-gray-600 mb-4">{plan.description}</p>

              <ul className="space-y-2 mb-6 flex-grow">
                {plan.summary.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-2 mt-0.5 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button
                className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation();
                  openModal(plan);
                }}
              >
                View Full Details
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">
                    {currentPlan?.name}
                  </h3>
                  <div className="text-2xl font-extrabold text-gray-900 my-2">
                    {currentPlan?.priceRange}
                  </div>
                  <p className="text-gray-600 text-lg">
                    {currentPlan?.description}
                  </p>
                </div>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-gray-500 p-1"
                >
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="space-y-8">
                {/* What's Included */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-xl mb-4 border-b pb-2 flex items-center">
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
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    What's Included
                  </h4>
                  <ul className="space-y-3 text-gray-700">
                    {currentPlan?.details.includes.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Add-ons */}
                {currentPlan?.details.addons && (
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 text-xl mb-4 border-b pb-2 flex items-center">
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
                          d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                        />
                      </svg>
                      Optional Add-ons
                    </h4>
                    <ul className="space-y-3 text-gray-700">
                      {currentPlan?.details.addons.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Timeline */}
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-xl mb-4 border-b pb-2 flex items-center">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Timeline & Delivery
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {currentPlan?.details.timeline.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                {currentPlan?.details.tech && (
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 text-xl mb-4 border-b pb-2 flex items-center">
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
                          d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                        />
                      </svg>
                      Tech Stack
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      {currentPlan?.details.tech.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Notes/Ideal For */}
                {(currentPlan?.details.notes ||
                  currentPlan?.details.idealFor) && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h4 className="font-semibold text-gray-800 text-xl mb-4 border-b pb-2 flex items-center">
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
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      {currentPlan?.details.notes
                        ? "Important Notes"
                        : "Ideal For"}
                    </h4>
                    <ul className="space-y-2 text-gray-700">
                      {(
                        currentPlan?.details.notes ||
                        currentPlan?.details.idealFor
                      ).map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Terms & Conditions */}
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h4 className="font-semibold text-gray-800 text-xl mb-4 border-b pb-2 flex items-center">
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
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                    Terms & Conditions
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    {termsAndConditions.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg mt-6 text-lg"
                  onClick={() => setShowModal(false)}
                >
                  Close Details
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
