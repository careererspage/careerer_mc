import Cases from "@/components/(clients)/category/cases";
import HeroAbt from "@/components/(clients)/hero-abt";
import Navbar from "@/components/(clients)/navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroAbt />
      <div className="bg-[#055AAA] w-full">
        <Cases />
      </div>
      <Footer />
    </div>
  );
};

export default About;
