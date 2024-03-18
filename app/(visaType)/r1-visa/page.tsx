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
        ImageUrl={require("@/public/images/hero/religion.jpg")}
        title="Simplify Your R1 Religious Visa"
        subTitle="Obtain your R1 U.S Visa."
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-4 mt-10 relative">
          <ServiceCard
            title="R1 Religious Visa"
            listItems={[
              "We help establish connections with religious organizations for potential job offers.",
              "We have networks of satisfied clients with the R1 visa, and we can connect you with them for support and guidance.",
              "We assist in preparing comprehensive documentation required for the R1 visa.",
            ]}
          />

          <div>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">R1 Visa</h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              The R1 visa is a visa category specifically designed for
              individuals who wish to come to the U.S. to engage in religious
              work. This includes developing their religious vocation,
              occupation, or ministry. Each of these categories has specific
              criteria that must be met. Individuals pursuing a religious
              vocation, such as nuns or monks, are typically those who have
              committed to a lifetime vow. This commitment is usually to a
              religious order or community. On the other hand, those pursuing
              religious occupations are individuals who perform religious duties
              that are traditionally associated with their faith. These duties
              must fundamentally relate to the faith&lsquo;s belief system and
              practices. Lastly, those entering as a minister must be a trained
              member of the clergy.
            </p>

            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              2. R1 Visa Benefits.
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc ml-6 mb-4"
            >
              <li>Can bring immediate family members.</li>
              <li>Can live in the United States for up to 5 years.</li>
              <li>
                Can Work in the Religious Organization as a Non-professional.
              </li>
              <li>
                The R1 Visa is a dual intent visa that allows applicants to
                pursue green card status if they so choose.
              </li>
            </ul>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              R1 Visa Requirements.
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc ml-6 mb-4"
            >
              <li> Be a religious worker coming to work.</li>
              <li>
                You must be a member of a religious denomination for at least
                two years before the time the application is submitted.
              </li>
              <li> Be a minister coming to work.</li>
              <li>
                The R1 is not a self-petitioning visa. Rather, you need someone
                to request that you come to the United States to work.
              </li>
            </ul>

            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              R1 Visa Process
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc ml-6 mb-4"
            >
              <li>Supporting letter from the religious organization.</li>
              <li>
                Detailed job description including a breakdown of time allocated
                for each duty.
              </li>
              <li>
                A valid determination letter from the IRS confirming the
                organization&apos;s tax-exempt status.
              </li>
              <li>Evidence of remuneration.</li>
              <li>
                Self-support is only applicable to certain nonimmigrant
                missionaries.
              </li>
              <li>
                Proof of financial resources for remuneration. The organization
                must demonstrate how the position will be funded, using past
                financial records, budgets, etc.
              </li>
              <li>
                Documents that verify the religious nature and purpose of the
                organization. This can include religious texts, pamphlets,
                flyers, and other related literature.
              </li>
            </ul>

            <Button variant="outline" size="default" className="mt-4">
              Book Session with Expert
            </Button>

            <p className="mt-3">
              Migrate Compass is here to offer you a hassle-free experience and
              make sure you receive R1 Visa as quickly as possible.
            </p>
          </div>
        </div>
      </Container>
      <div className="mt-6">
        <Review
          Animate={AnimateFaq}
          title=" Check Out Our Reviews"
          list1="Migrate Compass service was awesome althrough even though my case was compplicated"
          list2="Never thought I could migrate to United States through the R1 Visa route"
          list3="The guidance and support throughout the R1 Visa process were invaluable. Highly recommended for anyone considering the R1 Visa path"
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
