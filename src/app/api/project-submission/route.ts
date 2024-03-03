import createSupabaseServerClient from "@/lib/supabase/server";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const supabase = await createSupabaseServerClient();

  const data = await req.json();
  const { title, description, link } = data;

  console.log(data);

  const { error } = await supabase.from("projects").insert({
    title: title,
    description: description,
    link: link,
    week_no: 0,
  });

  if (error) {
    console.error(error);
    return new NextResponse(error.message, { status: 500 });
  }

  return new NextResponse("Project added!", { status: 201 });
}
