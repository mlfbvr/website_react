import { getFullUrl } from '@/utils/url';

const PortfolioPage = () => {
  return (
    <section id="portfolio" className="max-w-6xl mx-auto p-4">
      <h2 className="lg:text-4xl md:text-1xl font-bold mb-4">Portfolio</h2>
      <h3 className="lg:text-2xl md:text-1xl font-bold mb-4">
        Personal Projects
      </h3>
      <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <img
            src={getFullUrl('projects/mlcom.png')}
            alt="MartinLefebvre.com Project Screenshot"
            loading="eager"
            width={300}
            height={200}
            className="rounded-lg"
          />
          <h4 className="text-xl font-semibold mt-2">MartinLefebvre.com</h4>
          <div className="my-2">
            <a
              href="https://github.com/mlfbvr/castnotes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          <div className="my-2">
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              ReactJS
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              TypeScript
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              React Router
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              GCP
            </span>
          </div>
          <p className="text-slate-300 mt-1">
            (This Website) A personal portfolio website built with ReactJS and
            React Router to showcase my skills, projects, and experience as a
            full-stack developer.
          </p>
        </div>
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <img
            src={getFullUrl('projects/castnotes.png')}
            alt="CastNotes Project Screenshot"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <h4 className="text-xl font-semibold mt-2">CastNotes</h4>
          <div className="my-2">
            <a
              href="https://github.com/mlfbvr/castnotes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
          <div className="my-2">
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Python
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Django
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              PostgreSQL
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              GCP
            </span>
          </div>
          <p className="text-slate-300 mt-1">
            (Work in progress) A self-hosted tool for anglers to record their
            fishing trips, catches, and locations.
          </p>
        </div>
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <img
            src={getFullUrl('projects/dothist.png')}
            alt="DoThistProject Screenshot"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <h4 className="text-xl font-semibold mt-2">Do Thist</h4>
          <p className="text-slate-300 mt-1">
            (Work in progress) A simple todo list application for families or
            small offices to share tasks and stay organized.
          </p>
        </div>
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <img
            src={getFullUrl('projects/na.png')}
            alt="PodHub Screenshot"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <h4 className="text-xl font-semibold mt-2">PodHub</h4>
          <p className="text-slate-300 mt-1">
            (Work in progress) Media ingestion and lifecycle management system
          </p>
        </div>
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <img
            src={getFullUrl('projects/na.png')}
            alt="dotfiles Screenshot"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <h4 className="text-xl font-semibold mt-2">dotfiles</h4>
          <div className="my-2">
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Bash
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Perl
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Stow
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Markdown
            </span>
          </div>
          <p className="text-slate-300 mt-1">
            What kind of nerd doesn't share their dotfiles?
          </p>
        </div>
      </div>
      <h3 className="lg:text-2xl md:text-1xl font-bold my-4">
        Professional Projects
      </h3>
      <div className="w-11/12 mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <img
            src={getFullUrl('projects/na.png')}
            alt="Customer Troubleshooting Project Screenshot"
            loading="eager"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <h4 className="text-xl font-semibold mt-2">
            Customer Troubleshooting
          </h4>
          <div className="my-2">
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              React
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Express
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              MySQL
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Rest
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Redis
            </span>
          </div>
          <p className="text-slate-300 mt-1">
            Web-based tool to assist customer support representatives in
            diagnosing and resolving customer issues more efficiently by giving
            them a consolidated view of customer data, network activity and
            potential problems.
          </p>
        </div>
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <img
            src={getFullUrl('projects/na.png')}
            alt="Billing Auditing Project Screenshot"
            loading="eager"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <h4 className="text-xl font-semibold mt-2">
            Billing Auditing Process
          </h4>
          <div className="my-2">
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Perl
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              GCP
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              MySQL
            </span>
          </div>
          <p className="text-slate-300 mt-1">
            A billing auditing process designed to validate and verify billing
            records, ensuring accuracy and compliance with billing policies, as
            well as produce reports used for monthly and annual corporate and
            financial audit reviews.
          </p>
        </div>
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <img
            src={getFullUrl('projects/na.png')}
            alt="Log Ingestion Project Screenshot"
            loading="eager"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <h4 className="text-xl font-semibold mt-2">Log Ingestion system</h4>
          <div className="my-2">
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Perl
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Python
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Logstash
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              OpenShift
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Java
            </span>
          </div>
          <p className="text-slate-300 mt-1">
            A log ingestion and parsing system designed to handle large volumes
            of real-time log data from various sources, parse the logs into
            structured formats, and store them for efficient retrieval and
            analysis.
          </p>
        </div>
        <div className="border border-slate-700 rounded-lg p-4 bg-slate-800">
          <img
            src={getFullUrl('projects/na.png')}
            alt="Anomaly Detection Project Screenshot"
            loading="eager"
            width={350}
            height={200}
            className="rounded-lg"
          />
          <h4 className="text-xl font-semibold mt-2">
            Anomaly Detection System
          </h4>
          <div className="my-2">
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Perl
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              C++
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              MySQL
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              Redis
            </span>
            <span className="bg-slate-600 border rounded-lg p-1 mx-1 text-xs">
              MongoDB
            </span>
          </div>
          <p className="text-slate-300 mt-1">
            An anomaly detection system designed to identify unusual patterns in
            real-time data streams, using statistical models and machine
            learning algorithms to flag potential anomalies for further
            investigation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
