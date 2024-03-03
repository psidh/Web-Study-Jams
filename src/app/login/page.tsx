'use client';
import { createBrowserClient } from '@supabase/ssr';
import { SiGithub } from 'react-icons/si';
import React from 'react';

export default function LoginPage() {
  async function login() {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        // redirectTo: `${location.origin}/auth/callback`,
        redirectTo: `/auth/callback`,
      },
    });
  }

  return (
    <div className='flex flex-col items-center justify-center py-24 bg-gray-100 px-8'>
      <SiGithub className='w-32 h-32 text-gray-900' />
      <div className='text-center mt-8'>
        <h1 className='text-2xl font-bold text-gray-900 mb-4'>One-Step-Away</h1>
        <p className='text-lg text-gray-800'>
          Please sign in using your GitHub account to access the full features
          of our application.
        </p>
      </div>
      <button
        className='mt-8 rounded-full bg-black px-8 py-2 text-white hover:bg-[#404040] focus:outline-none focus:bg-gray-700'
        onClick={login}
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
