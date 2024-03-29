import { currentProfile } from "@/lib/current-profile";
import HomeClient from "./HomeClient";
import { redirect } from "next/navigation";

const HomePage = async () => {
  const currentUser = await currentProfile();
  console.log(currentUser, "sssssss");
  return <HomeClient currentUser={currentUser} />;
};

export default HomePage;
