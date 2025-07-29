import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import AboutFull from "./components/AboutFull";
import Footer from "./components/Footer";

function MainContent({ setActiveSection }) {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (
          window.scrollY >= sectionTop - 300 &&
          window.scrollY < sectionTop + sectionHeight - 300
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setActiveSection]);

  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar activeSection={activeSection} />

      <main>
        <Routes>
          <Route
            path="/"
            element={<MainContent setActiveSection={setActiveSection} />}
          />
          <Route path="/about-full" element={<AboutFull />} />
        </Routes>
      </main>
    </div>
  );
}
