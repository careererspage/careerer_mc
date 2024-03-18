import Image from "next/image";
import React from "react";

const Quote = () => {
  return (
    <div className="w-full">
      <div
        className="text-zinc-500 sm:text-2xl text-center md:text-3xl text-xl font-extrabold sm:leading-[60px] mb-2 mt-4 w-full"
        style={{ lineHeight: 1.2 }}
      >
        Immigration Law
        <span className="text-[#e67121]"> Expertise </span>
        Delivered
      </div>
      <div className="grid sm:!items-center sm:grid-cols-[35%,65%] grid-cols-1 gap-5 mt-10 mb-6 w-full px-5">
        <Image
          src={require("@/public/images/team/meeting.jpg")}
          className="w-full h-[250px] object-cover"
          alt="team"
        />
        <div>
          <div className="text-zinc-500 sm:!text-base text-sm font-normal sm:!leading-8 !leading-8">
            <div className="font-bold">Welcome to Migrate Compass!</div>We pride
            ourselves on our profound legal expertise, our commitment to a
            people-centric approach, and our adoption of technology-driven
            processes. Our services provide an efficient pathway for businesses,
            employees, investors, schooling, and families seeking to apply for
            Europe, U.S. Visas and Green Cards. We’re here to guide you through
            every step of your immigration journey. Let’s navigate the
            complexities of immigration together! 😊
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
