"use client";
import React from "react";
import AnimateVVIP from "@/public/images/lottie/vvip.json";
import AnimateCrown from "@/public/images/lottie/crown.json";
import Lottie from "lottie-react";
import Image from "next/image";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useTranslations } from "next-intl";

interface CasesProps {
  currentUser?: SafeUser | null;
  expiredVisa?: string | undefined;
  supportId?: string | undefined;
  existingServer?: string | undefined;
}

const Cases = ({
  currentUser,
  expiredVisa,
  supportId,
  existingServer,
}: CasesProps) => {
  const { onOpen } = useModal();
  const router = useRouter();
  const c = useTranslations("translate.common");

  const connectOfficer = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${existingServer}/conversations/${supportId}`);
  };

  const difficultCases = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${existingServer}/conversations/${expiredVisa}`);
  };

  return (
    <div className="relative w-full h-full pt-2 pb-4">
      <Image
        fill
        style={{ objectPosition: "bottom 80%" }}
        src={require("@/public/images/shining-map.jpg")}
        className="absolute top-10 w-full h-full object-cover opacity-90"
        alt="Planet"
      />
      <div className="absolute bottom-0 left-0 w-full h-full bg-black/60"></div>

      <div className="flex flex-col items-center justify-center gap-2 relative z-10">
        <div className="flex items-center flex-row gap-1">
          <h1 className="sm:text-2xl text-xl font-bold text-slate-50">
            {c("premium")}
          </h1>
          <span className="sm:text-4xl text-xl text-white  font-extrabold">
            {c("services")}
          </span>
        </div>

        <div className="flex gap-6 items-center">
          <div
            onClick={connectOfficer}
            className="flex flex-col justify-center items-center sm:gap-4 gap-2"
          >
            <Lottie
              animationData={AnimateCrown}
              loop
              autoplay
              className="sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]"
              // style={{ height: 10, width: 150 }}
            />{" "}
            <h1 className="sm:text-2xl text-base text-white font-semibold text-center">
              {" "}
              {c("visaPremium")}
            </h1>
            <h2 className="text-sm font-semibold shadow-lg hover:shadow-sm text-white hover:bg-blue-500 transition duration-200 ease-in bg-blue-600 px-2 py-2 rounded-md cursor-pointer">
              {c("regularCases")}
            </h2>
          </div>

          <span className="w-[3px] h-[40px] sm:h-[80px] bg-yellow-400" />

          <div
            onClick={difficultCases}
            className="flex flex-col justify-center items-center gap-2 sm:gap-4"
          >
            <Lottie
              animationData={AnimateVVIP}
              loop
              autoplay
              className="sm:w-[100px] sm:h-[100px] w-[80px] h-[80px]"
              // style={{ height: 10, width: 150 }}
            />{" "}
            <h1 className="sm:text-2xl text-base text-white font-semibold text-center">
              {c("visaTopPremium")}
            </h1>
            <h2 className="text-sm text-white font-semibold shadow-lg hover:shadow-sm bg-red-600 hover:bg-red-500 transition duration-200 ease-in px-2 py-2 rounded-md cursor-pointer">
              {c("problematicCases")}{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cases;
