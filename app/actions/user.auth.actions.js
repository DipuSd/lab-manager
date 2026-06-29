"use server";
import { cookies } from "next/headers";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import { connectDB } from "@/lib/mongodb";
import { signToken } from "@/lib/jwtAuth";

export async function loginUser({ email, password }) {
  const cookieStore = await cookies();
  try {
    if (!email || !password) {
      return {
        success: false,
        message: "Email and password required",
      };
    }
    await connectDB();
    const user = await User.findOne({
      email: email.toLowerCase(),
    });

    if (!user) {
      return {
        success: false,
        message: "Invalid credentials",
      };
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return {
        success: false,
        message: "Invalid credentials",
      };
    }
    const token = signToken({
      userId: user._id,
      role: user.role,
      email: user.email,
      publicID: user.publicId,
    });

    cookieStore.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 8,
      path: "/",
    });
    return {
      success: true,
      message: "Login successfull",
    };
  } catch (error) {
    console.log(error);
  }
  return {
    success: false,
    message: "Someting went wrong in login",
  };
}

export async function logOutUser() {
  const cookieStore = await cookies();
  try {
    cookieStore.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
      path: "/",
    });
    return {
      success: true,
      message: "Logged out successfully",
    };
  } catch (error) {
    return {
      success: false,
      message: "Logout failed",
    };
  }
}
