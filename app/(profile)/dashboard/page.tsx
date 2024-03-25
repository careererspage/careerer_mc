import Navbar from "@/components/(clients)/navbar";
import ProfileContent from "@/components/profile/profileContent";
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
    <div className="mb-20 overflow-hidden">
      <Navbar currentUser={currentUser} profileMenu />
      <div className="w-11/12 mt-20 mx-auto flex bg-[#f5f5f5] py-10 ">
        <div className="hidden md:block w-[50px] md:w-[335px] md:mt-0 ">
          <ProfileSidebar currentUser={currentUser} />
        </div>
        <ProfileContent />
      </div>
    </div>
  );
};

export default page;
