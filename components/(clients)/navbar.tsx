"use client";
import Container from "../container";

import Link from "next/link";
import MobileMenu from "../navigation/mobileMenu";
import Image from "next/image";
import { Separator } from "../ui/separator";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  AboutNav,
  FaqNav,
  Fees,
  Jobs,
  SubBusinessNav,
  SubWorkNav,
  VisaType,
} from "@/lib/faqData";
import { usePathname } from "next/navigation";
import { useModal } from "@/hooks/use-modal-store";
import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import { CgProfile } from "react-icons/cg";
import { UserAvatar } from "../user-avatar";
import { LiaSignOutAltSolid } from "react-icons/lia";

interface NavbarProps {
  currentUser?: SafeUser | null;
  profileMenu?: boolean;
}

const Navbar = ({ currentUser, profileMenu }: NavbarProps) => {
  const pathname = usePathname();
  const { onOpen } = useModal();
  return (
    <div className="mb-4 h-[60px] w-full bg-[#0559a8] sticky top-0 z-50">
      <Container>
        <div className="py-2 flex items-center justify-between">
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

          <div className="bg-[#003266] !text-sm shadow-md py-1 px-1 rounded-lg text-white font-semibold flex items-center gap-2 hover:bg-white hover:text-gray-600 transition ease-in duration-200 cursor-pointer">
            <Image
              width={50}
              height={50}
              src={require("@/public/images/care-line.png")}
              alt="care line"
              className="sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] object-contain rounded-full animate-pulse"
            />
            Book a section
          </div>

          <div className="text-sm">
            <ul className="">
              {currentUser ? (
                <div className="flex items-center gap-5">
                  <Link href="/dashboard" className="">
                    <UserAvatar
                      src={currentUser?.imageUrl ?? ""}
                      className="text-white"
                    />
                  </Link>
                  <Separator className="h-4 w-[2px] bg-yellow-400 mr-2 hidden md:block" />

                  <div
                    className="flex items-center gap-1 group cursor-pointer"
                    onClick={() => signOut()}
                  >
                    <LiaSignOutAltSolid className="sm:h-7 sm:w-7 w-5 h-5 !text-red-500 group:hover:!text-red-400 transition-all" />
                    <span className="hidden md:block text-white group-hover:opacity-80">
                      Sign out
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-5">
                  <button
                    onClick={() => onOpen("loginModal")}
                    className="text-white flex gap-1 items-center hover:opacity-75 transition"
                  >
                    Login <span className="hidden sm:block">account </span>
                  </button>

                  <Separator className="h-3 w-[2px] bg-yellow-400" />

                  <div
                    className="text-white flex gap-1 items-center hover:opacity-75 transition"
                    onClick={() => onOpen("RegisterModal")}
                  >
                    <LiaSignOutAltSolid className="w-7 h-7 !text-red-500 group:hover:!text-red-400 transition-all" />
                    <span className="hidden md:block text-white group-hover:opacity-80">
                      Sign up
                    </span>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </Container>

      <div className="bg-slate-50 shadow-md">
        <Container>
          <div className="flex items-center justify-between py-1">
            <div className="text-slate-600 font-bold">LOGO</div>

            <div>
              <div className="hidden md:flex items-center text-slate-600 text-base">
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
                <MobileMenu profileMenu={profileMenu} />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
