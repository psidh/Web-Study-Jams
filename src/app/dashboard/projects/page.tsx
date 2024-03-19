'use client';
import { createClient } from '@/utils/supabase/client';
import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';
import { createBrowserClient } from '@supabase/ssr';
import React, { useState, ChangeEvent } from 'react';

interface FormData {
  title: string;
  description: string;
  link: string;
  id: string;
}

const Page: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    link: '',
    id: '',
  });

  const handleChange = async (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const supabase = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
    const { name, value } = e.target;
    const { data, error } = await supabase.auth.getSession();
    console.log(data);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/project-submission', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      console.log('Response:', response);
      toast.success('Project has been submitted successfully');
      setFormData({
        title: '',
        description: '',
        link: '',
        id: '',
      });
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className='flex-col justify-between items-center md:px-32 px-6 py-6 h-screen border-b border-[#d3d3d3] shadow'>
      <Toaster />
      <a
        href='/dashboard'
        className='py-2 px-8 rounded-lg bg-blue-500 text-white'
      >
        Dashboard
      </a>
      <h1 className='text-2xl text-[#3a3b3f] sm:text-4xl my-8 font-semibold'>
        Project Submission
      </h1>
      <input
        type='text'
        name='title'
        value={formData.title}
        onChange={handleChange}
        placeholder='Title'
        className='py-2 w-full border border-[#aaaaaa] rounded-md pl-4 my-4 focus:outline-none'
      />
      <textarea
        rows={3}
        cols={2}
        name='description'
        value={formData.description}
        onChange={handleChange}
        placeholder='Description'
        className='py-2 w-full border border-[#aaaaaa] rounded-lg pl-4 my-4  focus:outline-none'
      />
      <input
        type='text'
        name='link'
        value={formData.link}
        onChange={handleChange}
        placeholder='Github Link/ Deployment Link'
        className='py-2 w-full border border-[#aaaaaa] rounded-md pl-4 my-4 focus:outline-none'
      />
      <button
        onClick={handleSubmit}
        className='w-full mt-4 py-2 text-center bg-blue-600 hover:bg-black text-white transition-all duration-300 rounded-lg'
      >
        Submit
      </button>
    </div>
  );
};

export default Page;
