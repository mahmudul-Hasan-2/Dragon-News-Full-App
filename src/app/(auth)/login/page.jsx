"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
    });
    if (res) {
      redirect("/");
    }
    console.log(res, error);
    console.log(errors);
  };
  return (
    <div className="min-h-screen w-full bg-[#F3F3F3] flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-[600px] bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-10 md:p-14 mx-auto">
        <header className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#403F3F]">
            Login your account
          </h2>
        </header>

        <hr className="border-gray-100 mb-6 md:mb-8" />

        <form
          className="space-y-4 md:space-y-5"
          onSubmit={handleSubmit(handleLogin)}
        >
          <div className="flex flex-col gap-2">
            <label className="text-base font-bold text-[#403F3F]">
              Email address
            </label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full p-3.5 bg-[#F3F3F3] border-none rounded-md focus:ring-1 focus:ring-gray-400 outline-none text-sm placeholder:text-gray-400"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-base font-bold text-[#403F3F]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full p-3.5 bg-[#F3F3F3] border-none rounded-md focus:ring-1 focus:ring-gray-400 outline-none text-sm placeholder:text-gray-400"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#403F3F] text-white py-3.5 rounded-md text-lg font-semibold hover:bg-black transition-all active:scale-[0.99]"
            >
              Login
            </button>
          </div>
        </form>

        <footer className="mt-6 text-center">
          <p className="text-sm text-[#706F6F] font-medium">
            Don&apos;t Have An Account?{" "}
            <Link
              href="/register"
              className="text-[#FF8C82] font-bold hover:underline"
            >
              Register
            </Link>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LoginPage;
