import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faRss } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router';

import Logo from '@/components/logo/Logo';

const MenuButton = () => {
  return (
    <label
      htmlFor="menu-toggle"
      className="cursor-pointer w-8 h-8 border border-slate-700 rounded-lg flex flex-col justify-center items-center p-2 lg:hidden"
    >
      <span className="border rounded-xs w-full my-0.5"></span>
      <span className="border rounded-xs w-full my-0.5"></span>
      <span className="border rounded-xs w-full my-0.5"></span>
    </label>
  );
};

const Header = () => {
  return (
    <div className="w-full lg:max-w-6xl lg:mx-auto h-16 max-h-16 border-b border-slate-700 bg-slate-900 z-50 sticky top-0 lg:flex items-center">
      <header className="w-full mx-auto p-4 flex flex-col lg:flex-row justify-between items-center space-x-4">
        <input type="checkbox" id="menu-toggle" className="hidden peer" />
        <div className="w-11/12 flex justify-between lg:justify-start items-center space-x-2 mr-0">
          <Logo />
          <span className="text-xl font-black text-center">
            Martin Lefebvre{' '}
            <span className="text-md font-thin hidden md:inline lg:hidden">
              Full Stack Developer
            </span>
          </span>
          <MenuButton />
        </div>
        <div className="w-11/12 hidden lg:flex peer-checked:flex peer-checked:justify-between transition-all duration-800 mr-0">
          <nav className="w-full lg:inline lg:w-auto border lg:border-0 lg:bg-transparent p-2 rounded-xl border-slate-700 bg-slate-800 my-2 z-50">
            <ul className="flex flex-col lg:flex-row space-x-8 text-slate-400">
              <li>
                <Link to="/" className="hover:underline my-0.5">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline my-0.5">
                  About
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:underline my-0.5">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:underline my-0.5">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline my-0.5">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="w-11/12 hidden lg:flex justify-end items-center space-x-2 mr-0">
          <a href="https://mlfbvr.github.io/blog" target="_blank" title="Blog">
            <FontAwesomeIcon
              icon={faRss}
              className="w-6 h-6 text-slate-400 hover:text-slate-200 cursor-pointer mr-4"
            />
          </a>
          <a href="mailto:martin@martinlefebvre.com">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="w-6 h-6 text-slate-400 hover:text-slate-200 cursor-pointer mr-4"
            />
          </a>
          <a href="https://github.com/mlfbvr" target="_blank" title="GitHub">
            <FontAwesomeIcon
              icon={faGithub}
              className="w-6 h-6 text-slate-400 hover:text-slate-200 cursor-pointer mr-4"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/mlfbvr/"
            target="_blank"
            title="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="w-6 h-6 text-slate-400 hover:text-slate-200 cursor-pointer"
            />
          </a>
        </div>
      </header>
    </div>
  );
};

export default Header;
