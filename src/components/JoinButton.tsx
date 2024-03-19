import React from 'react';

export default function JoinButton() {
  return (
    <>
      <hr />
      <div className='flex-col justify-between items-center  md:px-32 p-6 text-center'>
        <a
          href='/login'
          className='text-lg bg-blue-500 rounded-full text-white px-10 font-semibold py-3 my-8'
        >
          Join Now
        </a>
      </div>
      <hr />
    </>
  );
}
