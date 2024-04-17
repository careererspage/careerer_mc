"use client";
import React from "react";
import { Button } from "../ui/button";
import Container from "../container";
import Lottie from "lottie-react";
import AnimateChat from "@/public/images/lottie/chat.json";
import { SafeUser } from "@/types";
import { FaRegUserCircle } from "react-icons/fa";
import { useModal } from "@/hooks/use-modal-store";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface MigrateProps {
  currentUser?: SafeUser | null;
  serverId?: string;
  supportId?: string | undefined;
}

const MigrateContent = ({ currentUser, serverId, supportId }: MigrateProps) => {
  const { onOpen } = useModal();
  const router = useRouter();

  const connectOfficer = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${serverId}/conversations/${supportId}`);
  };

  const t = useTranslations("translate.profileMGCPage");

  return (
    <div className="w-full md:ml-6 sm:px-4 sm:py-4 py-2 px-1 bg-white shadow-md">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <div className="font-bold text-center md:text-3xl text-gray-500">
            {t("header")}
          </div>

          <div className="sm:!text-base text-sm font-normal sm:!leading-8 !leading-8">
            <div className="font-bold text-[#055AAA]">{t("header1")}</div>

            <p>{t("paragraph1")}</p>
          </div>

          <div className="">
            <h1 className="mt-6 text-[#055AAA] font-bold">{t("header2")}</h1>
            <ul className="list-disc sm:text-base text-sm ml-4 mt-3">
              <li className="mb-2">
                <span className="font-semibold">
                  {t("services.listHeader1")}
                </span>{" "}
                {t("services.list1")}
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  {t("services.listHeader2")}
                </span>{" "}
                {t("services.list2")}
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  {t("services.listHeader3")}
                </span>{" "}
                {t("services.list3")}
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  {t("services.listHeader4")}
                </span>{" "}
                {t("services.list4")}
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  {t("services.listHeader5")}
                </span>{" "}
                {t("services.list5")}
              </li>
              <li className="mb-2">
                <span className="font-semibold">
                  {t("services.listHeader6")}
                </span>{" "}
                {t("services.list6")}
              </li>
              <li>
                <span className="font-semibold">
                  {t("services.listHeader7")}
                </span>{" "}
                {t("services.list7")}
              </li>
            </ul>
          </div>

          <div className="my-2 w-full h-[1px] bg-indigo-500" />
          {!currentUser?.process && (
            <div className="flex flex-col justify-center">
              <div className="flex md:!text-lg text-sm items-center justify-center">
                {t("header3")}
              </div>

              <Button
                className="sm:ml-6 mt-4 flex gap-4 sm:gap-10 items-center justify-center w-[330px]"
                variant="primary"
                size="lg"
                onClick={connectOfficer}
              >
                <Lottie
                  animationData={AnimateChat}
                  loop
                  autoplay
                  className="w-[50px] h-[50px]"
                />
                <h1 className="text-sm sm:text-base">{t("evaluation")}</h1>
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MigrateContent;
