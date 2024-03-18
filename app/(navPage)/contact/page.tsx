import ContactPage from "@/components/(clients)/ContactPage";
import HeadingsText from "@/components/(clients)/HeadingsText";
import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Footer from "@/components/Footer";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full">
      <Navbar />
      <ContactPage />
      <Footer />
    </div>
  );
};

export default Contact;
