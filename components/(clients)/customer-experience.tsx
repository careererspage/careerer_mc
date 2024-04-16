"use client";

import { Reviews } from "@/lib/data";
import React, { useState } from "react";
import Ratings from "./ratings";
import { RiDoubleQuotesL } from "react-icons/ri";
import Container from "../container";
import { Button } from "../ui/button";
import Image from "next/image";
import Lottie from "lottie-react";

import AnimateReviews from "@/public/images/lottie/reviews.json";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { SafeUser } from "@/types";
import { useRouter } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { useTranslations } from "next-intl";

interface CustomerExperienceProps {
  reviewPage?: boolean;
  currentUser?: SafeUser | null;
  supportId?: string | undefined;
  existingServer?: string | undefined;
}

const CustomerExperience = ({
  reviewPage,
  supportId,
  currentUser,
  existingServer,
}: CustomerExperienceProps) => {
  const image = "/images/google.png";
  const [showRightScroll, setShowRightScroll] = useState(true);
  const [showLeftScroll, setShowLeftScroll] = useState(true);
  const router = useRouter();
  const { onOpen } = useModal();

  const [reviews, setReviews] = useState(8);
  const [isFetching, setIsFetching] = useState(false);

  const loadMoreReviews = async () => {
    setIsFetching(true);

    setReviews((prevNum) => prevNum + 8);

    setIsFetching(false);
  };

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const buffer = 10; // Adjust this value as needed
    const isAtEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - buffer;

    setShowRightScroll(!isAtEnd);

    const isAtStart = container.scrollLeft === 0;
    setShowLeftScroll(!isAtStart);
  };

  const scrollAction = (direction: number) => {
    const container = document.querySelector(".scroll-container");
    if (container) {
      const newScrollLeft = container.scrollLeft + direction;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      const isAtEnd =
        newScrollLeft + container.clientWidth >= container.scrollWidth;
      setShowRightScroll(!isAtEnd);
    }
  };

  const supportLine = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${existingServer}/conversations/${supportId}`);
  };

  const t = useTranslations("translate.homeQuote");
  const c = useTranslations("translate.common");

  return (
    <div className="mt-10 shadow-sm py-10 bg-white">
      <Container>
        <RiDoubleQuotesL className="text-[#f16767] text-3xl" />
        <div className="sm:text-3xl text-xl flex items-center font-bold ">
          <div className="relative">
            {c("clientsExperience")}{" "}
            <span className="text-blue-500">{c("clientsExperienceSpan")} </span>
            <Lottie
              animationData={AnimateReviews}
              loop
              autoplay
              className="sm:w-[250px] sm:h-[250px] absolute sm:top-14 sm:-right-64 left-10 top-20"
              // style={{ height: 10, width: 150 }}
            />
          </div>
        </div>

        <div className="flex items-center justify-around sm:justify-center gap-5 sm:gap-14 mt-10">
          <h1 className="font-bold sm:text-4xl text-xl gradient-text">
            {c("googleReview")}{" "}
          </h1>

          <Image
            src={image}
            width={50}
            height={50}
            alt={"Reviews"}
            className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] object-cover"
          />
        </div>

        <div
          className={cn(
            reviewPage
              ? "overflow-y-scroll overflow-x-hidden bg-slate-50 shadow-md md:-mx-10"
              : "md:mx-20",
            "relative group mt-24"
          )}
        >
          <div
            className={cn(
              reviewPage ? "" : "overflow-x-auto",
              "my-6 scroll-container scrollbar-hide"
            )}
            onScroll={handleScroll}
          >
            <div
              className={cn(
                "w-full sm:space-x-3 gap-1",
                reviewPage
                  ? "grid justify-center grid-cols-1"
                  : "flex flex-nowrap"
              )}
            >
              {Reviews()
                .slice(0, reviews)
                .map((review, index) => (
                  <div
                    key={index}
                    className={cn(
                      "rounded-md flex-none cursor-pointer shadow-md hover:shadow-sm p-4 m-2 transition flex flex-col gap-1 group",
                      reviewPage
                        ? "w-full bg-white"
                        : "w-[80%] sm:w-1/2 md:w-1/2 lg:w-1/3"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <h2 className="text-[#555555] text-[16px]">
                        {review.name}
                      </h2>
                      <Image
                        src={image}
                        width={50}
                        height={50}
                        alt={"Reviews"}
                        className="w-[20px] h-[20px] object-cover"
                      />
                    </div>
                    <div className="flex">
                      <Ratings rating={review?.rating ?? 0} />
                    </div>
                    <div className="text-[#000000B3] pr-0.5 text-[16px] group-hover:overflow-y-scroll h-[130px] w-full overflow-hidden">
                      {review.comment}
                    </div>
                  </div>
                ))}
            </div>
          </div>

          {!reviewPage && (
            <>
              {showLeftScroll && (
                <button
                  className="absolute group-hover:sm:block hidden z-50 left-0 top-1/2 hover:opacity-80 transition bg-white/95 border border-[#003b95] rounded-full p-2"
                  onClick={() => scrollAction(-350)}
                >
                  <BsChevronLeft size={25} className="text-blue-400" />
                </button>
              )}
              {showRightScroll && (
                <button
                  className="absolute group-hover:sm:block hidden z-50 right-0 top-1/2 hover:opacity-80 transition bg-white/95 border border-[#003b95] rounded-full p-2"
                  onClick={() => scrollAction(350)}
                >
                  <BsChevronRight size={25} className="text-blue-400" />
                </button>
              )}
            </>
          )}
        </div>
        <div className="flex items-start justify-center flex-col gap-1 w-full sm:w-[550px] p-3 rounded-md">
          {!reviewPage && (
            <>
              <h1 className="text-[#222325] sm:text-xl text-lg">
                {c("dontTakeFromUs")}{" "}
              </h1>
              <span className="font-semibold sm:text-[25px] text-xl text-[#002B3D]">
                {c("letClientsTalk")}{" "}
              </span>
            </>
          )}
          {reviewPage ? (
            <div className="flex flex-col gap-3 mt-2">
              <Button
                variant="primary"
                size="default"
                onClick={loadMoreReviews}
                disabled={isFetching}
              >
                {reviews >= Reviews().length
                  ? "End of Reviews"
                  : "Load More Reviews"}
              </Button>

              <div>
                <Button
                  variant="button"
                  size="default"
                  onClick={supportLine}
                  disabled={isFetching}
                >
                  {c("chatWithUs")}{" "}
                </Button>
              </div>
            </div>
          ) : (
            <Link href="/reviews">
              <Button variant="primary" size="default">
                {c("readMoreStories")}{" "}
              </Button>
            </Link>
          )}
        </div>
      </Container>
    </div>
  );
};

export default CustomerExperience;
