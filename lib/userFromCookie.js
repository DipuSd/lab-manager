import { cookies } from "next/headers";
import { verifyToken } from "./joseAuth";

export async function getUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }
  const user = await verifyToken(token);
  if (!user) {
    throw new Error("unauthorized");
  }
  return user;
}
