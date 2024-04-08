import Navbar from "@/components/(clients)/navbar";
import ReviewsClient from "@/components/(clients)/reviewsClient";
import Footer from "@/components/Footer";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import React from "react";

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
        supportId={support?.id}
        serverId={existingServer?.id}
      />
      <ReviewsClient
        currentUser={currentUser}
        existingServer={existingServer?.id}
        supportId={support?.id}
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

export default page;
