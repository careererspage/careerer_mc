"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Lottie from "lottie-react";
import AnimateChat from "@/public/images/lottie/chat.json";
import AnimateFaq from "@/public/images/lottie/faq.json";
import AnimateFees from "@/public/images/lottie/payment.json";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Container from "../container";
import HeadingsText from "./HeadingsText";
import { UsaFeeA, UsaFeeC } from "@/lib/data";
import UlList from "./ul-List";
import Review from "./category/review";
import PaymentHeading from "./payment-heading";

const Charges = () => {
  const [selectedType, setSelectedType] = useState<string>("default");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };

  return (
    <div className="w-full mt-28">
      <div className="p-4 bg-gray-200 border-y-2 border-gray-500 mb-2">
        Migrate Compass Cost: Is it worth your money?
      </div>

      <Container>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 px-4">
          <div
            className="text-[#2C2C2C] text-base"
            style={{ lineHeight: "1.8" }}
          >
            Our agency, staffed with former immigration consular officers,
            specializes in United States immigration law. We provide a
            comprehensive service that begins with
            <span className="font-bold">
              connecting you to potential employers in the United States.
            </span>{" "}
            Once employment is secured, we then assist with the processing of
            your work visa.
            <p className="pt-1">
              <span className="font-bold">
                Migrate Compass as a body specializing in immigration law.
              </span>{" "}
              Our team provides a wide range of services to our clients. These
              include: <span className="font-bold">Firstly,</span> offering
              consultations; <span className="font-bold">Secondly,</span>{" "}
              identifying potential ‘red flags’ in your situation;{" "}
              <span className="font-bold">Thirdly,</span> completing the
              appropriate immigration forms;{" "}
              <span className="font-bold">Fourthly,</span> reviewing your
              supporting documents; and list goes on to as reviewing the
              decisions of the U.S. Citizenship and Immigration Services
              (USCIS).
            </p>
          </div>

          <Lottie
            animationData={AnimateFees}
            loop
            autoplay
            className="w-full h-[500px] p-0 -my-24"
          />
        </div>

        <div className="text-[#2C2C2C] text-base mt-4">
          <HeadingsText
            heading="EB-3 Work Visa"
            subHead="Assistance Payment Plan"
            text="
          Our EB-3 work visa assistance payment plan is designed to simplify the
        process of obtaining your employment-based immigrant visa. Here&lsquo;s
        what you can expect:"
          />
          <ul className="list-disc ml-6 mb-4">
            <li>
              Comprehensive evaluation of your eligibility for the EB-3 visa
              category.
            </li>
            <li>
              Assistance with preparing and submitting your visa application.
            </li>
            <li>Guidance on gathering required documentation and evidence.</li>
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
            focus on your career opportunities in the United States while we
            handle the complexities of your visa application.
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
            className="px-4 sm:mt-3 text-[#2C2C2C] sm:text-base text-sm"
            style={{ lineHeight: "1.8" }}
          >
            A multitude of variables will affect the fee of an Immigration
            Attorney. These variables generally impact the fees you pay, these
            are: <span className="font-bold">First,</span> the type of service
            required; <span className="font-bold">Second,</span>, the type of
            application; <span className="font-bold">Third,</span>, the place of
            practice; and <span className="font-bold">Fourth,</span> the level
            of experience or expertise. The average fees for various types of
            visa is another factor that determines Migrate Compass fees.
          </p>
        </div>

        <div className="flex sm:!flex-row flex-col-reverse items-start gap-2 mt-10">
          {selectedType === "default" && (
            <div className="flex flex-col gap-3 p-5 rounded-md shadow-md bg-white">
              <PaymentHeading
                heading="First Payment: Application Process"
                price="$6,970"
                text=" This payment is due when you sign the agreement for us to begin the process of securing a job for you in the United States. This includes evaluating your qualifications, networking with start-ups and smaller firms and knowing the best routes."
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <PaymentHeading
                heading="Second Payment"
                price="$10,930"
                text="This payment is due after we have secured a job for you in U.S.A. and after the approval of the Labor Certificate and
                prior to the filing of forms I-140/I-485 (under I-907 premium
                processing)."
              />
              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <UlList data={UsaFeeA} />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <PaymentHeading
                heading="Third Payment: After Visa Approval"
                price="$8,000"
                text="This payment is due after your visa has been approved."
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <UlList data={UsaFeeC} />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <p className="text-sm">
                If you have any questions or concerns about the payment process,
                please don&apos;t hesitate to contact us at
                support@migratecompass.com.
              </p>
            </div>
          )}

          {selectedType === "comfortable" && (
            <div className="flex flex-col gap-3 p-5 rounded-md shadow-md bg-white">
              <PaymentHeading
                heading="First Payment: Application Process"
                price="$6,970"
                text=" This payment is due when you sign the agreement for us to begin the process of securing a job for you in the United States. This includes evaluating your qualifications, networking with start-ups and smaller firms and knowing the best routes."
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <PaymentHeading
                heading="Second Payment: Over a span of 15 Months"
                price="$10,930"
                text="This payment is due after we have secured a job for you in U.S.A. and after the approval of the Labor Certificate and
                prior to the filing of forms I-140/I-485 (under I-907 premium
                processing)."
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <UlList data={UsaFeeA} />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <PaymentHeading
                heading="Third Payment: After Visa Approval"
                price="$8,000"
                text="This payment is due after your visa has been approved."
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <UlList data={UsaFeeC} />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <p className="text-sm">
                If you have any questions or concerns about the payment process,
                please don&apos;t hesitate to contact us at
                support@migratecompass.com.
              </p>
            </div>
          )}

          <div className="p-1 rounded-md shadow-md text-white sm:w-[600px] w-full">
            <RadioGroup value={selectedType} onChange={handleRadioChange}>
              <div
                className="flex items-center space-x-2 bg-[#112f61] rounded-md p-6 w-full"
                onClick={() => setSelectedType("default")}
              >
                <RadioGroupItem
                  value="default"
                  id="r1"
                  className="text-white border-2 border-white w-5 h-5 rounded-full"
                />
                <Label
                  htmlFor="r1"
                  className="flex flex-col sm:gap-3 gap-1 w-full h-full cursor-pointer"
                >
                  <h1 className="font-bold sm:text-2xl text-lg">Type A</h1>
                  <p className="text-gray-100 !text-sm"> Total Cost: $22,610</p>
                </Label>
              </div>
              <div
                className="flex items-center mt-4 space-x-2 bg-[#112f61] rounded-md p-6 w-full"
                onClick={() => setSelectedType("comfortable")}
              >
                <RadioGroupItem
                  value="comfortable"
                  id="r2"
                  checked={selectedType === "comfortable"}
                  className="text-white border-2 border-white w-5 h-5 rounded-full"
                />
                <Label
                  htmlFor="r2"
                  className="flex flex-col sm:gap-3 gap-1 w-full h-full cursor-pointer"
                >
                  <h1 className="font-bold sm:text-2xl text-lg">Type B</h1>
                  <p className="text-gray-100"> Total Cost: $22,610</p>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="text-[#2C2C2C] text-base mt-4">
          <h2 className="font-bold sm:text-2xl text-lg mb-2">
            When to hire{" "}
            <span className="text-[#DC531D]"> Migrate Compass?</span>
          </h2>
          <p className="mb-4">
            Immigration law in the United States is complicated. It is generally
            practical to hire immigration specialist like Migrate Compass to
            save you time, money, and avoid confusion. The situations when you
            need to hire a visa lawyer are listed below.
          </p>
          <ol className="list-decimal ml-6 mb-4 flex flex-col gap-2">
            <li>
              Accuse of a crime or committed a crime and seek re entry to the
              United States or avoid expulsion from the country.
            </li>
            <li>
              Seek assistance in the application process because there are
              several forms and documentation that are either too complicated or
              time-consuming
            </li>
            <li>
              Unsure of your basic eligibility for a green card or other
              immigration benefit.
            </li>
            <li>Have deportation or removal proceedings against you.</li>
            <li>
              Have trouble obtaining a USCIS green card, citizenship, or other
              immigration benefit.
            </li>
            <li>Require urgent assistance with an immigration situation.</li>
            <li>Need to provide extra documentation.</li>
            <li>Seek to apply for readmission after deportation.</li>
            <li>Seek an employment-based visa.</li>
            <li>
              Intend to move to the United States to work for a U.S. employer,
              but the business has not supported you with the immigration
              procedure.
            </li>
          </ol>
        </div>
      </Container>

      <Review
        Animate={AnimateFaq}
        title=" Check Out Our Frequently Asked Questions"
        list1="What is your pricing? Do you have installmental plan?"
        list2=" How long does it take to get a Job?"
        list3=" Do you take cases outside the United States?"
        href="/usa-faq"
      />
    </div>
  );
};

export default Charges;
