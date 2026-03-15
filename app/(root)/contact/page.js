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
            Let&apos;s Start a Conversation
            <br />
            <span className="text-[#2A66FF]">
              Build Something Great Together
            </span>
          </>
        }
        paraText="Have a project in mind or need expert guidance for your next digital product? Get in touch with Atrinity to discuss web development, design, and scalable digital solutions tailored to your business needs."
        buttonText="Contact Our Team"
      />
      <ContactPage1 />
      <Contact />
    </div>
  );
}
