import React from "react";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export const AboutNav = () => {
  const t = useTranslations("translate.navbarLinks");

  return [
    {
      title: t("aboutUs"),
      link: "/about",
    },
    {
      title: t("contactUs"),
      link: "/contact",
    },
    {
      title: t("reviews"),
      link: "/reviews",
    },
  ];
};

export const VisaType = () => {
  const t = useTranslations("translate.navbarLinks");

  return [
    {
      title: t("Family Visa"),
      link: "/family-green-card",
    },
    {
      title: t("Religious Visa"),
      link: "/r1-visa",
    },
  ];
};

export const SubWorkNav = () => {
  const t = useTranslations("translate.navbarLinks");

  return [
    {
      title: t("Switzerland Work Visa"),
      link: "/swiss-workvisa",
    },
    {
      title: t("USA Work Visa"),
      link: "/usa-workvisa",
    },
  ];
};

export const SubBusinessNav = () => {
  const t = useTranslations("translate.navbarLinks");

  return [
    {
      title: t("Switzerland Business Visa"),
      link: "/swiss-businessvisa",
    },
    {
      title: t("USA Business Visa"),
      link: "/usa-businessvisa",
    },
  ];
};

export const SubParentNav = () => {
  const t = useTranslations("translate.navbarLinks");

  return [
    {
      title: t("Switzerland"),
      link: "/migration",
    },
    {
      title: t("USA"),
      link: "/usa-migration",
    },
  ];
};

export const Jobs = () => {
  const t = useTranslations("translate.navbarLinks");

  return [
    {
      title: t("Jobs in USA"),
    },
    {
      title: t("Jobs in Switzerland"),
    },
    {
      title: t("Jobs in Canada"),
    },
    {
      title: t("Jobs in Australia"),
    },
  ];
};

export const Fees = () => {
  const t = useTranslations("translate.navbarLinks");

  return [
    {
      title: t("USA Fee"),
      link: "/usa-fees",
    },
    {
      title: t("Switzerland Fee"),
      link: "/swiss-fees",
    },
  ];
};

export const FaqNav = () => {
  const t = useTranslations("translate.navbarLinks");

  return [
    {
      title: t("Switzerland"),
      link: "/swiss-faq",
    },
    {
      title: t("USA"),
      link: "/usa-faq",
    },
  ];
};

export const SwissFaq = async () => {
  const t = await getTranslations("translate.swissFaqPage");

  return [
    {
      question: t("swissFaqs.list1"),
      answer: t("swissFaqs.details1"),
    },

    {
      question: t("swissFaqs.list2"),
      answer: t("swissFaqs.details2"),
    },
    {
      question: t("swissFaqs.list3"),
      answer: t("swissFaqs.details3"),
    },
    {
      question: t("swissFaqs.list4"),
      answer: t("swissFaqs.details4"),
    },
    {
      question: t("swissFaqs.list5"),
      answer: t("swissFaqs.details5"),
    },
    {
      question: t("swissFaqs.list6"),
      answer: t("swissFaqs.details6"),
    },
    {
      question: t("swissFaqs.list7"),
      answer: t("swissFaqs.details7"),
    },
    {
      question: t("swissFaqs.list8"),
      answer: t("swissFaqs.details8"),
    },
    {
      question: t("swissFaqs.list9"),
      answer: t("swissFaqs.details9"),
    },
    {
      question: t("swissFaqs.list10"),
      answer: t("swissFaqs.details10"),
    },
    {
      question: t("swissFaqs.list11"),
      answer: t("swissFaqs.details11"),
    },
    {
      question: t("swissFaqs.list12"),
      answer: t("swissFaqs.details12"),
    },
    {
      question: t("swissFaqs.list13"),
      answer: t("swissFaqs.details13"),
    },
    {
      question: t("swissFaqs.list14"),
      answer: t("swissFaqs.details14"),
    },
    {
      question: t("swissFaqs.list15"),
      answer: t("swissFaqs.details15"),
    },
    {
      question: t("swissFaqs.list16"),
      answer: t("swissFaqs.details16"),
    },
    {
      question: t("swissFaqs.list17"),
      answer: t("swissFaqs.details17"),
    },
    {
      question: t("swissFaqs.list18"),
      answer: t("swissFaqs.details18"),
    },
    {
      question: t("swissFaqs.list19"),
      answer: t("swissFaqs.details19"),
    },
    {
      question: t("swissFaqs.list20"),
      answer: t("swissFaqs.details20"),
    },
  ];
};

export const USAFaqData = async () => {
  const t = await getTranslations("translate.usaFaqPage");

  return [
    {
      question: t("usaFaqs.list1"),
      answer: t("usaFaqs.details1"),
    },

    {
      question: t("usaFaqs.list2"),
      answer: t("usaFaqs.details2"),
    },
    {
      question: t("usaFaqs.list3"),
      answer: t("usaFaqs.details3"),
    },
    {
      question: t("usaFaqs.list4"),
      answer: t("usaFaqs.details4"),
    },
    {
      question: t("usaFaqs.list5"),
      answer: t("usaFaqs.details5"),
    },
    {
      question: t("usaFaqs.list6"),
      answer: t("usaFaqs.details6"),
    },
    {
      question: t("usaFaqs.list7"),
      answer: t("usaFaqs.details7"),
    },
    {
      question: t("usaFaqs.list8"),
      answer: t("usaFaqs.details8"),
    },
    {
      question: t("usaFaqs.list9"),
      answer: t("usaFaqs.details9"),
    },
    {
      question: t("usaFaqs.list10"),
      answer: t("usaFaqs.details10"),
    },
    {
      question: t("usaFaqs.list11"),
      answer: t("usaFaqs.details11"),
    },
    {
      question: t("usaFaqs.list12"),
      answer: t("usaFaqs.details12"),
    },
    {
      question: t("usaFaqs.list13"),
      answer: t("usaFaqs.details13"),
    },
    {
      question: t("usaFaqs.list14"),
      answer: t("usaFaqs.details14"),
    },
    {
      question: t("usaFaqs.list15"),
      answer: t("usaFaqs.details15"),
    },
    {
      question: t("usaFaqs.list16"),
      answer: t("usaFaqs.details16"),
    },
    {
      question: t("usaFaqs.list17"),
      answer: t("usaFaqs.details17"),
    },
    {
      question: t("usaFaqs.list18"),
      answer: t("usaFaqs.details18"),
    },
    {
      question: t("usaFaqs.list19"),
      answer: t("usaFaqs.details19"),
    },
    {
      question: t("usaFaqs.list20"),
      answer: t("usaFaqs.details20"),
    },
  ];
};
