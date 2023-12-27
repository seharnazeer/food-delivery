import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const MenuHeader = ({ isAdmin }) => {
  const path = usePathname();
  console.log(path)
  if (isAdmin === true) {
    return (
      <div className="flex gap-2 items-center mb-4">
       <Link
          href={"/profile"}
          className={`${path === "/profile" ? "active" : ""} menu`}
        >
          Profile
        </Link>
        <Link
          href={"/categories"}
          className={`${path === "/categories" ? "active" : ""} menu`}
        >
          Categories
        </Link>
        <Link
          href={"/menu"}
          className={`${path === "/menu" ? "active" : ""} menu`}
        >
          Menu Items
        </Link>
        <Link
          href={"/users"}
          className={`${path === "/users" ? "active" : ""} menu`}
        >
          Users
        </Link>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default MenuHeader;
