import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";
import { currentProfile } from "@/lib/current-profile";

const SetupPage = async () => {
  const profile = await currentProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });

  const member = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile?.id,
          profile: {
            firstName: "Support Line",
          },
        },
      },
    },
  });

  if (server) {
    return redirect(`/servers/${server.id}/conversations/${member}`);
  }

  return <InitialModal profile={profile} />;
};

export default SetupPage;
