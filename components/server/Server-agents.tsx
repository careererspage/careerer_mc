"use client";

import { Member, MemberRole, Profile, Server } from "@prisma/client";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import Link from "next/link";

interface ServerAgentsProps {
  member: Member & { profile: Profile };
  server: Server;
}

const roleIconMap = {
  [MemberRole.GUEST]: null,
  [MemberRole.MODERATOR]: (
    <ShieldCheck className="h-4 w-4 ml-2 text-indigo-500" />
  ),
  [MemberRole.ADMIN]: <ShieldAlert className="h-4 w-4 ml-2 text-rose-500" />,
};

export const ServerAgents = ({ member, server }: ServerAgentsProps) => {
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const icon = roleIconMap[member.role];

  const onClick = () => {
    router.push(
      `/servers/${params?.serverId}/conversations/${member.id}/canada-agent`
    );
  };

  const AgentLinks = [
    {
      title: "USA Agent",
      href: `/servers/${params?.serverId}/conversations/${member.id}/usa-agent`,
    },
    {
      title: "Switzerland Agent",
      href: `/servers/${params?.serverId}/conversations/${member.id}/switzerland-agent`,
    },
    {
      title: "Canada Agent",
      href: `/servers/${params?.serverId}/conversations/${member.id}/canada-agent`,
    },
    {
      title: "Australian Agent",
      href: `/servers/${params?.serverId}/conversations/${member.id}/australian-agent`,
    },
  ];

  return (
    <div className="flex flex-col gap-3">
      {AgentLinks.map((agent, i) => (
        <Link
          href={agent.href}
          key={i}
          onClick={onClick}
          className={cn(
            "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
            params?.memberId === member.id &&
              pathname === agent.href &&
              "bg-zinc-700/20 dark:bg-zinc-700"
          )}
        >
          <UserAvatar
            src={member.profile.imageUrl}
            className="h-8 w-8 md:h-8 md:w-8"
          />
          <p
            className={cn(
              "font-semibold text-sm text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
              params?.memberId === member.id &&
                "text-primary dark:text-zinc-200 dark:group-hover:text-white"
            )}
          >
            {agent.title}{" "}
          </p>
          {icon}
        </Link>
      ))}
    </div>
  );
};
