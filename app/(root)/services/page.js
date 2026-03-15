import Contact from "@/components/Contact";
import HeroBlocks from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import SerivesPage2 from "@/components/SerivesPage2";
import Services from "@/components/Services";
import ServicesPage1 from "@/components/ServicesPage1";
import ServicesPage3 from "@/components/ServicesPage3";
import ServicesPage4 from "@/components/ServicesPage4";
import TeamSection from "@/components/Team";
import React from "react";

export default function page() {
  return (
    <div className="py-12">
      <PageHeader
        headingText={
          <>
            Powerful Digital Services
            <br />
            <span className="text-[#2A66FF]">Built for Modern Businesses</span>
          </>
        }
        paraText="Discover the range of web development, UI/UX design, and digital solutions offered by Atrinity. As a modern IT agency, we focus on building fast, scalable, and performance-driven websites and applications that help businesses establish a strong online presence."
        buttonText="Explore Our Services"
      />
      <Services />
      <ServicesPage1 />
      <SerivesPage2 />
      <ServicesPage3 />
      <ServicesPage4 />
      <TeamSection />
      <HeroBlocks />
      <Contact />
    </div>
  );
}
