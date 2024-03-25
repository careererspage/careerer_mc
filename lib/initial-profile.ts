import { db } from "@/lib/db";
import { currentProfile } from "./current-profile";

export const initialProfile = async () => {
  const profile = await currentProfile();
  console.log(profile, "kiiiZ");
  // const { onOpen } = useModal();

  // if (!profile) {
  //   return "loginModal";
  // }

  const user = await db.profile.findFirst({
    where: {
      id: profile?.id,
    },
  });

  if (user) {
    return user;
  }

  const newProfile = await db.profile.create({
    data: {
      id: profile?.id,
      name: `${profile?.name} ${profile?.name}`,
      imageUrl: profile?.imageUrl ?? "oo",
      email: profile?.email,
    },
  });

  return newProfile;
};
