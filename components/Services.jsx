export default function Services() {
  const services = [
    {
      title: "Website & Web App Development",
      description:
        "Custom, high-performance sites and web applications built for scale and speed.",
      icon: "/icons/code.png",
    },
    {
      title: "UI/UX & Brand Identity Design",
      description:
        "Modern interfaces, brand styling and visual systems that make your business instantly recognizable.",
      icon: "/icons/ui.png",
    },
    {
      title: "E-Commerce Development",
      description:
        "Fully functional online stores with secure payments, product management and conversion-focused layouts.",
      icon: "/icons/cart.png",
    },
    {
      title: "Maintenance & Performance Upgrades",
      description:
        "Regular updates, security patches, speed optimization and reliable hosting support to keep everything running smoothly.",
      icon: "/icons/server.png",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-3xl w-full bg-gradient-to-r from-[#0028FF] to-[#0000BC] text-white py-12 px-6 md:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {services.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-16 h-16 flex items-center justify-center rounded-full border border-white/60 mb-6 hover:scale-105 hover:border-white/90 transition-transform duration-300">
                  {/* Using Next.js Image for better performance */}
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-7 h-7"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <h3 className="font-semibold text-base md:text-lg mb-3 leading-tight tracking-wide">
                  {item.title}
                </h3>

                <p className="text-white/80 text-xs max-w-[260px] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
