"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Lottie from "lottie-react";
import AnimateChat from "@/public/images/lottie/chat.json";
import AnimateFaq from "@/public/images/lottie/faq.json";
import AnimateFees from "@/public/images/lottie/payment.json";
import Container from "../container";
import HeadingsText from "./HeadingsText";
import { SwissA, SwissC } from "@/lib/data";
import UlList from "./ul-List";
import PaymentHeading from "./payment-heading";
import Review from "./category/review";

const SwissCharges = () => {
  return (
    <div className="w-full mt-28">
      <div className="md:!px-10 px-4 bg-gray-200 border-y-2 border-gray-500 mb-2">
        Migrate Compass Cost: Is it worth your money?
      </div>
      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 px-4">
          <div
            className="text-[#2C2C2C] text-base"
            style={{ lineHeight: "1.8" }}
          >
            Our agency, staffed with former immigration consular officers,
            specializes in Swiss immigration law. We provide a comprehensive
            service that begins with
            <span className="font-bold">
              {" "}
              connecting you to potential employers in Switzerland.
            </span>
            Once employment is secured, we then assist with the processing of
            your Swiss work visa.
            <p className="font-bold pt-2 text-[#dd531d]">
              The process we follow includes:
            </p>
            <ul className="text-sm sm:text-base list-disc flex flex-col gap-3 mb-2 ml-4 ul-list">
              <li>
                Securing a job for you in Switzerland with start-ups or smaller
                firms
              </li>
              <li>
                Gathering all the necessary documentation for the work visa
                application
              </li>
              <li>Applying for your residence permit in Switzerland</li>
              <li>
                Assisting you in applying for the Switzerland work visa in your
                home country
              </li>
            </ul>
            We understand that the process of obtaining a Swiss work visa can
            seem daunting, which is why our services are invaluable. We navigate
            the complexities of the process, ensuring that all requirements are
            met and that applications are correctly completed and submitted.
          </div>

          <Lottie
            animationData={AnimateFees}
            loop
            autoplay
            className="w-full h-[500px] p-0 -my-24"
          />
        </div>

        <div className="text-[#2C2C2C] text-base">
          <HeadingsText
            heading="Swiss Work Visa Assistance"
            subHead="Permit B / Permit L Payment Plan"
            text="Our Swiss work visa assistance payment plan is designed to simplify the process of obtaining your Permit B or Permit L work visa. Here's what you can expect:"
          />
          <ul className="list-disc ml-6 mb-4">
            <li>
              Evaluating your qualifications for a job in Switzerland with our
              network of start-ups and smaller firms.
            </li>
            <li>
              Comprehensive evaluation of your eligibility for the Permit B or
              Permit L category.
            </li>
            <li>
              Assistance with preparing and submitting your visa application.
            </li>
            <li>
              Guidance on gathering the required documentation and evidence.
            </li>
            <li>
              Regular updates on the status of your application and any
              developments.
            </li>
            <li>
              Expert support from our experienced immigration team throughout
              the process.
            </li>
          </ul>
          <p className="mb-4">
            With our transparent pricing and flexible payment options, you can
            focus on your career opportunities in Switzerland while we handle
            the complexities of your visa application.
          </p>
          <div className="flex items-center p-4 mt-4 justify-center bg-[#DC531D] w-full">
            <p className="font-bold text-white">
              For more information Please chat with our{" "}
            </p>
            <Button
              className="ml-6 flex items-center "
              variant="primary"
              size="lg"
            >
              <Lottie
                animationData={AnimateChat}
                loop
                autoplay
                className="w-[50px] h-[50px]"
              />
              Support Team
            </Button>
          </div>

          <p
            className="px-4 sm:mt-3 text-[#2C2C2C] sm:!text-base text-sm"
            style={{ lineHeight: "1.8" }}
          >
            A multitude of variables will affect the fee of an Immigration
            Attorney. These variables generally impact the fees you pay, these
            are: <span className="font-bold">First,</span> the type of service
            required; <span className="font-bold">Second,</span> the type of
            application; <span className="font-bold">Third,</span> the place of
            practice; and <span className="font-bold">Fourth,</span> the level
            of experience or expertise. The average fees for various types of
            visa is another factor that determines Migrate Compass fees.
          </p>
        </div>

        <div className="flex sm:!flex-row flex-col-reverse items-start gap-2 mt-10 relative">
          <div className="flex flex-col gap-3 p-5 rounded-md shadow-md bg-white sm:w-[600px]">
            <PaymentHeading
              heading="First Payment: Application Process"
              price="$3,830"
              text=" This payment is due when you sign the agreement for us to begin the process of securing a job for you in Switzerland. This includes evaluating your qualifications, networking with start-ups and smaller firms, and knowing the best routes."
            />

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <PaymentHeading
              heading="Second Payment: After Job Approval"
              price="$2,600"
              text="This payment is due after we have secured a job for you in Switzerland."
            />

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <UlList data={SwissA} />

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <PaymentHeading
              heading="Third Payment: After Visa Approval"
              price="$2,100"
              text="This payment is due after your Swiss work visa has been approved."
            />

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <UlList data={SwissC} />

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <p className="text-sm">
              If you have any questions or concerns about the payment process,
              please don&apos;t hesitate to contact us at
              support@migratecompass.com.
            </p>
          </div>
        </div>
        <div className="text-[#2C2C2C] text-base mt-4">
          <h2 className="font-bold sm:text-2xl text-lg mb-2">
            When to hire an
            <span className="text-[#DC531D]"> Migrate Compass?</span>
          </h2>
          <p className="mb-4">
            Navigating the Swiss immigration process can be complex. It is
            generally practical to hire an immigration specialist like Migrate
            Compass to save you time, money, and avoid confusion. The situations
            when you might need our services are listed below.
          </p>
          <ol className="list-decimal ml-6 mb-4 flex flex-col gap-2">
            <li>
              If you have been accused of a crime or have committed a crime and
              seek entry to Switzerland or wish to avoid expulsion from the
              country.
            </li>
            <li>If you need assistance in securing a job in switzerland.</li>
            <li>
              If you need assistance in the work permit application process
              because there are several forms and documentation that are either
              too complicated or time-consuming.
            </li>
            <li>
              Unsure of your basic eligibility for a Swiss work permit or other
              immigration benefit.
            </li>
            <li>Have deportation or removal proceedings against you.</li>
            <li>
              If you have trouble obtaining a Swiss work permit or other
              immigration benefit.
            </li>
            <li>Require urgent assistance with an immigration situation.</li>
            <li>Need to provide extra documentation.</li>
            <li>Seek to apply for readmission after deportation.</li>
            <li>Seek an employment-based visa.</li>
            <li>
              If you intend to move to Switzerland to work for a Swiss employer,
              but the employer has not supported you with the immigration
              procedure.{" "}
            </li>
          </ol>
        </div>
      </Container>
      <Review
        Animate={AnimateFaq}
        title=" Check Out Our Frequently Asked Questions"
        list1="What is your pricing? Do you have installmental plan?"
        list2=" How long does it take to get a Job?"
        list3="Is there a money refund if visa not successful?"
        href="/swiss-faq"
      />
    </div>
  );
};

export default SwissCharges;
