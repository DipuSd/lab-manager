"use client";
import { useState } from "react";
import { HiOutlineBell } from "react-icons/hi";
import { usePathname } from "next/navigation";
export default function Infobar() {
  const [newNotification, setNewNotification] = useState(true);
  const pathName = usePathname();
  const pageName = pathName.split("/").pop();
  const infoPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  const userDetails = {
    userName: "John Doe",
  };

  return (
    <>
      <div className="bg-white p-4 flex items-center justify-between text-black shadow-sm z-1">
        {/* page title */}
        <div>
          <p className="text-lg">{infoPageName}</p>
        </div>
        {/* user information group */}
        <div className="flex items-center gap-2">
          {/* notification icon */}
          <button className="relative group cursor-pointer">
            <HiOutlineBell
              size={24}
              className="text-gray-500 group-hover:text-black"
            />
            <div
              className={`absolute top-0 right-0 p-1 rounded-full bg-red-500 ${newNotification ? "block" : "hidden"}`}
            ></div>
          </button>
          {/* profile picture */}
          <div className="py-1 px-3 rounded-full bg-purple-600 text-white">
            J
          </div>
          {/* profile name */}
          <div>
            <h1 className="text-gray-500 text-sm">{userDetails.userName}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
