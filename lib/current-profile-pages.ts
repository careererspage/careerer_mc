import { NextApiRequest } from "next";
import { getSession } from "next-auth/react";
import { db } from "@/lib/db";

export const currentProfilePages = async (req: NextApiRequest) => {
  try {
    const session = await getSession({ req });

    if (!session?.user?.email) {
      return null;
    }

    const profile = await db.profile.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    return profile;
  } catch (error: any) {
    console.error("Error fetching current profile:", error);
    return null;
  }
};
