import { Server as NetServer, Socket } from "net";
import { NextApiResponse } from "next";
import { Server as SocketIOServer } from "socket.io";
import { Server, Member, Profile } from "@prisma/client";

export type ServerWithMembersWithProfiles = Server & {
  members: (Member & { profile: Profile })[];
};

export type NextApiResponseServerIo = NextApiResponse & {
  socket: Socket & { server: NetServer & { io: SocketIOServer } };
};

export interface SafeUser {
  id: string;
  firstName: string | null;
  lastName: string | null;
  imageUrl: string | null;
  email: string | null;
  hashedPassword: string | null;

  address: string | null;
  state: string | null;
  city: string | null;
  tel: string | null;
  country: string | null;
  language: string | null;
  process: string | null;
}
