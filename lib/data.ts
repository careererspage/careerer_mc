import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export const heroImages = [
  {
    image: require("../public/images/hero/ttravel.jpg"),
  },
  {
    image: require("../public/images/hero/school-visa.jpg"),
  },
  {
    image: require("../public/images/hero/visa-application-america-arrangement.jpg"),
  },
  {
    image: require("../public/images/hero/work-visa.jpg"),
  },
  {
    image: require("../public/images/hero/U.S passport.jpg"),
  },
];

export const Reviews = () => {
  const t = useTranslations("translate.clientReviews");

  return [
    {
      name: t("name1"),
      comment: t("comment1"),
      rating: 5,
    },
    {
      name: t("name2"),
      comment: t("comment2"),
      rating: 5,
    },
    {
      name: t("name3"),
      comment: t("comment3"),
      rating: 4,
    },
    {
      name: t("name4"),
      comment: t("comment4"),
      rating: 5,
    },
    {
      name: t("name5"),
      comment: t("comment5"),
      rating: 4,
    },
    {
      name: t("name6"),
      comment: t("comment6"),
      rating: 5,
    },
    {
      name: t("name7"),
      comment: t("comment7"),
      rating: 4,
    },
    {
      name: t("name8"),
      comment: t("comment8"),
      rating: 5,
    },
    {
      name: t("name9"),
      comment: t("comment9"),
      rating: 5,
    },
    {
      name: t("name10"),
      comment: t("comment10"),
      rating: 5,
    },
    {
      name: t("name11"),
      comment: t("comment11"),
      rating: 5,
    },
    {
      name: t("name12"),
      comment: t("comment12"),
      rating: 5,
    },
    {
      name: t("name13"),
      comment: t("comment13"),
      rating: 4,
    },
    {
      name: t("name14"),
      comment: t("comment14"),
      rating: 5,
    },
    {
      name: t("name15"),
      comment: t("comment15"),
      rating: 5,
    },
    {
      name: t("name16"),
      comment: t("comment16"),
      rating: 5,
    },
    {
      name: t("name17"),
      comment: t("comment17"),
      rating: 4,
    },
    {
      name: t("name18"),
      comment: t("comment18"),
      rating: 4,
    },
    {
      name: t("name19"),
      comment: t("comment19"),
      rating: 4,
    },
    {
      name: t("name20"),
      comment: t("comment20"),
      rating: 5,
    },
    {
      name: t("name21"),
      comment: t("comment21"),
      rating: 5,
    },
    {
      name: t("name22"),
      comment: t("comment22"),
      rating: 4,
    },
    {
      name: t("name23"),
      comment: t("comment23"),
      rating: 5,
    },
    {
      name: t("name24"),
      comment: t("comment24"),
      rating: 4,
    },
    {
      name: t("name25"),
      comment: t("comment25"),
      rating: 5,
    },
    {
      name: t("name26"),
      comment: t("comment26"),
      rating: 4,
    },
    {
      name: t("name27"),
      comment: t("comment27"),
      rating: 5,
    },
    {
      name: t("name28"),
      comment: t("comment28"),
      rating: 4,
    },
    {
      name: t("name29"),
      comment: t("comment29"),
      rating: 5,
    },
    {
      name: t("name30"),
      comment: t("comment30"),
      rating: 4,
    },
    {
      name: t("name31"),
      comment: t("comment31"),
      rating: 5,
    },
    {
      name: t("name32"),
      comment: t("comment32"),
      rating: 4,
    },
    {
      name: t("name33"),
      comment: t("comment33"),
      rating: 5,
    },
    {
      name: t("name34"),
      comment: t("comment34"),
      rating: 4,
    },
    {
      name: t("name35"),
      comment: t("comment35"),
      rating: 5,
    },
    {
      name: t("name36"),
      comment: t("comment36"),
      rating: 4,
    },
    {
      name: t("name37"),
      comment: t("comment37"),
      rating: 5,
    },
    {
      name: t("name38"),
      comment: t("comment38"),
      rating: 4,
    },
    {
      name: t("name39"),
      comment: t("comment39"),
      rating: 5,
    },
    {
      name: t("name40"),
      comment: t("comment40"),
      rating: 5,
    },
    {
      name: t("name41"),
      comment: t("comment41"),
      rating: 4,
    },
    {
      name: t("name42"),
      comment: t("comment42"),
      rating: 5,
    },

    {
      name: t("name43"),
      comment: t("comment43"),
      rating: 5,
    },
    {
      name: t("name44"),
      comment: t("comment44"),
      rating: 5,
    },
    {
      name: t("name45"),
      comment: t("comment45"),
      rating: 5,
    },
  ];
};

