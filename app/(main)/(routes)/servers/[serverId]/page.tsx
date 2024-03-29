import { redirect } from "next/navigation";

import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

interface ServerIdPageProps {
  params: {
    serverId: string;
  };
}

const ServerIdPage = async ({ params }: ServerIdPageProps) => {
  const profile = await currentProfile();

  if (!profile) {
    return redirect("/");
  }

  const server = await db.server.findFirst({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: profile?.id,
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

  if (!server) {
    // Handle the case where no server is found
    return null;
  }

  const supportLineMember = server.members.find(
    (member) => member.profile.firstName === "Support Line"
  );

  if (!supportLineMember) {
    return null;
  }

  return redirect(
    `/servers/${params.serverId}/conversations/${supportLineMember.id}`
  );
};

export default ServerIdPage;
