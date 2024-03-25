import { NextApiRequest } from "next";

import { db } from "@/lib/db";
import { currentProfile } from "./current-profile";

export const currentProfilePages = async (req: NextApiRequest) => {
  const userId = await currentProfile();

  if (!userId) {
    return null;
  }

  const profile = await db.profile.findUnique({
    where: {
      id: userId.id,
    },
  });

  return profile;
};
