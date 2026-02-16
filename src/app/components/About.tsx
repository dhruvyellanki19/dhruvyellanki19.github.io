import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Sparkles, Target, Lightbulb, Zap, Database, Brain } from "lucide-react";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const highlights = [
    {
      icon: Sparkles,
      title: "AI Engineering",
      description: "Expert in LLM fine-tuning, RAG systems, RLHF, and multi-agent orchestration for production.",
    },
    {
      icon: Database,
      title: "Data Science",
      description: "Advanced analytics with PySpark, SQL, Power BI. Processing 200K+ records with optimization.",
    },
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Predictive modeling, time series forecasting, customer segmentation, and MLOps supervision.",
    },
    {
      icon: Target,
      title: "Versatility",
      description: "Proficient in Azure, AWS, Docker, Kubernetes, Redis, Postgres, and modern MLOps.",
    },
    {
      icon: Lightbulb,
      title: "Production",
      description: "Deployed scalable systems with 95% uptime and real-time processing.",
    },
    {
      icon: Zap,
      title: "Mentorship & Research",
      description: "Published research author. Mentoring juniors in AI, data skills, and career advancement.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 md:py-32 bg-transparent overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground tracking-tight mb-6">
            About Me.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            I don't just build models. I build intelligent systems that solve real problems.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-center mb-20 md:mb-32">
          {/* Left: Professional Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 bg-white">
              <img
                src="/images/pic.jpeg"
                alt="Sai Dhruv Yellanki"
                className="w-full h-auto object-contain block"
              />
            </div>
          </motion.div>

          {/* Right: Story */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
              <p>
                I’m a <strong className="text-foreground font-semibold">Data Science graduate student at the University of Maryland</strong> with <strong className="text-foreground font-semibold">3+ years of experience</strong> building AI- and ML-driven systems, specializing in <strong className="text-foreground font-semibold">LLMs, RAG architectures, and production-grade AI workflows</strong>. With a strong foundation in Computer Science, I focus on building <strong className="text-foreground font-semibold">intelligent systems that move beyond demos and scale reliably</strong> in real-world environments.
              </p>
              <p>
                My work spans machine learning, <strong className="text-foreground font-semibold">LLM fine-tuning</strong>, retrieval-augmented generation (RAG), and <strong className="text-foreground font-semibold">multi-agent orchestration</strong>, including systems that integrate unstructured data and operate under real production constraints. <strong className="text-foreground font-semibold">I’ve worked across healthcare, finance, and enterprise automation</strong>, where reliability, latency, and accuracy directly impact outcomes.
              </p>
              <p>
                Currently, as an <strong className="text-blue-600 font-semibold">AI Engineer Intern at Aurelius Tech & Talent Solutions</strong>, I build RAG-based enterprise systems using <strong className="text-foreground font-semibold">Azure OpenAI</strong>, fine-tune large language models, and deploy scalable solutions with <strong className="text-foreground font-semibold">Docker and Kubernetes</strong>. I’m also actively exploring <strong className="text-foreground font-semibold">Recursive Language Models and Context Graph–based architectures</strong> to push AI systems beyond traditional vector search.
              </p>
              <p>
                What drives me is building AI and ML systems that <strong className="text-foreground font-semibold">think better, scale cleanly, and solve real-world problems</strong>—where strong system design matters as much as model quality, and measurable impact matters more than benchmarks.
              </p>
              <p>
                Outside of work, I enjoy traveling, photography, and playing cricket. I carry a camera more often than I need to and approach life much like AI systems do—if something isn’t working, it probably needs better data… or a reboot.
              </p>
            </div>


          </motion.div>
        </div>

        {/* Highlights Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-3xl p-8 border border-black/5 hover:border-black/10 hover:shadow-lg transition-all duration-300 group shadow-sm"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
            >
              <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-6 h-6 text-foreground" />
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">{highlight.title}</h4>
              <p className="text-gray-600 leading-relaxed text-sm">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div >
    </section >
  );
}
