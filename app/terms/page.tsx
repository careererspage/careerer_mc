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
            Acknowledgment
          </h1>

          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            These are the Terms and Conditions governing the use of this Service
            and the agreement that operates between You and the Company. These
            Terms and Conditions set out the rights and obligations of all users
            regarding the use of the Service.
          </p>

          <p className="mt-2 text-sm md:!text-lg text-zinc-600">
            Your access to and use of the Service is conditioned on Your
            acceptance of and compliance with these Terms and Conditions. These
            Terms and Conditions apply to all visitors, users, and others who
            access or use the Service.
          </p>
          <p className="mt-2 text-sm md:!text-lg text-zinc-600">
            By accessing or using the Service You agree to be bound by these
            Terms and Conditions. If You disagree with any part of these Terms
            and Conditions then You may not access the Service. You represent
            that you are over the age of 18. The Company does not permit those
            under 18 to use the Service.
          </p>
          <p className="mt-2 text-sm md:!text-lg text-zinc-600">
            Your access to and use of the Service is also conditioned on Your
            acceptance of and compliance with the Privacy Policy of the Company.
            Our Privacy Policy describes Our policies and procedures on the
            collection, use and disclosure of Your personal information when You
            use the Application or the Website and tells You about Your privacy
            rights and how the law protects You. Please read Our Privacy Policy
            carefully before using Our Service.
          </p>

          <h1 className="text-2xl my-6 font-bold text-[#003362]">Copyright</h1>
          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            The entire content included in this site, including but not limited
            to text, graphics or code is copyrighted as a collective work under
            the United States and other copyright laws, and is the property of
            immi-usa.com. The collective work includes works that are licensed
            to the Website. Copyright 2020, immi-usa.com ALL RIGHTS RESERVED.
            Permission is granted to electronically copy and print hard copy
            portions of this site for the sole purpose of placing an order with
            immi-usa.com or purchasing immi-usa.com products. You may display
            and, subject to any expressly stated restrictions or limitations
            relating to specific material, download or print portions of the
            material from the different areas of the site solely for your own
            non-commercial use, or to place an order with immi-usa.com or to
            purchase immi-usa.com products. Any other use, including but not
            limited to the reproduction, distribution, display or transmission
            of the content of this site is strictly prohibited, unless
            authorized by immi-usa.com. You further agree not to change or
            delete any proprietary notices from materials downloaded from the
            site.
          </p>
          <h1 className="text-2xl my-6 font-bold text-[#003362]">
            Restrictions
          </h1>
          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            Migrate Compass and its partners disclaim liability for any damages,
            including but not limited to, loss of profits or data, or business
            disruption, resulting from the use or inability to use the materials
            on Migrate Compass&apos;s website. This applies even if Migrate
            Compass or an authorized Migrate Compass representative has been
            informed of potential damages verbally or in writing. Some
            jurisdictions do not permit limitations on implied warranties or
            liability for incidental or consequential damages, so these
            limitations may not apply to you. The content on Migrate
            Compass&apos;s website may contain inaccuracies, including but not
            limited to, technical, typographical, or photographic errors.
            Migrate Compass does not guarantee the accuracy, completeness, or
            timeliness of the materials on its website. Migrate Compass may
            revise the content on its website at any time without notice but
            does not commit to updating the materials.
          </p>

          <h1 className="text-2xl my-6 font-bold text-[#003362]">
            Liability Constraints
          </h1>
          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            Regardless of any damages that you may incur, the total liability of
            Migrate Compass and any of its providers under any provision of
            these Terms, and your sole recourse for all of the preceding, shall
            be confined to the amount you have actually paid through the
            Service. To the fullest extent allowed by applicable law, Migrate
            Compass or its providers shall not be held accountable for any
            special, incidental, indirect, or consequential damages whatsoever
            (including, but not limited to, damages for loss of profits, loss of
            data or other information, for business disruption, for personal
            injury, loss of privacy resulting from or in any way related to the
            use of or inability to use the Service, third-party software and/or
            third-party hardware used with the Service, or otherwise in
            connection with any provision of these Terms), even if Migrate
            Compass or any provider has been informed of the possibility of such
            damages and even if the remedy fails of its essential purpose.
          </p>

          <h1 className="text-2xl my-6 font-bold text-[#003362]">
            Jurisdictional Regulations
          </h1>

          <p className="mt-2 md:!text-lg text-sm text-zinc-600">
            The laws of the Country, excluding its conflict of law principles,
            shall preside over these Terms and your utilization of the Service.
            Your engagement with the Application may also be governed by other
            local, state, national, or international laws.
          </p>
        </div>
      </Container>
      <Footer
        currentUser={currentUser}
        expiredVisa={expiredVisa?.id}
        supportId={support?.id}
        existingServer={existingServer?.id}
      />
    </div>
  );
};

export default Terms;
