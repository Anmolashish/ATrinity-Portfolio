import AboutSection from "@/components/About";
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
      <Header />
      <HeroSection />
      <Services />
      <Portfolio />
      <TeamSection />
      <AboutSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
