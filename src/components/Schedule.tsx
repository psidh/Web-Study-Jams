import React from 'react';
import sessions from '@/data/data';
import { CiClock2 } from 'react-icons/ci';
import { CiCalendar } from 'react-icons/ci';
import Indicator from '@/components/Indicator';

interface SessionProps {
  number: number;
  date: string;
  title: string;
  type: string;
  image: string;
  duration: string;
}

const Session: React.FC<SessionProps> = ({
  number,
  date,
  title,
  type,
  image,
  duration,
}) => {
  let bgColorClass = '';

  if (number > 0 && number < 9) {
    bgColorClass = 'bg-green-100 border-green-500';
  } else if (number === 9 || number === 10) {
    bgColorClass = 'bg-blue-100 border-blue-500';
  }

  return (
    <div
      className={`rounded-xl border overflow-hidden flex flex-row justify-between items-center ${bgColorClass}`}
    >
      <div className='w-[50%]'>
        <img
          className='object-cover  md:h-2/3 md:w-28 p-2'
          src={image}
          alt={title}
        />
      </div>
      <div className='pl-2 flex flex-col items-start justify-start w-[60%] p-4'>
        <div className='font-semibold text-xl mb-1 py-1'>{title}</div>
        <p className='text-gray-700 text-lg py-1 inline-flex items-center'>
          <CiCalendar className='mr-2' /> {date}
        </p>
        <p className='text-gray-700 text-lg pt-1 inline-flex items-center'>
          <CiClock2 className='mr-2' /> {duration}
        </p>
      </div>
    </div>
  );
};

const ScheduleCard: React.FC = () => {
  return (
    <div className='px-8 md:px-16 lg:px-32 mx-auto bg-white overflow-hidden'>
      <h1 className='text-3xl text-[#292c39] sm:text-5xl my-16 font-semibold'>
        Schedule
      </h1>
      <Indicator />
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {sessions.map((session, index) => (
          <Session key={index} {...session} />
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
