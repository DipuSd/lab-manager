import { getUser } from "./userFromCookie";
import { connectDB } from "./mongodb";
import RecentOrder from "@/models/RecentOrders";

export async function getRecentOrders() {
  const session = await getUser();

  await connectDB();

  const recentOrderdetails = await RecentOrder.findOne({
    userId: session.publicID,
  }).lean();

  return recentOrderdetails;
}
