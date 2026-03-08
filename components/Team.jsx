import Image from "next/image";

export default function ResponsiveShowcase() {
  return (
    <section className="relative w-full py-20 flex flex-col items-center mt-5 md:mt-10 overflow-hidden">
      <h2 className="text-2xl md:text-4xl font-light mb-6 text-center">
        Fully Responsive{" "}
        <span className="text-blue-600 font-medium">Website Development</span>
      </h2>
      {/* Top Right Circle with Orbit */}
      <div className="absolute top-36 right-7 lg:right-55">
        <div className="relative orbit-container">
          <div className="w-[300px] md:w-[450px] lg:w-[600px] aspect-square rounded-full border-4 border-blue-200/50"></div>

          {/* Orbiting ball ON THE BORDER */}
          <div className="absolute left-1/2 -top-2 -translate-x-1/2 w-4 aspect-square blur-xs rounded-full bg-blue-500/60"></div>
        </div>
      </div>
      {/* Bottom Left Circle with Orbit */}
      <div className="absolute bottom-32 left-7 lg:left-55 max-[480px]:hidden">
        <div className="relative orbit-container-slow">
          <div className="w-[200px] md:w-[300px] lg:w-[400px] aspect-square rounded-full border-4 border-blue-200/50"></div>

          {/* Orbiting ball ON THE BORDER */}
          <div className="absolute  left-1/2 -top-1.5 -translate-x-1/2 w-3 aspect-square blur-xs rounded-full bg-blue-600/60"></div>
        </div>
      </div>
      <div className="relative flex justify-center">
        <Image
          src="/Computer-image.png"
          alt="iMac Mockup"
          width={900}
          height={600}
          className="relative z-10"
        />
      </div>
      <div className="absolute z-10 left-[10%] top-[55%] max-sm:mt-10 max-w-[200px] md:max-w-xs bg-gray-300/50 backdrop-blur-sm  shadow-lg p-2 md:p-6 rounded-2xl border border-white/40">
        {" "}
        <h3 className="text-sm md:text-xl font-semibold mb-2">
          Fast, Clean and SEO-Ready
        </h3>{" "}
        <p className="text-gray-600 text-[10px] md:text-sm">
          {" "}
          Every layout is designed to load quickly, look sharp and rank better
          across devices.{" "}
        </p>{" "}
      </div>{" "}
      <div className="absolute z-10 right-2 md:right-[12%] max-sm:mt-10 top-[24%] max-w-[200px] md:max-w-xs bg-gray-300/50 backdrop-blur-sm shadow-lg p-2 md:p-6 rounded-2xl border border-white/40">
        {" "}
        <h3 className="text-sm md:text-xl font-semibold mb-2">
          Optimized for Every Screen
        </h3>{" "}
        <p className="text-gray-600 text-[10px] md:text-sm">
          {" "}
          We build websites that adapt perfectly across mobiles, tablets and
          desktops. Smooth, consistent and lightning fast.{" "}
        </p>{" "}
      </div>
    </section>
  );
}
