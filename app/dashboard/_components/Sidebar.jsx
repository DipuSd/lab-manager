import { IoFlaskOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { MdLogout } from "react-icons/md";
import Link from "next/link";
import SidebarLink from "./SidebarLink";

const linkByRole = {
  admin: [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: <MdOutlineDashboard size={20} />,
    },
    { label: "Users", href: "/dashboard/users", icon: <FaRegUser size={20} /> },
    {
      label: "Reports",
      href: "/dashboard/reports",
      icon: <HiOutlineDocumentReport size={20} />,
    },
  ],
  receptionist: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Patients", href: "/dashboard/patients" },
  ],
  labTechnician: [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Tests", href: "/dashboard/tests" },
    { label: "Samples", href: "/dashboard/samples" },
  ],
};
export default function Sidebar() {
  const user = {
    role: "admin",
  };
  const links = linkByRole[user.role] || [];
  return (
    <>
      <div className="bg-[#00032F] h-screen lg:w-1/6 md:w-1/4 p-6 flex flex-col justify-between">
        {/* logo and nav items container */}
        <div className="flex flex-col gap-15">
          {/* logo section */}
          <div className="flex gap-4 items-center">
            <div className="bg-blue-500 rounded-xl p-1 text-white">
              <IoFlaskOutline size={24} />
            </div>
            <h1 className="text-lg font-semibold tracking-tighter">MedLab</h1>
          </div>

          {/* nav items */}
          <SidebarLink linkItems={links} />
        </div>
        {/* logout section */}
        <div className="space-y-4">
          <hr />
          <Link
            href={"/login"}
            className="flex items-center gap-2 p-4 w-full rounded-lg hover:bg-gray-100/30 cursor-pointer text-red-600"
          >
            <MdLogout size={20} />
            <p className="font-semibold">Logout</p>
          </Link>
        </div>
      </div>
    </>
  );
}
