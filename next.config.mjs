/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: false,
  images: {
    domains: [
      "res.cloudinary.com", // For Cloudinary images
    ],
    // Optional: Configure image quality and formats
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60, // 60 seconds
  },
};

export default nextConfig;
