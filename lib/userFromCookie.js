import { cookies } from "next/headers";
import { verifyToken } from "./joseAuth";

export async function getUser() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    return null;
  }
  const user = await verifyToken(token);
  return user;
}
