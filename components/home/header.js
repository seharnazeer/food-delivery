"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const Header = () => {
  const session = useSession();
  const status = session.status;
  const username=session.data?.user?.name || session.data?.user?.email;
  return (
    <div className="flex justify-between items-center h-20 z-10 ">
      <Link href={""} className="text-xl font-extrabold text-primary">
        PIZZA SHOP
      </Link>
      <div className="flex gap-8 text-lg items-center">
        <Link href={"/"}>Home</Link>
        <Link href={"#menu"}>Menu</Link>
        <Link href={"#about"}>About</Link>
        <Link href={"#contact"}>Contact</Link>
      </div>
      <div className="flex gap-8 items-center">
        {status === "unauthenticated"?<Link href={"/login"}>
          <button>Login</button>
        </Link>:<Link href={"/profile"}>Hello, {username}</Link>
        }
        {status === "unauthenticated" ? (
          <button className="w-36 h-12 text-white rounded-full bg-primary">
            <Link href={"/register"}>Register </Link>
          </button>
        ) : (
          <button onClick={()=>signOut()} className="w-36 h-12 text-white rounded-full bg-primary">
          SignOut
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
