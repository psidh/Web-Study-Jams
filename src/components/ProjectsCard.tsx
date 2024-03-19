import React from 'react';

export default function ProjectsCard() {
  return (
    <div
      className='rounded-xl border cursor-pointer
    border-[#cecece]  duration-200 transition-all hover:shadow-2xl p-4 grid grid-cols-1 md:grid-cols-2  gap-8 my-8'
    >
      <div>
        <iframe
          src='https://monicagoud.in'
          className='w-full aspect-video rounded-xl '
          scrolling='false'
        />
        <p className='text-2xl my-4'>Monica Goud</p>
        <p className='text-lg my-2 font-semibold'>Startup Coach</p>
        <p className='text-[#888888] text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          obcaecati? Magni adipisci accusamus alias blanditiis, veniam
          reiciendis est tenetur voluptatem, et, amet autem porro at error?
          Blanditiis exercitationem animi ratione!
        </p>
      </div>
      <div>
        <iframe
          src='https://psidh.vercel.app'
          className='w-full aspect-video rounded-xl '
          scrolling='false'
        />
        <p className='text-2xl my-4'>Sidharth</p>
        <p className='text-lg my-2 font-semibold'>Student | Developer</p>
        <p className='text-[#888888] text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          obcaecati? Magni adipisci accusamus alias blanditiis, veniam
          reiciendis est tenetur voluptatem, et, amet autem porro at error?
          Blanditiis exercitationem animi ratione!
        </p>
      </div>
      <div>
        <iframe
          src='https://blog.shobhitnagpal.com/'
          className='w-full aspect-video rounded-xl '
          scrolling='false'
        />
        <p className='text-2xl my-4'>Shobhit Nagpal</p>
        <p className='text-lg my-2 font-semibold'>Student | Developer</p>
        <p className='text-[#888888] text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          obcaecati? Magni adipisci accusamus alias blanditiis, veniam
          reiciendis est tenetur voluptatem, et, amet autem porro at error?
          Blanditiis exercitationem animi ratione!
        </p>
      </div>
      <div>
        <iframe
          src='https://manasmalla.dev'
          className='w-full aspect-video rounded-xl '
          scrolling='false'
        />
        <p className='text-2xl my-4'>Malla Manas</p>
        <p className='text-lg my-2 font-semibold'>Student | Developer</p>
        <p className='text-[#888888] text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo,
          obcaecati? Magni adipisci accusamus alias blanditiis, veniam
          reiciendis est tenetur voluptatem, et, amet autem porro at error?
          Blanditiis exercitationem animi ratione!
        </p>
      </div>
    </div>
  );
}
