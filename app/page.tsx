import { currentProfile } from "@/lib/current-profile";
import HomeClient from "./HomeClient";
import { db } from "@/lib/db";

const HomePage = async () => {
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
    <HomeClient
      currentUser={currentUser}
      expiredVisa={expiredVisa?.id}
      support={support?.id}
      existingServer={existingServer?.id}
    />
  );
};

export default HomePage;
