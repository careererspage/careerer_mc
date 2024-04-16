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
import { useTranslations } from "next-intl";

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

  const t = useTranslations("translate.swissServicePage");
  const c = useTranslations("translate.common");

  return (
    <div className="w-full mt-28">
      <Container>
        <div className="md:!px-10 px-4 bg-gray-200 border-y-2 border-gray-500 mb-4">
          {t("header1")}
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 px-4">
          <div
            className="text-[#2C2C2C] text-base"
            style={{ lineHeight: "1.8" }}
          >
            {t("paragraph1")}
            <span className="font-bold"> {t("span1")}</span>
            {t("span2")}
          </div>

          <Image
            src={require("@/public/images/paymentImage.jpg")}
            className="w-full h-[300px] object-cover"
            alt="payment plan"
          />
        </div>

        <div className="text-[#2C2C2C] text-base">
          <div className="md:w-[70%]">
            <HeadingsText
              heading={t("headingText1")}
              subHead={t("subHeadingText1")}
              text={t("subHeadingDetails1")}
            />

            <ul className="sm:!text-base text-sm list-disc flex flex-col gap-3 mb-2 ml-4 ul-list">
              <li>{t("Benefits.list1")}</li>
              <li>{t("Benefits.list2")}</li>
              <li>{t("Benefits.list3")}</li>
              <li>{t("Benefits.list4")}</li>
              <li>{t("Benefits.list5")}</li>
              <li>{t("Benefits.list6")}</li>
              <li>{t("Benefits.list7")}</li>
              <li>{t("Benefits.list8")}</li>
              <li>{t("Benefits.list9")}</li>
            </ul>
            <p className="mb-4">{t("paragraph3")}</p>
          </div>
          <div className="flex items-center p-4 mt-4 justify-center bg-[#DC531D] w-full">
            <p className="font-bold text-white">{t("paragraph4")}</p>

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
              {c("supportTeam")}
            </Button>
          </div>
        </div>

        <h1 className="text-base mt-4 text-center sm:text-xl text-[#DC531D] font-extrabold">
          {t("header2")}
        </h1>

        <div className="flex sm:!flex-row flex-col-reverse items-start gap-2 mt-10 relative">
          <div className="flex flex-col gap-3 p-5 rounded-md shadow-md bg-white sm:w-[600px]">
            <PaymentHeading
              heading={t("paymentTypeA.heading1")}
              price={t("paymentTypeA.price1")}
              text={t("paymentTypeA.text1")}
            />

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <PaymentHeading
              heading={t("paymentTypeA.heading2")}
              price={t("paymentTypeA.price2")}
              text={t("paymentTypeA.text2")}
            />

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <div>
              <ul
                style={{ lineHeight: 1.8 }}
                className="text-sm sm:!text-base list-disc flex flex-col gap-3 ml-4 ul-list"
              >
                {SwissA().map((item, i) => (
                  <li key={i}>{item.lists}</li>
                ))}
              </ul>
            </div>

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <PaymentHeading
              heading={t("paymentTypeA.heading3")}
              price={t("paymentTypeA.price3")}
              text={t("paymentTypeA.text3")}
            />

            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <div>
              <ul
                style={{ lineHeight: 1.8 }}
                className="text-sm sm:!text-base list-disc flex flex-col gap-3 ml-4 ul-list"
              >
                {SwissC().map((item, i) => (
                  <li key={i}>{item.lists}</li>
                ))}
              </ul>
            </div>
            <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

            <p className="text-sm">{t("paymentTypeA.paragraph")}</p>
          </div>
        </div>

        <div className="text-[#2C2C2C] text-base mt-4 md:w-[70%]">
          <h2 className="font-bold sm:text-2xl text-lg mb-2">
            {t("Header6")} <span className="text-[#DC531D]"> {t("span6")}</span>
          </h2>
          <p className="mb-4">
            Navigating the Swiss immigration process can be complex. It is
            generally practical to hire an immigration specialist like Migrate
            Compass to save you time, money, and avoid confusion. The situations
            when you might need our services are listed below.
          </p>
          <ol className="list-decimal ml-6 mb-4 flex flex-col gap-2">
            <li>{t("reasonsToHireUs.list1")}</li>
            <li>{t("reasonsToHireUs.list2")}</li>
            <li>{t("reasonsToHireUs.list3")}</li>
            <li>{t("reasonsToHireUs.list4")}</li>
            <li>{t("reasonsToHireUs.list5")}</li>
            <li>{t("reasonsToHireUs.list6")}</li>
            <li>{t("reasonsToHireUs.list7")}</li>
            <li>{t("reasonsToHireUs.list8")}</li>
            <li>{t("reasonsToHireUs.list9")}</li>
            <li>{t("reasonsToHireUs.list10")}</li>
          </ol>
        </div>
      </Container>
      <Review
        Animate={AnimateFaq}
        title={t("faq.title")}
        list1={t("faq.list1")}
        list2={t("faq.list2")}
        list3={t("faq.list3")}
        href="/swiss-faq"
      />
    </div>
  );
};

export default SwissCharges;
