"use client";

import { Member, MemberRole, Profile, Server } from "@prisma/client";
import { ShieldAlert, ShieldCheck } from "lucide-react";
import { useParams, usePathname, useRouter } from "next/navigation";

import { cn } from "@/lib/utils";
import { UserAvatar } from "@/components/user-avatar";
import Link from "next/link";
import Image from "next/image";

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

  // const icon = roleIconMap[member.role];

  const onClick = () => {
    router.push(`/servers/${params?.serverId}/conversations/${member.id}`);
  };

  return (
    <div className="flex flex-col gap-3">
      <Link
        href={member.id}
        key={member.id}
        onClick={onClick}
        className={cn(
          "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition mb-1",
          pathname ===
            `/servers/${params?.serverId}/conversations/${member.id}` &&
            "!bg-zinc-700/20"
        )}
      >
        <UserAvatar
          src={member.profile.imageUrl ?? ""}
          className="h-8 w-8 md:h-8 md:w-8"
        />
        <p
          className={cn(
            "font-semibold sm:text-sm text-[11px] text-zinc-500 group-hover:text-zinc-600 dark:text-zinc-400 dark:group-hover:text-zinc-300 transition",
            params?.memberId === member.id &&
              "text-primary dark:text-zinc-200 dark:group-hover:text-white"
          )}
        >
          {member.profile.firstName}
        </p>
        <div className="ml-auto">
          <Image
            width={50}
            height={50}
            src={require("@/public/images/care-line.png")}
            alt="care line"
            className="sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] object-contain rounded-full"
          />
        </div>
      </Link>
    </div>
  );
};
