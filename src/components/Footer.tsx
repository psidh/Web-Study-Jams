import { MdKeyboardArrowRight } from 'react-icons/md';
import { RiTwitterXLine, RiInstagramLine, RiLinkedinLine} from 'react-icons/ri';
export default function Footer() {
  return (
    <div className=' flex-col  md:grid md:grid-cols-12 md:px-32 px-6 md:py-12 py-6  border-b border-[#d3d3d3] shadow-xl'>
      <img src='/footerlogo.svg' alt='' className='md:col-span-3 w-2/3 h-2/3' />
      <div className='flex flex-col items-start justify-start col-span-5'>
        <p className='inline-flex mx-2 items-center'>
          <MdKeyboardArrowRight /> Quick Links
        </p>
        <p className='inline-flex mx-2 items-center'>
          <MdKeyboardArrowRight /> Home
        </p>
        <p className='inline-flex mx-2 items-center'>
          <MdKeyboardArrowRight /> Events
        </p>
        <p className='inline-flex mx-2 items-center'>
          <MdKeyboardArrowRight /> Resources
        </p>
        <p className='inline-flex mx-2 items-center'>
          <MdKeyboardArrowRight /> Projects
        </p>
      </div>
      <div className='md:col-span-4 '>
        <h1>Social</h1>
        <div className='flex items-start justify-start'>
          <RiTwitterXLine />
          <RiInstagramLine />
          <RiLinkedinLine />  
        </div>
      </div>
    </div>
  );
}
