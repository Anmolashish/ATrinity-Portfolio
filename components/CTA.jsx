"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroBlocks() {
  // Animation variants - kept exactly as you had them
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

  return (
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
            visibility, attract customers and help your brand stand out online.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            className="mt-6 bg-white text-blue-600 font-semibold px-6 lg:px-8 py-3 rounded-3xl text-sm lg:text-base hover:shadow-xl transition-shadow"
          >
            Get yours now
          </motion.button>
        </motion.div>

        {/* Phone Image - Hidden on small screens, shown on medium+ */}
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
                  className="bg-white rounded-2xl p-1 md:p-4 text-center cursor-pointer"
                >
                  <h3 className="font-semibold text-sm text-blue-600">
                    {item}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 ">
                    Get Started
                  </p>
                </motion.div>
              )
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
                clean SEO practices that actually help you show up and stand out
                online.
              </span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
