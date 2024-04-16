"use client";
import React from "react";
import { Accordion } from "./Accordion";
import Container from "../container";
import Lottie from "lottie-react";
import { Button } from "../ui/button";
import AnimateChat from "@/public/images/lottie/chat.json";
import { useTranslations } from "next-intl";

interface FaqPageProps {
  data: { question: string; answer: string }[];
}

const FaqPage = ({ data }: FaqPageProps) => {
  const t = useTranslations("translate.swissFaqPage");

  return (
    <div>
      <Container>
        <div>
          {data.map((faq, i) => (
            <Accordion key={i} faq={faq} />
          ))}
        </div>
        <div className="flex items-center p-4 mt-4 justify-center bg-[#DC531D] w-full">
          <p className="font-bold text-white">{t("paragraph")}</p>
          <Button
            className="ml-6 flex items-center "
            variant="primary"
            size="lg"
          >
            <Lottie
              animationData={AnimateChat}
              loop
              autoplay
              className="w-[50px] h-[50px]"
            />
            Support Team
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default FaqPage;
