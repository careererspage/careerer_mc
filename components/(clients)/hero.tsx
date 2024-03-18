"use client";

import { heroImages } from "@/lib/data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Hero = () => {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

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
            <div className="absolute rounded-md bottom-0 left-0 w-full h-full bg-gradient-to-b from-transparent  to-black/10"></div>
          </>
        ))}
      </div>

      <div className="h-full w-full flex flex-col justify-end items-center text-center">
        <div
          className="font-bold max-w-[200px] rounded md:p-2 p-1 text-lg md:mb-16 mb-7 sm:text-2xl lg:text-4xl text-white sm:max-w-xl "
          style={{
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            borderRadius: "8px",
            boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <div
            className="sm:text-xl  text-sm"
            style={{
              textShadow: "-1px 0 gray, ",
            }}
          >
            Explore our endless collections on{" "}
            <span
              className="text-red-600"
              style={{
                textShadow: "-1px 0 gray, ",
              }}
            >
              M•
            </span>
            arket
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
