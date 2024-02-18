'use client'
import React from 'react';

export default function page() {
  async function login() {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      alert('Sign-in successful');
    } else {
      alert('Sign-in failed');
    }
  }
  return (
    <div className='bg-black flex flex-col items-center justify-center h-screen'>
      <button className='rounded-full bg-teal-500 px-8 py-2 text-white' onClick={login}>
        Sign-in
      </button>
    </div>
  );
}
