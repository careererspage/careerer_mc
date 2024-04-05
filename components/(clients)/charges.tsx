"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Lottie from "lottie-react";
import AnimateChat from "@/public/images/lottie/chat.json";
import AnimateFaq from "@/public/images/lottie/faq.json";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Container from "../container";
import HeadingsText from "./HeadingsText";
import { UsaFeeA, UsaFeeC } from "@/lib/data";
import UlList from "./ul-List";
import Review from "./category/review";
import PaymentHeading from "./payment-heading";
import Image from "next/image";
import { SafeUser } from "@/types";
import { useModal } from "@/hooks/use-modal-store";
import { useRouter } from "next/navigation";

interface ChargesProps {
  currentUser?: SafeUser | null;
  serverId?: string;
  supportId?: string | undefined;
}

const Charges = ({ currentUser, serverId, supportId }: ChargesProps) => {
  const [selectedType, setSelectedType] = useState<string>("default");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedType(e.target.value);
  };

  const { onOpen } = useModal();
  const router = useRouter();

  const connectOfficer = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${serverId}/conversations/${supportId}`);
  };

  return (
    <div className="w-full mt-28">
      <Container>
        <div className="p-4 bg-gray-200 border-y-2 border-gray-500 mb-4">
          Migrate Compass Cost: Is it worth your money?
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 px-4">
          <div
            className="text-[#2C2C2C] text-base"
            style={{ lineHeight: "1.8" }}
          >
            At Migrate Compass, we pride ourselves on our team of experienced
            immigration professionals, including former consular officers, and
            our strong ties with consular services. Our expertise lies in U.S.
            immigration law. We offer a comprehensive service that starts with{" "}
            <span className="font-bold">
              connecting you to potential employers in the United States.
            </span>{" "}
            Once we secure you an employment offer, we then guide you through
            the process of obtaining your U.S. work visa
            <p className="pt-1">
              <span className="font-bold">
                Migrate Compass as a body specializes in immigration law.
              </span>{" "}
            </p>
          </div>

          <Image
            src={require("@/public/images/paymentImage.jpg")}
            className="w-full h-[300px] object-cover"
            alt="payment plan"
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
          <ul className="sm:!text-base text-sm list-disc flex flex-col gap-3 mb-2 ml-4 ul-list">
            <li>
              Assessing your qualifications for a job in the USA with our
              extensive network of start-ups and smaller firms.
            </li>
            <li>
              Assigning a dedicated officer to guide you from the first day of
              the process until your arrival in the USA.
            </li>
            <li>
              Thorough evaluation of your eligibility for the H-1B, Eb3 or L-1
              visa categories.
            </li>
            <li>
              Assistance with the preparation and submission of your visa
              application.
            </li>
            <li>
              Guidance on compiling the necessary documentation and evidence.
            </li>
            <li>
              Regular updates on your application status and any developments.
            </li>
            <li>
              Continuous support from our seasoned immigration team throughout
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
              For more information Please chat with our
            </p>
            <Button
              onClick={connectOfficer}
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
        </div>

        <h1 className="text-base mt-4 text-center sm:text-xl text-[#DC531D] font-extrabold">
          Payment Plan{" "}
        </h1>

        <div className="flex sm:!flex-row flex-col-reverse items-start md:gap-5 gap-2 mt-6 sm:mt-10">
          {selectedType === "default" && (
            <div className="flex flex-col gap-3 p-5 rounded-md shadow-md bg-white">
              <PaymentHeading
                heading="First Payment: Application Process"
                price="$3,970"
                text=" This payment is due onces you sign the agreement contract. This initiates the process where a dedicated officer begins working on securing you a job in the United States. This covers getting your own assigned officer and most importantly, connecting you with a trusted sponsor for employment opportunities."
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <PaymentHeading
                heading="Second Payment"
                price="8,930"
                text="This payment is due after we secured you a job in the United States."
              />
              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <UlList data={UsaFeeA} />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <PaymentHeading
                heading="Third Payment: After Visa Approval"
                price="$6,000"
                text="This payment is due after your visa has been approved."
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <UlList data={UsaFeeC} />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <p className="text-sm">
                If you have any questions or concerns about the payment process,
                please don&apos;t hesitate to contact us at
                support@migratecompass.com
              </p>
            </div>
          )}

          {selectedType === "comfortable" && (
            <div className="flex flex-col gap-3 p-5 rounded-md shadow-md bg-white">
              <PaymentHeading
                heading="First Payment: Application Process"
                price="$3,970"
                text=" This payment is due onces you sign the agreement contract. This initiates the process where a dedicated officer begins working on securing you a job in the United States. This covers getting your own assigned officer and most importantly, connecting you with a trusted sponsor for employment opportunities."
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <PaymentHeading
                heading="Second Payment: Over a span of 12 Months"
                price="$1,120"
                // price="$14,440"
                text="This is a monthly payment plan to be made monthly after we have secured you a job in the U.S.A."
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <UlList data={UsaFeeA} />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <PaymentHeading
                heading="Third Payment: After Visa Approval"
                price="$6,000"
                text="This payment is due after your visa has been approved."
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <UlList data={UsaFeeC} />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <p className="text-sm">
                If you have any questions or concerns about the payment process,
                please don&apos;t hesitate to contact us at
                support@migratecompass.com
              </p>
            </div>
          )}

          <div className="p-1 rounded-md shadow-md text-white sm:w-[700px] w-full">
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
                  <h1 className="font-bold sm:text-2xl text-lg">Plan A</h1>
                  <p className="text-gray-100 !text-sm"> Total Cost: $18,900</p>
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
                  <h1 className="font-bold sm:text-2xl text-lg">Plan B</h1>
                  <p className="text-gray-100"> Total Cost: $23,400</p>
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
