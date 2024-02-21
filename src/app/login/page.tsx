"use client";
import { createBrowserClient } from "@supabase/ssr";
import React from "react";

export default function page() {
  async function login() {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );

    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  }
  return (
    <div className="bg-black flex flex-col items-center justify-center h-screen">
      <button
        className="rounded-full bg-teal-500 px-8 py-2 text-white"
        onClick={login}
      >
        Sign-in
      </button>
    </div>
  );
}
