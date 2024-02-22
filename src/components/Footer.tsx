import { MdKeyboardArrowRight } from 'react-icons/md';
import {
  RiTwitterXLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiYoutubeLine,
} from 'react-icons/ri';
export default function Footer() {
  return (
    <div className='flex flex-col md:flex-row items-start justify-between md:px-32 px-6 md:py-12 py-6  border-t border-[#d3d3d3] shadow-xl'>
      <img
        src='/footerlogo.svg'
        alt=''
        className='w-full h-full md:w-1/3 md:h-1/3 mb-8 px-16 py-4 md:px-0 md:py-0'
      />
      <div className='flex flex-col items-start justify-center col-span-5 mx-8'>
        <a href='/' className='inline-flex mx-2 items-center'>
          <MdKeyboardArrowRight /> Home
        </a>
        <a
          href='/dashboard/resources'
          className='inline-flex mx-2 items-center'
        >
          <MdKeyboardArrowRight /> Resources
        </a>
        <a href='explore' className='inline-flex mx-2 items-center'>
          <MdKeyboardArrowRight /> Explore
        </a>
        <a href='/projects' className='inline-flex mx-2 items-center'>
          <MdKeyboardArrowRight /> Projects
        </a>
        <a href='/dashboard' className='inline-flex mx-2 items-center'>
          <MdKeyboardArrowRight /> Dashboard
        </a>
      </div>
      <div className='md:col-span-4 md:m-0 mx-6 my-4'>
        <p className='text-xl font-semibold mb-2'>Social</p>
        <div className='flex items-baseline justify-between'>
          <RiTwitterXLine className='text-xl sm:text-2xl mr-3' />
          <RiInstagramLine className='text-xl sm:text-2xl mx-3' />
          <RiLinkedinLine className='text-xl sm:text-2xl mx-3' />
          <RiYoutubeLine className='text-xl sm:text-3xl ml-3' />
        </div>
      </div>
    </div>
  );
}
