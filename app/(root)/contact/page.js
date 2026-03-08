import Contact from "@/components/Contact";
import ContactPage1 from "@/components/ContactPage1";
import PageHeader from "@/components/PageHeader";
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
      <ContactPage1 />
      <Contact />
    </div>
  );
}
