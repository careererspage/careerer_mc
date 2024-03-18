import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import AnimateFaq from "@/public/images/lottie/faq.json";
import React from "react";
import Footer from "@/components/Footer";
import { BusinessOverview } from "@/lib/data";
import UlList from "@/components/(clients)/ul-List";
import Cases from "@/components/(clients)/category/cases";
import ServiceCard from "@/components/(clients)/serviceCard";
import Review from "@/components/(clients)/category/review";

const page = () => {
  return (
    <div>
      <Navbar />
      <GeneralHero
        ImageUrl={require("@/public/images/hero/farm.jpg")}
        title="Business / Investment Based Visa in Switzerland"
        subTitle="Golden Swiss Visa."
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-4 mt-10 relative">
          <ServiceCard
            title="Business Visa"
            listItems={[
              "We connect you with our established Business Partners",
              "We assist in preparing all necessary documentation",
              "Our support extends beyond visa approval, we accompany you throughout your journey",
            ]}
          />

          <div>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Swiss Investor Visa
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              The Swiss Investor Visa, also known as the Swiss Golden Visa
              program or the Swiss Citizenship by Investment program, is
              designed to attract high-net-worth individuals and foreign
              investors from non-European Union (EU) countries.{" "}
            </p>
            <p
              className="text-[#2C2C2C] text-sm mt-2 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              Switzerland offers a special Residence by Investment program
              designed for non-EU/EFTA citizens. This exciting opportunity lets
              you and your family live in Switzerland by making an investment.
              This payment gives you residency rights in Switzerland. The
              Residence by Investment program stands out because it can lead to
              getting a Swiss passport after some time. Living in Switzerland
              with this kind of visa means enjoying the peace and beauty of the
              country while building your business dreams. Plus, this route
              eventually opens up the possibility of becoming a citizen,
              granting freedom to work across Europe without needing separate
              permissions or visas.
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Switzerland Golden Visa Residence Eligibility criteria:
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc ml-6 mb-4"
            >
              <li>Be a non-EU citizen.</li>
              <li>
                Investing in a Swiss company or making a significant
                contribution to an existing business.
              </li>
              <li>Be between the ages of 18 and 55. </li>
              <li>
                you need to demonstrate financial stability and provide proof of
                your investment funds.
              </li>
              <li>Have a clean criminal record. </li>
              <li>The source of your investment funds must be lawful.</li>
              <li>Have an official source of income</li>
              <li>Have owned or rented property in the country </li>
            </ul>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              What are the Swiss Golden Visa Benefits?
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc ml-6 mb-4"
            >
              <li>
                <span className="font-bold">
                  Schengen visa-free travel to Schengen nations:
                </span>{" "}
                Switzerland is a member of the Schengen Zone. As a result, Swiss
                residents can travel other Schengen countries and stay for up to
                90 days out of 180 without a visa.
              </li>
              <li>
                <span className="font-bold">Relocating to Switzerland:</span>{" "}
                During the validity of the residence permit, the investor and
                their family gain the right to reside in Switzerland. A
                residence permission card is typically good for one year. It is
                extendable if you live in the nation for 183 days out of the
                year.
              </li>
              <li>
                <span className="font-bold">
                  Access to high-quality education and healthcare:
                </span>{" "}
                Switzerland’s schools and universities are regarded as among the
                best in the world. There, the investor’s children can receive a
                good education.
              </li>
              <li>
                <span className="font-bold">Healthcare:</span> A Swiss resident
                permit entitles the holder access medical treatment in local
                clinics or institutions of other Schengen countries without the
                need for a medical visa. Citizenship is granted after ten years
                of residence in the country.
              </li>
            </ul>

            <Button variant="outline" size="default" className="mt-4">
              Book Session with Expert
            </Button>
            <p
              className="text-[#2C2C2C] text-sm sm:!text-base mt-3"
              style={{ lineHeight: "1.8" }}
            >
              Migrate Compass is here to offer you a hassle-free experience and
              make sure you receive your Swiss Golden visa as quickly as
              possible.
            </p>
          </div>
        </div>
      </Container>
      <div className="mt-6">
        <Review
          Animate={AnimateFaq}
          title="Check Out Our Reviews"
          list1="Can I become a Swiss citizen if I marry someone from Switzerland?"
          list2="What do I need to do to immigrate to Switzerland?"
          list3="Can anyone apply for the Swiss golden visa program?"
          href="/reviews"
        />
      </div>

      <div className="mt-6">
        <Cases />
      </div>
      <Footer />
    </div>
  );
};

export default page;
