"use client";
import React from "react";

import { MdOutlineTrackChanges } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SafeMember, SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";
import ServerTool from "../server/server-tool";

interface ProfileSidebarProps {
  serverId?: string | "";
  agents?: SafeUser[] | null;
  supportLine: SafeMember | undefined;
  expiredVisa: SafeMember | undefined;
}

const ProfileSidebar = ({
  serverId,
  agents,
  supportLine,
  expiredVisa,
}: ProfileSidebarProps) => {
  const pathname = usePathname();
  return (
    <div className="w-full bg-white shadow-sm rounded-[10px] p-4 pt-8 mb-11">
      <Link
        href="/migrate-compass"
        className={cn(
          "flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full mb-4 py-2",
          pathname === "/migrate-compass"
            ? "bg-[#0559a8] !text-white pl-2"
            : "text-gray-600"
        )}
      >
        <RiTeamLine size={20} className="" />
        <span className=" md:block hidden pl-3">MGC</span>
      </Link>
      <Link
        href="/settings"
        className={cn(
          "flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full py-1",
          pathname === "/settings"
            ? "bg-[#0559a8] !text-white pl-2"
            : "text-gray-600"
        )}
      >
        <IoSettingsOutline size={20} className="" />
        <span className="pl-3">Settings</span>
      </Link>

      <Separator className=" w-[250px] my-2 h-[1px]" />

      <ServerTool
        serverId={serverId}
        supportLine={supportLine}
        expiredVisa={expiredVisa}
      />

      <Separator className=" w-[250px] my-2 h-[1px]" />

      <div className="text-xs my-1 uppercase font-bold text-zinc-500">
        Country Office
      </div>

      {agents &&
        agents.map((agent) => (
          <Link
            key={agent.id}
            href={`/servers/${serverId}/conversations/${agent.memberId}`}
            className={cn(
              "flex items-center hover:opacity-60 mb-4 transition duration-200 cursor-pointer w-full py-1",
              pathname ===
                `/servers/${serverId}/conversations/${agent.memberId}`
                ? "bg-[#0559a8] !text-white pl-2"
                : "text-gray-600"
            )}
          >
            <Image
              width={50}
              height={50}
              src={agent.imageUrl || require("@/public/images/care-line.png")}
              alt="care line"
              className="w-[30px] h-[30px] object-contain rounded-full"
            />
            <span className="pl-3">{agent.firstName}</span>
          </Link>
        ))}

      <Separator className=" w-[250px] my-2 h-[1px]" />

      <Link
        href="/track-process"
        className={cn(
          "flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full py-1",
          pathname === "/track-process"
            ? "bg-[#0559a8] !text-white pl-2"
            : "text-gray-600"
        )}
      >
        <MdOutlineTrackChanges size={20} className="" />
        <span className="pl-3">Track Process</span>
      </Link>

      {/* {currentUser ? (
        <div
          className="single_item flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full mb-4"
          onClick={() => signOut()}
        >
          <AiOutlineLogin size={20} className="" />
          <span className="md:block hidden pl-3">Logout</span>
        </div>
      ) : (
        <div
          className="single_item flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full mb-2"
          //   onClick={logoutHandler}
        >
          <AiOutlineLogin size={20} className="" />
          <span className="md:block hidden pl-3">Login</span>
        </div>
      )} */}
    </div>
  );
};

export default ProfileSidebar;
