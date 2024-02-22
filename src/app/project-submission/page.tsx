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

      <div className='my-4 flex md:flex-row flex-col justify-start items-start'>
        <label
          className={`mr-4 px-6 border my-2 cursor-pointer py-2 rounded-full  ${
            selectedWeek === 'week1' ? 'bg-blue-700 text-white' : 'text-black'
          }`}
        >
          <input
            type='radio'
            name='week'
            value='week1'
            className='mx-2'
            checked={selectedWeek === 'week1'}
            onChange={handleWeekChange}
          />
          Week 1
        </label>
        <label
          className={`mr-4 px-6 border my-2 cursor-pointer py-2 rounded-full ${
            selectedWeek === 'week2' ? 'bg-blue-700 text-white' : 'text-black'
          }`}
        >
          <input
            type='radio'
            name='week'
            value='week2'
            className='mx-2'
            checked={selectedWeek === 'week2'}
            onChange={handleWeekChange}
          />
          Week 2
        </label>
        <label
          className={`mr-4 px-6 border my-2 cursor-pointer py-2 rounded-full ${
            selectedWeek === 'week3' ? 'bg-blue-700 text-white' : 'text-black'
          }`}
        >
          <input
            type='radio'
            name='week'
            value='week3'
            className='mx-2'
            checked={selectedWeek === 'week3'}
            onChange={handleWeekChange}
          />
          Week 3
        </label>
        <label
          className={`mr-4 px-6 border my-2 cursor-pointer py-2 rounded-full ${
            selectedWeek === 'week4' ? 'bg-blue-700 text-white' : 'text-black'
          }`}
        >
          <input
            type='radio'
            name='week'
            value='week4'
            className='mx-2'
            checked={selectedWeek === 'week4'}
            onChange={handleWeekChange}
          />
          Week 4
        </label>
        <label
          className={`mr-4 px-6 border my-2 cursor-pointer py-2 rounded-full ${
            selectedWeek === 'week5' ? 'bg-blue-700 text-white' : 'text-black'
          }`}
        >
          <input
            type='radio'
            name='week'
            value='week5'
            className='mx-2'
            checked={selectedWeek === 'week5'}
            onChange={handleWeekChange}
          />
          Week 5
        </label>
      </div>

      <button className='w-full mt-4 py-2 text-center bg-blue-600 hover:bg-black text-white transition-all duration-300 rounded-lg'>
        Submit
      </button>
    </div>
  );
}
