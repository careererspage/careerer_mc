"use client";

import { useModal } from "@/hooks/use-modal-store";
import { heroImages } from "@/lib/data";
import { SafeUser } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FcCustomerSupport } from "react-icons/fc";

interface HeroProps {
  currentUser?: SafeUser | null;
  supportId?: string | undefined;
  existingServer?: string | undefined;
}

const Hero = ({ currentUser, supportId, existingServer }: HeroProps) => {
  const [imageIndex, setImageIndex] = useState(0);
  const { onOpen } = useModal();
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const supportLine = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${existingServer}/conversations/${supportId}`);
  };

  return (
    <div className="md:h-[500px] h-[400px] relative mt-14">
      <div className="absolute top-0 left-0 w-full h-full transition-opacity">
        {heroImages.map((image, index) => (
          <>
            <Image
              key={index}
              alt="hero"
              src={image.image}
              fill
              className={`${
                imageIndex === index ? "opacity-100" : "opacity-0"
              } transition-all duration-1000 w-full h-full object-cover`}
            />
            <div className="absolute rounded-md bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-black/20"></div>
          </>
        ))}
      </div>

      <div className="h-full w-full flex flex-col justify-end items-center text-center">
        <div
          onClick={supportLine}
          className="font-bold max-w-[200px] md:!max-w-[230px] rounded md:p-2 p-4 text-lg md:mb-16 mb-7 sm:text-2xl lg:text-4xl text-slate-50 hover:opacity-80 sm:max-w-xl cursor-pointer"
          style={{
            background: "rgba(255, 255, 255, 0.4)",
            backdropFilter: "blur(10px)",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div
            className="text-sm sm:!text-lg"
            style={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
            }}
          >
            Chat with an Immigration officer
            <span>
              <FcCustomerSupport
                size={25}
                className="text-zinc-500 inline-block ml-1"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
