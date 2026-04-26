"use client";

import { authClient } from "@/lib/auth-client";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSide = () => {
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
  );
};

export default RightSide;
