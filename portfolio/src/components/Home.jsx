import { useState, useEffect } from "react";
import profile from "../assets/image/profile.jpg";

export default function Home() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Backend Developer",
    "MERN Developer",
    "React Developer",
    "Full Stack Engineer",
  ];

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const currentRoleText = roles[currentRole];

    const timer = setTimeout(() => {
      if (isDeleting) {
        // Deleting phase
        setDisplayText(currentRoleText.substring(0, displayText.length - 1));
        if (displayText.length === 0) {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      } else {
        // Typing phase
        setDisplayText(currentRoleText.substring(0, displayText.length + 1));
        if (displayText === currentRoleText) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentRole, isDeleting]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12"
    >
      <div className="text-center max-w-4xl mx-auto mt-10">
        {/* Profile Image */}
        <div className="relative w-48 h-48 mx-auto mb-10 group">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 blur-lg opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
          <div className="relative rounded-full w-full h-full overflow-hidden border-4 border-gray-900/80">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Makuochukwu Elijah
          </h1>

          <h2 className="text-2xl md:text-3xl min-h-[2.5rem]">
            <span className="text-gray-300">I am a </span>
            <span className="text-orange-500">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Crafting exceptional digital experiences with modern web
            technologies.
          </p>

          <div className="pt-6">
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-medium 
                        transition-all duration-300 hover:from-blue-500 hover:to-cyan-500 hover:shadow-lg
                        transform hover:-translate-y-1"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
