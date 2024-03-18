import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { FaClipboardCheck } from "react-icons/fa";
import React from "react";
import UlList from "@/components/(clients)/ul-List";
import { StudentOverview } from "@/lib/data";
import Cases from "@/components/(clients)/category/cases";
import Footer from "@/components/Footer";
import ServiceCard from "@/components/(clients)/serviceCard";

const page = () => {
  return (
    <div>
      <Navbar />
      <GeneralHero
        ImageUrl={require("@/public/images/hero/work-visa.jpg")}
        title="Work Visa made easy with Global Connect "
        subTitle="Get your U.S. Work visa online."
        subTitle1="Fast, low-cost, and efficient start-to-finish U.S. visa processing service.
        "
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-4 mt-10 relative">
          <ServiceCard
            title="F1 Student Visa Complete Service"
            listItems={[
              "Join our network of successful F1 visa recipients",
              "We provide post-visa support to help you adjust to your new life",
              "We assist in preparing all necessary documentation for your F1 visa application",
            ]}
          />
          <div>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Here’s what you need to know
            </h1>

            <p
              className="text-[#2C2C2C] text-sm sm:text-base"
              style={{ lineHeight: "1.8" }}
            >
              Even if the U.S. student visa requirements are easy to understand,
              the hassle of paperwork and complicated official procedures make
              the entire process time-consuming. Moreover, your U.S. visa
              application may be delayed and even denied because of common
              oversights and/or incomplete supporting evidence. To avoid these
              costly risks, get peace of mind, and have your visa issued in a
              timely manner, we recommend benefiting from the services of
              immigration and U.S. visa experts.
            </p>

            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Incomplete information,
            </h1>
            <p
              className="text-[#2C2C2C] text-sm sm:text-base"
              style={{ lineHeight: "1.8" }}
            >
              insufficient evidence, and legal obstacles often lead to long
              processing times, and even visa rejection.
            </p>

            <p
              className="text-[#2C2C2C] text-sm sm:text-base"
              style={{ lineHeight: "1.8" }}
            >
              VisaExpress is here to offer you a hassle-free experience and make
              sure you receive your U.S. Student visa as quickly as possible.
            </p>

            <Button variant="outline" size="default" className="mt-4">
              Book Session with Expert
            </Button>

            <h2 className="text-[#428BCA] text-[21px] my-4">Overview</h2>

            <UlList data={StudentOverview} />

            <Button variant="primary" size="default" className="mt-4">
              Book Session with Expert
            </Button>
            <p
              className="text-[#2C2C2C] text-sm sm:text-base mt-3"
              style={{ lineHeight: "1.8" }}
            >
              VisaExpress is here to offer you a hassle-free experience and make
              sure you receive your U.S. Student visa as quickly as possible.
            </p>
          </div>
        </div>
      </Container>
      <div className="mt-6">
        <Cases />
      </div>
      <Footer />
    </div>
  );
};

export default page;
