import { cache } from "react";
import { getUser } from "./userFromCookie";
import { connectDB } from "./mongodb";
import User from "@/models/User";

export const getCurrentUser = cache(async (selectList) => {
  const session = await getUser();

  await connectDB();

  const userDetails = await User.findOne({ publicId: session.publicID })
    .select(selectList)
    .lean();

  return userDetails;
});
