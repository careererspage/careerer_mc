"use client";
import { Button } from "@/components/ui/button";
import Lottie from "lottie-react";
import Link from "next/link";
import React from "react";

interface ReviewProp {
  Animate: object;
  title: string;
  list1: string;
  list2: string;
  list3: string;
  href: string;
}
const Review = ({ Animate, title, list1, list2, list3, href }: ReviewProp) => {
  return (
    <div>
      <div className="h-full w-full sm:px-20 px-2 py-4 my-4 bg-[#0071BA] flex flex-col sm:flex-row items-center justify-center sm:gap-10 gap-3">
        <Lottie
          animationData={Animate}
          loop
          autoplay
          className="sm:w-[250px] sm:-my-16 -my-6 w-[180px] h-[130px] sm:h-[250px]"
        />

        <div className="flex flex-col gap-3">
          <h1 className="text-white md:text-[35px] text-lg font-bold">
            {title}
          </h1>

          <ul className="ul list-disc ml-6 mb-4 text-[15px] text-[#eee] flex flex-col gap-2">
            <li>{list1}</li>
            <li className="hidden sm:block">{list2}</li>
            <li className="hidden sm:block">{list3}</li>
          </ul>
          <Link href={href}>
            <Button variant="primary" size="lg" className="p-6 w-[100px]">
              Read more
            </Button>
          </Link>
        </div>
      </div>
      <div className="text-[#2C2C2C] text-base mt-4 sm:px-20 px-4">
        <h2 className="font-bold sm:text-2xl text-lg mb-2">
          Online
          <span className="text-[#DC531D]"> Visa Services</span>
        </h2>
        <p className="mb-4">
          Applying for visa online has never been easier than it is with Migrate
          Compass. Our team of travel experts has relationships with embassies
          and consulates across the globe, making it easy for our clients to
          apply for business visa, Employment visa and more to any number of
          countries like U.S.A., Switzerland, Austrailian, and Canada. Even if
          you need visa service within the week you&lsquo;re traveling, we will
          work with you from start to finish, ensuring your paperwork will
          conform to the requirements of foreign embassies.{" "}
          <span className="font-bold">Chat with us support.</span>
        </p>
      </div>
    </div>
  );
};

export default Review;
