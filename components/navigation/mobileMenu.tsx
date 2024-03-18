import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenuOutline } from "react-icons/io5";

import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from "../ui/separator";
import { Components, Faqcomponents, Feescomponents } from "@/lib/data";
import { SubBusinessNav, SubWorkNav, VisaType } from "@/lib/faqData";
import { usePathname } from "next/navigation";

const About = [
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
  { title: "Reviews", href: "/reviews" },
];

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative sm:hidden">
      <button
        onClick={toggleMenu}
        className="text-slate-600 font-semibold text-base"
      >
        <IoMenuOutline className="text-gray-400  w-10 h-10" />
      </button>
      <div
        className={`fixed top-32 h-screen !overflow-y-scroll pb-6 bg-white transition ease-in-out duration-300 transform ${
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
          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold AccordionTrigger">
                  About Us
                </AccordionTrigger>
                <Separator className="w-[250px]" />
                <AccordionContent>
                  {About.map((component) => (
                    <Link
                      key={component.title}
                      href={component.href}
                      className="block select-none space-y-1 rounded-md p-3 leading-none outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
                  Visa Type
                </AccordionTrigger>
                <Separator className=" w-[250px]" />
                <AccordionContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1-1">
                      <AccordionTrigger className="!text-sm pl-3 mt-2 AccordionTrigger font-semibold">
                        Work Visa
                      </AccordionTrigger>
                      <AccordionContent>
                        {SubWorkNav.map((component) => (
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
                        Business Visa
                      </AccordionTrigger>
                      <AccordionContent>
                        {SubBusinessNav.map((component) => (
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
                        Others Visa
                      </AccordionTrigger>
                      <AccordionContent>
                        {VisaType.map((component) => (
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

          <div>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="font-semibold AccordionTrigger">
                  Fees
                </AccordionTrigger>
                <Separator className=" w-[250px]" />
                <AccordionContent>
                  {Feescomponents.map((component) => (
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
          </div>

          <li>
            <Link href="/eb3-Jobs" onClick={toggleMenu}>
              Eb3 active Jobs
            </Link>
          </li>

          <Separator className=" w-[250px] mt-1 h-[2px]" />

          <div>
            <Accordion type="single" collapsible className="w-full mb-14">
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
          </div>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

// const ListItem = React.forwardRef<
//   React.ElementRef<"a">,
//   React.ComponentPropsWithoutRef<"a">
// >(({ className, title, children, ...props }, ref) => {
//   return (
//     <Link
//       href={ref}
//       className={cn(
//         "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
//         className
//       )}
//       {...props}
//     >
//       <div className="text-sm font-medium leading-none">{title}</div>
//     </Link>
//   );
// });
// ListItem.displayName = "ListItem";
