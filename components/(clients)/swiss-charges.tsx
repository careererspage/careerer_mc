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
import { useModal } from "@/hooks/use-modal-store";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
import Image from "next/image";

interface SwissChargesProps {
  currentUser?: SafeUser | null;
  serverId?: string;
  supportId?: string | undefined;
}

const SwissCharges = ({
  currentUser,
  serverId,
  supportId,
}: SwissChargesProps) => {
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
        <div className="md:!px-10 px-4 bg-gray-200 border-y-2 border-gray-500 mb-4">
          Migrate Compass Cost: Is it worth your money?
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 px-4">
          <div
            className="text-[#2C2C2C] text-base"
            style={{ lineHeight: "1.8" }}
          >
            At Migrate Compass, we pride ourselves on our team of experienced
            immigration professionals, including former consular officers, and
            our strong ties with consular services. Our expertise lies in Swiss
            immigration law. We offer a comprehensive service that starts with
            <span className="font-bold">
              {" "}
              connecting you to potential employers in Switzerland.
            </span>
            Once we secure you an employment offer, we then guide you through
            the process of obtaining your Swiss work visa.
          </div>

          <Image
            src={require("@/public/images/paymentImage.jpg")}
            className="w-full h-[300px] object-cover"
            alt="payment plan"
          />
        </div>

        <div className="text-[#2C2C2C] text-base">
          <HeadingsText
            heading="Swiss Work Visa Assistance"
            subHead="Permit B / Permit L Payment Plan"
            text="Our Swiss work visa assistance payment plan is designed to simplify the process of obtaining your Permit B or Permit L work visa. Here's what you can expect:"
          />
          <ul className="sm:!text-base text-sm list-disc flex flex-col gap-3 mb-2 ml-4 ul-list">
            <li>
              Evaluating your qualifications for a job in Switzerland with our
              network of start-ups and smaller firms.
            </li>
            <li>
              Assigning a dedicated officer to guide you from the first day of
              the process until your arrival in switzerland.
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

        <div className="flex sm:!flex-row flex-col-reverse items-start gap-2 mt-10 relative">
          <div className="flex flex-col gap-3 p-5 rounded-md shadow-md bg-white sm:w-[600px]">
            <PaymentHeading
              heading="First Payment: Application Process"
              price="$3,830"
              text=" This payment is due onces you sign the agreement contract. This initiates the process where a dedicated officer begins working on securing you a job in Switzerland. This covers getting your own assigned officer and most importantly, connecting you with a trusted sponsor for employment opportunities."
            />

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <PaymentHeading
              heading="Second Payment: After Job Approval"
              price="$2,980"
              text="This payment is due after we have secured a job for you in Switzerland."
            />

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <UlList data={SwissA} />

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <PaymentHeading
              heading="Third Payment: After Visa Approval"
              price="$3,800"
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
            When to hire{" "}
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
              If you have trouble obtaining a Swiss work permit, incomplete
              papers or other swiss benefit.
            </li>
            <li>Require urgent assistance with an immigration situation.</li>
            <li>Need to provide extra documentation.</li>
            <li>Seek to apply for readmission after deportation.</li>
            <li>Seek an employment-based visa.</li>
            <li>
              If you intend to move to Switzerland to work for a Swiss employer,
              but the employer has not supported you with the cost or
              immigration procedure.{" "}
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
