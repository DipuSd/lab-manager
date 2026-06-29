"use client";
import { useState } from "react";
import { IoPersonOutline } from "react-icons/io5";
import { MdMailOutline } from "react-icons/md";
import { FiPhone, FiLock, FiEyeOff, FiEye } from "react-icons/fi";
import { createUser } from "@/app/actions/user.register.actions";
import { redirect } from "next/navigation";

export default function RegisterForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [isConfirmPasswordFocused, setIsConfirmPasswordFocused] =
    useState(false);
  const [error, setError] = useState("");

  const passowrdChecks = {
    length: password.length >= 8,
    lowercase: /[a-z]/.test(password),
    uppercase: /[A-Z]/.test(password),
    number: /\d/.test(password),
    special: /[!@#$%^&*()_\-+=[\]{};':"\\|,.<>/?`~]/.test(password),
  };
  const passwordMatch =
    confirmPassword.length > 0 && password === confirmPassword;

  const isValidPassword = Object.values(passowrdChecks).every(Boolean);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Password do not match");
      return;
    }
    const result = await createUser({
      fullName,
      email,
      phone,
      role,
      password,
    });
    if (!result.success) {
      setError(result.message);
      return;
    }
    setFullName("");
    setEmail("");
    setPhone("");
    setRole("");
    setPassword("");
    setConfirmPassword("");
    setError("");
    redirect("/login");
  };

  return (
    <>
      <form onSubmit={handleFormSubmit} className="space-y-6">
        {/* fist row */}
        <div className="flex gap-4 w-full">
          {/* full name */}
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs text-gray-500">Full name</label>
            <div className="relative">
              <IoPersonOutline
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter your full name"
                className="pl-8 border border-gray-300 rounded-lg outline-none focus:border-blue-500 bg-slate-100 py-1 px-2 w-full"
                required
              />
            </div>
          </div>
          {/* email */}
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs text-gray-500">Email address</label>
            <div className="relative">
              <MdMailOutline
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="doctor@example.com"
                className="pl-8 border border-gray-300 rounded-lg outline-none focus:border-blue-500 bg-slate-100 py-1 px-2 w-full"
                required
              />
            </div>
          </div>
        </div>
        {/* second row */}
        <div className="flex gap-4 w-full">
          {/* phone */}
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs text-gray-500">
              Phone <span className="text-gray-400">(optional)</span>
            </label>
            <div className="relative">
              <FiPhone
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="+8801xxxxxxxxx"
                className="pl-8 border border-gray-300 rounded-lg outline-none focus:border-blue-500 bg-slate-100 py-1 px-2 w-full"
              />
            </div>
          </div>
          {/* role */}
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs text-gray-500">Role</label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full border border-gray-300 rounded-lg outline-none focus:border-blue-500 bg-slate-100 py-[6px] px-2"
              required
            >
              <option value="" disabled>
                Select a role
              </option>
              <option value="admin">Admin</option>
              <option value="receptionist">Receptionist</option>
              <option value="labTechnician">Lab Technician</option>
              <option value="pathologist">Pathologist</option>
            </select>
          </div>
        </div>
        {/* third row */}
        <div className="flex gap-4 w-full">
          {/* password */}
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs text-gray-500">Password</label>
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
                onFocus={() => setIsPasswordFocused(true)}
                onBlur={() => setIsPasswordFocused(false)}
                required
              />
              <button
                type="button"
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
          {/* confirm password */}
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-xs text-gray-500">Confirm password</label>
            <div className="relative">
              <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />
              <input
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                className="w-full pl-8 outline-none bg-slate-100 border border-gray-300 py-1 px-30 focus:border-blue-500 rounded-md"
                placeholder="Enter password"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                }}
                onFocus={() => {
                  setIsConfirmPasswordFocused(true);
                }}
                onBlur={() => {
                  setIsConfirmPasswordFocused(false);
                }}
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
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
        </div>
        {/* buttons row */}
        <div className="flex items-center gap-2">
          <button
            disabled={!(isValidPassword && passwordMatch)}
            type="submit"
            className="w-full rounded-lg bg-blue-500 p-2 text-white hover:bg-blue-700 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Create account
          </button>
          <button
            onClick={() => redirect("/login")}
            className="w-1/3 rounded-lg border border-gray-300 p-2 hover:bg-slate-100 cursor-pointer"
          >
            Cancel
          </button>
        </div>
        {/* password check section */}
        {isPasswordFocused && (
          <ul className="mt-2 text-sm space-y-1">
            <li>{passowrdChecks.length ? "✅" : "❌"} At least 8 characters</li>
            <li>
              {passowrdChecks.lowercase ? "✅" : "❌"} One lowercase letter
            </li>
            <li>
              {passowrdChecks.uppercase ? "✅" : "❌"} One uppercase letter
            </li>
            <li>{passowrdChecks.number ? "✅" : "❌"} One number</li>
            <li>
              {passowrdChecks.special ? "✅" : "❌"} One special character
            </li>
          </ul>
        )}
        {/*
         confirm password check section */}
        {isConfirmPasswordFocused && (
          <ul className="mt-2 text-sm space-y-1">
            <li>{passwordMatch ? "✅" : "❌"} confirm passowrd match</li>
          </ul>
        )}
        {/* error text */}
        <p className={`text-red-500 ${error ? "block" : "hidden"}`}>{error}</p>
      </form>
    </>
  );
}
