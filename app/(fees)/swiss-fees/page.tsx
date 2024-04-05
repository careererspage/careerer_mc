import React from "react";
import Navbar from "@/components/(clients)/navbar";
import Footer from "@/components/Footer";
import SwissCharges from "@/components/(clients)/swiss-charges";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

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

  return (
    <div>
      <Navbar
        currentUser={currentUser}
        serverId={existingServer?.id}
        supportId={support?.id}
      />
      <SwissCharges
        currentUser={currentUser}
        serverId={existingServer?.id}
        supportId={support?.id} />
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
