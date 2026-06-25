"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SidebarLink({ linkItems }) {
  const pathName = usePathname();
  return (
    <>
      <nav className="flex flex-col gap-2">
        {linkItems.map((link) => {
          const isActive = pathName === link.href;
          return (
            <Link
              key={link.label}
              href={link.href}
              className={`px-3 py-2 rounded-md transition-all flex gap-2 text-lg items-center
                ${isActive ? "bg-blue-600 text-white" : "text-gray-700 hover:bg-gray-100/30 hover:text-white"}`}
            >
              {link.icon}
              {link.label}
            </Link>
          );
        })}
      </nav>
    </>
  );
}
