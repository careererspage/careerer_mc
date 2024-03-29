import Navbar from "@/components/(clients)/navbar";
import MigrateContent from "@/components/profile/migrateContent";
import ProfileSidebar from "@/components/profile/profileSideBar";
import { currentProfile } from "@/lib/current-profile";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const currentUser = await currentProfile();
  console.log(currentUser);

  if (!currentUser) {
    return redirect("/");
  }

  return (
    <div>
      <MigrateContent />
    </div>
  );
};

export default page;
