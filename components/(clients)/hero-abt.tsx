"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Teams, VisaType } from "@/lib/data";
import GeneralHero from "./generalHero";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const HeroAbt = () => {
  const [showRightScroll1, setShowRightScroll1] = useState(true);
  const [showLeftScroll1, setShowLeftScroll1] = useState(true);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const buffer = 10; // Adjust this value as needed
    const isAtEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - buffer;

    setShowRightScroll1(!isAtEnd);

    const isAtStart = container.scrollLeft === 0;
    setShowLeftScroll1(!isAtStart);
  };

  const scrollAction = (direction: number) => {
    const container = document.querySelector(".scroll-container1");
    if (container) {
      const newScrollLeft = container.scrollLeft + direction;

      container.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      const isAtEnd =
        newScrollLeft + container.clientWidth >= container.scrollWidth;
      setShowRightScroll1(!isAtEnd);
    }
  };

  return (
    <div className="w-full">
      <GeneralHero
        ImageUrl={require("@/public/images/connect-bg.jpg")}
        title="Welcome to Global Connect "
        subTitle="We Help With Relocation To"
        subTitle1="The United States and Europe"
      />

      <div className="mt-6 px-10">
        <div className="grid sm:grid-cols-[40%,60%] grid-cols-1 gap-4">
          <div className="flex sm:!flex-row flex-col items-center">
            <div className="flex flex-col gap-1 mt-4">
              <h1 className="md:text-6xl sm:text-4xl text-3xl font-bold">
                Who we are
              </h1>
              <h2 className="sm:text-[22px] text-xl text-zinc-500 font-bold">
                Worldwide Leaders
              </h2>

              <p className="text-[15px] text-[#333333]">
                CIBT draws on over thirty years of experience and over 2,000
                expert immigration, visa and passport professionals, attorneys
                and qualified migration consultants located in over 60 offices
                in 29 countries. CIBT offers a comprehensive suite of services
                under two primary brands: Newland Chase, a wholly owned
                subsidiary focused on global immigration strategy and advisory
                services for corporations worldwide and Travisa, the market
                leader for business and other travel visa and passport services
                for corporate and individual clients. Travisa is a private
                company that is authorized to process visa applications and
                expedite passports at consulate and passport agencies for a fee.
              </p>
            </div>

            <div className="sm:w-[50px] sm:h-[80px] w-full h-[20px] bg-yellow-400 sm:mx-6 my-6" />
          </div>

          <div className="flex flex-col gap-4">
            <div>
              <h2 className="sm:text-[22px] text-lg text-zinc-500 font-bold">
                {" "}
                Our Vision
              </h2>
              <p className="text-[15px] text-[#333333]">
                Simplify the journey, to bridge people, cultures, and businesses
                and open the world.
              </p>
            </div>

            <div>
              <h2 className="sm:text-[22px] text-lg text-zinc-500 font-bold">
                {" "}
                Our Mission
              </h2>
              <p className="text-[15px] text-[#333333]">
                We enable global movement by managing the complexities of a
                changing world. We empower people and organizations to
                seamlessly live, work, travel, and trade through our global
                reach, local expertise, and customer-focused solutions.
              </p>
            </div>

            <div>
              <h2 className="sm:text-[22px] text-lg text-zinc-500 font-bold">
                {" "}
                OPERATE WITH CARE
              </h2>
              <p className="text-[15px] text-[#333333]">
                We care deeply about what we do and the difference we make. We
                take accountability, demonstrate integrity, and make conscious
                choices to do the right thing. We aspire to leave things better
                than we found them.
              </p>
            </div>
            <div>
              <h2 className="sm:text-[22px] text-lg text-zinc-500 font-bold">
                EFFECTIVE AND EFFICIENT
              </h2>
              <p className="text-[15px] text-[#333333]">
                We seek a careful balance of speed, quality, and efficiency. We
                utilize global processes to achieve consistent, compliant
                outcomes. We empower teams to adapt to meet the changing needs
                of our customers and the government agencies with which we
                engage.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#055AAA] w-full sm:px-10 h-auto mt-4 flex flex-col items-center py-4">
        <h2 className="text-white md:text-xl text-lg font-bold text-center p-4">
          Does your purpose of visit belong to one of these categories?
        </h2>

        <div className="md:mx-20 relative w-full group  bg-[#00498e] p-4 rounded-md">
          <div
            className="scroll-container1 overflow-x-auto scrollbar-hide ml-6"
            onScroll={handleScroll}
          >
            <div className="flex flex-nowrap w-[70%] sm:w-full sm:space-x-3 gap-4">
              {" "}
              {VisaType.map((visa, index) => (
                <div
                  key={index}
                  className="rounded-md bg-white flex-none w-full sm:w-1/2 md:w-1/2 lg:w-1/3 cursor-pointer shadow-md hover:shadow-sm p-4 transition flex flex-col gap-1 group"
                >
                  <Image
                    width={100}
                    height={100}
                    quality={100}
                    src={visa.image}
                    alt={visa.title}
                    className="sm:w-[50px] sm:h-[50px] w-[30px] h-[30px] object-cover"
                  />
                  <h1 className="sm:text-[18px] text-base text-zinc-600 font-bold">
                    {visa.title}
                  </h1>
                  <p className="text-sm text-zinc-500">{visa.details}</p>
                  <Button
                    variant="primary"
                    size="icon"
                    className="w-full mt-auto sm:text-base text-sm"
                  >
                    Chat with agent
                  </Button>
                </div>
              ))}
            </div>
          </div>

          {showLeftScroll1 && (
            <button
              className="absolute group-hover:sm:block sm:hidden block z-50 sm:-left-10 left-0 top-1/2 hover:opacity-80 transition bg-white/95 border border-[#003b95] rounded-full p-2"
              onClick={() => scrollAction(-350)}
            >
              <BsChevronLeft size={25} className="text-blue-400" />
            </button>
          )}
          {showRightScroll1 && (
            <button
              className="absolute group-hover:sm:block sm:hidden block z-50 sm:-right-10 right-0 top-1/2 hover:opacity-80 transition bg-white/95 border border-[#003b95] rounded-full p-2"
              onClick={() => scrollAction(350)}
            >
              <BsChevronRight size={25} className="text-blue-400" />
            </button>
          )}
        </div>
      </div>

      <div className="p-8 mt-10 mb-10 flex flex-col sm:flex-row items-center justify-center gap-3 bg-white">
        <p className="sm:text-[17px] text-sm text-[#2C2C2c] md:w-[50%] w-full">
          Not sure which visa type is for you? No worries. We&apos;re here to
          discuss your visa case and give professional advice tailored to your
          specific situation.
        </p>
        <Button variant="outline" size="lg" className="">
          <Image
            height={50}
            width={50}
            src={require("@/public/images/care-line.png")}
            className="object-contain"
            alt="Support"
          />
          Support Line
        </Button>
      </div>

      <div className="mt-10 px-4 md:px-20">
        <h1 className="font-bold md:text-5xl sm:text-3xl text-xl text-center text-[#428BCa]">
          Meet Our Team Lead
        </h1>

        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 2xl:grid-cols-3 gap-8">
          {Teams.map((team, i) => (
            <div
              key={i}
              className="rounded-md transition flex flex-col gap-1 mt-4"
            >
              <div className="flex flex-col gap-1">
                <Image
                  width={50}
                  height={50}
                  src={team.image}
                  alt={team.title}
                  className="w-[100px] h-[100px] object-cover"
                  style={{ objectPosition: "top" }}
                />
                <h2 className="text-[#555555] font-semibold sm:text-lg text-base">
                  {team.name}
                </h2>
                <h2 className="text-[#306eb9] font-semibold sm:text-xl text-lg">
                  {team.title}
                </h2>
              </div>

              <div className="text-[#000000B3] text-[15px] w-full">
                {team.details}
              </div>

              <span className="font-semibold text-[#950b0bb3] sm:text-[17px] text-sm py-2">
                Education and Membership
              </span>
              <div className="w-full flex flex-col gap-3">
                {team.education.map((cert, i) => (
                  <ul
                    key={i}
                    className="text-sm sm:text-base list-disc flex flex-col gap-3 ml-4 ul-list"
                  >
                    <li className="mb-2">{cert.school}</li>
                  </ul>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroAbt;
