import Categories from "@/components/(clients)/category/categories";
import CustomerExperience from "@/components/(clients)/customer-experience";
import Hero from "@/components/(clients)/hero";
import Navbar from "@/components/(clients)/navbar";
import Process from "@/components/(clients)/process";
import Region from "@/components/(clients)/region";
import Footer from "@/components/Footer";
import React from "react";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Region />
      <CustomerExperience />
      <Process />
      <Footer />
    </div>
  );
}

export default HomePage;
