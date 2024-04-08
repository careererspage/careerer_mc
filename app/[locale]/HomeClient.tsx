"use client";
import Categories from "@/components/(clients)/category/categories";
import CustomerExperience from "@/components/(clients)/customer-experience";
import Hero from "@/components/(clients)/hero";
import Navbar from "@/components/(clients)/navbar";
import Process from "@/components/(clients)/process";
import Region from "@/components/(clients)/region";
import Footer from "@/components/Footer";
import { SafeUser } from "@/types";

interface HomeClientProps {
  currentUser: SafeUser | null;
  existingServer: string | undefined;
  expiredVisa?: string | undefined;
  support?: string | undefined;
}

const HomeClient = ({
  currentUser,
  expiredVisa,
  support,
  existingServer,
}: HomeClientProps) => {
  return (
    <div>
      <Navbar
        currentUser={currentUser}
        supportId={support}
        serverId={existingServer}
      />
      <Hero
        currentUser={currentUser}
        supportId={support}
        existingServer={existingServer}
      />
      <Categories />
      <Region
        currentUser={currentUser}
        supportId={support}
        existingServer={existingServer}
      />
      <CustomerExperience
        currentUser={currentUser}
        supportId={support}
        existingServer={existingServer}
      />
      <Process
        currentUser={currentUser}
        expiredVisa={expiredVisa}
        supportId={support}
        existingServer={existingServer}
      />
      <Footer
        currentUser={currentUser}
        existingServer={existingServer}
        expiredVisa={expiredVisa}
        supportId={support}
      />
    </div>
  );
};

export default HomeClient;
