"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  Code,
  Zap,
  ShoppingCart,
  Check,
  X,
  ChevronRight,
  Globe,
  Clock,
  Shield,
  Smartphone,
  Search,
  Mail,
  Settings,
  Users,
  CreditCard,
  BarChart,
} from "lucide-react";

export default function ServicesPage4() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Website packages based on the PDF agreement
  const websitePackages = {
    "Static Website": {
      id: "static",
      icon: <Code className="w-8 h-8" />,
      price: "₹15,000 - ₹25,000",
      description:
        "Perfect for small businesses, portfolios, and landing pages",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Basic SEO setup",
        "Contact form integration",
        "Social media integration",
        "7 days free support",
        "Google Maps integration",
      ],
      timeline: "2-3 weeks",
      pages: ["Home", "About", "Services", "Contact", "Portfolio/Gallery"],
      recommended: false,
      gradient: "from-blue-400 to-blue-500",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    "Dynamic Website": {
      id: "dynamic",
      icon: <Zap className="w-8 h-8" />,
      price: "₹35,000 - ₹50,000",
      description: "Ideal for blogs, news sites, and content-driven businesses",
      features: [
        "Up to 10 pages",
        "Admin dashboard",
        "Content Management System",
        "Blog/News section",
        "User registration/login",
        "Database integration",
        "Advanced SEO setup",
        "15 days free support",
        "Monthly backups",
      ],
      timeline: "4-5 weeks",
      pages: [
        "Home",
        "About",
        "Blog",
        "Services",
        "Portfolio",
        "Contact",
        "Admin Panel",
      ],
      recommended: true,
      gradient: "from-blue-500 to-blue-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    "E-commerce Website": {
      id: "ecommerce",
      icon: <ShoppingCart className="w-8 h-8" />,
      price: "₹60,000 - ₹1,00,000",
      description: "Complete online store with payment integration",
      features: [
        "Unlimited products",
        "Payment gateway integration",
        "Shopping cart system",
        "Order management",
        "Inventory management",
        "Customer accounts",
        "Email notifications",
        "Advanced SEO",
        "30 days free support",
        "SSL certificate setup",
        "Product categories",
        "Reviews & ratings",
      ],
      timeline: "6-8 weeks",
      pages: [
        "Home",
        "Shop",
        "Product pages",
        "Cart",
        "Checkout",
        "My Account",
        "Order tracking",
        "Contact",
        "Admin dashboard",
      ],
      recommended: false,
      gradient: "from-blue-600 to-blue-700",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
  };

  // Additional features for the highlights section
  const highlights = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Custom Domain",
      description: "Free domain registration for first year",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "SSL Certificate",
      description: "Free SSL security included",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimized",
      description: "Fully responsive on all devices",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Timely project completion guaranteed",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "SEO Ready",
      description: "Optimized for search engines",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "Free support for 30 days",
    },
  ];

  const openModal = (packageName) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPackage(null);
    document.body.style.overflow = "unset";
  };

  const handleGetStarted = () => {
    closeModal();
    router.push("/contact");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "backOut" },
    },
    hover: {
      y: -10,
      transition: { duration: 0.3 },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: { duration: 0.3 },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <>
      <section className="relative py-20 bg-white overflow-hidden">
        {/* Blue Decorative Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top left decoration */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30"></div>

          {/* Top right decoration */}
          <div className="absolute -top-10 -right-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

          {/* Bottom left decoration */}
          <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-25"></div>

          {/* Bottom right decoration */}
          <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

          {/* Center decorations - circles */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-blue-200 rounded-full opacity-20"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border-2 border-blue-300 rounded-full opacity-20"></div>

          {/* Dotted patterns */}
          <div className="absolute top-1/3 right-1/3 w-24 h-24 border-2 border-dashed border-blue-200 rounded-full opacity-30"></div>
          <div className="absolute bottom-1/3 left-1/3 w-36 h-36 border-2 border-dashed border-blue-300 rounded-full opacity-30"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-900">Choose Your</span>
              <br />
              <span className="text-blue-600">Website Plan</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Select the perfect package for your business needs. All plans
              include professional design, responsive development, and ongoing
              support.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            {Object.entries(websitePackages).map(([name, pkg], index) => (
              <motion.div
                key={name}
                variants={cardVariants}
                whileHover="hover"
                className="relative bg-white rounded-2xl shadow-xl overflow-hidden group cursor-pointer"
                onClick={() => openModal(name)}
              >
                {/* Recommended Badge */}
                {pkg.recommended && (
                  <div className="absolute top-5 right-5 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-xs font-bold px-3 py-1 rounded-full z-10">
                    RECOMMENDED
                  </div>
                )}

                {/* Card Header with Gradient */}
                <div
                  className={`bg-gradient-to-r ${pkg.gradient} p-6 text-white`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-white/20 p-3 rounded-xl">
                      {React.cloneElement(pkg.icon, { className: "w-8 h-8" })}
                    </div>
                    <span className="text-2xl font-bold">{pkg.price}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">{name}</h3>
                  <p className="text-white/90 text-sm">{pkg.description}</p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  {/* Timeline */}
                  <div className="flex items-center gap-2 mb-4 text-sm text-gray-600">
                    <Clock size={16} className="text-blue-500" />
                    <span>
                      Delivery:{" "}
                      <span className="font-semibold">{pkg.timeline}</span>
                    </span>
                  </div>

                  {/* Features Preview */}
                  <div className="space-y-2 mb-6">
                    {pkg.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check
                          size={16}
                          className="text-green-500 flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                    <div className="text-blue-600 text-sm font-medium flex items-center gap-1 mt-2">
                      + {pkg.features.length - 4} more features
                      <ChevronRight size={14} />
                    </div>
                  </div>

                  {/* View Details Button */}
                  <button className="w-full bg-gray-50 hover:bg-blue-50 text-blue-600 font-semibold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 group">
                    View Details
                    <ChevronRight
                      size={16}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative"
          >
            {/* Section Header */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-3">
                Everything You Need
              </h3>
              <p className="text-gray-600">
                All our plans include these essential features
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
                >
                  <div className="bg-blue-50 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3 text-blue-600">
                    {item.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {item.title}
                  </h4>
                  <p className="text-gray-500 text-xs">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-20 text-center"
          >
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-12 relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -left-10 -bottom-10 w-40 h-40 border-4 border-white/20 rounded-full"></div>
              <div className="absolute -right-10 -top-10 w-60 h-60 border-4 border-white/20 rounded-full"></div>

              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Start Your Project?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
                Get in touch with us today and let's discuss how we can bring
                your vision to life.
              </p>
              <button
                onClick={() => router.push("/contact")}
                className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-2"
              >
                Get Started Now
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal Popup */}
      <AnimatePresence>
        {isModalOpen && selectedPackage && (
          <>
            {/* Overlay */}
            <motion.div
              variants={overlayVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
            />

            {/* Modal Content */}
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-3xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-50"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X size={20} className="text-gray-600" />
              </button>

              {/* Package Header */}
              <div
                className={`bg-gradient-to-r ${websitePackages[selectedPackage].gradient} p-8 text-white`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    {React.cloneElement(websitePackages[selectedPackage].icon, {
                      className: "w-10 h-10",
                    })}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedPackage}</h2>
                    <p className="text-white/90 mt-1">
                      {websitePackages[selectedPackage].description}
                    </p>
                  </div>
                </div>
                {websitePackages[selectedPackage].recommended && (
                  <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                )}
              </div>

              {/* Package Details */}
              <div className="p-8">
                {/* Price and Timeline */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Price Range</p>
                    <p className="text-xl font-bold text-blue-600">
                      {websitePackages[selectedPackage].price}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Timeline</p>
                    <p className="text-xl font-bold text-blue-600">
                      {websitePackages[selectedPackage].timeline}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Pages</p>
                    <p className="text-xl font-bold text-blue-600">
                      {websitePackages[selectedPackage].pages.length}
                    </p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-500">Support</p>
                    <p className="text-xl font-bold text-blue-600">
                      {selectedPackage === "Static Website"
                        ? "7 days"
                        : selectedPackage === "Dynamic Website"
                          ? "15 days"
                          : "30 days"}
                    </p>
                  </div>
                </div>

                {/* Pages Included */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Globe size={18} className="text-blue-600" />
                    Pages Included:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {websitePackages[selectedPackage].pages.map(
                      (page, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 text-sm px-4 py-2 rounded-full"
                        >
                          {page}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Check size={18} className="text-blue-600" />
                    What's Included:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {websitePackages[selectedPackage].features.map(
                      (feature, index) => (
                        <div
                          key={index}
                          className="flex items-start gap-2 bg-gray-50 p-3 rounded-lg"
                        >
                          <Check
                            size={16}
                            className="text-green-500 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Payment Terms from PDF */}
                <div className="bg-blue-50 p-6 rounded-xl mb-8 border border-blue-100">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <CreditCard size={18} className="text-blue-600" />
                    Payment Terms:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-xs text-gray-500">Booking Amount</p>
                      <p className="text-lg font-bold text-blue-600">₹2,000</p>
                      <p className="text-xs text-gray-400">Non-refundable</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-xs text-gray-500">
                        After Design Approval
                      </p>
                      <p className="text-lg font-bold text-blue-600">50%</p>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <p className="text-xs text-gray-500">Before Delivery</p>
                      <p className="text-lg font-bold text-blue-600">50%</p>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-4">
                  <button
                    onClick={handleGetStarted}
                    className="flex-1 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
                  >
                    Get Started with {selectedPackage}
                    <ChevronRight size={18} />
                  </button>
                  <button
                    onClick={closeModal}
                    className="px-8 py-4 border-2 border-gray-200 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
