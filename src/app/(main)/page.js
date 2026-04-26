import { redirect } from "next/navigation";
const defaultId = "01";

export default function Home() {
  redirect(`/category/${defaultId}`);
}
