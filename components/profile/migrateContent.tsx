"use client";
import React from "react";
import { Button } from "../ui/button";
import Container from "../container";
import Lottie from "lottie-react";
import AnimateChat from "@/public/images/lottie/chat.json";
import { SafeUser } from "@/types";
import { FaRegUserCircle } from "react-icons/fa";

interface MigrateProps {
  currentUser?: SafeUser | null;
}

const MigrateContent = ({ currentUser }: MigrateProps) => {
  return (
    <div className="w-full ml-6 sm:px-4 sm:py-4 py-2 px-1 bg-white shadow-md">
      <Container>
        <div className="flex flex-col items-center gap-6">
          <div className="font-bold text-center md:text-3xl text-gray-500">
            Welcome To Migrate Compass
          </div>

          <div className="sm:!text-base text-sm font-normal sm:!leading-8 !leading-8">
            <div className="font-bold text-[#055AAA]">
              Welcome to Migrate Compass!
            </div>

            <p>
              We pride ourselves on our profound legal expertise, our commitment
              to a people-centric approach, and our adoption of
              technology-driven processes. In addition to our immigration
              services, Migrate Compass also operates as a recruitment agency.
              We have a vast network of startups and small firms that are
              constantly on the lookout for individuals. Our services provide an
              efficient pathway for businesses, employees, investors, students,
              and families seeking to apply for visas and green cards in Europe
              and the United States. We&apos;re here to guide you through every
              step of your immigration journey. Let&apos;s navigate the
              complexities of immigration together! 😊
            </p>
          </div>

          <div className="">
            <h1 className="mt-6 text-[#055AAA] font-bold">
              Services we provide
            </h1>
            <ul className="list-disc sm:text-base text-sm ml-4 mt-3">
              <li className="mb-2">
                <span className="font-semibold">Case Evaluation:</span>{" "}
                Evaluation of your case, visa type, skillset, and providing
                honest opinions.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Recruitment Services:</span> Our
                recruiters connect you with individuals, small firms/start-ups
                in need of labor, services, skill, or care.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Legal Assistance:</span>{" "}
                Assistance with hearings, visa applications, and problematic
                visa cases.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Cultural Integration:</span>{" "}
                Providing support and resources to help immigrants integrate
                into their new communities, including language classes, cultural
                orientation programs, and networking events.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Networking Opportunities:</span>{" "}
                We connect you with our communities of immigrants based in
                Canton or the destination country.
              </li>
              <li className="mb-2">
                <span className="font-semibold">Continuous Support:</span>{" "}
                Offering ongoing support and assistance throughout the
                immigration and employment process, including follow-up
                consultations and assistance with any issues or concerns that
                may arise.
              </li>
              <li>
                <span className="font-semibold">Orientation:</span> Guidance
                with finding accommodation and settling within the
                country&apos;s social security, tax system, and other local
                regulations.
              </li>
            </ul>
          </div>

          <div className="my-2 w-full h-[1px] bg-indigo-500" />
          {!currentUser?.process && (
            <div className="flex flex-col justify-center">
              <div className="flex md:!text-lg text-sm items-center justify-center">
                It seems you haven&apos;t started your process with us yet.
                Would you like to get a free evaluation with one of our agents?
              </div>

              <Button
                className="ml-6 mt-4 text-base flex items-center justify-center w-[200px]"
                variant="primary"
                size="lg"
              >
                <Lottie
                  animationData={AnimateChat}
                  loop
                  autoplay
                  className="w-[50px] h-[50px]"
                />
                Start Free Evaluation
              </Button>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default MigrateContent;
