import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";
import { ServerSidebar } from "@/components/server/server-sidebar";
import ProfileSidebar from "@/components/profile/profileSideBar";
import Navbar from "@/components/(clients)/navbar";
import { Agent } from "http";

const ServerIdLayout = async ({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { serverId: string };
}) => {
  const currentUser = await currentProfile();

  if (!currentUser) {
    return redirect("/");
  }

  const server = await db.server.findFirst({
    where: {
      id: params.serverId,
      members: {
        some: {
          profileId: currentUser.id,
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
    return null;
  }

  const supportLine = server?.members.find(
    (member) => member.profile?.firstName === "Support Line"
  );

  const expiredVisa = server?.members.find(
    (member) => member.profile?.firstName === "Expired Visa"
  );

  const agents = server?.members.filter((member) => {
    return (
      member.role === "ADMIN" &&
      member.profile.firstName !== "Support Line" &&
      member.profile.firstName !== "Expired Visa" &&
      member.profile.firstName !== "Process Payment"
    );
  });
  return (
    <div className="mb-20 overflow-hidden">
      <Navbar
        currentUser={currentUser}
        profileMenu
        serverId={server.id}
        supportLine={supportLine}
        expiredVisa={expiredVisa}
        agents={agents.map((agent) => ({
          ...agent.profile,
          memberId: agent.id,
        }))}
      />
      <div className="w-11/12 mt-20 mx-auto flex sm:gap-10 bg-[#f5f5f5] py-10 ">
        <div className="hidden md:block w-[50px] md:w-[305px] md:mt-0 ">
          <ProfileSidebar
            supportLine={supportLine}
            expiredVisa={expiredVisa}
            serverId={server.id}
            agents={agents.map((agent) => ({
              ...agent.profile,
              memberId: agent.id,
            }))}
          />
        </div>
        <main className="mx-auto">{children}</main>
      </div>
    </div>
  );
};

export default ServerIdLayout;
