"use client";
import React from "react";
import Benefit from "./category/benefit";
import Container from "../container";
import { Processes } from "@/lib/data";
import Image from "next/image";
import { Button } from "../ui/button";
import Lottie from "lottie-react";
import AnimateChat from "@/public/images/lottie/chat.json";
import AnimateProcess from "@/public/images/lottie/process.json";
import Cases from "./category/cases";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
import { useModal } from "@/hooks/use-modal-store";
import { useTranslations } from "next-intl";

interface ProcessProps {
  currentUser?: SafeUser | null;
  expiredVisa?: string | undefined;
  supportId?: string | undefined;
  existingServer?: string | undefined;
}

const Process = ({
  currentUser,
  expiredVisa,
  supportId,
  existingServer,
}: ProcessProps) => {
  const { onOpen } = useModal();
  const router = useRouter();

  const connectOfficer = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${existingServer}/conversations/${supportId}`);
  };

  const c = useTranslations("translate.common");
  const t = useTranslations("translate.workProcess");

  return (
    <div className="relative">
      <Container>
        <Benefit connectOfficer={connectOfficer} />
      </Container>

      <div className="bg-[#055AAA] w-full">
        <Cases
          currentUser={currentUser}
          expiredVisa={expiredVisa}
          supportId={supportId}
          existingServer={existingServer}
        />
      </div>
      <Container>
        <div className="mt-10">
          <div className="flex items-center gap-4">
            <Lottie
              animationData={AnimateProcess}
              loop
              autoplay
              className="w-[100px] h-[100px]"
            />
            <h1 className="sm:text-2xl text-lg font-bold sm:text-center text-gray-600 z-10">
              {t("Title")}{" "}
            </h1>
          </div>

          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 2xl:grid-cols-3">
            {Processes().map((data, i) => (
              <div
                key={i}
                className="rounded-md shadow-lg hover:shadow-lg p-3 transition flex flex-col gap-3 bg-[#8DBBE2]"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-slate-100 rounded-full p-1 flex items-center justify-center">
                    <Image
                      width={50}
                      height={50}
                      src={data.image}
                      alt={data.title}
                      className="w-[30px] h-[30px] object-contain rounded-full"
                    />
                  </div>
                  <h2 className="text-white font-bold text-base my-2">
                    {data.title}
                  </h2>
                </div>

                <div className="text-slate-50 text-[15px] overflow-y-scroll  w-full">
                  {data.details}
                </div>
              </div>
            ))}
          </div>

          <Button
            onClick={connectOfficer}
            className="mt-4 ml-6 flex items-center "
            variant="button"
            size="lg"
          >
            <Lottie
              animationData={AnimateChat}
              loop
              autoplay
              className="w-[50px] h-[50px]"
            />
            {c("chatWithUs")}{" "}
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Process;
