import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import { FaClipboardCheck } from "react-icons/fa";
import React from "react";
import Footer from "@/components/Footer";
import { SwissRequirement, SwissWork } from "@/lib/data";
import AnimateFaq from "@/public/images/lottie/faq.json";
import Cases from "@/components/(clients)/category/cases";
import ServiceCard from "@/components/(clients)/serviceCard";
import Review from "@/components/(clients)/category/review";

const page = () => {
  return (
    <div>
      <Navbar />
      <GeneralHero
        ImageUrl={require("@/public/images/hero/swissWork.jpg")}
        title="Work Visa made easy with Migrate Compass"
        subTitle="Secure A Switzerland work visa."
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-4 mt-10 relative">
          <ServiceCard
            title="Work Visa Complete Service"
            listItems={[
              "We facilitate connections with small firms for potential job offers",
              "We have a network of satisfied clients we can pair you with on arrival",
              "We assist in preparing comprehensive documentation",
            ]}
          />

          <div>
            <h1 className="text-lg md:text-2xl text-[#055AAA] font-bold">
              Why Choose a Work Visa for Switzerland?
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="sm:!text-base text-sm list-disc flex flex-col gap-3 ml-4 ul-list"
            >
              {SwissWork.map((item, i) => (
                <div key={i}>
                  <li>
                    <span className="font-semibold">{item.title}: </span>
                    {item.lists}
                  </li>
                </div>
              ))}
            </ul>

            <h1 className="text-lg md:text-2xl mt-6 text-[#055AAA] font-bold">
              Switzerland Work Visa
            </h1>
            <p className="text-[#2C2C2C] text-sm sm:!text-base">
              If you wish to work in Switzerland, you will require a Switzerland
              work visa. At Migrate Compass, we guarantee job placement
              assistance. One of the forms of Switzerland&lsquo;s long-stay
              visas is the Swiss work visa (B / L permit). This visa grants the
              holder permission to work in Switzerland for the duration of the
              visa.
            </p>

            <h1 className="text-lg md:text-2xl mt-6 text-[#055AAA] font-bold">
              Switzerland work visa processing time{" "}
            </h1>
            <p
              className="text-[#2C2C2C] text-sm sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              The processing time for a Switzerland work permit is 6 – 12 weeks.
            </p>

            <h1 className="text-lg md:text-2xl mt-6 text-[#055AAA] font-bold">
              Eligibility Requirements for a Switzerland Work Visa
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="sm:!text-base text-sm list-disc flex flex-col gap-3 ml-4 ul-list"
            >
              {SwissRequirement.map((item, i) => (
                <div key={i}>
                  <li>
                    <h1 className="font-semibold">{item.title}</h1>
                    {item.lists}
                  </li>
                </div>
              ))}
            </ul>

            <h1 className="text-lg md:text-2xl mt-6 text-[#055AAA] font-bold">
              Documents Required
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="sm:!text-base text-sm list-disc flex flex-col gap-3 ml-4 ul-list"
            >
              <li>You need a valid passport with at least two blank pages.</li>
              <li>Three copies of the relevant pages of your passport.</li>
              <li>
                Copies of your job contract including 2 passport-size photos.
              </li>
              <li>Proof of your professional experience</li>
              <li>
                Proof of your educational qualifications or training, such as
                diplomas and certificates
              </li>
            </ul>

            <Button variant="outline" size="default" className="mt-4">
              Book Session with Expert
            </Button>

            <p className="mt-3">
              Migrate Compass is here to offer you a hassle-free experience and
              make sure you receive your Swiss Work visa as quickly as possible.
            </p>
          </div>
        </div>
      </Container>
      <div className="mt-6">
        <Review
          Animate={AnimateFaq}
          title="Check Out Our Reviews"
          list1="Thanks to Migrate Compass I now work as Project Manager in a start-up."
          list2="Migrate Compass helped me and my sister get a job as nurses, and work culture over here is the best."
          list3="I'm from Pakistan, but thanks to Migrate Compass, I'm currently in Switzerland working as a Plumber and the pay is awesome."
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
