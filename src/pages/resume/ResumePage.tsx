import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { getFullUrl } from '@/utils/url';

const ResumePage = () => {
  return (
    <section id="home" className="max-w-6xl mx-auto lg:mt-24 text-slate-300">
      <div className="w-full p-4 z-40 flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-[1fr_2fr]">
        <h1 className="text-3xl font-bold text-center lg:row-start-1 lg:col-start-1 lg:col-span-1 lg:text-left">
          My Resume
        </h1>
        <p className="mt-2 text-center text-lg lg:text-2xl text-slate-300 lg:row-start-2 lg:col-start-1 lg:col-span-1 lg:text-left">
          Download my resume to learn more about my professional experience,
          skills, and accomplishments in the field of software development.
        </p>
        <p className="flex flex-col w-full mx-auto lg:mx-0 space-x-4 mt-6 lg:mt-0 lg:justify-start gap-4 lg:row-start-2 lg:col-start-2 lg:col-span-1">
          <a
            href={getFullUrl('resume.pdf')}
            download
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 w-11/12 mx-auto flex justify-between"
          >
            <span>Download Resume (.pdf)</span>
            <FontAwesomeIcon icon={faDownload} className="w-6 h-6" />
          </a>
          <a
            href={getFullUrl('resume.docx')}
            download
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 w-11/12 mx-auto flex justify-between mt-4"
          >
            <span>Download Resume (.docx)</span>
            <FontAwesomeIcon icon={faDownload} className="w-6 h-6" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default ResumePage;
