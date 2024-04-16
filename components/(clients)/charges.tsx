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
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";

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

  const t = useTranslations("translate.usaServicePage");
  const c = useTranslations("translate.common");

  return (
    <div className="w-full mt-28">
      <Container>
        <div className="p-4 bg-gray-200 border-y-2 border-gray-500 mb-4">
          {t("header1")}
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 px-4">
          <div
            className="text-[#2C2C2C] text-base"
            style={{ lineHeight: "1.8" }}
          >
            {t("paragraph1")} <span className="font-bold">{t("span1")}</span>{" "}
            {t("span2")}
            <p className="pt-1 font-bold">{t("paragraph2")}</p>
          </div>

          <Image
            src={require("@/public/images/paymentImage.jpg")}
            className="w-full h-[300px] object-cover"
            alt="payment plan"
          />
        </div>

        <div className="text-[#2C2C2C] text-base mt-4">
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

        <div className="flex sm:!flex-row flex-col-reverse items-start md:gap-5 gap-2 mt-6 sm:mt-10">
          {selectedType === "default" && (
            <div className="flex flex-col gap-3 p-5 rounded-md shadow-md bg-white">
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
                  className="sm:!text-base text-sm list-disc flex flex-col gap-3 ml-4 ul-list"
                >
                  {UsaFeeA().map((item, i) => (
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
                  className="sm:!text-base text-sm list-disc flex flex-col gap-3 ml-4 ul-list"
                >
                  {UsaFeeC().map((item, i) => (
                    <li key={i}>{item.lists}</li>
                  ))}
                </ul>
              </div>

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <p className="text-sm">{t("paymentTypeA.paragraph")}</p>
            </div>
          )}

          {selectedType === "comfortable" && (
            <div className="flex flex-col gap-3 p-5 rounded-md shadow-md bg-white">
              <PaymentHeading
                heading={t("paymentTypeB.heading1")}
                price={t("paymentTypeB.price1")}
                text={t("paymentTypeB.text1")}
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <PaymentHeading
                heading={t("paymentTypeB.heading2")}
                price={t("paymentTypeB.price2")}
                // price="$14,440"
                text={t("paymentTypeB.text2")}
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <div>
                <ul
                  style={{ lineHeight: 1.8 }}
                  className="sm:!text-base text-sm list-disc flex flex-col gap-3 ml-4 ul-list"
                >
                  {UsaFeeA().map((item, i) => (
                    <li key={i}>{item.lists}</li>
                  ))}
                </ul>
              </div>
              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <PaymentHeading
                heading={t("paymentTypeB.heading3")}
                price={t("paymentTypeB.price3")}
                text={t("paymentTypeB.text3")}
              />

              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <div>
                <ul
                  style={{ lineHeight: 1.8 }}
                  className="sm:!text-base text-sm list-disc flex flex-col gap-3 ml-4 ul-list"
                >
                  {UsaFeeC().map((item, i) => (
                    <li key={i}>{item.lists}</li>
                  ))}
                </ul>
              </div>
              <span className="my-2 w-full h-[2px] font-bold bg-indigo-500" />

              <p className="text-sm">{t("paymentTypeB.paragraph")}</p>
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
                  <h1 className="font-bold sm:text-2xl text-lg">
                    {t("Header4")}
                  </h1>
                  <p className="text-gray-100 !text-sm"> {t("paragraph")}</p>
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
                  <h1 className="font-bold sm:text-2xl text-lg">
                    {t("Header5")}
                  </h1>
                  <p className="text-gray-100"> {t("paragraph5")}</p>
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
        <div className="text-[#2C2C2C] text-base mt-4 md:w-[70%]">
          <h2 className="font-bold sm:text-2xl text-lg mb-2">
            {t("Header6")} <span className="text-[#DC531D]"> {t("span6")}</span>
          </h2>
          <p className="mb-4">{t("paragraph6")}</p>
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
        href="/usa-faq"
      />
    </div>
  );
};

export default Charges;
