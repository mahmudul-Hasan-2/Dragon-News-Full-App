"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { redirect } from "next/navigation";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleRegister = async (data) => {
    const { data: res, error } = await authClient.signUp.email({
      name: data.name, // required
      email: data.email, // required
      password: data.password, // required
      image: data.photoUrl,
      callbackURL: "/",
    });
    if (res) {
      redirect("/");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#F3F3F3] flex flex-col justify-center items-center p-4">
      <div className="w-full max-w-[600px] bg-white rounded-lg shadow-sm border border-gray-100 p-6 sm:p-10 md:p-12 mx-auto">
        <header className="text-center mb-6 md:mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#403F3F]">
            Register your account
          </h2>
        </header>

        <hr className="border-gray-100 mb-6 md:mb-8" />

        <form
          className="space-y-4 md:space-y-4"
          onSubmit={handleSubmit(handleRegister)}
        >
          <div className="flex flex-col gap-1.5">
            <label className="text-base font-bold text-[#403F3F]">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 bg-[#F3F3F3] border-none rounded-md focus:ring-1 focus:ring-gray-400 outline-none text-sm placeholder:text-gray-400"
            />
            {errors.name && (
              <p className="text-red-500 text-xs">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-base font-bold text-[#403F3F]">
              Photo URL
            </label>
            <input
              type="text"
              placeholder="Enter your photo url"
              {...register("photoUrl", { required: "Photo URL is required" })}
              className="w-full p-3 bg-[#F3F3F3] border-none rounded-md focus:ring-1 focus:ring-gray-400 outline-none text-sm placeholder:text-gray-400"
            />
            {errors.photoUrl && (
              <p className="text-red-500 text-xs">{errors.photoUrl.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-base font-bold text-[#403F3F]">Email</label>
            <input
              type="email"
              placeholder="Enter your email address"
              {...register("email", { required: "Email is required" })}
              className="w-full p-3 bg-[#F3F3F3] border-none rounded-md focus:ring-1 focus:ring-gray-400 outline-none text-sm placeholder:text-gray-400"
            />
            {errors.email && (
              <p className="text-red-500 text-xs">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-1.5">
            <label className="text-base font-bold text-[#403F3F]">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="w-full p-3 bg-[#F3F3F3] border-none rounded-md focus:ring-1 focus:ring-gray-400 outline-none text-sm placeholder:text-gray-400"
            />
            {errors.password && (
              <p className="text-red-500 text-xs">{errors.password.message}</p>
            )}
          </div>

          <div className="flex items-center gap-2 py-1">
            <input
              type="checkbox"
              id="terms"
              {...register("terms", {
                required: "You must accept the terms and conditions",
              })}
              className="w-4 h-4 accent-[#403F3F]"
            />
            <label
              htmlFor="terms"
              className="text-xs text-[#706F6F] font-medium cursor-pointer"
            >
              Accept{" "}
              <span className="font-bold text-[#403F3F]">
                Term & Conditions
              </span>
            </label>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#403F3F] text-white py-3.5 rounded-md text-lg font-semibold hover:bg-black transition-all active:scale-[0.99]"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
