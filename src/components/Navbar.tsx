'use client';
import { createBrowserClient } from '@supabase/ssr';
import { FaUser } from 'react-icons/fa';

function Navbar() {
  async function signOut() {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );

    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error(error);
      return;
    }
    console.log('Logged out');
  }

  return (
    <div>
      <div className='flex justify-between items-center md:px-32 px-6 py-6  border-b border-[#d3d3d3] shadow'>
        <a href='/' className=' w-16 h-16'>
          <img src='/gdsc-logo.png' alt='' className=' ' />
        </a>
        <h1 className='sm:text-2xl font-semibold text-[#656c73]'>
          Web Study Jams
        </h1>
      </div>
    </div>
  );
}

export default Navbar;
