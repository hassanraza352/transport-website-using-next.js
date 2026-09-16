import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export async function protect(role: "user" | "admin") {
  const session = await getServerSession(authOptions);

  if (!session) {
    throw new Error("Unauthorized");
  }

  if (session.user.role !== role) {
    throw new Error("Forbidden");
  }

  return session;
}