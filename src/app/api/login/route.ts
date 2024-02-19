import createSupabaseServerClient from "@/lib/supabase/server";
import { NextResponse } from "next/server";


export async function POST() {
  const supabase = await createSupabaseServerClient();
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      queryParams: {
        access_type: "offline",
        prompt: "consent",
      },
    },
  });

  if (error) {
    console.error(error);
    return new NextResponse(error.message, {status: 500});
  }

  console.log(data);
  return new NextResponse("Successful sign in", {status: 200});
}
