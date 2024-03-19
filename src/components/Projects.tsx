import ProjectsCard from './ProjectsCard';

export default function Projects() {
  return (
    <section className='md:px-32 px-6 md:py-12 py-6'>
      <h1 className='text-3xl my-16 text-[#292c39] sm:text-5xl  font-semibold'>
        Projects Showcase
      </h1>
      <ProjectsCard />
    </section>
  );
}
