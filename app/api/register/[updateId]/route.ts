import { NextResponse } from "next/server";
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
    const { imageUrl, ...restOfBody } = body; // Exclude imageUrl from the body

    const user = await db.profile.update({
      where: {
        id: profile.id,
      },
      data: {
        ...restOfBody, // Spread the rest of the body to update the profile details
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error("[USER_ID_UPDATED]", error); 
    return new NextResponse("Internal Error", { status: 500 });
  }
}
