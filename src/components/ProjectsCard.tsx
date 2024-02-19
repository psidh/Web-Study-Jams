import React from 'react';

export default function ProjectsCard() {
  return (
    <div
      className='flex flex-col items-start justify-center rounded-xl border cursor-pointer
    border-[#cecece]  duration-200 transition-all hover:shadow-2xl p-4'
    >
      {/* <img src='/project.png' alt='' className='object-cover mb-2 rounded-lg' /> */}
      <iframe
        src='https://monicagoud.in'
        className='w-full aspect-video rounded-xl '
        scrolling='false'
      />
      <h1 className='text-2xl my-2 '>Monica Goud</h1>
      <h2 className='text-lg my-2 font-semibold'>Startup Coach</h2>
      <p className='text-[#888888] text-justify'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
        obcaecati? Magni adipisci accusamus alias blanditiis, veniam reiciendis
        est tenetur voluptatem, et, amet autem porro at error? Blanditiis
        exercitationem animi ratione!
      </p>
    </div>
  );
}
