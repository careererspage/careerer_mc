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

export const LanguagePicker: React.FC = () => {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

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
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          className="border-none flex items-center gap-1 hover:bg-gray-200 cursor-pointer p-1 rounded-md"
          onClick={() => setIsOpen(true)}
        >
          <Image
            width={50}
            height={50}
            src={flags[locale]}
            alt={languages[locale]}
            className="w-[17px] h-[17px] object-contain"
          />
          <h1 className="text-[15px]">{languages[locale]}</h1>
          <FaChevronDown
            className="text-[#57a1e6]"
            style={{
              transform: `rotate(${isOpen ? 180 : 0}deg)`,
              transition: "all 0.25s ",
            }}
          />
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />

        {Object.keys(languages).map((lang) => (
          <DropdownMenuCheckboxItem
            key={lang}
            checked={locale === lang}
            onClick={() => {
              handleLocaleChange(lang as Locale);
            }}
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
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
