import createSupabaseServerClient from "@/lib/supabase/server";
import { BASE_URL } from "@/utils/utils";
import { NextResponse } from "next/server";


const getURL = () => {
  let url =
    process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
    process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
    'http://localhost:3000/'
  
  url = url.includes('http') ? url : `https://${url}`
  
  url = url.charAt(url.length - 1) === '/' ? url : `${url}/`
  return url
}

export async function POST() {
  const supabase = await createSupabaseServerClient();
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
