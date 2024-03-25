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
            processes. In addition to our immigration services, Migrate Compass
            also operates as a recruitment agency. We have a vast network of
            startups and small firms that are constantly on the lookout for
            individuals. Our services provide an efficient pathway for
            businesses, employees, investors, students, and families seeking to
            apply for visas and green cards in Europe and the United States.
            We&apos;re here to guide you through every step of your immigration
            journey. Let&apos;s navigate the complexities of immigration
            together! 😊
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quote;
