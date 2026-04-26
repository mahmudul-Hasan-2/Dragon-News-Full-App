"use client";

import Link from "next/link";
import React from "react";
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Drawer = ({ categories, activeId }) => {
  const handleSignInWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  const handleSignInWithGithub = async () => {
    const data = await authClient.signIn.social({
      provider: "github",
    });
  };
  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-2"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}
                <div></div>
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4 space-y-10">
            {/* Sidebar content here */}
            <h2 className="text-2xl font-bold mb-4">Categories</h2>
            <ul>
              {categories.map((category) => (
                <li
                  key={category.category_id}
                  className={`mb-2 w-full hover:bg-none text-center text-lg block font-bold ${activeId === category.category_id ? "bg-[#E7E7E7]" : ""}`}
                >
                  <Link href={`/category/${category.category_id}`} className="">
                    {category.category_name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="col-span-3 space-y-5">
              <h2 className="text-xl font-bold">Login With</h2>
              <div className="flex items-center gap-2 flex-col">
                <button
                  className="btn w-full text-blue-500"
                  onClick={handleSignInWithGoogle}
                >
                  <FaGoogle />
                  Login with Google
                </button>
                <button className="btn w-full" onClick={handleSignInWithGithub}>
                  <FaGithub />
                  Login with GitHub
                </button>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
