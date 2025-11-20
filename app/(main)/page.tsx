import { Routes } from "@/core/routing";
import { redirect } from "next/navigation";

export default async function Page() {
  redirect(Routes.dashboard);
}
