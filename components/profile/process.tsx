"use client";
import React from "react";
import { Button } from "../ui/button";
import Container from "../container";
import Lottie from "lottie-react";
import AnimateChat from "@/public/images/lottie/chat.json";
import { SafeUser } from "@/types";
import { useModal } from "@/hooks/use-modal-store";
import { useRouter } from "next/navigation";

interface ProcessProps {
  currentUser?: SafeUser | null;
  serverId?: string;
  supportId?: string | undefined;
}

const Process = ({ serverId, currentUser, supportId }: ProcessProps) => {
  const { onOpen } = useModal();
  const router = useRouter();

  const connectOfficer = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${serverId}/conversations/${supportId}`);
  };

  return (
    <div className="w-full p-4 bg-white shadow-md">
      <Container>
        <div className="flex flex-col items-center gap-10">
          <div className="font-bold text-center md:text-3xl text-green-500">
            Track Your Process
          </div>
          <div className="flex text-sm sm:text-lg mt-10 items-center justify-center text-center">
            It seems you haven&apos;t started your process with us yet. Would
            you like to get a free evaluation with one of our agents?
          </div>

          <Button
            onClick={connectOfficer}
            className="ml-6 text-base flex items-center "
            variant="primary"
            size="lg"
          >
            <Lottie
              animationData={AnimateChat}
              loop
              autoplay
              className="w-[50px] h-[50px]"
            />
            Start Free Evaluation
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Process;
