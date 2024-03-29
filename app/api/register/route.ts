import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { db } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password, firstname, country } = body;

  const existingUser = await db.profile.findUnique({
    where: {
      email,
    },
  });

  if (existingUser) {
    // If a user with the same email exists, return a message
    return new NextResponse("This email has already been created", {
      status: 401,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await db.profile.create({
    data: {
      email,
      hashedPassword,
      firstName: firstname,
      country,
    },
  });
  return NextResponse.json(user);
}
