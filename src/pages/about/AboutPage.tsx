import { getFullUrl } from '@/utils/url';

const AboutPage = () => {
  return (
    <section id="home" className="max-w-6xl mx-auto lg:mt-24 text-slate-300">
      <div className="w-full p-4 z-40 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_2fr_2fr]">
        <h1 className="text-3xl font-bold text-center lg:row-start-1 lg:col-start-1 lg:col-span-1 lg:text-left">
          About Me
        </h1>
        <p className="mt-4 text-center text-lg lg:text-2xl text-slate-300 lg:row-start-2 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:text-left">
          I am a dedicated full-stack developer with over 20 years of experience
          in software development. I have honed my skills in both front-end and
          back-end technologies. I enjoy turning complex problems into simple,
          beautiful, and intuitive solutions.
        </p>
        <p className="mt-4 text-center text-lg lg:text-2xl text-slate-300 lg:row-start-3 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:text-left">
          I believe in continuous learning and improvement as a way to make
          myself the best developer I can be. I also enjoy exploring the
          multiple facets of Linux, which I have been using for over 30 years as
          both a user and a system administrator for personal and professional
          projects.
        </p>
        <p className="mt-4 text-center text-lg lg:text-2xl text-slate-300 lg:row-start-4 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:text-left">
          When I'm not coding, you can find me biking, listening to music or
          sitting by the river with a rod and reel.
        </p>
        <p className="hidden lg:flex mt-4 lg:row-start-2 lg:col-start-2 lg:col-span-1 lg:row-span-3 justify-center lg:justify-center">
          <img
            src={getFullUrl('martin.jpg')}
            alt="Martin Lefebvre"
            loading="eager"
            width={400}
            height={300}
            className="rounded-4xl border-4 border-slate-700 hover:border-blue-600 transition"
          />
        </p>
      </div>
    </section>
  );
};

export default AboutPage;
