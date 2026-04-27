"use client";
import { useRouter } from "next/navigation";
const defaultId = "01";

export default function Home() {
  const router = useRouter();
  router.push(`/category/${defaultId}`);
  router.refresh();
}
