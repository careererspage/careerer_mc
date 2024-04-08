import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Quote = () => {
  const t = useTranslations("navbar.homePage");

  return (
    <div className="w-full">
      <div
        className="text-zinc-500 sm:text-2xl text-center md:text-3xl text-xl font-extrabold sm:leading-[60px] mb-2 mt-4 w-full"
        style={{ lineHeight: 1.2 }}
      >
        {t("title")} <span className="text-[#e67121]"> Expertise </span>
        Delivered
      </div>
      <div className="grid lg:!items-center lg:grid-cols-[35%,65%] grid-cols-1 gap-5 mt-10 mb-6 w-full px-5">
        <Image
          src={require("@/public/images/team/meeting.jpg")}
          className="w-full h-[250px] object-cover"
          alt="team"
        />
        <div>
          <div className="text-zinc-500 sm:!text-base text-sm font-normal sm:!leading-8 !leading-8">
            <div className="font-bold">{t("intoTitle")}</div>
            {t("intro")} 😊
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
