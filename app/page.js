import AboutSection from "@/components/About";
import BlogIndex from "@/components/Blog";
import ContactSection from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import PortfolioSection from "@/components/Portfolio";
import Services from "@/components/Services";
import TeamSection from "@/components/Team";
import TestimonialsSection from "@/components/Testimonial";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <Portfolio />
      <TeamSection />
      <AboutSection />
      <BlogIndex />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
