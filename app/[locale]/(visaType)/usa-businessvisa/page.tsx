import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Container from "@/components/container";
import React from "react";
import Footer from "@/components/Footer";
import Cases from "@/components/(clients)/category/cases";
import ServiceCard from "@/components/(clients)/serviceCard";
import Review from "@/components/(clients)/category/review";
import AnimateFaq from "@/public/images/lottie/faq.json";
import ButtonChat from "@/components/(clients)/ButtonChat";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { getTranslations } from "next-intl/server";

const page = async () => {
  const currentUser = await currentProfile();

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: "cd8cdd9f-a6ea-4b61-a06a-ead537c99ad5",
      members: {
        some: {
          profileId: currentUser?.id,
        },
      },
    },
    include: {
      members: {
        include: {
          profile: true,
        },
      },
    },
  });

  const expiredVisa = existingServer?.members.find(
    (member) => member.profile?.firstName === "Expired Visa"
  );
  const support = existingServer?.members.find(
    (member) => member.profile?.firstName === "Support Line"
  );

  const t = await getTranslations("translate.usaBusinessPage");

  return (
    <div>
      <Navbar
        currentUser={currentUser}
        serverId={existingServer?.id}
        supportId={support?.id}
      />
      <GeneralHero
        ImageUrl={require("@/public/images/hero/farm.jpg")}
        title={t("heroHeader")}
        subTitle={t("heroSubHeader")}
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-4 mt-10 relative">
          <ServiceCard
            currentUser={currentUser}
            existingServer={existingServer?.id}
            supportId={support?.id}
            title={t("serviceCard.header")}
            listItems={[
              t("serviceCard.headerDetails1"),
              t("serviceCard.headerDetails2"),
              t("serviceCard.headerDetails3"),
            ]}
          />

          <div>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              {t("header1")}
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              {t("paragraph1")}
            </p>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              {t("paragraph2")}
            </p>
            <p
              className="text-[#2C2C2C] text-sm mt-2 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              {t("paragraph3")}
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              {t("header2")}
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              {t("headerDetail2")}
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              {t("header3")}
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              {t("headerDetail3")}
            </p>
            <p
              className="text-[#2C2C2C] text-sm mt-2 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              {t("headerDetail4")}
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              {t("header4")}
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              {t("paragraph4")}
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              {t("header5")}
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc flex flex-col gap-3 ml-4 ul-list"
            >
              <li>{t("Eligibility.list1")} </li>
              <li>{t("Eligibility.list2")} </li>
              <li>{t("Eligibility.list3")} </li>
              <li>{t("Eligibility.list4")} </li>
              <li>{t("Eligibility.list5")} </li>
              <li>{t("Eligibility.list6")} </li>
            </ul>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              {t("header6")}
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc flex flex-col gap-3 ml-4 ul-list"
            >
              <li> {t("Benefits.list1")}</li>
              <li> {t("Benefits.list2")}</li>
              <li>{t("Benefits.list3")}</li>
              <li> {t("Benefits.list4")}</li>
              <li>{t("Benefits.list5")}</li>
              <li>{t("Benefits.list6")}</li>
            </ul>
            <h1 className="font-bold text-lg mt-4 text-[#055AAA]">
              {t("header7")},
            </h1>{" "}
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              {t("paragraph7")}
            </p>
            <h1 className="font-bold text-lg mt-4 text-[#055AAA]">
              {t("header8")}
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              {t("paragraph8")}
            </p>
            <ButtonChat
              currentUser={currentUser}
              existingServer={existingServer?.id}
              supportId={support?.id}
            />
            <p
              className="text-[#2C2C2C] text-sm sm:!text-base mt-3"
              style={{ lineHeight: "1.8" }}
            >
              {t("Header8")}
            </p>
          </div>
        </div>
      </Container>
      <div className="mt-6">
        <Review
          Animate={AnimateFaq}
          title={t("reviews.title")}
          list1={t("reviews.list1")}
          list2={t("reviews.list2")}
          list3={t("reviews.list3")}
          href="/reviews"
        />
      </div>
      <div className="mt-6">
        <Cases
          currentUser={currentUser}
          expiredVisa={expiredVisa?.id}
          supportId={support?.id}
          existingServer={existingServer?.id}
        />
      </div>
      <Footer
        currentUser={currentUser}
        existingServer={existingServer?.id}
        supportId={support?.id}
        expiredVisa={expiredVisa?.id}
      />
    </div>
  );
};

export default page;
