import ProjectsCard from './ProjectsCard';

export default function Projects() {
  return (
    <section className='sm:px-16 lg:px-32 px-6 md:py-12 py-6'>
      <h1 className='text-2xl text-[#292c39] sm:text-5xl mt-8 font-semibold'>
        Projects Showcase
      </h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 my-8'>
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
        <ProjectsCard />
      </div>
    </section>
  );
}
