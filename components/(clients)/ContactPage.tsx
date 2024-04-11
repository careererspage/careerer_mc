"use client";
import React from "react";
import Container from "../container";
import HeadingsText from "./HeadingsText";
import { Button } from "../ui/button";
import Lottie from "lottie-react";
import AnimateChat from "@/public/images/lottie/chat.json";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useToast } from "../ui/use-toast";
import { sendEmail } from "@/actions/senderEmail";
import { ToastAction } from "../ui/toast";
import SubmitBtn from "./submit-btn";
import { useTranslations } from "next-intl";

interface ContactProps {
  currentUser?: SafeUser | null;
  serverId?: string | undefined;
  supportId?: string | undefined;
}

const ContactPage = ({ currentUser, serverId, supportId }: ContactProps) => {
  const { onOpen } = useModal();
  const router = useRouter();
  const { toast } = useToast();

  const supportLine = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${serverId}/conversations/${supportId}`);
  };

  const t = useTranslations("translate.contactPage");
  const c = useTranslations("translate.common");

  return (
    <div>
      <Container>
        <HeadingsText
          heading={t("scheduleAConsultationA")}
          subHead={t("scheduleAConsultationB")}
          text={t("consultationDetails")}
        />
        <Button
          onClick={supportLine}
          className="flex items-center gap-3"
          variant="button"
          size="lg"
        >
          {c("bookSection")}{" "}
          <Lottie
            animationData={AnimateChat}
            loop
            autoplay
            className="w-[50px] h-[50px]"
          />
        </Button>

        <div className="grid md:grid-cols-[55%,45%] grid-rows-1  gap-10 mt-10">
          <div className="w-full">
            <h1 className="font-bold text-2xl">{t("emailHeader")}</h1>
            <p className="text-[#2C2C2C] mt-2">{t("emailMsg")}</p>

            <form
              className="mt-10 flex flex-col gap-3 text-black"
              action={async (formData) => {
                const { data, error } = await sendEmail(formData);

                if (error) {
                  toast({
                    style: {
                      background: "black",
                      color: "#fff",
                    },
                    variant: "destructive",
                    description: error,
                    action: <ToastAction altText="Close">Close</ToastAction>,
                  });
                  return;
                }

                toast({
                  style: {
                    background: "black",
                    color: "#fff",
                  },
                  variant: "default",
                  description: "Email sent successfully!",
                  action: <ToastAction altText="Close">Close</ToastAction>,
                });
              }}
            >
              <input
                className="h-14 px-4 rounded-lg bg-white bg-opacity-50 border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />
              <input
                className="h-14 px-4 rounded-lg bg-white bg-opacity-50 border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                name="senderName"
                type="text"
                required
                maxLength={50}
                placeholder="Name"
              />
              <textarea
                className="h-52 my-3 rounded-lg p-4 bg-white bg-opacity-50 border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
              />
              <SubmitBtn />{" "}
            </form>
          </div>
          <div className="text-[#2C2C2C] w-full">
            <h1 className="font-bold text-2xl mb-2">{t("emailHeader1")} </h1>

            <p
              className="mt-2 text-[#2c2c2c] text-base"
              style={{ lineHeight: "1.8" }}
            >
              {t("emailMsg1")}
            </p>
            <div className="flex flex-col gap-2 mt-1">
              <div>
                <h1 className="font-bold">{t("address")}</h1>
                <div className="text-[#2c2c2c]">
                  {t("addressDetail1")}{" "}
                  <div className="text-[rgb(44,44,44)]">
                    {t("addressDetail2")}{" "}
                  </div>
                </div>
              </div>

              <div className="flex items-center">
                <h1 className="font-bold">Phone:</h1>
                <div className="text-[#2c2c2c]">1-954-604-6406</div>
              </div>
              <div className="flex items-center">
                <h1 className="font-bold">Email:</h1>
                <div className="text-[#2c2c2c]">
                  <a
                    className="underline"
                    href="mailto:careererspage@gmail.com"
                  >
                    support@migratecompass.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ContactPage;
