"use client";
import { Button } from "@/components/ui/button";
import { Benefits } from "@/lib/data";
import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";

import AnimateChat from "@/public/images/lottie/chat.json";
import AnimateGift from "@/public/images/lottie/gift.json";
import { useTranslations } from "next-intl";

interface BenefitProps {
  connectOfficer?: (() => void) | undefined;
}

const Benefit = ({ connectOfficer }: BenefitProps) => {
  const c = useTranslations("translate.common");
  const t = useTranslations("translate.benefits");
  return (
    <div className="mt-10 rounded-xl p-5">
      <div className="flex items-center gap-4">
        <Lottie
          animationData={AnimateGift}
          loop
          autoplay
          className="w-[100px] h-[100px]"
        />
        <h1 className="sm:text-2xl text-lg font-bold sm:text-center text-gray-600">
          {t("Title")}
        </h1>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3">
        {Benefits().map((benefit, i) => (
          <div
            key={i}
            className="rounded-md p-4 m-2 transition flex flex-col gap-1"
          >
            <div className="flex items-center gap-4">
              <Image
                width={50}
                height={50}
                src={benefit.image}
                alt={benefit.title}
                className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] object-cover"
              />
              <h2 className="text-[#555555] font-semibold sm:text-xl text-lg my-2">
                {benefit.title}
              </h2>
            </div>

            <div className="text-[#000000B3] pr-0.5 text-[15px] overflow-y-scroll w-full">
              {benefit.details}
            </div>
          </div>
        ))}
      </div>

      <Button
        onClick={connectOfficer}
        className="mt-4 ml-6 flex items-center "
        variant="button"
        size="lg"
      >
        <Lottie
          animationData={AnimateChat}
          loop
          autoplay
          className="w-[50px] h-[50px]"
        />
        {c("chatWithUs")}{" "}
      </Button>
    </div>
  );
};

export default Benefit;
