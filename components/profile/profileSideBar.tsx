"use client";
import React from "react";
import { AiOutlineLogin, AiOutlineMessage } from "react-icons/ai";
import { HiOutlineReceiptRefund, HiOutlineShoppingBag } from "react-icons/hi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineSupportAgent,
  MdOutlineTrackChanges,
} from "react-icons/md";
import {
  RiLockPasswordLine,
  RiPassExpiredLine,
  RiTeamLine,
} from "react-icons/ri";
import { TbAddressBook } from "react-icons/tb";
import { RxPerson } from "react-icons/rx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import { Separator } from "../ui/separator";
import Image from "next/image";
import { IoSettingsOutline } from "react-icons/io5";

interface ProfileSidebarProps {
  currentUser?: SafeUser | null;
}

const ProfileSidebar = ({ currentUser }: ProfileSidebarProps) => {
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

      <Link
        href="/support"
        className={cn(
          "flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full py-1",
          pathname === "/support"
            ? "bg-[#0559a8] !text-white pl-2"
            : "text-gray-600"
        )}
      >
        <MdOutlineSupportAgent size={20} className="" />
        <span className="pl-3">Support Line</span>
      </Link>

      <Separator className=" w-[250px] my-2 h-[1px]" />

      <Link
        href="/problematic-cases"
        className={cn(
          "flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full",
          pathname === "/problematic-cases"
            ? "bg-[#0559a8] !text-white pl-2"
            : "text-gray-600"
        )}
      >
        <RiPassExpiredLine size={20} className="" />
        <span className="pl-3">Problematic / Expired Visa</span>
      </Link>

      <Separator className=" w-[250px] my-2 h-[2px]" />

      <div className="w-full my-1 font-bold py-1 ml-4 block">Agents</div>

      <Separator className=" w-[250px] my-2 h-[2px]" />

      <Link
        // href={`/server${serverId}/conversation/${conversationId}/switzerland-agent`}
        href={`/server`}
        className={cn(
          "flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full py-1",
          pathname === "/swiss-agent"
            ? "bg-[#0559a8] !text-white pl-2"
            : "text-gray-600"
        )}
      >
        <Image
          width={50}
          height={50}
          src={require("@/public/images/care-line.png")}
          alt="care line"
          className="w-[30px] h-[30px] object-contain rounded-full"
        />
        <span className="pl-3">Switzerland Agent</span>
      </Link>

      <Separator className=" w-[250px] my-2 h-[1px]" />

      <Link
        href="/usa-agent"
        className={cn(
          "flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full py-1",
          pathname === "/usa-agent"
            ? "bg-[#0559a8] !text-white pl-2"
            : "text-gray-600"
        )}
      >
        <Image
          width={50}
          height={50}
          src={require("@/public/images/care-line.png")}
          alt="care line"
          className="w-[30px] h-[30px] object-contain rounded-full"
        />
        <span className="pl-3">U.S.A 2</span>
      </Link>

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
