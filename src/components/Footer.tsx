import { MdKeyboardArrowRight } from 'react-icons/md';
import {
  RiTwitterXLine,
  RiInstagramLine,
  RiLinkedinLine,
} from 'react-icons/ri';
export default function Footer() {
  return (
    <div className='flex-col items-start justify-start md:grid md:grid-cols-12 md:px-32 px-6 md:py-12 py-6  border-t border-[#d3d3d3] shadow-xl'>
      <img src='/footerlogo.svg' alt='' className='md:col-span-3 mb-8' />
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
        <div className='flex items-start justify-start'>
          <RiTwitterXLine className='text-xl sm:text-2xl mr-3' />
          <RiInstagramLine className='text-xl sm:text-2xl mx-3' />
          <RiLinkedinLine className='text-xl sm:text-2xl mx-3' />
        </div>
      </div>
    </div>
  );
}
