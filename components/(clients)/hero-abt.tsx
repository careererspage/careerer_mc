"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Teams, VisaType } from "@/lib/data";
import GeneralHero from "./generalHero";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

const HeroAbt = () => {
  const [showRightScroll1, setShowRightScroll1] = useState(true);
  const [showLeftScroll1, setShowLeftScroll1] = useState(true);
  const router = useRouter();
  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const buffer = 10; // Adjust this value as needed
    const isAtEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - buffer;

    setShowRightScroll1(!isAtEnd);

    const isAtStart = container.scrollLeft === 0;
    setShowLeftScroll1(!isAtStart);
  };

  const scrollAction = (direction: number) => {
    const container = document.querySelector(".scroll-container1");
    if (container) {
      const newScrollLeft = container.scrollLeft + direction;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      const isAtEnd =
        newScrollLeft + container.clientWidth >= container.scrollWidth;
      setShowRightScroll1(!isAtEnd);
    }
  };
  const t = useTranslations("translate.aboutUsPage");
  const c = useTranslations("translate.common");

  return (
    <div className="w-full">
      <GeneralHero
        ImageUrl={require("@/public/images/connect-bg.jpg")}
        title={t("title")}
        subTitle={t("subTitle")}
        subTitle1={t("subTitle1")}
      />

      <div className="mt-6 px-10">
        <div className="grid sm:grid-cols-[40%,60%] grid-cols-1 gap-4">
          <div className="flex sm:!flex-row flex-col items-center">
            <div className="flex flex-col gap-1 mt-4">
              <h1 className="md:text-6xl sm:text-4xl text-xl font-bold">
                {t("header")}
              </h1>
              <h2 className="sm:text-[22px] text-lg text-[#055AAA] mt-2 font-bold">
                {t("subHeader")}{" "}
              </h2>

              <p className="sm:text-[15px] text-[14px] text-[#333333]">
                {t("speech")}
              </p>
            </div>

            <div className="sm:w-[50px] sm:h-[80px] w-full h-[8px] bg-yellow-400 sm:mx-6 my-6" />
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="sm:text-[22px] text-lg text-[#055AAA] font-bold">
                {" "}
                {t("OurVision")}
              </h2>
              <p className="text-[14px] mt-1 text-[#333333]">
                {t("visionDetail")}
              </p>
            </div>

            <div>
              <h2 className="sm:text-[22px] text-lg text-[#055AAA] font-bold">
                {" "}
                {t("OurMission")}
              </h2>
              <p className="text-[14px] mt-1 text-[#333333]">
                {t("missionDetails")}
              </p>
            </div>

            <div>
              <h2 className="sm:text-[22px] text-lg text-[#055AAA] font-bold">
                {" "}
                {t("operateWithCare")}
              </h2>
              <p className="text-[14px] mt-1 text-[#333333]">
                {t("operateDetails")}
              </p>
            </div>
            <div>
              <h2 className="sm:text-[22px] text-lg text-[#055AAA] font-bold">
                {t("effectiveAndEfficient")}{" "}
              </h2>
              <p
                className="text-[14px] mt-1
               text-[#333333]"
              >
                {t("effectiveDetails")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#055AAA] w-full sm:px-10 h-auto mt-4 flex flex-col items-center py-4">
        <h2 className="text-white md:text-xl text-[15px] font-bold text-center p-4">
          {t("purpose")}{" "}
        </h2>

        <div className="md:mx-20 relative w-full group  bg-[#00498e] p-4 rounded-md">
          <div
            className="scroll-container1 overflow-x-auto scrollbar-hide ml-6"
            onScroll={handleScroll}
          >
            <div className="flex flex-nowrap w-[70%] sm:w-full sm:space-x-3 gap-4">
              {" "}
              {VisaType().map((visa, index) => (
                <div
                  key={index}
                  className="rounded-md bg-white flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/3 cursor-pointer shadow-md hover:shadow-sm p-4 transition flex flex-col gap-1 group"
                >
                  <Image
                    width={100}
                    height={100}
                    quality={100}
                    src={visa.image}
                    alt={visa.title}
                    className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] object-cover"
                  />
                  <h1 className="sm:text-[18px] text-base text-zinc-600 font-bold">
                    {visa.title}
                  </h1>
                  <p className="text-sm text-zinc-500">{visa.details}</p>
                  <Button
                    onClick={() =>
                      router.push(
                        `/servers/66edbb5c-de49-42d2-a842-4a77074f0f03/conversations/9fe2cb6c-7383-4a60-a7d2-39ec373f4734`
                      )
                    }
                    variant="primary"
                    size="icon"
                    className="w-full mt-auto sm:text-base text-sm"
                  >
                    {c("chatOfficer")}{" "}
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {showLeftScroll1 && (
            <button
              className="absolute group-hover:sm:block sm:hidden block z-30 sm:-left-10 left-0 top-1/2 hover:opacity-80 transition bg-white/95 border border-[#003b95] rounded-full p-2"
              onClick={() => scrollAction(-350)}
            >
              <BsChevronLeft size={25} className="text-blue-400" />
            </button>
          )}
          {showRightScroll1 && (
            <button
              className="absolute group-hover:sm:block sm:hidden block z-30 sm:-right-10 right-0 top-1/2 hover:opacity-80 transition bg-white/95 border border-[#003b95] rounded-full p-2"
              onClick={() => scrollAction(350)}
            >
              <BsChevronRight size={25} className="text-blue-400" />
            </button>
          )}
        </div>
      </div>

      <div className="p-8 mt-10 mb-10 flex flex-col sm:flex-row items-center justify-center gap-3 bg-white">
        <p className="sm:text-[17px] text-sm text-[#2C2C2c] md:w-[50%] w-full">
          {c("supportDetails")}
        </p>
        <Button
          onClick={() =>
            router.push(
              `/servers/66edbb5c-de49-42d2-a842-4a77074f0f03/conversations/9fe2cb6c-7383-4a60-a7d2-39ec373f4734`
            )
          }
          variant="outline"
          size="lg"
          className=""
        >
          <Image
            height={50}
            width={50}
            src={require("@/public/images/care-line.png")}
            className="object-contain"
            alt="Support"
          />
          {c("supportLine")}{" "}
        </Button>
      </div>

      <div className="mt-10 px-4 md:px-20">
        <h1 className="font-bold md:text-5xl sm:text-3xl text-xl text-center text-[#428BCa]">
          {t("TeamLead")}{" "}
        </h1>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {Teams.map((team, i) => (
            <div
              key={i}
              className="rounded-md transition flex flex-col gap-1 mt-4"
            >
              <div className="flex flex-col gap-1">
                <Image
                  width={50}
                  height={50}
                  src={team.image}
                  alt={team.title}
                  className="w-[100px] h-[100px] object-cover"
                  style={{ objectPosition: "top" }}
                />
                <h2 className="text-[#555555] font-semibold sm:text-lg text-base">
                  {team.name}
                </h2>
                <h2 className="text-[#306eb9] font-semibold sm:text-xl text-[15px]">
                  {team.title}
                </h2>
              </div>

              <div className="text-[#000000B3] text-[15px] w-full">
                {team.details}
              </div>

              <span className="font-semibold text-[#950b0bb3] sm:text-[17px] text-sm py-2">
                {t("MemberShip")}{" "}
              </span>
              <div className="w-full flex flex-col gap-3">
                {team.education.map((cert, i) => (
                  <ul
                    key={i}
                    className="text-sm sm:text-base list-disc flex flex-col gap-3 ml-4 ul-list"
                  >
                    <li className="mb-2">{cert.school}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroAbt;