export const DifficultCases = [
  {
    name: "MIRAAL N",
    country: "Nigeria",
    cases: "Expired Visa",
    Comment:
      "Thank you Michael & team! The process for a TN visa was efficient, comprehensive and seamless. Highly recommend.",
    rating: 5,
  },
];

export const Regions = () => {
  const t = useTranslations("translate.offices");

  return [
    {
      image: require("../public/images/usa.jpg"),
      country: t("usaOffice"),
      comment: t("usaComment"),
    },
    {
      image: require("../public/images/canada-flag.jpg"),
      country: t("canadaOffice"),
      comment: t("canadaComment"),
    },
    {
      image: require("../public/images/austrailian-flag.jpg"),
      country: t("australiaOffice"),
      comment: t("australiaComment"),
    },
    {
      image: require("../public/images/switzerland-flag.jpg"),
      country: t("switzerlandOffice"),
      comment: t("switzerlandComment"),
    },
  ];
};
export const Benefits = () => {
  const t = useTranslations("translate.benefits");

  return [
    {
      image: require("../public/images/Denial.png"),
      title: t("title1"),
      details: t("details1"),
    },
    {
      image: require("../public/images/sponsorship.jpg"),
      title: t("title2"),
      details: t("details2"),
    },

    {
      image: require("../public/images/Cost.png"),
      title: t("title3"),
      details: t("details3"),
    },
    {
      image: require("../public/images/caution.jpg"),
      title: t("title4"),
      details: t("details4"),
    },
    {
      image: require("../public/images/agent.png"),
      title: t("title5"),
      details: t("details5"),
    },
    {
      image: require("../public/images/peace-of-mind.png"),
      title: t("title6"),
      details: t("details6"),
    },
    {
      image: require("../public/images/time.png"),
      title: t("title7"),
      details: t("details7"),
    },
    {
      image: require("../public/images/care-line.png"),
      title: t("title8"),
      details: t("details8"),
    },
  ];
};

export const Processes = () => {
  const t = useTranslations("translate.workProcess");

  return [
    {
      image: require("../public/images/folder.png"),
      title: t("title1"),
      details: t("details1"),
    },

    {
      image: require("../public/images/job.png"),
      title: t("title2"),
      details: t("details2"),
    },
    {
      image: require("../public/images/payment.png"),
      title: t("title3"),
      details: t("details3"),
    },
    {
      image: require("../public/images/verified.png"),
      title: t("title4"),
      details: t("details4"),
    },
    {
      image: require("../public/images/interview-agent.png"),
      title: t("title5"),
      details: t("details5"),
    },
    {
      image: require("../public/images/visa.png"),
      title: t("title6"),
      details: t("details6"),
    },
    {
      image: require("../public/images/home.png"),
      title: t("title7"),
      details: t("details7"),
    },
    {
      image: require("../public/images/agent.png"),
      title: t("title8"),
      details: t("details8"),
    },
  ];
};

export const VisaType = () => {
  const t = useTranslations("translate.visaTypeAboutPage");

  return [
    {
      image: require("../public/images/agent.png"),
      title: t("title1"),
      details: t("details1"),
    },
    {
      image: require("../public/images/Denial.png"),
      title: t("title2"),
      details: t("details2"),
    },

    {
      image: require("../public/images/Cost.png"),
      title: t("title3"),
      details: t("details3"),
    },

    {
      image: require("../public/images/peace-of-mind.png"),
      title: t("title4"),
      details: t("details4"),
    },
  ];
};

export const Components = [
  { title: "Work Visa", href: "/work" },
  { title: "Business Visa", href: "/business" },
  { title: "Student Visa", href: "/student" },
  { title: "Parent Migration", href: "/migration" },
  { title: "R1 Visa", href: "/rvisa" },
];

export const Feescomponents = [
  { title: "U.S.A. Fee", href: "/charges" },
  { title: "Switzerland Fee", href: "/swiss-fees" },
];
export const Faqcomponents = [
  { title: "U.S.A. Faq", href: "/usa-faq" },
  { title: "Switzerland Faq", href: "/swiss-faq" },
];

