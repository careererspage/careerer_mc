import GeneralHero from "@/components/(clients)/generalHero";
import Navbar from "@/components/(clients)/navbar";
import Container from "@/components/container";
import AnimateFaq from "@/public/images/lottie/faq.json";
import React from "react";
import Footer from "@/components/Footer";
import Cases from "@/components/(clients)/category/cases";
import ServiceCard from "@/components/(clients)/serviceCard";
import Review from "@/components/(clients)/category/review";
import ButtonChat from "@/components/(clients)/ButtonChat";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";

const page = async () => {
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
        serverId={existingServer?.id}
        supportId={support?.id}
      />
      <GeneralHero
        ImageUrl={require("@/public/images/hero/work-visa.jpg")}
        title="Work Visa made easy with Migrate Compass"
        subTitle="Secure your United States work visa online."
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-[40%,60%] gap-4 mt-10 relative">
          <ServiceCard
            currentUser={currentUser}
            existingServer={existingServer?.id}
            supportId={support?.id}
            title="Work Visa Complete Service"
            listItems={[
              "We connect you with patterned companies, firms, individuals, for potential job offers",
              "We have a network of satisfied clients we pair you with on arrival",
              "Don't have your papers? We would evaluate and connect you with an officer",
            ]}
          />

          <div>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              What are the EB3 Visa Requirements?
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              There are several requirements for the EB3 visa. The following
              conditions must be satisfied in order for you to be approved for
              an EB3 visa. My team and I would be happy to help you determine if
              you satisfy these requirements.
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Here&lsquo;s what you need to know
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              The EB3 visa allows someone to obtain a green card based on
              getting sponsored by a U.S. company which we provide for you. To obtain a green card, your
              company must go through the labor certificate PERM process. In
              this guide, I will walk you through several important aspects of
              the EB3 visa process. I will also show you how you can utilize
              this visa to get a green card to live in the United States.
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Incomplete information,
            </h1>{" "}
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              insufficient evidence, and legal obstacles often lead to long
              processing times, and even visa rejection. If any lack of document please let your assigned officer or SupportLine be aware.
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              The requirements are less strict.
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              The EB3 visa has less strict requirements than either the EB1 or
              the EB2 visas. This means that some people who may not qualify for
              these other visas may be eligible for the EB3 visa.
            </p>
            <h1 className="text-lg mt-4 text-[#055AAA] font-bold">
              Your spouse and dependent children can come to the United States.
            </h1>
            <p
              className="text-[#2C2C2C] text-sm mt-1 sm:!text-base"
              style={{ lineHeight: "1.8" }}
            >
              Guess what? With the EB3 visa, your family gets to join the
              adventure too! If you have kids under 21 who aren&lsquo;t married,
              they can hop on board. And the best part? They can go to school in
              the U.S. Your spouse isn&lsquo;t left out either. Once
              they&lsquo;ve sorted out their work documents or gotten their
              green card, they&lsquo;re free to work.
            </p>
            <ButtonChat
              currentUser={currentUser}
              existingServer={existingServer?.id}
              supportId={support?.id}
            />
            <p className="mt-3">
              Migrate Compass is here to offer you a hassle-free experience and
              make sure you receive your U.S Work visa as quickly as possible.
            </p>
          </div>
        </div>
      </Container>
      <div className="mt-6">
        <Review
          Animate={AnimateFaq}
          title=" Check Out Our Reviews"
          list1="Migrate Compass service was awesome althrough even though my case was compplicated"
          list2="Never thought I could get a Job in the United States "
          list3="Thanks Migrate Compass my family are now united with me in the United States"
          href="/reviews"
        />
      </div>
      <div className="mt-6">
        <Cases
          currentUser={currentUser}
          expiredVisa={expiredVisa?.id}
          supportId={support?.id}
          existingServer={existingServer?.id}
        />{" "}
      </div>
      <Footer
        currentUser={currentUser}
        existingServer={existingServer?.id}
        expiredVisa={expiredVisa?.id}
        supportId={support?.id}
      />{" "}
    </div>
  );
};

export default page;
