"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/navigation"; // Add this import
import { X, Check, ChevronRight, Zap, ShoppingCart, Code } from "lucide-react";

export default function HeroBlocks() {
  const router = useRouter(); // Initialize router
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Website packages based on the PDF agreement
  const websitePackages = {
    "Static website": {
      title: "Static Website",
      icon: <Code className="w-6 h-6" />,
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
    },
    "Dynamic website": {
      title: "Dynamic Website",
      icon: <Zap className="w-6 h-6" />,
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
    },
    "E-commerce website": {
      title: "E-commerce Website",
      icon: <ShoppingCart className="w-6 h-6" />,
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
    },
  };

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
    // Navigate to contact page using Next.js router
    router.push("/contact");
  };

  const handleGetYoursNow = () => {
    // Navigate to contact page
    router.push("/contact");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const phoneVariants = {
    hidden: {
      x: 100,
      y: 100,
      opacity: 0,
      rotate: 5,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5,
      },
    },
  };

  const featureCardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: (index) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: index * 0.1,
        ease: "backOut",
      },
    }),
  };

  const imageBorderVariants = {
    hidden: { scale: 0, rotate: -10 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "backOut",
      },
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
      <section className="max-w-7xl mx-auto px-4 py-16 space-y-8 overflow-hidden">
        {/* Top Hero */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
          className="relative bg-blue-600 rounded-3xl h-full max-h-[60vh] grid grid-cols-1 lg:grid-cols-2 items-center px-6 lg:px-10"
        >
          {/* Text */}
          <motion.div
            variants={itemVariants}
            className="py-8 lg:py-10 text-white z-10"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-none"
            >
              Get a Modern <br /> Website That Grows <br /> Your Business
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mt-4 max-w-md text-blue-100 text-sm lg:text-base"
            >
              Fast, responsive and custom-built websites designed to boost
              visibility, attract customers and help your brand stand out
              online.
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              onClick={handleGetYoursNow}
              className="mt-6 bg-white text-blue-600 font-semibold px-6 lg:px-8 py-3 rounded-3xl text-sm lg:text-base hover:shadow-xl transition-shadow"
            >
              Get yours now
            </motion.button>
          </motion.div>

          {/* Phone Image */}
          <div className="absolute -right-15 bottom-0 h-[115%] overflow-hidden hidden md:block">
            <motion.div variants={phoneVariants} className="w-full h-full">
              <Image
                src="/mockups/Iphone-image.png"
                alt="Website preview"
                height={1000}
                width={1000}
                className="object-contain h-[150%] z-100"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-[#A0D4FF] rounded-3xl p-10 flex flex-col justify-between order-2 md:order-1"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-3xl lg:text-4xl flex justify-between font-bold max-md:text-center items-center text-white"
            >
              <h4>
                {" "}
                Launch Your <br className="max-md:hidden" /> Website With{" "}
                <br className="max-md:hidden" /> Confidence
              </h4>

              <Image
                src="/logo-2.png"
                alt="Website preview"
                height={1000}
                width={1000}
                className="object-contain w-[100px] h-[100px] mr-5 hidden lg:block animate-variable-spin"
              />
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10">
              {["Static website", "Dynamic website", "E-commerce website"].map(
                (item, index) => (
                  <motion.div
                    key={item}
                    custom={index}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={featureCardVariants}
                    whileHover={{
                      y: -5,
                      scale: 1.05,
                      transition: { duration: 0.2 },
                    }}
                    onClick={() => openModal(item)}
                    className="bg-white rounded-2xl p-4 text-center cursor-pointer group hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex justify-center mb-2">
                      {item === "Static website" && (
                        <Code className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                      )}
                      {item === "Dynamic website" && (
                        <Zap className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                      )}
                      {item === "E-commerce website" && (
                        <ShoppingCart className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                      )}
                    </div>
                    <h3 className="font-semibold text-sm text-blue-600">
                      {item}
                    </h3>
                    <p className="text-xs text-gray-500 mt-1 flex items-center justify-center gap-1">
                      View Details{" "}
                      <ChevronRight
                        size={12}
                        className="group-hover:translate-x-0.5 transition-transform"
                      />
                    </p>
                  </motion.div>
                ),
              )}
            </div>
          </motion.div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-blue-500 rounded-3xl p-10 flex gap-15 items-center overflow-hidden order-1 md:order-2"
          >
            {/* Image on border */}
            <motion.div
              variants={imageBorderVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative flex items-center border-2 min-w-[100px] border-white rounded-2xl h-full w-full max-w-[220px]"
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute left-4 w-full min-w-[100px] max-w-[220px] h-[90%] border-2 border-white rounded-2xl overflow-hidden"
              >
                <Image
                  src="/planning.jpg"
                  alt="Planning"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </motion.div>

            {/* Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-white"
            >
              <h2 className="text-xl md:text-3xl font-bold mb-4">Why us</h2>
              <p className="text-blue-100 text-xs md:text-sm leading-relaxed">
                We build websites that look sharp, perform smoothly and stay
                reliable as your business grows.{" "}
                <span className="hidden md:block">
                  {" "}
                  Our work focuses on strong design, responsive development and
                  clean SEO practices that actually help you show up and stand
                  out online.
                </span>
              </p>
            </motion.div>
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
              className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-50"
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute right-4 top-4 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X size={20} className="text-gray-600" />
              </button>

              {/* Package Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6 text-white">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-white/20 p-2 rounded-lg">
                    {websitePackages[selectedPackage].icon}
                  </div>
                  <h2 className="text-2xl font-bold">
                    {websitePackages[selectedPackage].title}
                  </h2>
                </div>
                {websitePackages[selectedPackage].recommended && (
                  <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                )}
              </div>

              {/* Package Details */}
              <div className="p-6">
                {/* Price and Timeline */}
                <div className="grid grid-cols-2 gap-4 mb-6">
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
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {websitePackages[selectedPackage].description}
                </p>

                {/* Pages Included */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    Pages Included:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {websitePackages[selectedPackage].pages.map(
                      (page, index) => (
                        <span
                          key={index}
                          className="bg-blue-50 text-blue-700 text-xs px-3 py-1 rounded-full"
                        >
                          {page}
                        </span>
                      ),
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <h3 className="font-semibold text-gray-900 mb-3">
                    What's Included:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {websitePackages[selectedPackage].features.map(
                      (feature, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <Check
                            size={16}
                            className="text-green-500 flex-shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-gray-600">
                            {feature}
                          </span>
                        </div>
                      ),
                    )}
                  </div>
                </div>

                {/* Payment Terms from PDF */}
                <div className="bg-gray-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Payment Terms:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Booking Amount: ₹2000 (non-refundable)</li>
                    <li>• 50% after design approval</li>
                    <li>• 50% before delivery</li>
                  </ul>
                </div>

                {/* CTA Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={handleGetStarted}
                    className="flex-1 bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Started
                  </button>
                  <button
                    onClick={closeModal}
                    className="flex-1 bg-gray-100 text-gray-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
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
