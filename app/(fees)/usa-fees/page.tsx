import React from "react";
import Charges from "@/components/(clients)/charges";
import Navbar from "@/components/(clients)/navbar";
import Footer from "@/components/Footer";

const page = () => {
  return (
    <div>
      <Navbar />
      <Charges />
      <Footer />
    </div>
  );
};

export default page;
