import { LiaVoteYeaSolid } from 'react-icons/lia';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { PiPaintBrushBroad } from 'react-icons/pi';
import { GrProjects } from 'react-icons/gr';
export default function Page() {
  return (
    <div className='flex-col justify-between items-center md:px-32 px-6 py-6 h-screen border-b border-[#d3d3d3] shadow'>
      <h1 className='text-2xl text-[#3a3b3f] sm:text-4xl my-8 font-semibold'>
        Dashboard
      </h1>
      <div className='grid grid-cols-2'>
        <a
          href='/dashboard'
          className='dashboard-links border hover:border-red-500 hover:bg-red-200 bg-red-500 text-white hover:text-black'
        >
          <div className='flex flex-col items-center justify-center'>
            <MdOutlineTravelExplore />
            <p>Explore</p>
          </div>
        </a>
        <a
          href='/dashboard/projects'
          className='dashboard-links border hover:border-green-500 hover:bg-green-200 bg-green-500 text-white hover:text-black'
        >
          <div className='flex flex-col items-center justify-center'>
            <GrProjects />
            <p>Projects</p>
          </div>
        </a>
        <a
          href='/dashboard'
          className='dashboard-links border hover:border-blue-500 hover:bg-blue-200 bg-blue-500 text-white hover:text-black'
        >
          <div className='flex flex-col items-center justify-center'>
            <LiaVoteYeaSolid />
            <p>Vote</p>
          </div>
        </a>
        <a
          href='/dashboard'
          className='dashboard-links border hover:border-yellow-500 hover:bg-yellow-200 bg-yellow-500 text-white hover:text-black'
        >
          <div className='flex flex-col items-center justify-center'>
            <PiPaintBrushBroad />
            <p>Personalize</p>
          </div>
        </a>
      </div>
    </div>
  );
}
