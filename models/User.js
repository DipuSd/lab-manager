import mongoose, { Schema, models, model } from "mongoose";
import { nanoid } from "nanoid";

const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },
    phone: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      required: true,
      enum: ["admin", "receptionist", "labTechnician", "pathologist"],
    },
    password: {
      type: String,
      required: true,
    },
    publicId: {
      type: String,
      required: true,
      default: () => nanoid(12),
    },
  },
  {
    timestamps: true,
  },
);

UserSchema.index({ email: 1 }, { unique: true });
UserSchema.index({ publicId: 1 }, { unique: true });
const User = models.User || model("User", UserSchema);

export default User;
