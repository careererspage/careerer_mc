import ContactPage from "@/components/(clients)/ContactPage";
import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Footer from "@/components/Footer";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import React from "react";

const Contact = async () => {
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

  return (
    <div className="w-full">
      <Navbar
        currentUser={currentUser}
        supportId={support?.id}
        serverId={existingServer?.id}
      />
      <GeneralHero
        ImageUrl={require("@/public/images/hero/Call.jpg")}
        center
        chatAgent
        title="Connect
        with us directly through "
        subTitle="the chat feature on your free account."
      />
      <ContactPage
        currentUser={currentUser}
        supportId={support?.id}
        serverId={existingServer?.id}
      />
      <Footer
        currentUser={currentUser}
        existingServer={existingServer?.id}
        expiredVisa={expiredVisa?.id}
        supportId={support?.id}
      />
    </div>
  );
};

export default Contact;
