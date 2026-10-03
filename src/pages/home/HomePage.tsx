import {
  faCss3Alt,
  faDocker,
  faGitAlt,
  faGithub,
  faHtml5,
  faLinux,
  faPhp,
  faPython,
  faReact,
  faRedhat,
  faUbuntu,
} from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const icons = [
  { icon: faReact, title: 'React & NextJS' },
  { icon: faPhp, title: 'PHP' },
  { icon: faPython, title: 'Python' },
  { icon: faHtml5, title: 'HTML' },
  { icon: faCss3Alt, title: 'CSS' },
  { icon: faGitAlt, title: 'Git' },
  { icon: faLinux, title: 'Linux' },
  { icon: faRedhat, title: 'Red Hat' },
  { icon: faUbuntu, title: 'Ubuntu' },
  { icon: faGithub, title: 'GitHub & GitLab' },
  { icon: faDatabase, title: 'Database' },
  { icon: faDocker, title: 'Docker' },
];

const HomePage = () => {
  return (
    <section id="home" className="max-w-6xl mx-auto lg:mt-24 text-slate-300">
      <div className="w-full p-4 z-40 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-4">
        <h1 className="text-3xl font-bold text-center lg:row-start-1 lg:col-start-1 lg:col-span-1 lg:text-left">
          Hello, I'm{' '}
          <span className="bg-linear-to-r from-blue-500 to-violet-700 bg-clip-text text-transparent">
            Martin Lefebvre
          </span>
        </h1>
        <p className="mt-2 text-center text-lg lg:text-2xl text-slate-300 lg:row-start-2 lg:col-start-1 lg:col-span-1 lg:row-span-2 lg:text-left">
          A full-stack developer passionate about creating functional and secure
          front-end and back-end applications. I specialize in legacy and modern
          technologies, with a strong focus on security and customer experience.
          Let's build something great together!
        </p>
        <p className="mt-2 text-center text-lg lg:text-2xl text-slate-300 lg:row-start-4 lg:col-start-1 lg:col-span-1 lg:row-span-1 lg:text-left">
          I am available for hiring and freelance work. Feel free to{' '}
          <a href="/contact" className="hover:underline font-semibold">
            reach out
          </a>{' '}
          or to view my{' '}
          <a href="/resume" className="hover:underline font-semibold">
            resume
          </a>{' '}
          to discuss your project or collaboration opportunities.
        </p>
        <p className="mx-auto lg:mx-0 space-x-4 mt-6 lg:mt-0 lg:col-start-2 lg:row-start-2 lg:row-span-3 lg:justify-start grid grid-cols-3 gap-4">
          {icons.map((icon, index) => (
            <FontAwesomeIcon
              icon={icon.icon}
              size="4x"
              aria-label={icon.title}
              key={index}
              className="lg:m-auto text-slate-400 hover:text-slate-200"
            />
          ))}
        </p>
      </div>
    </section>
  );
};

export default HomePage;
