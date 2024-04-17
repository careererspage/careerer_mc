"use client";
import Link from "next/link";
import { useState } from "react";
import { IoClose, IoMenuOutline, IoSettingsOutline } from "react-icons/io5";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useModal } from "@/hooks/use-modal-store";
import { Faqcomponents } from "@/lib/data";
import {
  FaqNav,
  Fees,
  SubBusinessNav,
  SubWorkNav,
  VisaType,
} from "@/lib/faqData";
import { cn } from "@/lib/utils";
import { SafeMember, SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { LiaSignOutAltSolid } from "react-icons/lia";
import { MdOutlineTrackChanges } from "react-icons/md";
import { RiTeamLine } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import ServerTool from "../server/server-tool";
import { Separator } from "../ui/separator";

const About = () => {
  const t = useTranslations("translate.navbarLinks");

  return [
    { title: t("aboutUs"), href: "/about" },
    { title: t("contactUs"), href: "/contact" },
    { title: t("reviews"), href: "/reviews" },
  ];
};

interface MobileMenuProps {
  agents?: SafeUser[] | null;
  serverId?: string;
  profileMenu?: boolean;
  currentUser?: SafeUser | null;
  supportLine: SafeMember | undefined;
  expiredVisa: SafeMember | undefined;
}
const MobileMenu = ({
  profileMenu,
  currentUser,
  agents,
  serverId,
  supportLine,
  expiredVisa,
}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { onOpen } = useModal();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const t = useTranslations("translate.navbarLinks");
  const c = useTranslations("translate.common");

  return (
    <div className="relative z-50 lg:hidden">
      <button
        onClick={toggleMenu}
        className="text-slate-600 font-semibold text-base"
      >
        <IoMenuOutline className="text-gray-400  w-10 h-10" />
      </button>
      {profileMenu ? (
        <>
          <div
            onClick={toggleMenu}
            className={`fixed inset-0 w-full h-screen !overflow-y-scroll pb-6 bg-gray-900/80 transition ease-in-out duration-300 transform ${
              isOpen
                ? "transform translate-x-0 w-[290px] -right-4"
                : "-translate-x-full w-0 left-0"
            }`}
          />
          <div
            className={`fixed top-0 h-screen !text-zinc-600 !overflow-y-scroll pb-2 bg-white transition ease-in-out duration-300 transform ${
              isOpen
                ? "transform translate-x-0 w-[290px] -right-4"
                : "-translate-x-full w-0 left-0"
            }`}
          >
            <div
              className="bg-white shadow-md hover:shadow-sm transition-all rounded-full w-[90px] h-[30px] m-3 flex items-center gap-2 justify-center cursor-pointer border"
              onClick={toggleMenu}
            >
              <IoClose size={20} className="text-red-500" />
              <h1>Close</h1>
            </div>
            <ul
              className={cn(
                isOpen ? "flex flex-col" : "",
                "  items-start gap-1 p-5"
              )}
            >
              <Link
                href="/"
                onClick={toggleMenu}
                className={cn(
                  "flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full py-1",
                  pathname === "/"
                    ? "bg-[#0559a8] !text-white pl-2"
                    : "text-gray-600"
                )}
              >
                <MdOutlineTrackChanges size={20} className="" />
                <span className="pl-3">Home page</span>
              </Link>

              <Link
                href="/migrate-compass"
                onClick={toggleMenu}
                className={cn(
                  "flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full py-1",
                  pathname === "/migrate-compass"
                    ? "bg-[#0559a8] text-white pl-2"
                    : ""
                )}
              >
                <RiTeamLine size={20} />
                <span className=" pl-3">MGC</span>
              </Link>

              <Separator className=" w-[250px] my-2 h-[1px]" />

              <Link
                href="/settings"
                onClick={toggleMenu}
                className={cn(
                  "flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full py-1",
                  pathname === "/settings" ? "bg-[#0559a8] text-white pl-2" : ""
                )}
              >
                <IoSettingsOutline size={20} />
                <span className="pl-3">Settings</span>
              </Link>

              <Separator className=" w-[250px] my-2 h-[1px]" />

              <ServerTool
                profilePage
                serverId={serverId}
                supportLine={supportLine}
                expiredVisa={expiredVisa}
              />

              <Separator className=" w-[250px] my-2 h-[1px]" />
              <div className="text-xs my-1 uppercase font-bold text-zinc-500">
                Country Office
              </div>
              {agents &&
                agents.map((agent) => (
                  <Link
                    key={agent.id}
                    href={`/servers/${serverId}/conversations/${agent.memberId}`}
                    className={cn(
                      "flex items-center hover:opacity-60 mb-2 transition duration-200 cursor-pointer w-full py-1",
                      pathname ===
                        `/servers/${serverId}/conversations/${agent.memberId}`
                        ? "bg-[#0559a8] !text-white pl-2"
                        : "text-gray-600"
                    )}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={
                        agent.imageUrl ||
                        require("@/public/images/care-line.png")
                      }
                      alt="care line"
                      className="w-[20px] h-[20px] object-cover"
                    />
                    <span className="pl-3 sm:text-sm text-[12px]">
                      {agent.firstName}
                    </span>
                  </Link>
                ))}

              <Separator className=" w-[250px] my-2 h-[1px]" />

              <Link
                href="/track-process"
                onClick={toggleMenu}
                className={cn(
                  "flex items-center hover:opacity-60 transition duration-200 cursor-pointer w-full py-1",
                  pathname === "/track-process"
                    ? "bg-[#0559a8] text-white pl-2"
                    : ""
                )}
              >
                <MdOutlineTrackChanges size={20} />
                <span className="pl-3">Track Process</span>
              </Link>

              <Separator className=" w-[250px] my-2 h-[1px]" />

              <Accordion type="single" collapsible className="w-full mb-12">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="AccordionTrigger font-semibold outline-none border-none hover:outline-none">
                    Faq
                  </AccordionTrigger>
                  <Separator className=" w-[250px]" />
                  <AccordionContent>
                    {Faqcomponents.map((component) => (
                      <Link
                        key={component.title}
                        href={component.href}
                        className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                          pathname === component.href
                            ? "bg-[#0559a8] text-white"
                            : ""
                        }`}
                      >
                        <div className="text-sm font-medium leading-none">
                          {component.title}
                        </div>
                      </Link>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div
            onClick={toggleMenu}
            className={`fixed inset-0 w-full h-screen !overflow-y-scroll pb-6 bg-gray-900/80 transition ease-in-out duration-300 transform ${
              isOpen
                ? "transform translate-x-0 w-[290px] -right-4"
                : "-translate-x-full w-0 left-0"
            }`}
          />
          <div
            className={`fixed top-0 h-screen !text-zinc-600 !overflow-y-scroll pb-2 bg-white transition ease-in-out duration-300 transform ${
              isOpen
                ? "transform translate-x-0 w-[290px] -right-4"
                : "-translate-x-full w-0 left-0"
            }`}
          >
            <ul
              className={cn(
                isOpen ? "flex flex-col" : "",
                "  items-start gap-5 p-5 mb-6"
              )}
            >
              <div
                className="bg-white shadow-md hover:shadow-sm transition-all rounded-full w-[90px] h-[30px] m-3 flex items-center gap-2 justify-center cursor-pointer border"
                onClick={toggleMenu}
              >
                <IoClose size={20} className="text-red-500" />
                <h1>Close</h1>
              </div>

              {currentUser && (
                <>
                  <Link
                    href="/migrate-compass"
                    className="flex items-center gap-1 group cursor-pointer text-gray-600"
                  >
                    <RxPerson className="sm:h-7 sm:w-7 w-5 h-5 !text-gray-500 group:hover:!text-red-400 transition-all" />
                    <span className=" text-gray-600 group-hover:opacity-80">
                      Profile
                    </span>
                  </Link>
                  <Separator className=" w-[250px] my-1 h-[2px]" />
                </>
              )}
              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-semibold AccordionTrigger">
                      {t("aboutUs")}
                    </AccordionTrigger>
                    <Separator className="w-[250px]" />
                    <AccordionContent>
                      {About().map((component) => (
                        <Link
                          key={component.title}
                          href={component.href}
                          className={`block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground   ${
                            pathname === component.href
                              ? "bg-[#0559a8] text-white"
                              : ""
                          }`}
                        >
                          <div className="text-sm font-medium leading-none">
                            {component.title}
                          </div>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-semibold AccordionTrigger">
                      {c("services")}
                    </AccordionTrigger>
                    <Separator className=" w-[250px]" />
                    <AccordionContent>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1-1">
                          <AccordionTrigger className="!text-sm pl-3 mt-2 AccordionTrigger font-semibold">
                            {t("workVisa")}
                          </AccordionTrigger>
                          <AccordionContent>
                            {SubWorkNav().map((component) => (
                              <Link
                                key={component.title}
                                href={component.link}
                                className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                                  pathname === component.link
                                    ? "bg-[#0559a8] text-white"
                                    : ""
                                }`}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {component.title}
                                </div>
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-1-2">
                          <AccordionTrigger className="!text-sm pl-3 mt-2 AccordionTrigger font-semibold">
                            {c("Business Visa")}
                          </AccordionTrigger>
                          <AccordionContent>
                            {SubBusinessNav().map((component) => (
                              <Link
                                key={component.title}
                                href={component.link}
                                className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                                  pathname === component.link
                                    ? "bg-[#0559a8] text-white"
                                    : ""
                                }`}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {component.title}
                                </div>
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-1-3">
                          <AccordionTrigger className="!text-sm pl-3 mt-2 AccordionTrigger font-semibold">
                            {c("othersVisa")}
                          </AccordionTrigger>
                          <AccordionContent>
                            {VisaType().map((component) => (
                              <Link
                                key={component.title}
                                href={component.link}
                                className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                                  pathname === component.link
                                    ? "bg-[#0559a8] text-white"
                                    : ""
                                }`}
                              >
                                <div className="text-sm font-medium leading-none">
                                  {component.title}
                                </div>
                              </Link>
                            ))}
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div
                className="cursor-pointer"
                onClick={() => {
                  onOpen("jobs");
                  toggleMenu();
                }}
              >
                {c("exploreJobs")}
              </div>

              <Separator className=" w-[250px] my-1 h-[2px]" />

              <li>
                <Link href="/eb3-Jobs" onClick={toggleMenu}>
                  {c("chatOfficer")}
                </Link>
              </li>

              <Separator className=" w-[250px] my-1 h-[2px]" />

              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="font-semibold AccordionTrigger">
                      {c("fees")}
                    </AccordionTrigger>
                    <Separator className=" w-[250px]" />
                    <AccordionContent>
                      {Fees().map((component) => (
                        <Link
                          key={component.title}
                          href={component.link}
                          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                            pathname === component.link
                              ? "bg-[#0559a8] text-white"
                              : ""
                          }`}
                        >
                          <div className="text-sm font-medium leading-none">
                            {component.title}
                          </div>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              <div>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="AccordionTrigger font-semibold outline-none border-none hover:outline-none">
                      {t("faq")}
                    </AccordionTrigger>
                    <Separator className=" w-[250px]" />
                    <AccordionContent>
                      {FaqNav().map((component) => (
                        <Link
                          key={component.title}
                          href={component.link}
                          className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${
                            pathname === component.link
                              ? "bg-[#0559a8] text-white"
                              : ""
                          }`}
                        >
                          <div className="text-sm font-medium leading-none">
                            {component.title}
                          </div>
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {currentUser ? (
                <div
                  className="flex items-center gap-1 group cursor-pointer text-gray-600"
                  onClick={() => signOut()}
                >
                  <LiaSignOutAltSolid className="sm:h-7 sm:w-7 w-5 h-5 !text-red-500 group:hover:!text-red-400 transition-all" />
                  <span className=" text-gray-600 group-hover:opacity-80">
                    Sign out
                  </span>
                </div>
              ) : (
                <>
                  <div
                    className="mt-auto flex items-center gap-1 group cursor-pointer"
                    onClick={() => onOpen("loginModal")}
                  >
                    <LiaSignOutAltSolid className="sm:h-7 sm:w-7 w-5 h-5 !text-red-500 group:hover:!text-red-400 transition-all" />
                    <span className=" text-gray-600 group-hover:opacity-80">
                      Login
                    </span>
                  </div>

                  <Separator className=" w-[250px] my-1 h-[2px]" />

                  <div
                    className="mt-auto flex items-center gap-1 group cursor-pointer"
                    onClick={() => onOpen("RegisterModal")}
                  >
                    <LiaSignOutAltSolid className="sm:h-7 sm:w-7 w-5 h-5 !text-red-500 group:hover:!text-red-400 transition-all" />
                    <span className=" text-gray-600 group-hover:opacity-80">
                      Create account
                    </span>
                  </div>
                </>
              )}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default MobileMenu;
