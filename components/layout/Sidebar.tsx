"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/dashboard/economy", label: "Economy" },
  { href: "/dashboard/friends", label: "Friends" },
  { href: "/dashboard/school", label: "School" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-800 text-white h-full p-4">
      <h2 className="text-lg font-semibold mb-4">Sidebar</h2>
      <nav className="space-y-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={clsx(
              "block px-4 py-2 rounded hover:bg-gray-700",
              pathname === link.href && "bg-gray-700 font-bold"
            )}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
