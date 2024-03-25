import { NextResponse } from "next/server";
import bcrypt from "bcrypt";

import { db } from "@/lib/db";

export async function POST(request: Request) {
  const body = await request.json();
  const { email, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await db.profile.create({
    data: {
      email,
      hashedPassword,
    },
  });
  return NextResponse.json(user);
}
