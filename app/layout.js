import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Atrinity | Freelance Frontend Developer Portfolio & Services",
  description:
    "Hire expert freelance frontend developers from Atrinity. We specialize in responsive UI, clean code, and scalable web applications using React, Next.js, and Tailwind CSS. Build your modern website with Atrinity.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
