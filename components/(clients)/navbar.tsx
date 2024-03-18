"use client";
import React, { useState } from "react";
import Container from "../container";
import { useRouter } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "../ui/button";
import Link from "next/link";
import MobileMenu from "../navigation/mobileMenu";
import Image from "next/image";
import { Separator } from "../ui/separator";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  AboutNav,
  FaqNav,
  Fees,
  Jobs,
  SubBusinessNav,
  SubParentNav,
  SubWorkNav,
  VisaType,
} from "@/lib/faqData";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="mb-4 h-[60px] w-full bg-[#0559a8] sticky top-0 z-50">
      <Container>
        <div className="py-3 flex items-center justify-between">
          <div className="sm:flex hidden items-center gap-1">
            <span className="text-gray-200 text-xs font-semibold">call us</span>
            <span className="text-white text-[13px] font-bold">
              @ +111 111 11
            </span>
          </div>
          <Link
            href="/help"
            className="text-white text-sm hover:opacity-75 transition border p-1 rounded-md"
          >
            Live Chat
          </Link>
          <div className="text-sm">
            <ul className="flex cursor-pointer gap-10 items-center">
              <div className="flex items-center gap-3">
                <Link
                  href="/login"
                  className="text-white flex gap-1 items-center hover:opacity-75 transition"
                >
                  Login <span className="hidden sm:block">account </span>
                </Link>
                <Separator className="h-3 w-[2px] bg-yellow-400" />
                <Link
                  href="/signUp"
                  className="text-red-400 hover:opacity-75 font-semibold transition"
                >
                  Free <span className="text-white">Sign up </span>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      </Container>

      <div className="bg-slate-50">
        <Container>
          <div className="flex items-center justify-between py-4">
            <div className="text-slate-600 font-bold">LOGO</div>
            <div className="bg-[#003266] text-sm shadow-md py-2 px-1 rounded-lg text-white font-semibold flex items-center gap-2">
              <Image
                width={50}
                height={50}
                src={require("@/public/images/care-line.png")}
                alt="care line"
                className="w-[30px] h-[30px] object-contain rounded-full animate-pulse"
              />
              Book a section
            </div>
            <div>
              <div className="hidden sm:flex items-center text-slate-600 text-base">
                <NavigationMenu className="w-full bg-white py-2 rounded-md">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      {/* About Us */}
                      <NavigationMenuTrigger> About Us</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-2 pl-4 py-2 sm:w-[300px] md:grid-cols-1 lg:w-[300px] text-sm">
                          {AboutNav.map((component) => (
                            <NavigationMenuLink
                              key={component.title}
                              title={component.title}
                              href={component.link}
                              className={`transition-colors hover:bg-[#0559a8] p-2 rounded-md hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal hover:text-white  ${
                                pathname === component.link
                                  ? "bg-[#0559a8] text-white"
                                  : ""
                              }`}
                            >
                              {component.title}
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Visa type Visa */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Visa Type</NavigationMenuTrigger>
                      <NavigationMenuContent className="overflow-y-scroll h-screen">
                        {/* Work Visa */}
                        <div className="!text-sm pl-3 mt-2  font-semibold">
                          Work Visa
                        </div>

                        <div className="my-2 w-full h-[1px] bg-indigo-500" />

                        <ul className="grid gap-2 pl-4 py-2 sm:w-[300px] md:grid-cols-1 lg:w-[300px] text-sm">
                          {SubWorkNav.map((component) => (
                            <NavigationMenuLink
                              key={component.title}
                              title={component.title}
                              href={component.link}
                              className={`transition-colors hover:bg-[#0559a8] p-2 rounded-md hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal hover:text-white  ${
                                pathname === component.link
                                  ? "bg-[#0559a8] text-white"
                                  : ""
                              }`}
                            >
                              {component.title}
                            </NavigationMenuLink>
                          ))}
                        </ul>

                        {/* Business Visa */}
                        <div className="!text-sm pl-3 mt-2  font-semibold">
                          Business Visa
                        </div>

                        <div className="my-2 w-full h-[1px] bg-indigo-500" />

                        <ul className="grid gap-2 pl-4 py-2 sm:w-[300px] md:grid-cols-1 lg:w-[300px] text-sm">
                          {SubBusinessNav.map((component) => (
                            <NavigationMenuLink
                              key={component.title}
                              title={component.title}
                              href={component.link}
                              className={`transition-colors hover:bg-[#0559a8] p-2 rounded-md hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal hover:text-white  ${
                                pathname === component.link
                                  ? "bg-[#0559a8] text-white"
                                  : ""
                              }`}
                            >
                              {component.title}
                            </NavigationMenuLink>
                          ))}
                        </ul>

                        <div className="my-2 w-full h-[1px] bg-indigo-500" />

                        {/* Rest of the Visa offered */}
                        <ul className="grid gap-2 p-4 sm:w-[300px] md:grid-cols-1 lg:w-[300px] text-sm">
                          {VisaType.map((component) => (
                            <NavigationMenuLink
                              key={component.title}
                              title={component.title}
                              href={component.link}
                              className={`transition-colors hover:bg-[#0559a8] p-2 rounded-md hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal hover:text-white  ${
                                pathname === component.link
                                  ? "bg-[#0559a8] text-white"
                                  : ""
                              }`}
                            >
                              {component.title}
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Fees */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Fees</NavigationMenuTrigger>
                      <NavigationMenuContent className=" overflow-y-scroll">
                        {/* Fees */}

                        <ul className="grid gap-2 pl-4 py-2 sm:w-[300px] md:grid-cols-1 lg:w-[300px] text-sm">
                          {Fees.map((component) => (
                            <NavigationMenuLink
                              key={component.title}
                              title={component.title}
                              href={component.link}
                              className={`transition-colors hover:bg-[#0559a8] p-2 rounded-md hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal hover:text-white  ${
                                pathname === component.link
                                  ? "bg-[#0559a8] text-white"
                                  : ""
                              }`}
                            >
                              {component.title}
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>

                <NavigationMenu className="w-full bg-white py-2 rounded-md">
                  <NavigationMenuList>
                    {/* Jobs */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>
                        Explore Jobs
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className=" overflow-y-scroll">
                        <ul className="grid gap-2 pl-4 py-2 sm:w-[200px] md:grid-cols-1 lg:w-[200px] text-sm">
                          {Jobs.map((component) => (
                            <NavigationMenuLink
                              key={component.title}
                              title={component.title}
                              href={component.link}
                              className={`transition-colors hover:bg-[#0559a8] p-2 rounded-md hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal hover:text-white  ${
                                pathname === component.link
                                  ? "bg-[#0559a8] text-white"
                                  : ""
                              }`}
                            >
                              {component.title}
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Faq */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Faq</NavigationMenuTrigger>
                      <NavigationMenuContent className=" overflow-y-scroll">
                        <ul className="grid gap-2 pl-4 py-2 sm:w-[200px] md:grid-cols-1 lg:w-[200px] text-sm">
                          {FaqNav.map((component) => (
                            <NavigationMenuLink
                              key={component.title}
                              title={component.title}
                              href={component.link}
                              className={`transition-colors hover:bg-[#0559a8] p-2 rounded-md hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal hover:text-white  ${
                                pathname === component.link
                                  ? "bg-[#0559a8] text-white"
                                  : ""
                              }`}
                            >
                              {component.title}
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
              {/* <HoverCard>
                  

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="cursor-pointer hover:opacity-75 transition flex items-center gap-1">
                      Services{" "}
                      <IoIosArrowDown size={15} className="text-gray-400" />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="text-white text-sm cursor-default bg-blue-500 border-none w-[150px]">
                    <ul className="grid grid-cols-1 gap-4">
                      <Link
                        href="/work"
                        className="cursor-pointer hover:opacity-100 opacity-80 transition"
                      >
                        Work Visa
                      </Link>
                      <Link
                        href="/business"
                        className="cursor-pointer hover:opacity-100 opacity-80 transition"
                      >
                        Business Visa
                      </Link>
                      <Link
                        href="/student"
                        className="cursor-pointer hover:opacity-100 opacity-80 transition"
                      >
                        Student Visa
                      </Link>
                      <Link
                        href="/migration"
                        className="cursor-pointer hover:opacity-100 opacity-80 transition"
                      >
                        Parent Migration
                      </Link>
                      <Link
                        href="/rvisa"
                        className="cursor-pointer hover:opacity-100 opacity-80 transition"
                      >
                        R1 Visa
                      </Link>
                    </ul>
                  </HoverCardContent>
                </HoverCard>

                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="cursor-pointer hover:opacity-75 transition flex items-center gap-1">
                      Fees{" "}
                      <IoIosArrowDown size={15} className="text-gray-400" />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="text-white text-sm cursor-default bg-blue-500 border-none w-[150px]">
                    <ul className="grid grid-cols-1 gap-4">
                      <Link
                        href="/charges"
                        className="cursor-pointer hover:opacity-100 opacity-80 transition"
                      >
                        U.S.A. Fee
                      </Link>
                      <Link
                        href="/swiss-fees"
                        className="cursor-pointer hover:opacity-100 opacity-80 transition"
                      >
                        Switzerland Fee
                      </Link>
                      <Link
                        href="/student"
                        className="cursor-pointer hover:opacity-100 opacity-80 transition"
                      >
                        Austrailian Fee
                      </Link>
                    </ul>
                  </HoverCardContent>
                </HoverCard>

                <Link
                  href="/eb3-Jobs"
                  className="cursor-pointer hover:opacity-75 transition"
                >
                  Eb3 active Jobs
                </Link>
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <div className="cursor-pointer hover:opacity-75 transition flex items-center gap-1">
                      Faq
                      <IoIosArrowDown size={15} className="text-gray-400" />
                    </div>
                  </HoverCardTrigger>
                  <HoverCardContent className="text-white text-sm cursor-default bg-blue-500 border-none w-[150px]">
                    <ul className="grid grid-cols-1 gap-4">
                      <Link
                        href="/usa-faq"
                        className="cursor-pointer hover:opacity-100 opacity-80 transition"
                      >
                        U.S.A. Faq
                      </Link>
                      <Link
                        href="/swiss-faq"
                        className="cursor-pointer hover:opacity-100 opacity-80 transition"
                      >
                        Switzerland Faq
                      </Link>
                      <Link
                        href="/student"
                        className="cursor-pointer hover:opacity-100 opacity-80 transition"
                      >
                        Austrailian Visa
                      </Link>
                    </ul>
                  </HoverCardContent>
                </HoverCard> */}

              <div className="block sm:hidden">
                <MobileMenu />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
