import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Download, Mail, Linkedin, Github, MapPin, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

interface ResumeProps {
  onClose?: () => void;
}

export function Resume({ onClose }: ResumeProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });



  return (
    <div ref={ref} className="max-w-5xl mx-auto bg-white text-gray-900 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl mb-2">Sai Dhruv Yellanki</h1>
            <p className="text-xl text-blue-100">AI Engineer • ML Systems Architect</p>
          </div>
          <a
            href="/resume.pdf"
            download="Sai_Dhruv_Yellanki_Resume.pdf"
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-10 px-4 py-2 bg-white text-blue-600 hover:bg-blue-50"
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="flex items-center gap-2">
            <Mail className="h-4 w-4" />
            <span className="text-sm">sai.dhruv@example.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Linkedin className="h-4 w-4" />
            <span className="text-sm">linkedin.com/in/saidhruv</span>
          </div>
          <div className="flex items-center gap-2">
            <Github className="h-4 w-4" />
            <span className="text-sm">github.com/saidhruv</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span className="text-sm">San Francisco, CA</span>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Professional Summary */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-700 leading-relaxed">
            AI Engineer with 5+ years of experience designing and deploying production-grade LLM systems,
            RAG architectures, and multi-agent frameworks. Deep expertise in RLHF, model fine-tuning, MLOps,
            and scalable data pipelines. Proven track record of building systems that process 100K+ queries
            daily with 94% accuracy, reducing costs by 30%, and delivering measurable business impact across
            healthcare, finance, and enterprise domains.
          </p>
        </section>

        {/* Core Competencies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Core Competencies
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              "LLM Fine-tuning & RLHF",
              "RAG Systems",
              "Multi-Agent Orchestration",
              "MLOps & CI/CD",
              "Deep Learning (PyTorch, TF)",
              "NLP & Computer Vision",
              "Big Data (Spark, Databricks)",
              "Cloud (AWS, Azure, GCP)",
              "Kubernetes & Docker",
              "Python, SQL, Scala",
              "Data Pipelines",
              "A/B Testing & Experimentation",
            ].map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-2">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            <Briefcase className="inline h-6 w-6 mr-2" />
            Professional Experience
          </h2>

          {/* Job 1 */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Senior AI Engineer</h3>
                <p className="text-blue-600">AI Innovation Labs</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">2022 - Present</p>
                <p className="text-gray-500 text-sm">San Francisco, CA</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Architected production RAG system with multi-agent orchestration processing 100K+ daily queries
                with 94% accuracy and sub-second latency
              </li>
              <li>
                Built end-to-end RLHF pipeline for LLM fine-tuning achieving 30% performance improvement on
                domain-specific tasks
              </li>
              <li>
                Established MLOps infrastructure reducing model deployment time from weeks to hours through
                CI/CD automation
              </li>
              <li>
                Led team of 5 engineers in developing multi-agent orchestration platform with 89% success rate
                across 12 specialized agents
              </li>
            </ul>
          </div>

          {/* Job 2 */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">ML Engineer</h3>
                <p className="text-blue-600">Data Science Ventures</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">2020 - 2022</p>
                <p className="text-gray-500 text-sm">Seattle, WA</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Developed ML models for healthcare predictive analytics reducing patient readmissions by 23%
                and saving $2M annually
              </li>
              <li>
                Built NLP pipeline for automated medical document classification processing 1M+ documents with
                85% automation rate
              </li>
              <li>
                Designed real-time feature engineering system using Spark Streaming for low-latency predictions
              </li>
              <li>
                Implemented explainable AI framework using SHAP for model interpretability and regulatory compliance
              </li>
            </ul>
          </div>

          {/* Job 3 */}
          <div className="mb-6">
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Data Scientist</h3>
                <p className="text-blue-600">Financial Analytics Corp</p>
              </div>
              <div className="text-right">
                <p className="text-gray-600">2019 - 2020</p>
                <p className="text-gray-500 text-sm">New York, NY</p>
              </div>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
              <li>
                Designed real-time fraud detection system identifying $5M+ in fraudulent transactions using
                ensemble methods
              </li>
              <li>
                Created interactive risk assessment dashboards improving portfolio management decision accuracy by 35%
              </li>
              <li>
                Built forecasting models for financial time series using Prophet and ARIMA techniques
              </li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            <GraduationCap className="inline h-6 w-6 mr-2" />
            Education
          </h2>
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Master of Science in Computer Science
                </h3>
                <p className="text-blue-600">Specialization: Artificial Intelligence & Machine Learning</p>
                <p className="text-gray-600">University of California, Berkeley</p>
              </div>
              <p className="text-gray-600">2017 - 2019</p>
            </div>
          </div>
          <div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-gray-900">
                  Bachelor of Science in Computer Engineering
                </h3>
                <p className="text-gray-600">Georgia Institute of Technology</p>
              </div>
              <p className="text-gray-600">2013 - 2017</p>
            </div>
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Key Projects
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Enterprise RAG System</h3>
              <p className="text-gray-700">
                Production-grade retrieval system combining dense retrieval, reranking, and multi-agent query
                decomposition. Handles 10M+ documents with 94% accuracy.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Tech: LangChain, GPT-4, Pinecone, FastAPI, Redis, Docker
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">RLHF Fine-tuning Framework</h3>
              <p className="text-gray-700">
                End-to-end pipeline for LLM fine-tuning with human feedback including reward modeling and
                PPO training on distributed GPUs.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Tech: PyTorch, Transformers, DeepSpeed, MLflow, Ray
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Multi-Agent Orchestration Platform</h3>
              <p className="text-gray-700">
                Framework managing 12 specialized AI agents with dynamic task routing, shared memory, and
                89% success rate.
              </p>
              <p className="text-sm text-gray-600 mt-1">
                Tech: LangGraph, OpenAI, MongoDB, RabbitMQ, Kubernetes
              </p>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            <Award className="inline h-6 w-6 mr-2" />
            Certifications & Awards
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>AWS Certified Machine Learning - Specialty</li>
            <li>Google Cloud Professional ML Engineer</li>
            <li>Deep Learning Specialization (Andrew Ng, Coursera)</li>
            <li>Kubernetes Administrator (CKA)</li>
            <li>Best Paper Award - AI Research Journal (2024)</li>
          </ul>
        </section>

        {/* Publications */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4 border-b-2 border-blue-600 pb-2">
            Publications
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <span className="font-semibold">
                "Efficient Retrieval-Augmented Generation for Enterprise Knowledge Bases"
              </span>
              <br />
              <span className="text-gray-600">AI Research Journal, 2024</span>
            </li>
            <li>
              <span className="font-semibold">
                "Scalable Multi-Agent Orchestration Frameworks"
              </span>
              <br />
              <span className="text-gray-600">ML Systems Conference, 2023</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
