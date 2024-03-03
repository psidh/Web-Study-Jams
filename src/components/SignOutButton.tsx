import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default function SignOutButton() {
  const handleSignOut = async () => {
    "use server";
    const supabase = createClient();

    await supabase.auth.signOut();
    redirect("/");
  };

  return <button onClick={() => handleSignOut()}>Sign out</button>;
}
