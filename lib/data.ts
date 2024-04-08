import { useTranslations } from "next-intl";

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
  const t = useTranslations("navbar.clientReviews");

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
  const t = useTranslations("navbar.offices");

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
  const t = useTranslations("navbar.benefits");

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
  const t = useTranslations("navbar.workProcess");

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

export const VisaType = [
  {
    image: require("../public/images/agent.png"),
    title: "Skilled & Unskilled",
    details:
      "For skilled and unskilled workers seeking employment opportunities in the U.S. & Europe After payment, a dedicated officer will manage your visa application for accuracy and completeness.",
  },
  {
    image: require("../public/images/Denial.png"),
    title: "Tourist, Visitor or Medical Treatment",
    details:
      "For individuals traveling to the for tourism, visiting, or seeking medical treatment. We welcome all visitors and our service covers every step of the way.",
  },

  {
    image: require("../public/images/Cost.png"),
    title: "Business or Employment",
    details:
      "For professionals attending business meetings, settling estates, making investments, or starting work in U.S. and Europe We help you get the right visa type for your needs.",
  },

  {
    image: require("../public/images/peace-of-mind.png"),
    title: "Study or Exchange",
    details:
      "For students and exchange visitors starting their academic journey in the U.S. We ensure your application is spotless and meets all requirements.",
  },
];

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
  { title: "Austrailian Fee", href: "/student" },
];
export const Faqcomponents = [
  { title: "U.S.A. Faq", href: "/usa-faq" },
  { title: "Switzerland Faq", href: "/swiss-faq" },
  { title: "Austrailian Faq", href: "/austrailian-faq" },
];

export const Teams = [
  {
    image: require("../public/images/team/member-4.jpeg"),
    name: "Andrew Ryan",
    title: "CEO, Retired USCIS officer",
    details:
      "Managed visa applications for skilled and unskilled workers in the U.S.",

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
    title: "Ex-Canada Immigration Officer",
    details:
      "My role involved processing immigration applications, ensuring compliance with immigration laws and regulations, and offering guidance to those seeking to navigate the complexities of business and work immigration. My expertise and experience have been instrumental in helping many individuals and businesses successfully immigrate to Canada.",
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
      "Specializes in case management at Cohen Immigration Law. Holds an MBA and a law degree from McGill University.",
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
      "As a Senior U.S. Immigration Specialist with VisaNation, Sheila focuses on PERM Labor Certification and EB-2 & EB-3 immigrant visa petitions. She has over 16 years of experience in the field of immigration law. She assumes responsibility for the management of cases, leverages her extensive experience to draft essential forms, monitors critical deadlines, and prepares immigration packets.",
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
      "For professionals attending business meetings, settling estates, making investments, or starting work in the U.S. We help you get the right visa type for your needs.",
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
      "Ensuring top-notch client services for all visa-related needs, From attending business meetings to making investments in the U.S., we're here to guide you every step of the way.",
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
    details: "Assists professionals with business and work travels to the U.S.",
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

export const SwissWork = [
  {
    title: "Lower Tax Rates",
    lists:
      "Switzerland has lower tax rates compared to many other countries, allowing you to take home a larger portion of your salary.",
  },
  {
    title: "Favorable Work Policies",
    lists:
      "Switzerland has eased policies for skilled workers, making it easier for them to secure work visas.",
  },
  {
    title: "Skilled Professionals",
    lists:
      "Swiss companies are actively hiring skilled professionals across various sectors.",
  },
  {
    title: "Job Opportunities",
    lists:
      "Switzerland offers plenty of job opportunities, especially for those with specialized skills.",
  },
  {
    title: "High Salaries",
    lists:
      "Swiss salaries rank as the highest in the world, making it an attractive destination for professionals seeking well-paying jobs.",
  },
  {
    title: "Work-Life Balance",
    lists:
      "The average work week in Switzerland is 35.2 hours, promoting a healthy work-life balance.",
  },
];

export const SwissRequirement = [
  {
    title: "Job Offer",
    lists:
      "Migrate Compass assists in securing job offers from small firms in Switzerland for both skilled and unskilled roles.",
  },
  {
    title: "Work Experience",
    lists:
      "For unskilled roles, practical experience can be advantageous. For skilled roles, several years of experience in your field is typically expected.",
  },
  {
    title: "Qualifications",
    lists:
      "For skilled roles, you should possess a university degree or equivalent qualifications in your field of work. For unskilled labor roles in shortage occupations such as farming, plumbing, carpenter, and other unskilled jobs, specific qualifications may not be required.",
  },
  {
    title: "Work Permit Application",
    lists:
      "Once a job offer is secured, Migrate Compass assists in the application process for your work permit, ensuring a streamlined immigration process to Switzerland.",
  },
];

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

export const UsaFeeA = [
  {
    lists: "Consular processing fees",
  },
  {
    lists: "USCIS premium processing fees for expedited handling of your I-140",
  },
  {
    lists:
      "Preparation and filing of your I-485 (Application to Register Permanent Residence or Adjust Status), if you currently in the United States",
  },
  {
    lists:
      "Legal services for your case, including communication with USCIS and responding to any Requests for Evidence",
  },
  {
    lists: "USCIS Legal Cost",
  },
  {
    lists: "Application / Filing Fee",
  },
  {
    lists: "Guidance on gathering the required documentation and evidence",
  },
  {
    lists:
      "Migrate Compass Services for ongoing support throughout the process",
  },
  {
    lists: "Mailing fees for sending your documents to USCIS",
  },
  {
    lists: "Premium Visa Interview preparation",
  },
];

export const UsaFeeC = [
  {
    lists: "Migrate Compass Total Service Fee",
  },
  {
    lists:
      "Assistance with the local registration process upon arrival in the United States",
  },
  {
    lists: "Support in finding accommodation and settling in the United States",
  },
  {
    lists:
      "Guidance on the United State social security, tax system, and other local regulations",
  },
];

export const SwissA = [
  {
    lists: "Preparation and submission of your Swiss work permit application",
  },
  {
    lists: "Guidance on gathering the required documentation and evidence",
  },
  {
    lists: "Consular processing fees",
  },
  {
    lists:
      "Legal services for your case, including communication with the Swiss immigration authorities and responding to any requests for additional information",
  },
  {
    lists: "Legal costs associated with the Swiss work permit application",
  },
  {
    lists: "Application / Filing Fee",
  },

  {
    lists:
      "Migrate Compass Services for ongoing support throughout the process",
  },
  {
    lists:
      "Mailing fees for sending your documents to the Swiss immigration authorities",
  },
  {
    lists:
      "Preparation for any necessary interviews with the Swiss immigration authorities",
  },
];

export const SwissC = [
  {
    lists: "Migrate Compass Total Service Fee",
  },
  {
    lists:
      "Assistance with the local registration process upon arrival in Switzerland",
  },
  {
    lists: "Support in finding accommodation and settling in Switzerland",
  },
  {
    lists:
      "Guidance on Swiss social security, tax system, and other local regulations",
  },
];