export const Teams = [
  {
    image: require("../public/images/team/member-4.jpeg"),
    name: "Andrew Ryan",
    title: "CEO of Migrate Compass, Retired USCIS officer",
    details:
      "Fosters strong relationships with immigration consulates, enhancing the company’s reputation and facilitating smoother visa application processes for clients. As CEO, Andrew leads the team at Migrate Compass, inspiring them to deliver exceptional service and meet the company’s strategic goals",

    education: [
      {
        school: "University of Southern California (B.A. in Political Science)",
      },
      {
        school: "Harvard University (M.A. in Public Administration)",
      },
    ],
  },
  {
    image: require("../public/images/team/director.jpg"),
    name: "Ethan Matthew",
    title: "Retired Canadian Immigration Services Officer",
    details:
      "Leverages his expertise at Migrate Compass to streamline immigration processes. His in-depth knowledge of Canadian immigration norms and hands-on experience significantly enhance our service quality, making the immigration journey smoother for our clients.",
    education: [
      {
        school: "University of Toronto (B.A. in Sociology)",
      },
      {
        school: "York University (M.A. in Immigration and Settlement Studies)",
      },
    ],
  },
  {
    image: require("../public/images/team/member-2.jpeg"),
    name: "Attorney Alan Brad",
    title: "Senior Attorney",
    details:
      "Specializes in case management at Migrate Compass. Holds an MBA and a law degree from McGill University.",
    education: [
      {
        school: "McGill University Faculty of Law (BCL/LLB/LLM)",
      },
      {
        school: "Grenoble Graduate School of Business (MBA)",
      },
      {
        school: "Law Society of Ontario",
      },
      {
        school: "Canadian Bar Association",
      },
    ],
  },

  {
    image: require("../public/images/team/member-5.jpeg"),
    name: "Sheila Ian",
    title: "Senior Business Immigration Specialist",
    details:
      "Sheila’s role is far from ordinary, she is the bridge that connects ambitious professionals to their dreams. Her proficiency in navigating complex immigration laws greatly simplifies the process for those seeking business visas and beyond. Sheila’s expertise is a valuable asset to Migrate Compass, enhancing our ability to provide top-notch immigration services",
    education: [
      {
        school:
          "University of California, Los Angeles, Bachelor of Arts (B.A.), Political Science",
      },
      {
        school: "Georgetown University Law Center, Juris Doctor (J.D.)",
      },
      {
        school: "Certified Specialist in Immigration Law",
      },
    ],
  },

  {
    image: require("../public/images/team/member-3.jpeg"),
    name: "Ann Souza",
    title: "Chief of Staff",
    details:
      "Ann plays a crucial role in managing the staff. She ensures smooth communication between departments, resolves issues, and fosters a positive work environment. Her leadership helps in enhancing productivity and maintaining high morale among the team members.",
    education: [
      {
        school:
          "Stanford University Bachelor of Arts (B.A.), International RelationsBachelor of Arts (B.A.), International Relations",
      },
      {
        school: "The London School of Economics and Political Science (LSE)",
      },
      {
        school:
          "Master of Science - MS, Interational DevelopmentMaster of Science - MS, Interational Development",
      },
    ],
  },

  {
    image: require("../public/images/team/member-7.jpg"),
    name: "Nicole Joseph",
    title: "Director of Client Services",
    details:
      "Nicole ensures strong relationships with clients, understanding their needs and ensuring their satisfaction, leads the client services team, addresses any issues or concerns raised by clients, providing effective solutions and high performance.",
    education: [
      {
        school:
          "University of Michigan, Bachelor of Arts (B.A.), Business Administration",
      },
      {
        school: "Certified Customer Service Professional (CCSP)",
      },
    ],
  },

  {
    image: require("../public/images/team/member-6.jpg"),
    name: "Joel Mora",
    title: "Legal Assistant",
    details:
      "Assisting with legal matters related to Europe. visa applications. Experienced in handling various visa types and dedicated to making the process smoother for clients.",
    education: [
      {
        school:
          "University of California, Berkeley, Bachelor of Arts (B.A.), Political Science",
      },
      {
        school: "Yale Law School, Juris Doctor (J.D.)",
      },
      {
        school: "Certified Paralegal",
      },
    ],
  },

  {
    image: require("../public/images/team/member-1.jpeg"),
    name: "Ardian  Snow",
    title: "Vice President, Finance",
    details:
      "Entrusted with the responsibility of providing expert advice and guiding clients towards the most beneficial and secure path tailored to their specific needs. ",
    education: [
      {
        school: "University of Pennsylvania (B.S. in Economics)",
      },
      {
        school: "Columbia University (MBA in Finance)",
      },
    ],
  },
];

export const WorkOverview = [
  {
    lists: "  What is the EB3 Visa?",
  },
  {
    lists: "What are the Benefits of the EB3 Visa?",
  },
  {
    lists: "What are the EB3 Visa Requirements?",
  },
  {
    lists: "  What is the EB3 Visa Application Process?",
  },
  {
    lists: "What Documents are Needed to Apply for an EB3 Visa?",
  },
  {
    lists: "What Forms are Needed to Apply for an EB3 Visa?",
  },
  {
    lists: "What are the EB3 Visa Fees?",
  },
  {
    lists: "What is the EB3 visa Processing Time?",
  },
];

