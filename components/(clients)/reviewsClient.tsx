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
  const { onOpen } = useModal();

  return (
    <div>
      <GeneralHero
        ImageUrl={require("@/public/images/experience-image.jpg")}
        title="Testimonials & Reviewss"
        subTitle="We’re proud to serve satisfied clients globally. See their real-time Google reviews below.."
      />
      <Container>
        <div className="grid md:grid-cols-[60%,40%] grid-cols-1 gap-3 mt-4">
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
                <h1 className="font-bold">136 Reviews</h1>
              </div>
              <Button
                variant="primary"
                size="sm"
                className="my-2 w-[130px]"
                onClick={() => onOpen("openReviews")}
              >
                Write a review
              </Button>
            </div>
            <CustomerExperience
              supportId={supportId}
              currentUser={currentUser}
              existingServer={existingServer}
              reviewPage
            />
          </div>
          <div className="bg-[#003266] p-4 rounded-md flex gap-3 flex-col h-[600px]">
            <h1 className="font-bold sm:text-2xl text-xl text-center text-white py-2">
              Start Your Journey
            </h1>

            <Separator className="bg-orange-500 h-[4px]" />
            <form
              className="flex flex-col gap-2 text-black"
              // action={async (formData) => {
              //   const { data, error } = await sendEmail(formData);

              //   if (error) {
              //     toast.error(error);
              //     return;
              //   }

              //   toast.success("Email sent successfully!");
              // }}
            >
              <div className="flex flex-col items-center gap-2">
                <input
                  className="h-14 w-full px-4 rounded-lg bg-white border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                  name="senderFirstName"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="First name"
                />
                <input
                  className="h-14 w-full px-4 rounded-lg bg-white border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                  name="senderLastName"
                  type="text"
                  required
                  maxLength={500}
                  placeholder="Last name"
                />
              </div>

              <input
                className="h-14 px-4 rounded-lg bg-white border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                name="senderEmail"
                type="email"
                required
                maxLength={500}
                placeholder="Your email"
              />

              <input
                className="h-14 px-4 rounded-lg bg-white border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                name="senderNumber"
                type="tel"
                required
                maxLength={13}
                placeholder="Phone number"
              />

              <textarea
                className="h-52 my-3 rounded-lg p-4 bg-white border-2 border-slate-200 focus:bg-opacity-100 transition-all outline-none"
                name="message"
                placeholder="Your message"
                required
                maxLength={5000}
              />
              {/* <SubmitBtn /> */}
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ReviewsClient;
