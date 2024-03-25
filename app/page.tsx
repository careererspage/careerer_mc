
import { currentProfile } from "@/lib/current-profile";
import HomeClient from "./HomeClient";

const HomePage = async () => {
  const currentUser = await currentProfile();

  

  return <HomeClient currentUser={currentUser} />;
};

export default HomePage;
