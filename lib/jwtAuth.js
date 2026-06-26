import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET is missing");
}

export function signToken(payload) {
  return jwt.sign(payload, JWT_SECRET, {
    expiresIn: "8h",
  });
}
