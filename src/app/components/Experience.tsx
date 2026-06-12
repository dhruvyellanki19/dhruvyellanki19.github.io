import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, TrendingUp, Users, Award } from "lucide-react";
import { Badge } from "./ui/badge";

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      company: "Aurelius Tech & Talent Solutions",
      role: "AI Engineer",
      period: "June 2025 - Present",
      location: "Ellicott City, MD, USA",
      type: "Full-time",
      highlights: [
        {
          title: "GraphRAG Pipeline on Fabric OneLake & Neo4j",
          description: "Architected a GraphRAG pipeline on Fabric OneLake, Neo4j, and PostgreSQL/pgvector integrating HNSW vector search, BM25, multi-hop Cypher graph traversal, and RRF fusion.",
          impact: "Cut research time by 65% across knowledge-intensive workflows",
          tech: ["Fabric OneLake", "Neo4j", "PostgreSQL", "pgvector", "GraphRAG"],
        },
        {
          title: "Cross-Encoder Reranking Layer",
          description: "Engineered an ms-marco-MiniLM cross-encoder reranking layer within the GraphRAG pipeline, surfacing source-attributed answers.",
          impact: "Improved document retrieval precision by 38% at sub-500ms retrieval latency",
          tech: ["ms-marco-MiniLM", "Cross-Encoder", "Reranking"],
        },
        {
          title: "Agentic Workflow System via Semantic Kernel",
          description: "Fine-tuned gpt-oss-20b as the reasoning backbone for a 38-agent knowledge-intensive workflow system via Azure AI Agent Service and Semantic Kernel.",
          impact: "Achieved 81% F1 on RAGAS faithfulness evals and a 14% accuracy gain over human baselines",
          tech: ["Semantic Kernel", "Azure AI Agent", "gpt-oss-20b", "RAGAS"],
        },
        {
          title: "DSPy Programmatic Signature Layer",
          description: "Replaced manual prompt engineering with a DSPy programmatic signature layer across the gpt-oss-20b agent ensemble, enforcing output structure.",
          impact: "Improved answer reasoning precision by 19% over prompted baselines",
          tech: ["DSPy", "gpt-oss-20b", "Programmatic Signatures"],
        },
        {
          title: "Persistent Agent Memory Layer",
          description: "Built a persistent agent memory layer using Neo4j Context graphs, PostgreSQL audit trails, and OpenMemory long-term recall.",
          impact: "Reduced hallucination rates by 22% across multi-turn knowledge-intensive workflow sessions",
          tech: ["Neo4j", "PostgreSQL", "OpenMemory", "Agent Memory"],
        },
        {
          title: "Secure & Observant LLMOps CI/CD",
          description: "Deployed GraphRAG and agent inference services on Azure Container Apps and AKS with SAST, SCA, and secret scanning in ISO-compliant CI/CD and OpenTelemetry observability.",
          impact: "Cut release cycles by 40% and sustaining 99.6% uptime",
          tech: ["Azure Container Apps", "AKS", "OpenTelemetry", "CI/CD", "LLMOps"],
        },
      ],
    },
    {
      company: "Watzmann Consulting",
      role: "Data Analyst – Predictive Analytics & Machine Learning",
      period: "June 2023 - June 2024",
      location: "Hyderabad, TG, India",
      type: "Full-time",
      highlights: [
        {
          title: "ETL Pipelines on Azure Databricks",
          description: "Constructed ETL pipelines on Azure Databricks using PySpark and SQL to ingest 200K+ records from Azure Data Lake Storage Gen2, implementing a Delta Lake Architecture.",
          impact: "Enabled structured, versioned features for all downstream models",
          tech: ["Azure Databricks", "PySpark", "SQL", "Delta Lake"],
        },
        {
          title: "Demand Forecasting Ensemble & Workload Optimization",
          description: "Developed a Bi-LSTM and XGBoost demand forecasting ensemble improving prediction accuracy by 12% and a MILP-paired workload optimization system to minimize high compute execution intervals.",
          impact: "Reduced stock-outs and delivered 15% ROI",
          tech: ["Bi-LSTM", "XGBoost", "MILP", "Optimization"],
        },
        {
          title: "Live A/B Testing & Model Validation",
          description: "Executed live A/B testing to compare the Bi-LSTM ensemble against legacy ARIMA and Prophet models, providing the empirical validation required before production rollout.",
          impact: "Proved a 15% lift in operational efficiency",
          tech: ["A/B Testing", "ARIMA", "Prophet", "Statistical Validation"],
        },
        {
          title: "Production MLOps with MLflow",
          description: "Implemented a production MLOps lifecycle using the MLflow Model Registry to automate retraining and versioning, integrating interactive Power BI dashboards to monitor real-time model-drift.",
          impact: "Reduced deployment cycles by 35%",
          tech: ["MLflow", "Model Registry", "Power BI", "MLOps"],
        },
        {
          title: "RAG Application for Root Cause Analysis",
          description: "Pioneered a RAG application using LangChain, ChromaDB, and Llama 2 to automate Root Cause Analysis of forecasting anomalies, enabling managers to query inventory drivers in natural language.",
          impact: "Reduced investigation time by 45%",
          tech: ["LangChain", "ChromaDB", "Llama 2", "RAG"],
        },
      ],
    },
    {
      company: "Ramphal Technologies",
      role: "Data Science Intern",
      period: "December 2022 - May 2023",
      location: "Hyderabad, TG, India",
      type: "Internship",
      highlights: [
        {
          title: "Real-Time Event Pipeline",
          description: "Spearheaded a real-time event pipeline using RabbitMQ and PostgreSQL to ingest 10,000+ telemetry events per second, streaming live system metrics into Tableau to enable sub-second monitoring and instant bottleneck detection.",
          impact: "Enabled sub-second monitoring and instant bottleneck detection",
          tech: ["RabbitMQ", "PostgreSQL", "Tableau", "Real-time Streaming"],
        },
        {
          title: "Hybrid LSTM + XGBoost Ensemble",
          description: "Trained a hybrid ensemble using LSTM and XGBoost to forecast application latency, enabling proactive resource scaling to minimize request delays.",
          impact: "Reduced request delay by 7.5ms through resource scaling",
          tech: ["LSTM", "XGBoost", "Ensemble Methods", "Latency Forecasting"],
        },
        {
          title: "Automated Health-Drift Dashboards",
          description: "Designed automated Tableau dashboards to continuously track system health and detect model drift in real time, reducing manual reporting overhead.",
          impact: "Cut reporting latency by 30%",
          tech: ["Tableau", "Data Visualization", "Model Drift", "Automation"],
        },
      ],
    },
    {
      company: "SRM Institute of Science and Technology",
      role: "Research Assistant",
      period: "September 2022 - November 2022",
      location: "Chennai, TN, India",
      type: "Research",
      highlights: [
        {
          title: "Speech Emotion Recognition (SER) System",
          description: "Developed an SER system using LSTM with MFCC feature extraction and noise reduction; deployed as a real-time Flask web application.",
          impact: "Achieved 98% accuracy",
          tech: ["LSTM", "MFCC", "Flask", "Deep Learning", "Python"],
        },
        {
          title: "Published Research",
          description: "Conducted deep learning research as first author under faculty mentorship, resulting in a published paper on Speech Emotion Recognition (SER).",
          impact: "Presented at ICRTDA 2023 international conference",
          tech: ["Research", "Academic Writing", "Publication"],
        },
      ],
    },
    {
      company: "DHL Global Forwarding",
      role: "Operations Analyst Intern",
      period: "June 2022 - August 2022",
      location: "Hyderabad, TG, India",
      type: "Internship",
      highlights: [
        {
          title: "Workflow Efficiency Analysis",
          description: "Analyzed ocean freight workflows using CargoWise and evaluated 10+ shipments to identify process inefficiencies and document enhancements in JIRA.",
          impact: "10% improvement in delivery timelines",
          tech: ["CargoWise", "JIRA", "Process Optimization", "Workflow Analysis"],
        },
        {
          title: "Discrepancy Resolution & Validation",
          description: "Resolved a 5% cargo weight discrepancy risking delivery delays by conducting data validation and trend analysis.",
          impact: "15% reduction in reporting errors",
          tech: ["Data Validation", "Trend Analysis", "Operations Management"],
        },
      ],
    },
    {
      company: "Deeva",
      role: "Marketing Analyst Intern",
      period: "June 2021 - November 2021",
      location: "Remote",
      type: "Internship",
      highlights: [
        {
          title: "Customer Behavior Analysis",
          description: "Analyzed customer purchase behavior using descriptive statistics, segmentation, and A/B testing to identify optimization opportunities for email campaigns.",
          impact: "Driving data-informed marketing strategies",
          tech: ["A/B Testing", "Segmentation", "Descriptive Statistics", "Marketing Analytics"],
        },
        {
          title: "Product Data Quality Enhancement",
          description: "Collaborated with 10+ suppliers to enhance product data quality, directly influencing customer engagement metrics.",
          impact: "10% increase in retention, 15% boost in click-through rates",
          tech: ["Data Quality", "Vendor Management", "Analysis"],
        },
      ],
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="relative py-20 md:py-32 bg-transparent overflow-hidden"
    >
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-foreground tracking-tight mb-6">
            Experience.
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
            Building production AI and ML systems that deliver measurable business impact.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-black/10 ml-4 md:ml-12 space-y-12 md:space-y-20">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="relative pl-8 md:pl-12"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Timeline Connector */}
              <div className="absolute top-0 left-[-5px] w-2.5 h-2.5 rounded-full bg-blue-500 ring-4 ring-white" />

              <div className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 hover:border-black/10 hover:shadow-lg transition-all duration-300 shadow-sm">
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{exp.role}</h3>
                    <div className="text-lg text-gray-600 font-medium">{exp.company}</div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1">
                    <span className="text-gray-400 font-mono text-sm">{exp.period}</span>
                    <span className="text-gray-500 text-sm">{exp.location}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="space-y-8">
                  {exp.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="relative pl-4 border-l-2 border-blue-500/20">
                      <h4 className="text-foreground font-medium text-lg mb-2">
                        {highlight.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed mb-3">
                        {highlight.description}
                      </p>
                      <div className="flex items-center gap-2 mb-4">
                        <TrendingUp className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-600 tracking-wide">{highlight.impact}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {highlight.tech.map((tech, tIndex) => (
                          <span key={tIndex} className="px-3 py-1 rounded-full bg-gray-50 text-gray-500 text-xs border border-black/5">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
