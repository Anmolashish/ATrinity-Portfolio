import AboutSection from "@/components/About";
import AboutPage1 from "@/components/AboutPage1";
import AboutPage2 from "@/components/AboutPage2";
import AboutPage3 from "@/components/AboutPage3";
import Aboutpage4 from "@/components/Aboutpage4";
import BlogIndex from "@/components/Blog";
import ContactSection from "@/components/Contact";
import PageHeader from "@/components/PageHeader";
import Portfolio from "@/components/Portfolio";
import TestimonialsSection from "@/components/Testimonial";
import React from "react";

export default function page() {
  return (
    <div className="py-12">
      <PageHeader
        headingText={
          <>
            Engineering Modern Web
            <br />
            <span className="text-[#2A66FF]">Experiences</span>
          </>
        }
        paraText="A Jalandhar-based IT agency specializing in Next.js website development, modern web design, and SEO-driven digital solutions for growing businesses."
        buttonText="View our work"
      />
      <AboutPage1 />
      <AboutSection />
      <AboutPage2 />
      <AboutPage3 />
      <Aboutpage4 />
      <Portfolio />
      <TestimonialsSection />
      <BlogIndex />
      <ContactSection />
    </div>
  );
}
