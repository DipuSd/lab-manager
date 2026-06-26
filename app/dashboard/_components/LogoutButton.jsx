"use client";
import Link from "next/link";
import { MdLogout } from "react-icons/md";
import { logOutUser } from "@/app/actions/user.auth.actions";
import { useRouter } from "next/navigation";
export default function LogoutButton() {
  const router = useRouter();
  const handleLogOut = async () => {
    await logOutUser();
    router.push("/login");
  };
  return (
    <>
      <button
        onClick={handleLogOut}
        className="flex items-center gap-2 p-4 w-full rounded-lg hover:bg-gray-100/30 cursor-pointer text-red-600"
      >
        <MdLogout size={20} />
        <p className="font-semibold">Logout</p>
      </button>
    </>
  );
}
