import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import AnimateFaq from "@/public/images/lottie/faq.json";
import React from "react";
import Footer from "@/components/Footer";
import Cases from "@/components/(clients)/category/cases";
import ServiceCard from "@/components/(clients)/serviceCard";
import Review from "@/components/(clients)/category/review";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import ButtonChat from "@/components/(clients)/ButtonChat";
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

  const t = await getTranslations("translate.r1-BasedVisaPage");
  const c = await getTranslations("translate.common");

  return (
    <div>
      <Navbar
        currentUser={currentUser}
        supportId={support?.id}
        serverId={existingServer?.id}
      />
      <GeneralHero
        ImageUrl={require("@/public/images/hero/religion.jpg")}
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

            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              {t("header2")}
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc ml-6 mb-4"
            >
              <li>{t("Benefits.list1")}</li>
              <li>{t("Benefits.list2")}</li>
              <li>{t("Benefits.list3")}</li>
              <li>{t("Benefits.list4")}</li>
            </ul>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              {t("header3")}
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc ml-6 mb-4"
            >
              <li>{t("Requirements.list1")}</li>
              <li>{t("Requirements.list2")}</li>
              <li>{t("Requirements.list3")}</li>
              <li>{t("Requirements.list4")}</li>
            </ul>

            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              {t("Header4")}
            </h1>
            <ul
              style={{ lineHeight: 1.8 }}
              className="text-sm mt-1 sm:!text-base list-disc ml-6 mb-4"
            >
             <li>{t("Process.list1")}</li>
              <li>{t("Process.list2")}</li>
              <li>{t("Process.list3")}</li>
              <li>{t("Process.list4")}</li>
              <li>{t("Process.list5")}</li>
              <li>{t("Process.list6")}</li>
              <li>{t("Process.list7")}</li>
            </ul>

            <ButtonChat
              currentUser={currentUser}
              existingServer={existingServer?.id}
              supportId={support?.id}
            />
            <p className="text-[#2C2C2C] text-sm sm:!text-base mt-3">
             {t("paragraph")}
            </p>
          </div>
        </div>
      </Container>
      <div className="mt-6">
        <Review
          Animate={AnimateFaq}
          title={c("reviews")}
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
