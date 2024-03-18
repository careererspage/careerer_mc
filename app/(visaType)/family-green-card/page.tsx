import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import AnimateFaq from "@/public/images/lottie/faq.json";
import React from "react";
import Footer from "@/components/Footer";
import Cases from "@/components/(clients)/category/cases";
import ServiceCard from "@/components/(clients)/serviceCard";
import Review from "@/components/(clients)/category/review";

const page = () => {
  return (
    <div>
      <Navbar />
      <GeneralHero
        ImageUrl={require("@/public/images/hero/family.jpg")}
        title="Family-Based Green Card"
        subTitle="Reunite with your family in the U.S. fast and hassel-free"
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-4 mt-10 relative">
          <ServiceCard
            title="Family Green Card Services"
            listItems={[
              "We guide you through the complex process of applying for a Family-Based Green Card.",
              "We assist in preparing all necessary documentation for your Family-Based Green Card application.",
              "Our support extends beyond visa approval, we accompany you throughout your immigration journey.",
            ]}
          />

          <div>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Family Based Green Card
            </h1>
            <p
              className="text-[#2C2C2C] text-sm sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              The family-based immigrant visa is one of the most common ways
              people acquire green cards and become permanent residents in the
              United States. Citizens and permanent residents may petition the
              USCIS to bring their family members into the country on an
              immigrant visa.
            </p>
            <p
              className="text-[#2C2C2C] text-sm sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              Currently, this particular visa program accounts for about
              two-thirds of the more than 1 million green cards issued annually.
              Just like every other immigrant visa, the family-based green card
              has several subcategories, each determined by the family
              relationship that exists between the sponsor and the beneficiary
              of the visa. Family immigration is one of our key services at
              VisaNation. Over the past decade, we helped thousands of families
              reunite in the U.S.
              <span className="font-bold">
                Start your immigration journey today!
              </span>
            </p>

            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Processing Time for Immediate Relatives{" "}
            </h1>
            <p
              className="text-[#2C2C2C] text-sm sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              Because there is no numerical limitation for this category, visas
              are always readily available for applicants, which also means a
              short processing time of 9 to 13 months. Once the I-130 petition
              filed by the petitioner (U.S. citizen) is approved by the USCIS,
              the immediate relative (IR) beneficiary will not have to wait in
              line for a visa number.
            </p>
            <p
              className="text-[#2C2C2C] text-sm sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              As stated above, this category is only meant for spouses,
              unmarried children (under 21 years old), and parents of U.S.
              citizens. If a child of a U.S. citizen is married, he or she will
              no longer qualify for this category even if he is under 21 years
              of age.
            </p>

            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Eligibility for Family-Based Green Card{" "}
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm sm:!text-base list-disc ml-6 mb-4"
            >
              <li>
                You must demonstrate a close familial relationship with the visa
                beneficiary. This relationship must fall under one of the
                categories specified as immediate relatives or family
                preference.
              </li>
              <li>
                You are required to maintain your primary residence in the
                United States.
              </li>
              <li>
                As a green card sponsor, you must provide evidence of your
                financial ability to support your sponsored family member upon
                their arrival in the United States. This involves signing an
                affidavit of support, which must indicate that your annual
                income is sufficient to support yourself, the sponsored
                beneficiary, and all other dependent members of your household.
              </li>
              <li>
                The visa beneficiary must be admissible to the United States.
                This means they must not have certain criminal records, health
                issues, or previous immigration violations that could make them
                ineligible for the visa.
              </li>
            </ul>

            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Can You Shorten Your Waiting Time?
            </h1>

            <p
              className="text-[#2C2C2C] text-sm sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              The sponsoring family member can also expedite the process by
              filing both the I-130 and the I-485 adjustment of status
              application at the same time, as long as the beneficiary is in the
              U.S. The other way to take some time off of the overall processing
              period is to opt for premium processing for the forms that allow
              it (I-129 and I-140). The cost for premium processing is $2,500.
            </p>

            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Required Document for Family-Based Green Card
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm sm:!text-base list-disc ml-6 mb-4"
            >
              <li>
                Passport valid for at least six months beyond the intended date
                of entry into the U.S.
              </li>
              <li>Affidavit of support</li>
              <li>Birth certificate</li>
              <li>Marriage certificate, if applicable</li>
              <li>Marriage termination documentation, if applicable</li>
              <li>Immigration medical examination form</li>
              <li>
                Two passport photographs. Must meet the DOS photo requirements
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
          title="Check Out Our Reviews on Family-Based Green Card"
          list1="Navigating the Family-Based Green Card process was daunting, but Migrate Compass made it manageable. Their team was there every step of the way, providing clear guidance and timely responses. I'm grateful for their support."
          list2="Securing a Family-Based Green Card felt like a dream come true, and it wouldn't have been possible without Migrate Compass. Their expertise and dedication made a significant difference in my application process."
          list3="The journey to obtaining my Family-Based Green Card was smoother than I anticipated, thanks to Migrate Compass. Their professionalism and thorough understanding of the process eased my worries and made the experience less stressful."
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
