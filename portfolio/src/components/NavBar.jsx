import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
  FaBars,
  FaTimes,
} from "react-icons/fa";

export default function Navbar({ activeSection }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const scrollTo = (id) => {
    if (id === "about-full") {
      navigate("/about-full");
    } else {
      navigate("/");
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
    setMobileMenuOpen(false);
  };

  // Social media links
  const socialLinks = [
    {
      icon: FaLinkedin,
      url: "https://www.linkedin.com/in/okonkwo-makuochukwu-elijah-a8ba96336",
      color: "hover:text-[#0077b5]",
    },
    {
      icon: FaTwitter,
      url: "https://x.com/devPrimolax",
      color: "hover:text-[#1DA1F2]",
    },
    {
      icon: FaGithub,
      url: "https://github.com/SimpleFlex",
      color: "hover:text-white",
    },
    {
      icon: FaEnvelope,
      url: "mailto:okonkwomakuochukwuelijah@gmail.com",
      color: "hover:text-[#EA4335]",
    },
    {
      icon: FaWhatsapp,
      url: "https://wa.link/6mrywo",
      color: "hover:text-[#25D366]",
    },
  ];

  return (
    <>
      {/* Main Navbar - Desktop layout preserved exactly as before */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-md z-50 py-4 px-6 shadow-xl border-b border-gray-800">
        <div className="flex items-center justify-between">
          {/* Logo - Left in mobile, centered in desktop */}
          <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
            <button
              onClick={() => scrollTo("home")}
              className="text-2xl font-bold flex items-center group transition-all duration-300 hover:scale-105"
            >
              <span className="text-orange-500 group-hover:text-orange-400">
                Dev
              </span>
              <span className="text-white group-hover:text-gray-200 ml-0.5">
                Primo
              </span>
            </button>
          </div>

          {/* Desktop Navigation - Left side (original layout) */}
          <div className="hidden md:flex space-x-8 mr-auto">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollTo(section)}
                className={`capitalize text-lg tracking-wide transition-all duration-300 ${
                  activeSection === section
                    ? "text-orange-400 font-semibold"
                    : "text-gray-300 hover:text-orange-300"
                }`}
              >
                {section}
                {activeSection === section && (
                  <span className="block h-0.5 mt-1 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* Desktop Social Icons - Right side (original layout) */}
          <div className="hidden md:flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-gray-300 ${social.color} transition-all duration-300 transform hover:scale-110`}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-orange-400 transition-colors"
          >
            {mobileMenuOpen ? (
              <FaTimes className="w-6 h-6" />
            ) : (
              <FaBars className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - New improved version */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 pt-16">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Menu Panel */}
          <div className="absolute right-0 top-16 w-72 h-auto max-h-[75vh] bg-gray-900/95 backdrop-blur-lg border-l border-gray-700 shadow-xl rounded-tl-lg rounded-bl-lg overflow-y-auto flex flex-col">
            {/* Navigation Links */}
            <div className="p-5 space-y-3">
              {["home", "about", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollTo(section)}
                  className={`w-full px-4 py-3 text-left capitalize rounded-lg transition-colors ${
                    activeSection === section
                      ? "bg-gray-800 text-orange-400 font-medium"
                      : "text-gray-300 hover:bg-gray-800/50"
                  }`}
                >
                  {section}
                </button>
              ))}
            </div>

            {/* Social Icons */}
            <div className="p-5 border-t border-gray-800">
              <div className="flex justify-center space-x-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-300 ${social.color} transition-colors`}
                  >
                    <social.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