export const SwissWork = async () => {
  const t = await getTranslations("translate.swissWorkPage.swissWorkBenefits");

  return [
    {
      title: t("title1"),
      lists: t("reason1"),
    },
    {
      title: t("title2"),
      lists: t("reason2"),
    },
    {
      title: t("title3"),
      lists: t("reason3"),
    },
    {
      title: t("title4"),
      lists: t("reason4"),
    },
    {
      title: t("title5"),
      lists: t("reason5"),
    },
    {
      title: t("title6"),
      lists: t("reason6"),
    },
  ];
};

export const SwissRequirement = async () => {
  const t = await getTranslations(
    "translate.swissWorkPage.swissWorkRequirement"
  );

  return [
    {
      title: t("title1"),
      lists: t("lists1"),
    },
    {
      title: t("title2"),
      lists: t("lists2"),
    },
    {
      title: t("title3"),
      lists: t("lists3"),
    },
    {
      title: t("title4"),
      lists: t("lists4"),
    },
  ];
};

export const MigrateOverview = [
  {
    lists: "Be a U.S. citizen.",
  },
  {
    lists: "Be at least 21 years old.",
  },
  {
    lists: "Live in the U.S. and have a valid U.S. address.",
  },
  {
    lists: "Live in the U.S. and have a valid U.S. address.",
  },
  {
    lists:
      "Both you and your parent(s) must prove your relationship through a valid birth certificate.",
  },
];

export const StudentOverview = [
  {
    lists: "What is the EB3 Visa?",
  },
  {
    lists: "What are the Benefits of the EB3 Visa?",
  },
  {
    lists: "What are the EB3 Visa Requirements?",
  },
  {
    lists: "What is the EB3 Visa Application Process?",
  },
  {
    lists: "What Documents are Needed to Apply for an EB3 Visa?",
  },
  {
    lists: "What Forms are Needed to Apply for an EB3 Visa?",
  },
  {
    lists: "What are the EB3 Visa Fees?",
  },
  {
    lists: "What is the EB3 visa Processing Time?",
  },
];

export const BusinessOverview = [
  {
    lists: "What is the E2 Visa?",
  },
  {
    lists: "What are the E2 Visa Requirements?",
  },
  {
    lists: "What are the Benefits of an E2 Visa?",
  },
  {
    lists: "What is the Process of Getting an E2 Visa?",
  },
  {
    lists:
      "What are the Differences Between Getting an E2 Visa and Doing a Change of Status to E2 Status?",
  },
  {
    lists: "How Long Does it Take to Get an E2 Visa?",
  },
  {
    lists:
      "If I Get an E2 Visa, Do My Family Members Get Immigration Benefits?",
  },
  {
    lists: "How Long Can I be in the US on an E2 Visa?",
  },
  {
    lists: "How Can I Go From an E2 Visa to a Green Card?",
  },
  {
    lists: "Can I Get an E2 Visa as an Employee of an E2 Company?",
  },
];

export const UsaFeeA = () => {
  const t = useTranslations("translate.usaServicePage");

  return [
    {
      lists: t("paymentTypeA.uLFeesA.list1"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list2"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list3"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list4"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list5"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list6"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list7"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list8"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list9"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list10"),
    },
  ];
};

export const UsaFeeC = () => {
  const t = useTranslations("translate.usaServicePage");

  return [
    {
      lists: t("paymentTypeA.uLFeesC.list1"),
    },
    {
      lists: t("paymentTypeA.uLFeesC.list2"),
    },
    {
      lists: t("paymentTypeA.uLFeesC.list3"),
    },
    {
      lists: t("paymentTypeA.uLFeesC.list4"),
    },
  ];
};

export const SwissA = () => {
  const t = useTranslations("translate.swissServicePage");

  return [
    {
      lists: t("paymentTypeA.uLFeesA.list1"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list2"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list3"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list4"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list5"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list6"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list7"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list8"),
    },
    {
      lists: t("paymentTypeA.uLFeesA.list9"),
    },
  ];
};

export const SwissC = () => {
  const t = useTranslations("translate.swissServicePage");
  return [
    {
      lists: t("paymentTypeA.uLFeesC.list1"),
    },
    {
      lists: t("paymentTypeA.uLFeesC.list2"),
    },
    {
      lists: t("paymentTypeA.uLFeesC.list3"),
    },
    {
      lists: t("paymentTypeA.uLFeesC.list4"),
    },
  ];
};
