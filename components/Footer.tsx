"use client";
import React from "react";
import Container from "./container";
import Link from "next/link";
import { SafeUser } from "@/types";
import { useModal } from "@/hooks/use-modal-store";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

interface FooterProps {
  currentUser?: SafeUser | null;
  expiredVisa?: string | undefined;
  existingServer?: string | undefined;
  supportId?: string | undefined;
}

const Footer = ({
  currentUser,
  expiredVisa,
  supportId,
  existingServer,
}: FooterProps) => {
  const { onOpen } = useModal();
  const router = useRouter();

  const supportLine = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${existingServer}/conversations/${supportId}`);
  };

  const difficultCases = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${existingServer}/conversations/${expiredVisa}`);
  };

  const c = useTranslations("translate.common");

  return (
    <div className="py-10 mt-10 bg-[#112e5f]">
      <Container>
        <hr className="mt-10 border border-t" />
        <div className="flex sm:!flex-row flex-col sm:justify-center gap-10 mt-10">
          <div className="flex flex-col gap-3 w-full sm:w-[321px]">
            <h1 className="text-3xl font-bold text-gray-100">
              Migrate Compass
            </h1>
            <div className="text-sm text-white">
              Copyright © 2005-2024 Migrate Compass ®
            </div>
            <p
              className="text-sm text-gray-300 leading-10"
              style={{ lineHeight: 1.8 }}
            >
              {c("migrateDetails")}
            </p>
          </div>

          <div className="grid grid-cols-3 w-full gap-3 sm:text-base text-[12px] text-gray-300">
            <ul className="flex flex-col gap-3">
              <Link
                href="/about"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                About Us
              </Link>

              <Link
                href="/reviews"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Reviews
              </Link>
              <Link
                href="/privacy"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Terms
              </Link>
              <h1 className="font-bold underline">Faq</h1>

              <Link
                href="/swiss-faq"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Swiss faq
              </Link>
              <Link
                href="/usa-faq"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                U.S.A faq
              </Link>
            </ul>

            <ul className="flex flex-col gap-3">
              <h1 className="font-bold underline">Payment Plan</h1>
              <Link
                href="/usa-fees"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                U.S.A fees
              </Link>
              <Link
                href="/swiss-fees"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Swiss Visa
              </Link>

              <h1 className="font-bold underline">Support Line</h1>
              <div
                onClick={difficultCases}
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Expired Visa
              </div>
              <div
                onClick={supportLine}
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Chat with Us
              </div>
            </ul>

            <ul className="flex flex-col gap-3">
              <h1 className="font-bold underline">Business Visa</h1>
              <Link
                href="/swiss-businessvisa"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Swiss
              </Link>
              <Link
                href="/usa-businessvisa"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                U.S.A
              </Link>

              <h1 className="font-bold underline">Work Visa</h1>

              <Link
                href="/usa-workvisa"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                U.S.A
              </Link>
              <Link
                href="/swiss-workvisa"
                className="cursor-pointer hover:text-white transition w-[100px]"
              >
                Switzerland
              </Link>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
