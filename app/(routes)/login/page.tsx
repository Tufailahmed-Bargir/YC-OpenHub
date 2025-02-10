import Login from "@/app/components/login";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

async function getUser() {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return session;
}

export default async function resumeBuilder() {
  const session = await getUser();
  if (session) {
    redirect("/Dash");
  }
  return (
    <>
      <Login />
    </>
  );
}
