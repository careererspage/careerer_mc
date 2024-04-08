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
      return new NextResponse("Access denied, this isn't your data", {
        status: 401,
      });
    }

    const body = await req.json();
    const { imageUrl } = body;

    const user = await db.profile.update({
      where: {
        id: profile.id,
      },
      data: {
        imageUrl,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("[USER_ID_UPDATED]", error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
