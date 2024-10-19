"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItemProps {
  pathName: string;
  displayValue: string;
}

export default function NavItem({ pathName, displayValue }: NavItemProps) {
  const urlPath = usePathname();

  console.log(urlPath);

  return (
    <Link
      className={
        urlPath === "/" + pathName
          ? `px-1 rounded-sm border-[#4A90E2] border-b-4`
          : ``
      }
      href={`/${pathName}`}
    >
      {displayValue}
    </Link>
  );
}
