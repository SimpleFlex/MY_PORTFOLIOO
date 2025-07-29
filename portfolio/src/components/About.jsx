import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(containerRef.current, {
        x: -100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reset",
        },
      });

      gsap.from(contentRef.current.children, {
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1)",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reset",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="min-h-screen py-20 px-4 scroll-mt-20">
      <div className="max-w-[95vw] mx-auto sm:max-w-4xl" ref={containerRef}>
        <div
          className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 md:p-8 lg:p-10 space-y-6"
          ref={contentRef}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            About Me
          </h2>

          <p className="text-lg text-gray-300">
            I'm <span className="text-orange-400">Makuochukwu Elijah</span>, a
            full-stack developer who transforms complex problems into elegant
            digital solutions. What began as curiosity at 16 has evolved into a
            passion for building...
          </p>

          <p className="text-lg text-gray-300">
            My work spans the entire stack, but there's a method to my technical
            choices that you might find interesting...
          </p>

          <div className="py-4 border-y border-gray-700 my-6 text-center">
            <h3 className="text-xl font-semibold text-white mb-2">
              Why I Code Differently
            </h3>
            <p className="text-gray-300 italic">
              "It's not just about making it work - it's about how it grows"
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="p-3">
              <div className="text-2xl font-bold text-orange-400">300%</div>
              <div className="text-sm text-gray-400">Performance boosts</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-blue-400">∞</div>
              <div className="text-sm text-gray-400">Learning mindset</div>
            </div>
            <div className="p-3">
              <div className="text-2xl font-bold text-cyan-400">100%</div>
              <div className="text-sm text-gray-400">Systems thinking</div>
            </div>
          </div>

          <p className="text-lg text-gray-300 mt-6 text-center">
            The full story includes my technical philosophy, unconventional
            learning journey, and what really drives my approach to
            development...
          </p>

          <div className="mt-8 flex justify-center">
            <Link
              to="/about-full"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-600 rounded-lg text-white font-medium hover:from-orange-400 hover:to-amber-500 hover:shadow-lg transition-all duration-300 flex items-center gap-2 group"
            >
              Discover My Full Story
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 group-hover:translate-x-1 transition-transform"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
