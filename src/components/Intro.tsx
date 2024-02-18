import React from 'react';

export default function Intro() {
  return (
    <div>
      <div className='md:px-32 px-6 md:py-12 py-6'>
        <img
          src='/poster.jpeg'
          alt=''
          className='rounded-xl mb-4 h-[90%] object-cover'
        />
        <h1 className='text-2xl text-[#292c39] sm:text-5xl mt-8 font-semibold'>
          Web Study Jams - GDSC GITAM
        </h1>
      </div>
      <hr />
    </div>
  );
}
