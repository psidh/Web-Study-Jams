'use client';
import React, { useState } from 'react';

export default function VotingPage() {
  const [projects, setProjects] = useState([
    { id: 1, name: 'Project A', votes: 0 },
    { id: 2, name: 'Project B', votes: 0 },
    { id: 3, name: 'Project C', votes: 0 },
  ]);

  // Function to handle voting for a project
  const handleVote = (projectId: number) => {
    setProjects((prevProjects) =>
      prevProjects.map((project) =>
        project.id === projectId
          ? { ...project, votes: project.votes + 1 }
          : project
      )
    );
  };

  return (
    <div className='flex-col justify-between items-center md:px-32 px-6 py-6 h-screen border-b border-[#d3d3d3] shadow'>
      <h1 className='text-2xl text-[#3a3b3f] sm:text-4xl my-8 font-semibold'>
        Vote
      </h1>
      <div className='grid grid-cols-1 gap-4'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='flex items-center justify-between bg-white p-4 shadow-md rounded-md'
          >
            <span>{project.name}</span>
            <button
              onClick={() => handleVote(project.id)}
              className='px-3 py-1 bg-blue-500 text-white rounded-md'
            >
              Vote
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
