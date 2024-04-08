import Hero from "@/components/(clients)/hero";
import Navbar from "@/components/(clients)/navbar";
import Footer from "@/components/Footer";
import Container from "@/components/container";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import React from "react";

const Terms = async () => {
  const currentUser = await currentProfile();

  const existingServer = await db.server.findFirst({
    where: {
      inviteCode: "cd8cdd9f-a6ea-4b61-a06a-ead537c99ad5",
      members: {
        some: {
          profileId: currentUser?.id,
        },
      },
    },
    include: {
      members: {
        include: {
          profile: true,
        },
      },
    },
  });

  const expiredVisa = existingServer?.members.find(
    (member) => member.profile?.firstName === "Expired Visa"
  );
  const support = existingServer?.members.find(
    (member) => member.profile?.firstName === "Support Line"
  );

  return (
    <div>
      <Navbar
        currentUser={currentUser}
        supportId={support?.id}
        serverId={existingServer?.id}
      />
      <Hero
        currentUser={currentUser}
        supportId={support?.id}
        existingServer={existingServer?.id}
      />
      <Container>
        <div className="mt-10">
          <h1 className="text-zinc-600 text-sm md:text-base">
            Please read these terms and conditions carefully before using Our
            Service.
          </h1>

          <h1 className="text-2xl my-6 font-bold text-[#003362]">
            Privacy Policy{" "}
          </h1>

          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            Migrate Compass (&quot;Migrate Compass&quot;) presents this Privacy
            Policy to inform you about our practices related to the collection,
            utilization, and disclosure of your information. By accessing the
            website located at www.migratecompass.com (including all subdomains)
            (the &quot;Site&quot;) or the services provided by Migrate Compass
            (the &quot;Services&quot;), you consent to the information practices
            described in this Privacy Policy. If you disagree with the terms of
            this Privacy Policy, you may not access or use the Site or Services.
            This Privacy Policy is incorporated into and subject to the Terms of
            Use by Migrate Compass. If you purchase Services that include
            independent attorney review, your relationship with the independent
            attorney will be governed by your agreement with that attorney.
          </p>

          <p className="mt-2 text-sm md:!text-lg text-zinc-600">
            MIGRATE COMPASS IS NOT A LAW FIRM, DOES NOT PROVIDE LEGAL ADVICE,
            AND IS NOT A SUBSTITUTE FOR THE ADVICE OF AN ATTORNEY. YOUR USE OF
            THE SITE AND SERVICES, AND YOUR COMMUNICATION WITH MIGRATE COMPASS,
            DOES NOT CREATE AN ATTORNEY-CLIENT RELATIONSHIP. YOUR COMMUNICATIONS
            WITH MIGRATE COMPASS ARE NOT PROTECTED BY THE ATTORNEY-CLIENT
            PRIVILEGE. YOUR COMMUNICATIONS WITH THE INDEPENDENT ATTORNEY ARE
            GOVERNED BY YOUR AGREEMENT WITH THAT ATTORNEY.
          </p>

          <h1 className="text-2xl my-6 font-bold text-[#003362]">
            Data Collection
          </h1>
          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            Personal Data: When you use the Site or Services, we gather certain
            data from you which can be used to contact or identify you,
            including, but not limited to, your name, gender, date of birth,
            telephone number, postal address, and email address (&quot;Identity
            Data&quot;). If you place an order for Services and/or pay a fee, we
            will collect additional payment and billing data from you,
            including, but not limited to, your credit/debit card data or bank
            account data (&quot;Billing Data&quot;).
          </p>

          <h1 className="text-2xl my-6 font-bold text-[#003362]">
            Usage Statistics
          </h1>
          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            We also automatically gather certain data regarding your access to
            and use of the Site and Services. This data includes, but is not
            limited to, your IP address, browser type, referring website URLs,
            log files, pages on the Site that you visit, and links you click on
            (&quot;Usage Statistics&quot;).
          </p>

          <h1 className="text-2xl my-6 font-bold text-[#003362]">Cookies</h1>
          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            Like many websites, we use devices to recognize you when you visit
            the Site, track your interactions with the Site, and personalize
            your experience. These include devices such as cookies, web beacons,
            pixels, and similar devices. Cookies are small data files we
            transfer to your computer hard drive.
          </p>

          <h1 className="text-2xl my-6 font-bold text-[#003362]">
            EU Legal Basis
          </h1>

          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            If you reside in the European Economic Area or Switzerland
            (collectively the “EU”), we rely on the following legal basis under
            the General Data Protection Regulation (“GDPR”) to process (gather,
            store, and use) your personal data contained in Personal Information
            and Usage Data: (a) it is necessary for the execution of a contract
            with you; (b) our legitimate interests; and (c) your consent. If you
            are a customer, the legal basis for processing your personal data is
            necessity in performing our contract to provide the Services to you;
            our legitimate interest in understanding, enhancing, and promoting
            our services; and your consent. If you visit or use our website, the
            legal basis for processing your personal data is our legitimate
            interest in understanding how users interact with our website to
            improve our website and Services, and your consent.
          </p>

          <h1 className="text-2xl my-6 font-bold text-[#003362]">
            Utilization of Collected Information{" "}
          </h1>

          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            Account Establishment: We use information you provide to us at the
            time of account registration, such as your name and email address,
            and any updated information you subsequently provide, such as a new
            email address, to establish and maintain your account.
          </p>

          <h1 className="text-2xl my-6 font-bold text-[#003362]">
            Business Operations and Enhancement
          </h1>

          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            We use your information, including Personal Information, primarily
            to operate our business and provide the Services to you, including
            the completion of immigration forms. We use such information to
            customize the Services we provide to you. We may use your
            information to confirm your identity, for fraud prevention, to
            enforce the Terms of Service and to safeguard the integrity of the
            Site. We may also use your information to develop new features or
            Services and to improve the quality of our Services.
          </p>
          <h1 className="text-2xl my-6 font-bold text-[#003362]">
            How Does Migrate Compass Secure Your Information?{" "}
          </h1>

          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            In Brief: We strive to safeguard your personal information through a
            combination of organizational and technical security measures. We
            have put in place suitable technical and organizational security
            measures aimed at protecting the security of any personal
            information we process. However, despite our precautions and efforts
            to secure your information, no electronic transmission over the
            Internet or information storage technology can be guaranteed to be
            100% secure, so we cannot assure or guarantee that hackers,
            cybercriminals, or other unauthorized third parties will not be able
            to defeat our security, and improperly collect, access, steal, or
            modify your information. While we will do our utmost to protect your
            personal information, the transmission of personal information to
            and from our Website is at your own risk. You should only access the
            Website within a secure environment.
          </p>
          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            Cookies and Similar Technologies: Most Web browsers are configured
            to accept cookies by default. If you prefer, you can typically
            choose to set your browser to remove cookies and to reject cookies.
            If you choose to remove cookies or reject cookies, this could impact
            certain features or services of our Website.
          </p>
        </div>
      </Container>
      <Footer
        currentUser={currentUser}
        expiredVisa={expiredVisa?.id}
        existingServer={existingServer?.id}
        supportId={support?.id}
      />
    </div>
  );
};

export default Terms;
