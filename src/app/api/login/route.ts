import { createClient } from "@/utils/supabase/server";
import { BASE_URL } from "@/utils/utils";
import { NextResponse } from "next/server";

export async function POST() {
  const supabase =  createClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
      redirectTo : BASE_URL,
    },
  });

  console.log(data);

  if (error) {
    console.error(error);
    return new NextResponse(error.message, {status: 500});
  }

  console.log(data);
  return new NextResponse("Successful sign in", {status: 200});
}
