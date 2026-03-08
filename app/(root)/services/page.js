import Contact from "@/components/Contact";
import HeroBlocks from "@/components/CTA";
import PageHeader from "@/components/PageHeader";
import SerivesPage2 from "@/components/SerivesPage2";
import Services from "@/components/Services";
import ServicesPage1 from "@/components/ServicesPage1";
import ServicesPage3 from "@/components/ServicesPage3";
import TeamSection from "@/components/Team";
import React from "react";

export default function page() {
  return (
    <div className="py-12">
      <PageHeader
        headingText={
          <>
            Crafting Digital Solutions
            <br />
            <span className="text-[#2A66FF]">Through Our Projects</span>
          </>
        }
        paraText="Explore web development, design, and digital solutions delivered by Atrinity, a Jalandhar-based IT agency. Each project reflects our focus on performance, modern technology, and results-driven development."
        buttonText="View All Projects"
      />
      <Services />
      <ServicesPage1 />
      <SerivesPage2 />
      <ServicesPage3 />
      <TeamSection />
      <HeroBlocks />
      <Contact />
    </div>
  );
}
