export default function Indicator() {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-start md:items-baseline justify-start md:space-x-4 my-8'>
        <div className='flex justify-center items-baseline space-x-3'>
          <div className='w-24 bg-green-200 border border-green-400 rounded-full mb-2 text-green-200 py-1 px-6'>
            flex
          </div>
          <p>Completed Sessions</p>
        </div>
        <div className='flex justify-center items-baseline space-x-3'>
          <div className='w-24 bg-blue-200 border border-blue-400 rounded-full mb-2 text-blue-200 py-1 px-6'>
            flex
          </div>
          <p>Upcoming Sessions</p>
        </div>
      </div>
    </div>
  );
}
