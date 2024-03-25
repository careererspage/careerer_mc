import { getServerSession } from "next-auth/next";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

import { db } from "@/lib/db";

export async function getSession() {
  return await getServerSession(authOptions);
}

export const currentProfile = async () => {
  try {
    const session = await getSession();

    if (!session?.user?.email) {
      return null;
    }

    const profile = await db.profile.findUnique({
      where: {
        email: session.user.email as string,
      },
    });

    if (!profile) {
      console.log("No profile found for this user");
      return null;
    }

    return {
      ...profile,
      createdAt: profile.createdAt.toISOString(),
      updatedAt: profile.updatedAt.toISOString(),
      emailVerified: profile.emailVerified?.toISOString() || null,
    };
  } catch (error: any) {
    return null;
  }
};
