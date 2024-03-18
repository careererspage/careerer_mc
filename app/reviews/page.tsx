import Navbar from "@/components/(clients)/navbar";
import ReviewsClient from "@/components/(clients)/reviewsClient";
import Footer from "@/components/Footer";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <ReviewsClient />
      <Footer />
    </div>
  );
};

export default page;
