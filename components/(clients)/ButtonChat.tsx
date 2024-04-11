"use client";
import React from "react";
import { Button } from "../ui/button";
import { SafeUser } from "@/types";
import { useModal } from "@/hooks/use-modal-store";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface ButtonChatProps {
  currentUser?: SafeUser | null;
  supportId?: string | undefined;
  existingServer?: string | undefined;
}
const ButtonChat = ({
  currentUser,
  supportId,
  existingServer,
}: ButtonChatProps) => {
  const { onOpen } = useModal();
  const router = useRouter();

  const difficultCases = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${existingServer}/conversations/${supportId}`);
  };

  const c = useTranslations("translate.common");

  return (
    <div>
      <p className="text-sm md:text-base mt-3 text-red-500">{c("needHelp")} </p>
      <Button
        onClick={difficultCases}
        variant="outline"
        size="default"
        className="mt-2"
      >
        {c("chatOfficer")}{" "}
      </Button>
    </div>
  );
};

export default ButtonChat;
