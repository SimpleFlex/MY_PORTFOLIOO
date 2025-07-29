import { useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaRegHeart,
} from "react-icons/fa";
import { RiSendPlaneFill } from "react-icons/ri";

export default function Footer() {
  useEffect(() => {
    // Animate social icons on hover
    const icons = document.querySelectorAll(".social-icon");
    icons.forEach((icon) => {
      icon.addEventListener("mouseenter", () => {
        icon.classList.add("animate-wiggle");
      });
      icon.addEventListener("mouseleave", () => {
        icon.classList.remove("animate-wiggle");
      });
    });
  }, []);

  return (
    <footer className="relative mt-20 border-t border-gray-800/30">
      {/* Floating glass-morphism element */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full bg-blue-500/10 backdrop-blur-lg filter blur-xl opacity-70"></div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Creative signature */}
          <div className="group mb-8 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500">
                Makuochukwu
              </span>
              <span className="relative h-8 w-8">
                <span className="absolute inset-0 bg-orange-500 rounded-full opacity-80 group-hover:opacity-100 transition-opacity"></span>
                <span className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                  <FaRegHeart className="text-orange-500 text-xs group-hover:animate-pulse" />
                </span>
              </span>
            </div>
            <p className="mt-2 text-sm text-gray-400">
              Crafting digital experiences that matter
            </p>
          </div>

          {/* Animated social links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-400 hover:text-orange-400 transition-colors duration-300 relative group"
            >
              <FaGithub className="text-xl" />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-400 hover:text-blue-400 transition-colors duration-300 relative group"
            >
              <FaLinkedin className="text-xl" />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </span>
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-400 hover:text-cyan-400 transition-colors duration-300 relative group"
            >
              <FaTwitter className="text-xl" />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Twitter
              </span>
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon text-gray-400 hover:text-pink-500 transition-colors duration-300 relative group"
            >
              <FaWhatsapp className="text-xl" />
              <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs bg-gray-900/80 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                Dribbble
              </span>
            </a>
          </div>
        </div>

        {/* Floating CTA */}
        <div className="mt-16 p-6 bg-gradient-to-r from-gray-800/40 to-gray-900/30 backdrop-blur-lg rounded-xl border border-gray-700/20 shadow-2xl shadow-gray-900/10 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-500/10 rounded-full filter blur-2xl"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">
                Let's build something amazing
              </h3>
              <p className="text-gray-400 mt-1">
                Have a project in mind? Let's talk!
              </p>
            </div>
            <button className="mt-4 md:mt-0 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg text-white font-medium hover:shadow-lg hover:shadow-orange-500/20 transition-all flex items-center gap-2 group">
              Get in touch
              <RiSendPlaneFill className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Copyright with animated border */}
        <div className="mt-16 pt-6 border-t border-gray-800/30 relative">
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} All rights reserved. Crafted with
            <span className="mx-1 text-orange-400">♥</span>
            by DEVprimo
          </p>
        </div>
      </div>
    </footer>
  );
}
