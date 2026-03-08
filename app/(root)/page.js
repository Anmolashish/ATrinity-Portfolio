import AboutSection from "@/components/About";
import HeroBlocks from "@/components/CTA";
import BlogIndex from "@/components/Blog";
import ContactSection from "@/components/Contact";
import HeroSection from "@/components/HeroSection";
import Portfolio from "@/components/Portfolio";
import PricingComponents from "@/components/PricingComponents";
import Services from "@/components/Services";
import TeamSection from "@/components/Team";
import TestimonialsSection from "@/components/Testimonial";
import React from "react";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Services />
      <AboutSection />
      <Portfolio />
      <TeamSection />
      <PricingComponents />
      <HeroBlocks />
      <TestimonialsSection />
      <BlogIndex />
      <ContactSection />
    </div>
  );
}
