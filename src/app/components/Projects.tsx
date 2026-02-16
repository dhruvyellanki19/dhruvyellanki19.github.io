import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Github, ExternalLink, Zap, Database, Brain, Network, Layers, FileText, BarChart3, BookOpen } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";
import { Badge } from "./ui/badge";

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai-llm", label: "AI & LLM" },
    { id: "ml-dl", label: "Machine Learning & Deep Learning" },

    { id: "analysis", label: "Analysis" }
  ];

  const projects = [
    {
      category: "ai-llm",
      title: "RLHF Optimized Summarization System with LoRA Fine Tuning",
      description: "Deployed a production-grade news summarization platform using Reinforcement Learning from Human Feedback (RLHF) with PPO/TRLX to fine-tune T5, aligning outputs with human preferences for higher quality and coherence. Integrated a pgvector-based RAG pipeline and optimized inference with vLLM, achieving +11% ROUGE-L improvement and 240ms p95 latency.",
      shortDescription: "Deployed a production-grade news summarization platform using Reinforcement Learning from Human Feedback (RLHF) with PPO/TRLX for higher quality......",
      tech: ["Python", "PyTorch", "LoRA", "RLHF", "T5", "Docker", "RAG", "Langchain", "vLLM"],
      github: "https://github.com/dhruvyellanki19/RLHF-Optimized-Summarization-System-with-LoRA-Fine-Tuning-Human-Feedback-Loop-Back",
      demo: "https://github.com/dhruvyellanki19/RLHF-Optimized-Summarization-System-with-LoRA-Fine-Tuning-Human-Feedback-Loop-Back",
      image: "/images/pic_1.png"
    },
    {
      category: "ai-llm",
      title: "BioGraphX: Multi-Agent Biomedical RAG System",
      description: "a production-ready biomedical QA system by orchestrating 7 specialized LangGraph agents and a LoRA fine-tuned Qwen2.5 model, achieving a 96% ROUGE-L improvement and enabling scalable Docker/FastAPI deployment with sub-8s inference over 298K PubMed records.",
      shortDescription: "A production-ready biomedical QA system by orchestrating 7 specialized LangGraph agents and a LoRA fine-tuned Qwen2.5 model......",
      tech: ["Python", "PyTorch", "Multi Agent Orchestration", "Transformers", "LangGraph", "RAG", "ChromaDB", "Docker"],
      github: "https://github.com/dhruvyellanki19/BioGraphX",
      image: "/images/pic_2.webp"
    },
    {
      category: "ai-llm",
      title: "AI Medical Chatbot for Automated Healthcare Triage",
      description: "Designed and implemented a medical triage chatbot system with structured symptom intake, rule-based urgency classification, and citation-grounded knowledge retrieval using Milvus and LangGraph orchestration. Deployed via FastAPI with containerized Docker/Kubernetes infrastructure, achieving sub-3s p95 latency and scalable, production-ready architecture.",
      shortDescription: "Designed and implemented a medical triage chatbot system with structured symptom intake, rule-based urgency classification, and citation-grounded knowledge retrieval......",
      tech: ["Python", "LangChain", "LangGraph", "PyTorch", "LoRA", "vLLM", "Milvus", "FastAPI", "PostgreSQL", "Docker", "Kubernetes", "Prometheus", "Grafana"],
      github: "https://github.com/dhruvyellanki19/AI-Medical-Chatbot-for-Automated-Healthcare-Triage",
      image: "/images/pic_3.jpg"
    },

    {
      category: "ai-llm",
      title: "DocuMind AI: Multi PDF Retrieval Augmented Generation System ",
      description: "Built DocuMind AI, a multi-PDF conversational chatbot using Retrieval-Augmented Generation (RAG) to extract, embed, and retrieve document content for real-time, context-aware responses. Integrated semantic search with FAISS and Groq-powered LLaMA3 models, deployed via an interactive Streamlit interface.",
      shortDescription: "Built DocuMind AI, a multi-PDF conversational chatbot using Retrieval-Augmented Generation (RAG) to extract, embed, and retrieve document content......",
      tech: ["Python", "LangChain", "Groq API", "LLaMA3", "FAISS", "HuggingFace Embeddings"],
      github: "https://github.com/dhruvyellanki19/Multi-PDF-Retrieval-Augmented-Generation-System",
      image: "/images/pic_14.png"
    },

    {
      category: "ai-llm",
      title: "Chatbot with conversation history using Langchain",
      description: "Built a conversational chatbot using LangChain and Groq (Llama 3.1) with session-based memory, enabling context retention across multi-turn conversations and multiple users. Implemented prompt engineering, message trimming, and multilingual support within a structured development workflow.",
      shortDescription: "Built a conversational chatbot using LangChain and Groq (Llama 3.1) with session-based memory, enabling context retention across multi-turn conversations......",
      tech: ["Python", "LangChain", "Groq API", "Hugging Face", "Sentence-Transformers", "ChromaDB", "FAISS", "FastAPI", "LangServe", "MySQL"],
      github: "https://github.com/dhruvyellanki19/Chatbot_with_conversation_history_using_Langchain",
      image: "/images/pic_4.jpg"
    },


    {
      category: "ml-dl",
      title: "Bitcoin Price Forecasting with Facebook Prophet",
      description: "Developed an end-to-end Bitcoin price forecasting system using Facebook Prophet, integrating historical + live API data with external regressors and achieving ~17% MAPE. Containerized with Docker and deployed an interactive Streamlit dashboard for real-time forecasting and visualization.",
      shortDescription: "Developed an end-to-end Bitcoin price forecasting system using Facebook Prophet, integrating historical + live API data with external regressors......",
      tech: ["Python", "Facebook Prophet", "Hypothesis Testing", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "Plotly", "requests", "Streamlit", "Docker", "Ubuntu(Linux)"],
      github: "https://github.com/dhruvyellanki19/bitcoin-forecasting-with-facebook-prophet",
      image: "/images/pic_12.jpg"
    },

    {
      category: "ml-dl",
      title: "Demand Forecasting and CTR Prediction System",
      description: "Built a End-to-End Machine Learning System for Retail Demand Forecasting and Click-Through Rate (CTR) Prediction using Python, FastAPI, Docker, PostgreSQL, and Tableau. Designed with MLOps, business KPIs, and storytelling dashboards for real-time decision support.",
      shortDescription: "Built a End-to-End Machine Learning System for Retail Demand Forecasting and Click-Through Rate (CTR) Prediction using Python, FastAPI......",
      tech: ["Python", "PostgreSQL", "pandas", "SciPy", "scikit-learn", "statsmodels", "Prophet", "XGBoost", "LightGBM", "CatBoost", "Matplotlib", "Seaborn", "Plotly", "FastAPI", "Docker"],
      github: "https://github.com/dhruvyellanki19/Demand-Forecasting-and-CTR-Prediction-System",
      image: "/images/pic_11.webp"
    },

    {
      category: "ai-llm",
      title: "LLM application using LCEL and Langserve",
      description: "Built a Translation API using LangChain Expression Language (LCEL) and LangServe, enabling prompt → model → parser workflows deployed as REST endpoints with minimal code. Integrated Groq’s LLaMA 3.1 model with FastAPI to provide a production-ready, auto-documented translation service with interactive playground support.",
      shortDescription: "Built a Translation API using LangChain Expression Language (LCEL) and LangServe, enabling prompt → model → parser workflows deployed as REST endpoints......",
      tech: ["Python", "LangChain (LCEL)", "LangServe", "FastAPI", "Docker"],
      github: "https://github.com/dhruvyellanki19/simple_LLM_application_using_LCEL_and_Langserve",
      image: "/images/pic_5.webp"
    },
    {
      category: "ai-llm",
      title: "Basic RAG Application using LangSmith for Page Retrieval",
      description: "Built a local RAG application using LangChain and Ollama (LLaMA2) with FAISS-based retrieval for context-aware Q&A. Deployed a Streamlit interface with LangSmith tracing for end-to-end local experimentation and monitoring.",
      shortDescription: "Built a local RAG application using LangChain and Ollama (LLaMA2) with FAISS-based retrieval for context-aware Q&A, deployed via Streamlit......",
      tech: ["Python", "RAG", "LangChain", "Ollama", "LLaMA2", "FAISS", "Streamlit", "LangSmith"],
      github: "https://github.com/dhruvyellanki19/simple_gen_ai_example_langsmith_page_retrieval",
      image: "/images/pic_6.jpg"
    },


    {
      category: "ml-dl",
      title: "Churn Modelling Using ANN",
      description: "This project builds an Artificial Neural Network (ANN) model to predict customer churn (whether a bank customer will leave) using tabular customer data. It also includes code to run predictions / deploy an interactive app for churn inference.",
      shortDescription: "This project builds an Artificial Neural Network (ANN) model to predict customer churn using tabular customer data, including code for interactive app deployment......",
      tech: ["Python", "TensorFlow", "Keras", "scikit-learn", "pandas", "NumPy", "SciPy", "Streamlit", "Matplotlib", "SHAP"],
      github: "https://github.com/dhruvyellanki19/churn_modelling__ANN_project",
      image: "/images/pic_7.jpg"
    },



    {
      category: "ml-dl",
      title: "Tweet Sentimental Analysis",
      description: "Built a Twitter Sentiment Analysis model using Word2Vec and TensorFlow/Keras ANN to classify 1.6M tweets with ~75–85% accuracy. Implemented advanced NLP preprocessing and visualization for an end-to-end deep learning pipeline.",
      shortDescription: "Built a Twitter Sentiment Analysis model using Word2Vec and TensorFlow/Keras ANN to classify 1.6M tweets with ~75–85% accuracy......",
      tech: ["Python", "TensorFlow", "Keras", "scikit-learn", "NLTK", "SpaCy", "Gensim (Word2Vec)", "pandas", "NumPy", "Matplotlib", "Seaborn"],
      github: "https://github.com/dhruvyellanki19/NLP_tweet_sentimental_analysis_with_ANN_word2vec_practice",
      image: "/images/pic_8.jpg"
    },



    {
      category: "ml-dl",
      title: "Market-Driven Car Price Estimation Using Key Vehicle Attributes and Trends",
      description: "Developed a machine learning regression model to estimate car prices using key attributes such as brand, mileage, engine size, and year of manufacture, achieving an R² score of 0.62. Applied data cleaning, outlier removal, and feature engineering to improve prediction reliability for real-world pricing decisions.",
      shortDescription: "Developed a machine learning regression model to estimate car prices using key attributes such as brand, mileage, engine size, and year of manufacture......",
      tech: ["Python", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "Tableau"],
      github: "https://github.com/dhruvyellanki19/market-driven-car-price-valuation",
      image: "/images/pic_9.png"
    },



    {
      category: "ai-llm",
      title: "AI-Powered Startup Due Diligence System",
      description: "Built a modular AI-powered Startup Due Diligence System using multi-agent orchestration to analyze startups across market, product, tech, risk, competition, and investment domains. Automated end-to-end report generation using Google Gemini API, producing structured, professional VC-style due diligence reports in DOCX format.",
      shortDescription: "Built a modular AI-powered Startup Due Diligence System using multi-agent orchestration to analyze startups across market, product, tech, and risk......",
      tech: ["Python", "Google Gemini API", "Multi-Agent Architecture"],
      github: "https://github.com/dhruvyellanki19/AI-Powered-Startup-Due-Diligence-System",
      image: "/images/pic_10.png"
    },


    {
      category: "ml-dl",
      title: "Speech Emotion Recognition",
      description: "Developed a Speech Emotion Recognition (SER) system using LSTM-based RNN architecture, extracting MFCC audio features and training on 2,800 speech samples to achieve 99.73% accuracy . Implemented deep learning with dropout regularization, sparse categorical cross-entropy loss, and GPU training for robust multi-class emotion classification.",
      shortDescription: "Developed a Speech Emotion Recognition (SER) system using LSTM-based RNN architecture, extracting MFCC audio features for robust emotion classification......",
      tech: ["Python", "TensorFlow/Keras", "LSTM (RNN)", "MFCC Feature Extraction", "NumPy", "pandas", "Matplotlib", "GPU Training"],
      github: "https://github.com/dhruvyellanki19/speech_emotion_recognition",
      image: "/images/pic_13.png"
    },

    {
      category: "ml-dl",
      title: "Customer Churn Prediction and Retention Strategy in Banking",
      description: "Developed a Customer Churn Prediction model for banking using machine learning to identify at-risk customers based on demographic, financial, and behavioral features, achieving 86.5% accuracy and 0.86 AUC with Random Forest. Delivered actionable retention insights through feature importance analysis to support proactive engagement and cross-selling strategies.",
      shortDescription: "Developed a Customer Churn Prediction model for banking using machine learning to identify at-risk customers based on demographic and financial features......",
      tech: ["Python", "pandas", "NumPy", "scikit-learn", "Random Forest", "SVM", "Logistic Regression", "GridSearchCV", "Matplotlib", "Seaborn", "Tableau"],
      github: "https://github.com/dhruvyellanki19/banking-customer-churn-prediction",
      image: "/images/pic_15.jpeg"
    },

    {
      category: "analysis",
      title: "Optimizing Public Safety and Traffic Management Through US Accident Data",
      description: "Analyzed 7.7M US accident records (2016–2023) to build a machine learning model predicting accident severity using environmental, temporal, and geospatial features, achieving 91.45% accuracy with Random Forest (ROC-AUC: 0.81). Delivered data-driven insights to support proactive traffic management, emergency response optimization, and public safety improvements.",
      shortDescription: "Analyzed 7.7M US accident records to build a machine learning model predicting accident severity using environmental and temporal features......",
      tech: ["Python", "pandas", "NumPy", "scikit-learn", "Random Forest", "Gradient Boosting", "Logistic Regression", "Matplotlib", "Seaborn", "Plotly", "Dask", "SciPy", "Statsmodels (VIF)", "KMeans", "Tableau"],
      github: "https://github.com/dhruvyellanki19/US-Traffic-Accident-Analysis",
      image: "/images/pic_16.png"
    },


    {
      category: "analysis",
      title: "Fashion Retail Store Sales Analysis & Strategic Growth Plan",
      description: "Conducted a comprehensive Fashion Retail Sales Analysis on $21.17M revenue and 31K+ orders to identify key customer segments, high-performing regions, and e-commerce trends driving profitability. Delivered a data-driven strategic growth plan focused on customer targeting, inventory optimization, and channel performance enhancement.",
      shortDescription: "Conducted a comprehensive Fashion Retail Sales Analysis on $21.17M revenue and 31K+ orders to identify key customer segments and high-performing regions......",
      tech: ["Microsoft Excel", "Pivot Tables", "Power Query", "Data Cleaning & Transformation", "KPI Dashboards", "Descriptive & Diagnostic Analytics", "Trend & Seasonality Analysis", "Customer Segmentation", "Cohort Analysis", "Business Intelligence Reporting"],
      github: "https://github.com/dhruvyellanki19/Fashion-Store-Sales-Analysis",
      image: "/images/pic_17.jpeg"
    }
  ];




  const filteredProjects = selectedCategory === "all"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 md:py-32 bg-transparent overflow-hidden"
    >
      <div className="relative z-10 max-w-[95%] mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground tracking-tight mb-6">
            My Works.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-light">
            A showcase of production-grade AI systems and engineering.
          </p>
        </motion.div>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 md:mb-20">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === cat.id
                ? "bg-black text-white"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelectedProject(project)}
              className="group bg-white border border-black/5 rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full shadow-sm cursor-pointer block"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((t, i) => (
                    <span key={i} className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded border border-black/5">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-xs font-medium text-gray-400 px-1 py-1">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="mt-auto pt-4 border-t border-black/5 flex items-center justify-between text-sm text-blue-600 font-medium group-hover:underline">
                  <span>View Details & Code</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Details Dialog */}
        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold leading-tight mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700 hover:bg-blue-200">
                      {categories.find(c => c.id === selectedProject.category)?.label || selectedProject.category}
                    </Badge>
                  </div>
                </DialogHeader>

                <div className="mt-4">
                  {/* Image */}
                  <div className="relative h-64 md:h-96 w-full overflow-hidden rounded-xl bg-gray-50 border border-gray-100 mb-6">
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Description */}
                  <div className="prose prose-blue max-w-none text-gray-600 leading-relaxed mb-8">
                    <p>{selectedProject.description}</p>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-3">
                      Technology Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((t, i) => (
                        <Badge key={i} variant="outline" className="text-sm py-1 px-3 bg-gray-50">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-100">
                    {selectedProject.github && (
                      <Button asChild className="gap-2">
                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                    {selectedProject.demo && selectedProject.demo !== selectedProject.github && (
                      <Button asChild variant="outline" className="gap-2">
                        <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
}
