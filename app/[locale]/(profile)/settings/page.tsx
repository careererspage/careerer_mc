import Navbar from "@/components/(clients)/navbar";
import ProfileContent from "@/components/profile/profileContent";
import ProfileSidebar from "@/components/profile/profileSideBar";
import { currentProfile } from "@/lib/current-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import React from "react";

const page = async () => {
  const currentUser = await currentProfile();

  if (!currentUser) {
    return redirect("/");
  }

  return (
    <div>
      <ProfileContent currentUser={currentUser} />
    </div>
  );
};

export default page;
