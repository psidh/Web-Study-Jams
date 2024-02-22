import GoogleSlides from '@/components/GoogleSlides';
export default function Projects() {
  return (
    <section className='md:px-32 px-6 md:py-12 py-6'>
      <h1 className='text-2xl text-[#292c39] sm:text-5xl mt-8 font-semibold'>
        Resources
      </h1>
      <iframe
        src='https://docs.google.com/presentation/d/e/2PACX-1vRbLuLA6NOjiULH2DhxHojOdpHgn3MAULxNVk-f3E7-rhOiAUZ0t3Y7qtrjHktgIraP3GMb42f8sOWi/embed?start=true&loop=true&delayms=1000'
        width={1200}
        height={700}
        className='my-16'
      ></iframe>
    </section>
  );
}
