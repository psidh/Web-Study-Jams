import React from 'react';

export default function JoinButton() {
  return (
    <div className='flex-col justify-center items-center md:px-32 px-6 py-6 '>
      <h1 className='text-lg my-2 font-normal'>Excited about Study-Jams ?</h1>
      <a href='/login' className='text-lg bg-blue-500 rounded-full text-white px-8 py-2 my-8 font-normal'>
        Join Now
      </a>
    </div>
  );
}
