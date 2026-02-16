import { motion, useScroll, useTransform } from "motion/react";
import Typewriter from 'typewriter-effect';
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { useRef } from "react";

interface HeroProps {
  onNavigate: (section: string) => void;
}

export function Hero({ onNavigate }: HeroProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-transparent"
    >
      {/* Mesh Gradient Background is handled by parent App.tsx */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text Content */}
        <motion.div
          style={{ y, opacity }}
          className="text-left order-2 lg:order-1"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="inline-flex items-center gap-2 mb-8"
          >
            <span className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 border border-blue-100 rounded-full">
              Available May 2026
            </span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight text-foreground mb-6 leading-[0.95]"
          >
            Sai Dhruv
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Yellanki.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-lg sm:text-2xl text-gray-500 max-w-xl font-light leading-relaxed mb-8 h-20"
          >
            <div className="text-foreground font-medium">
              <Typewriter
                options={{
                  strings: [
                    'I am an AI Engineer.',
                    'I am a Machine Learning Engineer.',
                    'I am a Data Scientist.',
                    'I am an NLP Engineer.',
                    'I am a Data Engineer.',
                    'I am a Data Analyst.'
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 50,
                  delay: 80,
                }}
              />
            </div>
            <span className="block mt-2 text-base sm:text-lg text-gray-400">
              Engineering Scalable Intelligent Systems for Real-World Impact.
            </span>
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Button
              size="lg"
              onClick={() => onNavigate("projects")}
              className="rounded-full px-8 py-6 text-lg bg-black text-white hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              View Projects
            </Button>
            <button
              onClick={() => onNavigate("contact")}
              className="group flex items-center gap-2 px-6 py-6 text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
            >
              Get in touch
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
        >
          <div className="relative w-72 h-72 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 rotate-3 transition-transform hover:rotate-0 duration-500">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent z-10 mix-blend-overlay" />
            <img
              src="/images/kpic.jpg"
              alt="Sai Dhruv Yellanki"
              className="w-full h-full object-cover object-top scale-110"
            />
          </div>

          {/* Decorative Floating Element behind */}
          <div className="absolute -z-10 top-10 right-10 w-full h-full border border-black/5 rounded-3xl translate-x-4 translate-y-4" />
        </motion.div>

      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 bg-gradient-to-b from-gray-300 to-transparent"
        />
      </motion.div>
    </section>
  );
}

