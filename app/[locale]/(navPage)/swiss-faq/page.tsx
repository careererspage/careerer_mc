import Cases from "@/components/(clients)/category/cases";
import FaqPage from "@/components/(clients)/faqPage";
import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Footer from "@/components/Footer";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { SwissFaq } from "@/lib/faqData";
import { getTranslations } from "next-intl/server";
import React from "react";

const page = async () => {
  const t = await getTranslations("translate.swissFaqPage");
  const faqData = await SwissFaq();

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

  const support = existingServer?.members.find(
    (member) => member.profile?.firstName === "Support Line"
  );

  return (
    <div>
      <Navbar
        supportId={support?.id}
        serverId={existingServer?.id}
        currentUser={currentUser}
      />
      <GeneralHero
        ImageUrl={require("@/public/images/hero/faq.jpg")}
        title={t("headingText1")}
        subTitle={t("subHeadingText1")}
        subTitle1={t("subHeadingDetails1")}
        chatAgent
      />
      <FaqPage data={faqData} />
      <div className="mt-6">
        <Cases />
      </div>
      <Footer />
    </div>
  );
};

export default page;
