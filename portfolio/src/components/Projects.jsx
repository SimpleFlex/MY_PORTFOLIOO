import { Link } from "react-router-dom";
import todo from "../assets/image/todo.png";

export default function Projects() {
  const projects = [
    {
      title: "to-do app",
      description: "Full-featured online store with payment integration",
      tags: ["React"],
      image: todo,
      github: "https://github.com/SimpleFlex/Todo-App",
      live: "https://todo-app-peach-chi-24.vercel.app/",
    },
    {
      title: "Library Management",
      description: "Responsive portfolio with interactive elements",
      tags: ["React", "Tailwind CSS"],
      image: "/images/portfolio.jpg",
      github: "https://github.com/SimpleFlex/MERN_LIBRARY_MANAGEMENT_APP",
      live: "#",
    },
    {
      title: "Subscription Tracker Backend",
      description: "Productivity app with drag-and-drop functionality",
      tags: ["express", "mongodb", "react", "NodeJs"],
      image: "/images/taskapp.jpg",
      github: "https://github.com/SimpleFlex/SUBSCRIPTION_TRACKER_BACKEND",
      live: "#",
    },
    {
      title: "Complete Mern Authentication",
      description: "Real-time weather data visualization",
      tags: ["JavaScript", "Mern"],
      image: "/images/weather.jpg",
      github: "https://github.com/SimpleFlex/COMPLETE_MERN_AUTHENTICATION",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          My Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all shadow-lg hover:shadow-xl border border-gray-700"
            >
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-2 opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.live}
                    className="px-3 py-2 bg-orange-500 hover:bg-orange-600 rounded-md text-white text-sm flex items-center gap-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live
                  </a>
                  <a
                    href={project.github}
                    className="px-3 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white text-sm flex items-center gap-1"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    Code
                  </a>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-700 text-blue-400 rounded-full text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
