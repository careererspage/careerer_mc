"use client";
import React from "react";
import { Button } from "../ui/button";
import { SafeUser } from "@/types";
import { useModal } from "@/hooks/use-modal-store";
import { useRouter } from "next/navigation";

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

  return (
    <div>
      <p className="text-sm md:text-base mt-3 text-red-500">
        Need the help of an Expert?
      </p>
      <Button
        onClick={difficultCases}
        variant="outline"
        size="default"
        className="mt-2"
      >
        Chat with Expert
      </Button>
    </div>
  );
};

export default ButtonChat;
