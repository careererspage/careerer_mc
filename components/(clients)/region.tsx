import { FlameKindling } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Container from "../container";
import Image from "next/image";
import { Regions } from "@/lib/data";

const Region = () => {
  return (
    <Container>
      <div className="">
        <h1 className="w-full leading-7 text-zinc-500 font-semibold sm:font-bold text-sm sm:!text-base">
          This are{" "}
          <span className="text-blue-700">core regions we work with.</span>{" "}
          These countries hold a special place in our hearts, as many of{" "}
          <span className="text-blue-700">
            our team members have served as immigration officers
          </span>{" "}
          in some of these nations.
        </h1>
        <div className="grid lg:grid-cols-4 grid-cols-1 sm:grid-cols-2 gap-4">
          {Regions.map((region, index) => (
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
              <Button variant="button" size="icon" className="w-full mt-auto">
                Chat with agent
              </Button>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default Region;
