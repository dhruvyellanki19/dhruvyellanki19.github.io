import { useState, useEffect } from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";
import { Background } from "./components/Background";
import { AIChatbot } from "./components/AIChatbot";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      if (sectionId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }
      const offset = 80; // Adjusted for new nav height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-40% 0px -60% 0px", // Triggers when section is near the middle/top
        threshold: 0,
      }
    );

    const sections = ["home", "about", "education", "experience", "projects", "skills", "blog", "contact"];

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-blue-500/10">
      <Background />
      <Navigation activeSection={activeSection} onNavigate={scrollToSection} />

      <main className="relative z-10">
        <div id="home">
          <Hero onNavigate={scrollToSection} />
        </div>
        <About />
        <Education />
        <Experience />
        <Projects />
        <Skills />
        <Blog />
        <Contact />

      </main>

      <Footer />
      <AIChatbot />
      <Toaster />
    </div>
  );
}

export default App;
