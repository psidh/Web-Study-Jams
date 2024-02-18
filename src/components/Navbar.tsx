'use client';
import { useEffect, useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { BiMobile } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div>
      <div className='flex justify-between items-center md:px-32 px-6 py-6  border-b border-[#d3d3d3] shadow-xl'>
        <img
          src='/logo.svg'
          alt=''
          className='md:block hidden sm:w-[65%] sm:h-[65%] md:w-[45%] md:h-[45%] lg:w-[35%] lg:h-[35%]'
        />
        <img
          src='/gdsc-logo.png'
          alt=''
          className='block md:hidden w-[15%] h-[15%]'
        />
        <h1 className='sm:text-2xl font-semibold text-[#656c73]'>
          Web Study Jams
        </h1>
        {/* <div
          className='flex md:hidden w-5 h-5 cursor-pointer text-black'
          onClick={toggleNav}
        >
          <FiMenu />
        </div> */}
      </div>
    </div>
  );
}

export default Navbar;
