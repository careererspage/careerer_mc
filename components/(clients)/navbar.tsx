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
import { SafeMember, SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import { UserAvatar } from "../user-avatar";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { LanguagePicker } from "./language-picker";

interface NavbarProps {
  currentUser?: SafeUser | null;
  profileMenu?: boolean;
  agents?: SafeUser[] | null;
  supportLine?: SafeMember | undefined;
  serverId?: string;
  supportId?: string | undefined;
  expiredVisa?: SafeMember | undefined;
}

const Navbar = ({
  currentUser,
  profileMenu,
  serverId,
  agents,
  supportLine,
  supportId,
  expiredVisa,
}: NavbarProps) => {
  const pathname = usePathname();
  const { onOpen } = useModal();
  const router = useRouter();
  const t = useTranslations("translate.navbar");

  const connectOfficer = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${serverId}/conversations/${supportId}`);
  };

  const difficultCases = () => {
    if (!currentUser) {
      onOpen("loginModal");
      return;
    }
    router.push(`/servers/${serverId}/conversations/${expiredVisa}`);
  };

  return (
    <div className="mb-4 h-[60px] w-full bg-[#0559a8] sticky top-0 z-50">
      <Container navbar>
        <div className="py-2 flex items-center justify-between">
          <div className="sm:flex hidden items-center gap-1">
            <span className="text-gray-200 text-xs font-semibold">call us</span>
            <span className="text-white text-[13px] font-bold">
              +91-2288-221{" "}
            </span>
          </div>
          <div
            onClick={connectOfficer}
            className="text-white cursor-pointer text-[12px] sm:text-sm hover:opacity-75 transition border p-1 rounded-md"
          >
            {t("liveChat")}
          </div>

          <div
            onClick={connectOfficer}
            className="bg-[#003266] !text-[12px] sm:text-sm shadow-md py-1 px-1 rounded-lg text-white font-semibold flex items-center gap-2 hover:bg-white hover:text-gray-600 transition ease-in duration-200 cursor-pointer"
          >
            <Image
              width={50}
              height={50}
              src={require("@/public/images/care-line.png")}
              alt="care line"
              className="sm:w-[30px] w-[20px] sm:h-[30px] h-[20px] object-contain rounded-full animate-pulse"
            />
            {t("bookSection")}
          </div>

          <div className="text-sm">
            <ul className="">
              {currentUser ? (
                <div className="flex items-center gap-5">
                  <Link
                    href="/migrate-compass"
                    className="flex items-center gap-1 group"
                  >
                    <UserAvatar
                      className="group-hover:!text-white"
                      src={currentUser?.imageUrl ?? ""}
                    />
                    <span className="hidden md:block text-gray-200 transition-all group-hover:text-white">
                      {t("profile")}
                    </span>
                  </Link>
                  <Separator className="h-4 w-[2px] bg-yellow-400 mr-2 hidden md:block" />

                  <div
                    className="flex items-center gap-1 group cursor-pointer"
                    onClick={() => signOut()}
                  >
                    <LiaSignOutAltSolid className="sm:h-7 sm:w-7 w-5 h-5 !text-red-500 group:hover:!text-red-400 transition-all" />
                    <span className="hidden md:block text-white group-hover:opacity-80">
                      {t("signOut")}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-5">
                  <button
                    onClick={() => onOpen("loginModal")}
                    className="text-white flex gap-1 items-center hover:opacity-75 transition"
                  >
                    {t("login")}
                    <span className="hidden sm:block">account </span>
                  </button>

                  <Separator className="h-3 w-[2px] bg-yellow-400" />

                  <div
                    className="text-white flex gap-1 items-center hover:opacity-75 transition cursor-pointer"
                    onClick={() => onOpen("RegisterModal")}
                  >
                    <LiaSignOutAltSolid className="w-7 h-7 !text-red-500 group:hover:!text-red-400 transition-all" />
                    <span className="hidden md:block text-white group-hover:opacity-80">
                      {t("signUp")}
                    </span>
                  </div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </Container>

      <div className="bg-slate-50 shadow-md">
        <Container navbar>
          <div className="flex items-center justify-between py-1">
            <Link href="/" className="flex items-center justify-center">
              <Image
                width={50}
                height={50}
                src={require("@/public/images/migrateCompassLogo.png")}
                alt="care line"
                className="sm:w-[30px] sm:h-[30px] w-[20px] h-[20px] last:object-contain rounded-full an"
              />
              <div className="text-slate-600 text-[11px]  font-extrabold flex items-center">
                Migrate{" "}
                <span className="text-orange-500 text-[13px]">Compass</span>{" "}
              </div>
            </Link>

            <LanguagePicker />

            <div>
              <div className="hidden lg:flex items-center text-slate-600 text-base">
                <NavigationMenu className="w-full bg-white py-2 rounded-md">
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      {/* About Us */}
                      <NavigationMenuTrigger>
                        {t("aboutUs")}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid gap-2 pl-4 py-2 sm:w-[300px] md:grid-cols-1 lg:w-[300px] text-sm">
                          {AboutNav().map((component) => (
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
                      <NavigationMenuTrigger>
                        {t("visaType")}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="overflow-y-scroll h-screen">
                        {/* Work Visa */}
                        <div className="!text-sm pl-3 mt-2  font-semibold">
                          {t("workVisa")}
                        </div>

                        <div className="my-2 w-full h-[1px] bg-indigo-500" />

                        <ul className="grid gap-2 pl-4 py-2 sm:w-[300px] md:grid-cols-1 lg:w-[300px] text-sm">
                          {SubWorkNav().map((component) => (
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
                          {t("businessVisa")}
                        </div>

                        <div className="my-2 w-full h-[1px] bg-indigo-500" />

                        <ul className="grid gap-2 pl-4 py-2 sm:w-[300px] md:grid-cols-1 lg:w-[300px] text-sm">
                          {SubBusinessNav().map((component) => (
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
                          <NavigationMenuLink
                            title="Expired Visa / Complicated"
                            onClick={difficultCases}
                            className={` cursor-pointer transition-colors hover:bg-[#0559a8] p-2 rounded-md hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal hover:text-white `}
                          >
                            {t("expiredVisaComplicated")}
                          </NavigationMenuLink>
                          {VisaType().map((component) => (
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
                      <NavigationMenuTrigger>{t("fees")}</NavigationMenuTrigger>
                      <NavigationMenuContent className=" overflow-y-scroll">
                        {/* Fees */}

                        <ul className="grid gap-2 pl-4 py-2 sm:w-[300px] md:grid-cols-1 lg:w-[300px] text-sm">
                          {Fees().map((component) => (
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
                        {t("exploreJobs")}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className=" overflow-y-scroll">
                        <ul className="grid gap-2 pl-4 py-2 sm:w-[200px] md:grid-cols-1 lg:w-[200px] text-sm">
                          {Jobs().map((component) => (
                            <NavigationMenuLink
                              onClick={() => onOpen("jobs")}
                              key={component.title}
                              title={component.title}
                              className={` cursor-pointer transition-colors hover:bg-[#0559a8] p-2 rounded-md hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground font-normal hover:text-white  `}
                            >
                              {component.title}
                            </NavigationMenuLink>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>

                    {/* Faq */}
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>{t("faq")}</NavigationMenuTrigger>
                      <NavigationMenuContent className=" overflow-y-scroll">
                        <ul className="grid gap-2 pl-4 py-2 sm:w-[200px] md:grid-cols-1 lg:w-[200px] text-sm">
                          {FaqNav().map((component) => (
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

              <div className="block lg:hidden">
                <MobileMenu
                  serverId={serverId}
                  agents={agents}
                  profileMenu={profileMenu}
                  currentUser={currentUser}
                  supportLine={supportLine}
                  expiredVisa={expiredVisa}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
