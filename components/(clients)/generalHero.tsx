"use client";
import Lottie from "lottie-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import AnimateChat from "@/public/images/lottie/chat.json";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface GeneralProps {
  title: string;
  center?: boolean;
  subTitle?: string;
  chatAgent?: boolean;
  subTitle1?: string;
  ImageUrl: string;
}

const GeneralHero = ({
  title,
  center,
  chatAgent,
  subTitle,
  subTitle1,
  ImageUrl,
}: GeneralProps) => {
  const router = useRouter();
  const c = useTranslations("translate.common");

  return (
    <div>
      <div className="relative w-full h-[500px] overflow-hidden mt-14">
        <Image
          fill
          style={{ objectPosition: "bottom 80%" }}
          src={ImageUrl}
          className="absolute top-0 w-full h-full object-cover opacity-90"
          alt="general picture"
        />
        <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-black/50 to-black/90"></div>
        <div className="absolute bottom-10 left-0 md:px-20 px-4 w-full z-20">
          <h2
            className={` ${
              center ? "text-center" : ""
            } md:text-3xl sm:text-2xl text-xl text-center font-bold text-white mb-2`}
          >
            {title}
          </h2>
          <p
            className={` ${
              center ? "text-center" : ""
            }  text-center w-full font-extrabold text-[#6bb7fe] mb-2 sm:text-2xl text-lg `}
          >
            {subTitle}
          </p>
          <p className="sm:text-xl text-lg sm:font-bold font-semibold w-full text-center text-orange-400">
            {subTitle1}
          </p>
          {chatAgent && (
            <div
              className="w-full flex items-center justify-center"
              onClick={() =>
                router.push(
                  "/servers/66edbb5c-de49-42d2-a842-4a77074f0f03/conversations/9fe2cb6c-7383-4a60-a7d2-39ec373f4734"
                )
              }
            >
              <Button
                className="ml-6 flex items-center"
                variant="primary"
                size="lg"
              >
                <Lottie
                  animationData={AnimateChat}
                  loop
                  autoplay
                  className="w-[50px] h-[50px]"
                />
                {c("supportLine")}{" "}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GeneralHero;
