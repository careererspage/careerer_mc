import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { db } from "@/lib/db";
import { currentProfile } from "@/lib/current-profile";

export async function PATCH(
  req: Request,
  { params }: { params: { updateId: string } }
) {
  try {
    const profile = await currentProfile();

    if (!profile) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const {
      email,
      password,
      firstname,
      country,
      language,
      address,
      tel,
      // imageUrl,
    } = body;

    const existingUser = await db.profile.findUnique({
      where: {
        id: profile.id,
      },
    });

    if (!existingUser) {
      // If a user with the same email does not exist, return a message
      return new NextResponse("Access denied, this isn't your data", {
        status: 401,
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await db.profile.update({
      where: {
        id: profile.id,
      },
      data: {
        email,
        hashedPassword,
        firstName: firstname,
        country,
        language,
        address,
        tel,
        // imageUrl,
      },
    });
    return NextResponse.json(user);
  } catch (error) {
    console.log("[USER_ID_UPDATED]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
