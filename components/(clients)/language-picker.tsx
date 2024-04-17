"use client";

import { Locale } from "@/lib/locale";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { CheckIcon } from "lucide-react";

export const LanguagePicker: React.FC = () => {
  const locale = useLocale() as Locale;
  const router = useRouter();

  const flags = {
    en: require("@/public/images/usa-translate-flag.png"),
    es: require("@/public/images/spanish-flag.jpg"),
    ar: require("@/public/images/arab-flag.png"),
    pt: require("@/public/images/Portuguese-translate-flag.png"),
    ph: require("@/public/images/philippines-flag.png"),
  };

  const languages = {
    en: "English",
    es: "Spanish",
    ar: "Arabic",
    pt: "Portuguese",
    ph: "Philippines",
  };

  function handleLocaleChange(newLocale: Locale): void {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
  }

  return (
    <div>
      <NavigationMenu className="w-full bg-white py-2 rounded-md">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              <div className="transition border-none flex items-center gap-1 hover:bg-gray-200 cursor-pointer p-1 rounded-md w-full">
                <Image
                  width={50}
                  height={50}
                  src={flags[locale]}
                  alt={languages[locale]}
                  className="w-[17px] h-[17px] object-contain"
                />
                <h1 className="text-[15px]">{languages[locale]}</h1>
              </div>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-2 pl-4 py-2 w-[170px] sm:w-[300px] md:grid-cols-1 lg:w-[300px] text-sm">
                {Object.keys(languages).map((lang) => (
                  <div
                    key={lang}
                    onClick={() => {
                      handleLocaleChange(lang as Locale);
                    }}
                    className={`transition border-none flex items-center gap-1 hover:bg-gray-200 cursor-pointer p-1 rounded-md ${
                      locale === lang ? "bg-gray-200" : ""
                    }`}
                  >
                    <Image
                      width={50}
                      height={50}
                      src={flags[lang as keyof typeof flags]}
                      alt={languages[lang as keyof typeof languages]}
                      className="w-[17px] h-[17px] mr-3 object-contain"
                    />
                    <h1 className="text-[15px]">
                      {languages[lang as keyof typeof languages]}
                    </h1>
                    {locale === lang && (
                      <CheckIcon className="w-5 h-5 text-green-500" />
                    )}
                  </div>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
