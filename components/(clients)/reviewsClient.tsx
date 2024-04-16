"use client";
import React from "react";
import GeneralHero from "./generalHero";
import Image from "next/image";
import Ratings from "./ratings";
import { Separator } from "../ui/separator";
import { Button } from "../ui/button";
import Container from "../container";
import CustomerExperience from "./customer-experience";
import { useModal } from "@/hooks/use-modal-store";
import { SafeUser } from "@/types";
import { useTranslations } from "next-intl";
import { ToastAction } from "../ui/toast";
import SubmitBtn from "./submit-btn";
import { useToast } from "../ui/use-toast";
import { sendEmail } from "@/actions/senderEmail";

interface ReviewsProps {
  currentUser?: SafeUser | null;
  supportId?: string | undefined;
  existingServer?: string | undefined;
}

const ReviewsClient = ({
  currentUser,
  supportId,
  existingServer,
}: ReviewsProps) => {
  const { toast } = useToast();
  const { onOpen } = useModal();

  const t = useTranslations("translate.reviewPage");
  const c = useTranslations("translate.common");
  return (
    <div>
      <GeneralHero
        ImageUrl={require("@/public/images/experience-image.jpg")}
        title={t("heroHeader")}
        subTitle={t("heroSubHeader")}
      />
      <Container>
        <div className="grid lg:grid-cols-[60%,40%] grid-cols-1 gap-3 mt-4">
          <div className="flex flex-col">
            <div className="flex flex-col justify-between border border-gray-400 px-4 py-2">
              <div className="flex items-center gap-3">
                <Image
                  src={require("@/public/images/google.png")}
                  width={50}
                  height={50}
                  alt={"Reviews"}
                  className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] object-cover"
                />
                <h1 className="font-bold">Excellent</h1>
                <Ratings rating={4.8 ?? 0} />
                <Separator className="h-10 w-1" />
                <h1 className="font-bold text-sm sm:text-[16px]">
                  986 Reviews
                </h1>
              </div>
              <Button
                variant="primary"
                size="sm"
                className="my-2 w-[130px]"
                onClick={() => onOpen("openReviews")}
              >
                {t("writeReview")}{" "}
              </Button>
            </div>
            <CustomerExperience
              supportId={supportId}
              currentUser={currentUser}
              existingServer={existingServer}
              reviewPage
            />
          </div>
          <div className="bg-[#003266] p-4 rounded-md flex justify-center gap-3 flex-col h-[500px]">
            <h1 className="font-bold sm:text-2xl text-xl text-center text-white py-2">
              {t("formHeader")}{" "}
            </h1>

            <Separator className="bg-orange-500 h-[4px]" />
            <form
              className="mt-2 flex flex-col gap-3 text-black"
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
              <div className="flex flex-col items-center gap-2">
                <input
                  className="h-10 w-full px-4 rounded-lg bg-white border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                  name="Name"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="Name"
                />
              </div>

              <input
                className="h-10 px-4 rounded-lg bg-white border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />

              <textarea
                className="h-48 my-3 rounded-lg p-4 bg-white border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
              />
              <SubmitBtn />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewsClient;
