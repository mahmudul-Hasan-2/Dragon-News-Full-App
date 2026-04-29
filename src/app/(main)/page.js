"use client";

import { redirect } from "next/navigation";

// import { useRouter } from "next/navigation";
const defaultId = "01";

export default function Home() {
  // const router = useRouter();
  // router.refresh();
  // router.push(`/category/${defaultId}`);
  redirect(`/category/${defaultId}`);
}
