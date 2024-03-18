import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { FaClipboardCheck } from "react-icons/fa";
import React from "react";
import Footer from "@/components/Footer";
import { BusinessOverview } from "@/lib/data";
import UlList from "@/components/(clients)/ul-List";
import Cases from "@/components/(clients)/category/cases";
import ServiceCard from "@/components/(clients)/serviceCard";
import Review from "@/components/(clients)/category/review";
import AnimateFaq from "@/public/images/lottie/faq.json";

const page = () => {
  return (
    <div>
      <Navbar />
      <GeneralHero
        ImageUrl={require("@/public/images/hero/farm.jpg")}
        title="Business / Investment Based In the United States"
        subTitle="Investments as low as $50,000 or even lower have qualified for E2!."
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-4 mt-10 relative">
          <ServiceCard
            title="Business Visa"
            listItems={[
              "We connect you with our established Business Partners",
              "We assist in preparing all necessary documentation",
              "  Our support extends beyond visa approval, we accompany you throughout your journey",
            ]}
          />

          <div>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              What is the E2 Visa?
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              The E2 visa is a non-immigrant visa for investors, entrepreneurs,
              and people looking to run a business in the United States. With an
              E2 visa, you can start a US business or invest in a US business
              and work for that business.
            </p>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              There are two types of investor visas so before looking into E-2
              visa requirements for investors you want to make sure the E-2 visa
              is the right fit for you as a foreign investor. If the E-2 visa
              isn’t the correct fit for you, there is also the option of an EB-5
              investor green card.
            </p>
            <p
              className="text-[#2C2C2C] text-sm mt-2 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              There is no limit to the number of times the E2 visa can be
              renewed. So as long as the E2 business continues to operate and
              meet the E2 visa requirements, and E2 visa holder can continue to
              renew their visa and live and work in the United States.
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              The Investment Must Be a Real Operating Enterprise
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              A real operating enterprise means that the enterprise must be
              offering a tangible good or service. Examples of these enterprises
              are restaurants, retail stores, medical offices, etc. Speculative
              or idle investment such as real estate investments, undeveloped
              land, or stocks held by an investor who has no intent to direct
              the enterprise does not qualify. Similarly, uncommitted funds in a
              bank account or similar security are not considered an investment.
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              What are the Requirements for the E-2 Investment Amount?
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              Unlike the EB-5 visa that has specified minimum investment amounts
              for its two categories, the E-2 visa does not have a minimum for
              business capital and instead looks for “substantial capital”. What
              determines an appropriate investment amount varies widely
              depending on the size and nature of each business.
            </p>
            <p
              className="text-[#2C2C2C] text-sm mt-2 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              Officials at the embassy or USCIS use their discretion to consider
              whether an amount of investment capital is appropriate or not.
              Though it is widely believed that having a minimum of $50,000
              capital is a good rule of thumb, in some cases, you may need more
              or less. For instance, a small shop or firm may be approved with
              an investment amount in the tens of thousands of dollars. In
              general, however, having a large investment amount will be helpful
              and make your case stronger. This is another critical area that
              requires working with an experienced E-2 visa immigration attorney
              which is where Migrate Compass comes in.
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              E-2 Visa Processing Time
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              The processing time for an E-2 visa varies widely depending on the
              embassy from which you are applying. In some embassies, the
              process may take just a few weeks, while in others you may have to
              wait a number of months. If you are applying from within the
              United States, you may use the premium processing service to have
              your visa application processed within 15 calendar days. Another
              factor that could help expedite the process is if you are buying
              an existing business that is already registered as an E-2 treaty
              enterprise.
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              What are the E2 Visa Requirements?
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc ml-6 mb-4"
            >
              <li>
                You must be a national of a country with an E2 treaty with the
                United States.
              </li>
              <li>
                You must make a substantial investment in a US company or Yours.
              </li>
              <li>
                You must be entering the United States to direct and develop
                your E2 business.
              </li>
              <li>Business licenses.</li>
              <li>The source of your investment funds must be lawful.</li>
              <li>
                You must be a national of a country with an E2 treaty with the
                United States.
              </li>
            </ul>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              What are the E2 Visa Benefits?
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc ml-6 mb-4"
            >
              <li>
                Unlike other non-immigrant visas, you do not need to maintain a
                foreign residence to get an E2 visa.
              </li>
              <li>
                There is no set minimum investment amount to qualify for an E2
                visa. Investments as low as $50,000 or even lower have qualified
                for E2.
              </li>
              <li>
                With an E2 visa, you can start a business in the United States
                and work for that business.
              </li>
              <li>
                Your spouse can apply for work authorization, to work in the
                United States.
              </li>
              <li>Your children can go to school in the United States.</li>
              <li>
                By getting an E2 visa, your spouse and unmarried children under
                21 years old can also qualify for E2 visas.
              </li>
            </ul>
            <h1 className="font-bold text-lg mt-4 text-[#055AAA]">
              Incomplete information,
            </h1>{" "}
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              insufficient evidence, and legal obstacles often lead to long
              processing times, and even visa rejection.
            </p>
            <h1 className="font-bold text-lg mt-4 text-[#055AAA]">
              Your spouse and dependent children can come to the United States.
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              Guess what? With the E2 visa, your family gets to join the
              adventure too! If you have kids under 21 who aren&lsquo;t married,
              they can hop on board. And the best part? They can go to school in
              the U.S. Your spouse isn&lsquo;t left out either. Once
              they&lsquo;ve sorted out their work documents or gotten their
              green card, they&lsquo;re free to work.
            </p>
            <Button variant="outline" size="default" className="mt-4">
              Book Session with Expert
            </Button>
            <p
              className="text-[#2C2C2C] text-sm sm:!text-base mt-3"
              style={{ lineHeight: "1.8" }}
            >
              Migrate Compass is here to offer you a hassle-free experience and
              make sure you receive your U.S. Business visa as quickly as
              possible.
            </p>
          </div>
        </div>
      </Container>
      <div className="mt-6">
        <Review
          Animate={AnimateFaq}
          title=" Check Out Our Reviews"
          list1="Migrate Compass service was awesome althrough even though my case was compplicated"
          list2="Never thought I could get a Job in the United States "
          list3="Thanks Migrate Compass my family are now united with me in the United States"
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
