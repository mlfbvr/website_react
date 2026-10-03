import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faMapLocation,
  faPhone,
  faRss,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ContactPage = () => {
  return (
    <section id="contact" className="max-w-6xl mx-auto lg:mt-24 text-slate-300">
      <div className="w-full p-4 z-40 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[1_fr_1fr_2fr] gap-6">
        <h1 className="text-3xl font-bold text-center lg:row-start-1 lg:col-start-1 lg:col-span-1 lg:text-left">
          Contact me
        </h1>
        <div className="flex flex-col w-full gap-4">
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faMapLocation}
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <div>
              <span className="text-xl block">Location</span>
              <span className="text-md text-slate-300 mr-2">
                Laval, QC, Canada
              </span>
            </div>
          </div>
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <div>
              <span className="text-xl block">Email</span>
              <a
                href="mailto:martin@martinlefebvre.com"
                className="text-md text-slate-300 hover:underline mr-2 block"
              >
                martin@martinlefebvre.com
              </a>
            </div>
          </div>
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faPhone}
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <div>
              <span className="text-xl block">Phone</span>
              <span className="text-md text-slate-300 mr-2">
                <a
                  href="tel:+15795789074"
                  className="text-md text-slate-300 hover:underline mr-2 block"
                >
                  +1 579 578-9074
                </a>
              </span>
            </div>
          </div>
        </div>
        <h1 className="text-3xl font-bold text-center lg:row-start-1 lg:col-start-2 lg:col-span-1 lg:text-left">
          Follow me
        </h1>
        <div className="flex flex-col w-full gap-4">
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faRss}
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <div>
              <span className="text-xl block">Blog</span>
              <a
                href="https://mlfbvr.github.io/blog/"
                target="_blank"
                className="text-md text-slate-300 hover:underline mr-2"
              >
                mlfbvr.github.io/blog/
              </a>
            </div>
          </div>
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faGithub}
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <div>
              <span className="text-xl block">GitHub</span>
              <a
                href="https://github.com/mlfbvr/"
                target="_blank"
                className="text-md text-slate-300 hover:underline mr-2"
              >
                github.com/mlfbvr
              </a>
            </div>
          </div>
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faLinkedin}
              target="_blank"
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <div>
              <span className="text-xl block">LinkedIn</span>
              <a
                href="https://www.linkedin.com/in/mlfbvr"
                className="text-md text-slate-300 hover:underline mr-2"
              >
                linkedin.com/in/mlfbvr
              </a>
            </div>
          </div>
          <div className="w-3/4 gap-4 items-center mx-auto flex">
            <FontAwesomeIcon
              icon={faTwitter}
              target="_blank"
              className="min-w-14 min-h-14 w-14 h-14 text-slate-400 hover:text-slate-200"
            />
            <div>
              <span className="text-xl block">X (Twitter)</span>
              <a
                href="https://x.com/beardedcoder514"
                className="text-md text-slate-300 hover:underline mr-2"
              >
                x.com/beardedcoder514
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
