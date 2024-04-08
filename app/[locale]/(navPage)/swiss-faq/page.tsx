import Cases from "@/components/(clients)/category/cases";
import FaqPage from "@/components/(clients)/faqPage";
import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Footer from "@/components/Footer";
import { SwissFaq } from "@/lib/faqData";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <GeneralHero
        ImageUrl={require("@/public/images/hero/faq.jpg")}
        title="Switzerland"
        subTitle="Frequently Asked Question."
        subTitle1="If not satisfied chat with our Support team."
      />
      <FaqPage data={SwissFaq} />
      <div className="mt-6">
        <Cases />
      </div>
      <Footer />
    </div>
  );
};

export default page;
