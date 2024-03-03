'use client';
import React, { useState } from 'react';

export default function Page() {
  const [selectedWeek, setSelectedWeek] = useState('');

  const handleWeekChange = (event: any) => {
    setSelectedWeek(event.target.value);
  };

  return (
    <div className='flex-col justify-between items-center md:px-32 px-6 py-6 h-screen border-b border-[#d3d3d3] shadow'>
      <h1 className='text-2xl text-[#3a3b3f] sm:text-4xl my-8 font-semibold'>
        Project Submission
      </h1>
      <input
        type='text'
        title='title'
        placeholder='Title'
        className='py-2 w-full border border-[#aaaaaa] rounded-md pl-4 my-4 focus:outline-none'
      />
      <textarea
        rows={3}
        cols={2}
        title='description'
        placeholder='Description'
        className='py-2 w-full border border-[#aaaaaa] rounded-lg pl-4 my-4  focus:outline-none'
      />
      <input
        type='text'
        title='link'
        placeholder='Github Link'
        className='py-2 w-full border border-[#aaaaaa] rounded-md pl-4 my-4 focus:outline-none'
      />
      <button className='w-full mt-4 py-2 text-center bg-blue-600 hover:bg-black text-white transition-all duration-300 rounded-lg'>
        Submit
      </button>
    </div>
  );
}
