import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Download, Github, Linkedin, Instagram, BookOpen } from "lucide-react";
import { Button } from "./ui/button";

interface NavigationProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Works" },
    { id: "skills", label: "Skills" },
    { id: "blog", label: "Writings" },
    { id: "contact", label: "Contact" },

  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${isScrolled
        ? "bg-white/70 backdrop-blur-xl border-b border-black/5 py-3"
        : "bg-transparent py-6"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            onClick={() => onNavigate("home")}
          >
            <span className={`text-sm tracking-wide font-medium transition-colors duration-300 ${isScrolled ? "text-black" : "text-black/90"
              }`}>
              Sai Dhruv Yellanki
            </span>
          </motion.div>

          {/* Desktop Navigation - Centered Pill */}
          <div className="hidden md:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <div className={`flex items-center space-x-1 px-4 py-1.5 rounded-full transition-all duration-300 ${isScrolled ? "bg-black/5 border border-black/5" : ""
              }`}>
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-4 py-1 text-xs font-medium tracking-wide transition-colors duration-300 ${activeSection === item.id
                    ? "text-black"
                    : "text-gray-500 hover:text-black"
                    }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-px bg-black mx-auto w-1/2 shadow-[0_0_8px_rgba(0,0,0,0.2)]"
                      layoutId="activeSection"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-2 border-r border-black/10 pr-4 mr-1">
              <a href="https://github.com/dhruvyellanki19" target="_blank" className="text-gray-500 hover:text-black transition-colors">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com/in/saidhruv" target="_blank" className="text-gray-500 hover:text-black transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="http://medium.com/@dhruvyellanki2000" target="_blank" className="text-gray-500 hover:text-black transition-colors">
                <BookOpen className="w-4 h-4" />
              </a>
              <a href="https://www.instagram.com/dhruvyellanki/" target="_blank" className="text-gray-500 hover:text-black transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <a
              href="/resume.pdf"
              download="Sai_Dhruv_Yellanki_Resume.pdf"
              className="bg-black text-white hover:bg-gray-800 rounded-full text-xs font-medium px-5 h-8 flex items-center justify-center transition-colors"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 top-[60px] bg-white/95 backdrop-blur-2xl z-40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-8 space-y-6">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left text-2xl font-medium tracking-tight ${activeSection === item.id ? "text-blue-600" : "text-gray-500"
                    }`}
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="pt-8 border-t border-black/10"
              >
                <a
                  href="/resume.pdf"
                  download="Sai_Dhruv_Yellanki_Resume.pdf"
                  className="w-full bg-black hover:bg-gray-800 text-white rounded-full py-6 text-lg flex items-center justify-center transition-colors"
                >
                  Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
