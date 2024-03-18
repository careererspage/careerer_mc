import React from "react";
import Navbar from "@/components/(clients)/navbar";
import Footer from "@/components/Footer";
import SwissCharges from "@/components/(clients)/swiss-charges";

const page = () => {
  return (
    <div>
      <Navbar />
      <SwissCharges />
      <Footer />
    </div>
  );
};

export default page;
