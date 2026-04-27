"use client";

import Link from "next/link";
import userIcon from "@/assets/user.png";
import Image from "next/image";
import NavLink from "./NavLink";
import { signOut, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const navLinks = [
    {
      id: 1,
      title: "Home",
      path: "/",
    },
    {
      id: 2,
      title: "About",
      path: "/about",
    },
    {
      id: 3,
      title: "Career",
      path: "/career",
    },
  ];

  const { data, isPending } = useSession();
  const user = data?.user;
  console.log(data, isPending);
  return (
    <div className="flex items-center flex-col gap-2 mb-2 sm:flex-row justify-between container mx-auto mt-7.5 px-6">
      <div></div>
      <div>
        <ul className="flex items-center justify-between gap-3 text-[18px] text-gray-400 font-semibold">
          {navLinks.map((link) => (
            <NavLink key={link.id} href={link.path}>
              {link.title}
            </NavLink>
          ))}
        </ul>
      </div>
      {isPending ? (
        <div>Loading...</div>
      ) : user ? (
        <div className="flex flex-wrap justify-center items-center gap-2">
          <span>Welcome, {user.name}</span>
          <Image
            src={user.image}
            alt={user.name}
            width={60}
            height={50}
            className="rounded-full"
          ></Image>
          <button onClick={() => signOut()} className="btn btn-primary">
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-3">
          <Image src={userIcon} alt="User" width={40} height={40} />
          <Link href="/login">
            {" "}
            <button className="btn bg-black text-white">Login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
