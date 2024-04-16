import React from "react";
import { Button } from "../ui/button";
import Container from "../container";
import Image from "next/image";
import { Regions } from "@/lib/data";
import { useRouter } from "next/navigation";
import { SafeUser } from "@/types";
import { useModal } from "@/hooks/use-modal-store";
import { useTranslations } from "next-intl";

interface HomeClientProps {
  currentUser?: SafeUser | null;
  supportId?: string | undefined;
  existingServer?: string | undefined;
}

const Region = ({
  currentUser,
  supportId,
  existingServer,
}: HomeClientProps) => {
  const router = useRouter();
  const { onOpen } = useModal();
  const t = useTranslations("translate.homeQuote");
  const c = useTranslations("translate.common");

  const supportLine = (region: string) => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${existingServer}/conversations/${supportId}`);
  };

  return (
    <Container>
      <div className="">
        <h1 className="w-full leading-7 text-zinc-500 font-semibold sm:font-bold text-sm sm:!text-base">
          {t("thisAre")}{" "}
          <span className="text-orange-500">{t("coreRegions")}</span>{" "}
          {t("specialPlace")}{" "}
          <span className="text-orange-500">{t("teamMembers")}</span>{" "}
          {t("inNations")}{" "}
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-4">
          {Regions().map((region, index) => (
            <div
              key={index}
              className="bg-white shadow-md text-zinc-500 flex flex-col gap-1 items-center rounded p-4"
            >
              <Image
                width={100}
                height={100}
                quality={100}
                src={region.image}
                alt={region.country}
                className="w-full h-[90px] object-cover"
              />
              <h1 className="text-[18px] text-zinc-600 font-bold">
                {region.country}
              </h1>
              <p className="text-sm text-zinc-500">{region.comment}</p>
              <Button
                onClick={() => supportLine(`${region.country}`)}
                variant="button"
                size="icon"
                className="w-full mt-auto"
              >
                {c("chatOfficer")}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Region;
