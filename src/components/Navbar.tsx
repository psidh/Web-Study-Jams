function Navbar() {
  return (
    <div>
      <div className='flex justify-between items-center md:px-32 px-6 py-6  border-b border-[#d3d3d3] shadow'>
        <a
          href='/'
          className='md:block hidden sm:w-[65%] sm:h-[65%] md:w-[45%] md:h-[45%] lg:w-[35%] lg:h-[35%]'
        >
          <img src='/logo.svg' alt='' className=' ' />
        </a>
        <img
          src='/gdsc-logo.png'
          alt=''
          className='block md:hidden w-[15%] h-[15%]'
        />
        <h1 className='sm:text-2xl font-semibold text-[#656c73]'>
          Web Study Jams
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
