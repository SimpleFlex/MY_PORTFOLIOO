import { Link } from "react-router-dom";

export default function AboutFull() {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          My Full Story
        </h2>

        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 md:p-10 space-y-6">
          <p className="text-lg text-gray-300">
            I'm <span className="text-orange-400">Makuochukwu Elijah</span>, a
            full-stack developer with a passion for crafting digital experiences
            that blend aesthetic elegance with technical precision. My journey
            in tech began when I built my first website at 16, and since then,
            I've evolved into a versatile developer who thrives at the
            intersection of creativity and logic.
          </p>

          <p className="text-lg text-gray-300">
            Specializing in the{" "}
            <span className="text-blue-400">MERN stack</span>, I architect
            robust backend systems with Node.js and Express while creating
            dynamic frontends with React's component-based architecture. What
            sets me apart is my ability to visualize the complete system
            architecture - from database schemas to UI micro-interactions -
            ensuring seamless integration across all layers.
          </p>

          <div className="py-4 border-y border-gray-700 my-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              My Technical Philosophy
            </h3>
            <p className="text-gray-300">
              I believe in{" "}
              <span className="text-cyan-400">"progressive complexity"</span> -
              building systems that start simple but scale intelligently. My
              code is clean, documented, and tested because today's prototypes
              become tomorrow's production systems. I'm particularly passionate
              about performance optimization and have reduced API response times
              by up to 300% in previous projects.
            </p>
          </div>

          <p className="text-lg text-gray-300">
            Beyond coding, I'm a{" "}
            <span className="text-orange-400">continuous learner</span>{" "}
            currently exploring WebAssembly and advanced TypeScript patterns.
            When not debugging, you'll find me contributing to open-source
            projects or mentoring junior developers - because the best way to
            master a concept is to teach it.
          </p>

          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <div className="bg-gray-900/50 p-5 rounded-lg">
              <h4 className="font-bold text-white mb-3">Technical Strengths</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  RESTful API design & microservices architecture
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  State management (Redux, Context API)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  Database optimization (MongoDB, PostgreSQL)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  CI/CD pipelines & cloud deployment
                </li>
              </ul>
            </div>

            <div className="bg-gray-900/50 p-5 rounded-lg">
              <h4 className="font-bold text-white mb-3">Beyond Code</h4>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  Technical writing & documentation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  Agile methodology practitioner
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  UX principles advocate
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  Open-source contributor
                </li>
              </ul>
            </div>
          </div>

          <p className="text-lg text-gray-300 mt-8">
            I'm currently seeking opportunities to collaborate on ambitious
            projects where I can leverage my full-stack expertise to solve
            complex problems. Whether you need a performant web application, a
            scalable API, or technical leadership for your team, I bring both
            the technical chops and creative problem-solving to deliver
            exceptional results.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <Link
              to="/"
              className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-500 hover:text-white transition-all flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
