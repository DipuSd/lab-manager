"use client";

import { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { loginUser } from "@/app/actions/user.auth.actions";

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const result = await loginUser({ email, password });

    if (!result.success) {
      setError(result.message);
      return;
    }
    router.push("/dashboard");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="space-y-4">
        {/* email input section */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold text-gray-600">
            Email address
          </label>
          <div className="relative">
            <MdOutlineEmail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="doctor@example.com"
              className="w-full pl-8 outline-none bg-slate-100 border border-gray-300 py-1 px-30 focus:border-blue-500 rounded-md"
              required
            />
          </div>
        </div>
        {/* password input section */}
        <div className="flex flex-col space-y-2">
          <label className="text-xs font-semibold text-gray-600">
            Password
          </label>
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              className="w-full pl-8 outline-none bg-slate-100 border border-gray-300 py-1 px-30 focus:border-blue-500 rounded-md"
              placeholder="Enter password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
            >
              {showPassword ? (
                <FiEyeOff className="text-lg" />
              ) : (
                <FiEye className="text-lg" />
              )}
            </button>
          </div>
        </div>
        {/* sign in button */}
        <button
          type="submit"
          className="bg-blue-600 rounded-lg p-2 w-full text-white font-semibold text-sm hover:bg-blue-700 cursor-pointer"
        >
          Sign in
        </button>
        {error && <p className="text-red-500 text-sm"> {error}</p>}
      </form>
    </>
  );
}
