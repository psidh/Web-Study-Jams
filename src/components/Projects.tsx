import ProjectsCard from './ProjectsCard';

export default function Projects() {
  return (
    <section className='md:px-32 px-6 md:py-12 py-6'>
      <h1 className='text-3xl my-16 text-[#292c39] sm:text-5xl  font-semibold'>
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
