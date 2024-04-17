"use client";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { FcCallback, FcCustomerSupport, FcExpired } from "react-icons/fc";
import { cn } from "@/lib/utils";
import { SafeMember } from "@/types";
import { usePathname } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";

interface ServerToolProps {
  serverId?: string | "";
  profilePage?: boolean;
  supportLine: SafeMember | undefined;
  expiredVisa: SafeMember | undefined;
}
const ServerTool = ({
  supportLine,
  expiredVisa,
  serverId,
  profilePage,
}: ServerToolProps) => {
  const pathname = usePathname();
  const { onOpen } = useModal();

  return (
    <div>
      {!profilePage && (
        <Link
          href="/migrate-compass"
          className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition cursor-pointer"
        >
          <CgProfile size={20} className="text-green-600" />
          <span className="font-semibold sm:text-sm text-[12px] text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
            Profile
          </span>
        </Link>
      )}

      <div
        onClick={() => onOpen("consultaion", { serverId, supportLine })}
        className="group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition cursor-pointer"
      >
        <FcCallback size={20} className="text-zinc-500" />
        <span className="font-semibold sm:text-sm text-[12px] text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
          Book call section
        </span>
      </div>

      <Link
        href={`/servers/${serverId}/conversations/${supportLine?.id}`}
        className={cn(
          "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition cursor-pointer",
          pathname ===
            `/servers/${serverId}/conversations/${supportLine?.id}` &&
            "bg-zinc-700/20"
        )}
      >
        <FcCustomerSupport size={20} className="text-zinc-500" />
        <span className="font-semibold sm:text-sm text-[12px] text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
          {supportLine?.profile?.firstName}
        </span>
      </Link>

      <Link
        href={`/servers/${serverId}/conversations/${expiredVisa?.id}`}
        className={cn(
          "group px-2 py-2 rounded-md flex items-center gap-x-2 w-full hover:bg-zinc-700/10 dark:hover:bg-zinc-700/50 transition cursor-pointer",
          pathname ===
            `/servers/${serverId}/conversations/${expiredVisa?.id}` &&
            "bg-zinc-700/20"
        )}
      >
        <FcExpired size={20} className="text-zinc-500" />
        <span className="font-semibold sm:text-sm text-[12px] text-zinc-500 dark:text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300 transition">
          {expiredVisa?.profile?.firstName}
        </span>
      </Link>
    </div>
  );
};

export default ServerTool;
