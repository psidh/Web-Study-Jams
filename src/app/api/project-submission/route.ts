import createSupabaseServerClient from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();

  const token =
    req.cookies.get("sb-obvikgxvqmnecgbrwfav-auth-token-code-verifier") || "";
  if (token) {
    await supabase.auth.setSession({
      access_token: token,
    });

    const user = await supabase.auth.getUser();
    console.log(user);
  }
  const data = await req.json();
  const { title, description, link } = data;

  const { error } = await supabase.from("projects").insert({
    title: title,
    description: description,
    link: link,
  });

  if (error) {
    console.error(error);
    return new NextResponse(error.message, { status: 500 });
  }

  return new NextResponse("Project added!", { status: 201 });
}
