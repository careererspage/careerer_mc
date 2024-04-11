"use client";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

interface ReviewProp {
  Animate: object;
  title: string;
  list1: string;
  list2: string;
  list3: string;
  href: string;
}
const Review = ({ Animate, title, list1, list2, list3, href }: ReviewProp) => {
  const c = useTranslations("translate.common");

  return (
    <div>
      <div className="h-full w-full sm:px-20 px-2 py-4 my-4 bg-[#0071BA] flex flex-col sm:flex-row items-center justify-center sm:gap-10 gap-3">
        <Lottie
          animationData={Animate}
          loop
          autoplay
          className="sm:w-[250px] sm:-my-16 -my-6 w-[180px] h-[130px] sm:h-[250px]"
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-white md:text-[35px] text-lg font-bold">
            {title}
          </h1>

          <ul className="ul list-disc ml-6 mb-4 text-[16px] md:text-[20px] text-[#eee] flex flex-col gap-2">
            <li>{list1}</li>
            <li className="">{list2}</li>
            <li className="">{list3}</li>
          </ul>
          <div>
            <Link href={href}>
              <Button variant="primary" size="lg" className="p-6 w-[134px]">
                {c("readMoreStories")}{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
      <div className="text-[#2C2C2C] text-base mt-4 sm:px-20 px-4">
        <h2 className="font-bold sm:text-2xl text-lg mb-2">
          {c("reviewHeader")}
          <span className="text-[#DC531D]"> {c("reviewSpan")}</span>
        </h2>
        <p className="mb-4">
          {c("reviewParagraph")}{" "}
          <span className="font-bold">{c("chatWithUs")}.</span>
        </p>
      </div>
    </div>
  );
};

export default Review;
