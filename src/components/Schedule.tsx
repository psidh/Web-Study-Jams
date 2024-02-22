import React from 'react';
import sessions from '@/data/data';

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
  return (
    <div className='rounded-xl border overflow-hidden flex flex-row justify-between items-center'>
      <div className='w-[40%]'>
        <img
          className='object-cover  md:h-1/2 md:w-28 p-2'
          src={image}
          alt={title}
        />
      </div>
      <div className='pl-2 flex flex-col items-start justify-start w-[60%]'>
        <div className='font-bold text-xl mb-2 py-1'>{title}</div>
        <p className='text-gray-700 text-lg py-1'>{date}</p>
        <p className='text-gray-700 text-lg pt-2'>{duration}</p>
      </div>
    </div>
  );
};

const ScheduleCard: React.FC = () => {
  return (
    <div className='px-8 md:px-16 lg:px-32 mx-auto bg-white overflow-hidden'>
      <h1 className='text-2xl text-[#292c39] sm:text-5xl my-8 font-semibold'>
        Schedule
      </h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {sessions.map((session, index) => (
          <Session key={index} {...session} />
        ))}
      </div>
    </div>
  );
};

export default ScheduleCard;
