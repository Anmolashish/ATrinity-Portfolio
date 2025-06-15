import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

export default function layout({ children }) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
