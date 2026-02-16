import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Blog() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Technical", "Travel", "Experiences", "Publications"];

  const posts = [
    {
      title: "LLM Fine-Tuning Masterclass: SFT → LoRA/QLoRA → Preference Alignment (With Math Intuition + Hyperparams)",
      excerpt: "In-depth LLM Fine-Tuning Masterclass explaining SFT, LoRA/QLoRA, and RLHF/DPO",
      date: "Oct 15, 2025",
      readTime: "8 min read",
      category: "Technical",
      tags: ["Fine Tuning LLMS", "LoRA/QLoRA", "Preference Alignment"],
      image: "/images/pic19.png",
      link: "https://medium.com/@dhruvyellanki2000/llm-fine-tuning-masterclass-sft-lora-qlora-preference-alignment-with-math-intuition-4d954f0cf53e"
    },

    {
      title: "Speech Emotion Recognition Using LSTM Model",
      excerpt: "Published by River Publishers. Click to read the full chapter.",
      date: "2023",
      readTime: "Read PDF",
      category: "Publications",
      tags: ["Research", "Publication"],
      image: "/images/pic18.jpg",
      link: "https://www.riverpublishers.com/pdf/ebook/chapter/RP_9788770040723C133.pdf"
    }
  ];

  const filteredPosts = activeCategory === "All"
    ? posts
    : posts.filter(post => post.category === activeCategory);

  return (
    <section
      id="blog"
      ref={ref}
      className="relative py-24 bg-transparent overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-100/40 via-transparent to-transparent opacity-60" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl mb-4 font-semibold text-foreground">
            Writings & Reflections
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4" />
          <p className="text-gray-500 max-w-2xl mx-auto">
            Technical blogs, travel stories, experiences, and research publications.
          </p>
        </motion.div>

        {/* Search & Categories */}
        <div className="mb-12 space-y-6">
          {/* Categories */}
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((cat, index) => (
              <button
                key={index}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post, index) => (
            <motion.a
              key={index}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border border-black/5 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm block text-left"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-white/90 text-black backdrop-blur-sm shadow-sm">
                    {post.category}
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {post.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {post.tags.slice(0, 2).map((tag, tIndex) => (
                      <span key={tIndex} className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded border border-black/5">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0 hover:bg-transparent">
                    Read More <ArrowRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
              </div>
            </motion.a>
          ))}
        </div>



      </div>
    </section>
  );
}
