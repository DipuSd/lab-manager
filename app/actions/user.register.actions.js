"use server";

import { connectDB } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import z, { success } from "zod";

const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[a-z]/, "Must include a lowercase letter")
  .regex(/[A-z]/, "Must include an uppercase letter")
  .regex(/[\d]/, "Must include a number")
  .regex(
    /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?`~]/,
    "Must include a special character",
  );

export async function createUser(data) {
  try {
    const { fullName, email, phone, role, password } = data;

    // serverside data validation
    if (!fullName || !fullName.trim()) {
      return {
        success: false,
        message: "Full name is required",
      };
    }

    const emailSchemaCheck = z.email().safeParse(email);

    if (!email || !emailSchemaCheck.success) {
      return {
        success: false,
        message: "Invalid email address",
      };
    }

    if (!role) {
      return {
        success: false,
        message: "Role is required",
      };
    }
    if (!password) {
      return {
        success: false,
        message: "Password required",
      };
    }
    const passwordCheck = passwordSchema.safeParse(password);
    if (!passwordCheck.success) {
      return {
        success: false,
        message: passwordCheck.error.issues[0].message,
      };
    }
    // connect to db or reuse connection
    await connectDB();

    // check existing user by that email

    const existingUser = await User.findOne({
      email: email.toLowerCase(),
    });
    if (existingUser) {
      return {
        success: false,
        message: "Email already exists",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    await User.create({
      fullName,
      email: email.toLowerCase(),
      phone: phone || null,
      role,
      password: hashedPassword,
    });

    return {
      success: true,
      message: "User created successfully",
    };
  } catch (error) {
    console.log(error);
  }
  return {
    success: false,
    message: "Something went wrong",
  };
}
