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
          title: "GraphRAG Pipeline with SurrealDB",
          description: "Architected a GraphRAG pipeline using SurrealDB to store multi-modal historical proposal data and Azure OpenAI text-embedding-3 for vector generation.",
          impact: "Reduced manual research time by 65% with consistent <500ms latency",
          tech: ["SurrealDB", "Azure OpenAI", "GraphRAG", "text-embedding-3"],
        },
        {
          title: "Multi-Agent Proposal Drafting Framework",
          description: "Fine-tuned a GPT-OSS-20B orchestrator using LangGraph to drive a multi-agent framework leveraging LangChain and GPT-4 worker agents to automate proposal drafting.",
          impact: "Achieved 81% F1-score and 14% higher accuracy than manual baselines",
          tech: ["LangGraph", "LangChain", "GPT-4", "GPT-OSS-20B", "Multi-Agent"],
        },
        {
          title: "DSPy Declarative Logic Layer",
          description: "Engineered a programmatic logic layer using DSPy to compile declarative model signatures for the hybrid model ensemble, ensuring AI-generated drafts strictly align with proposal requirements.",
          impact: "Increased reasoning precision by 19%",
          tech: ["DSPy", "Hybrid Ensemble", "Declarative AI"],
        },
        {
          title: "Context Graphs & Audit Trails",
          description: "Developed Context Graphs in SurrealDB to capture agentic \"decision traces,\" providing queryable audit trails for the proposal generation process.",
          impact: "Reduced hallucination rates by 22% through historical grounding",
          tech: ["SurrealDB", "Context Graphs", "Agentic AI"],
        },
        {
          title: "OpenMemory Long-Term Agent Memory",
          description: "Integrated OpenMemory as a long-term agent memory layer, enabling salience-based retrieval to reduce redundant prompt tokens while preserving context.",
          impact: "Reduced redundant prompt tokens by 30% while maintaining 96% recall of prior proposal context",
          tech: ["OpenMemory", "Long-Term Memory", "Salience Retrieval"],
        },
        {
          title: "Production LLMOps & CI/CD",
          description: "Streamlined production LLMOps by architecting containerized CI/CD pipelines with Docker and Kubernetes for mission-critical enterprise operations.",
          impact: "Shortened feature deployment cycles by 40% and ensured 99.6% system uptime",
          tech: ["Docker", "Kubernetes", "CI/CD", "LLMOps"],
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
          description: "Constructed ETL pipelines on Azure Databricks using PySpark and SQL to ingest 200K+ records from Azure Data Lake Storage Gen2, implementing a Delta Lake Medallion Architecture.",
          impact: "Enabled structured, versioned features for all downstream models",
          tech: ["Azure Databricks", "PySpark", "SQL", "Delta Lake", "ADLS Gen2"],
        },
        {
          title: "Demand Forecasting Ensemble",
          description: "Developed a demand forecasting ensemble using XGBoost and Bi-LSTM to predict consumer sales trends, optimizing inventory turnover and reducing stock-out overhead.",
          impact: "Improved accuracy by 12% (MAE <0.6)",
          tech: ["XGBoost", "Bi-LSTM", "Ensemble Methods", "Predictive Analytics"],
        },
        {
          title: "Workload Optimization with MILP",
          description: "Designed a workload optimization system pairing Bi-LSTM runtime predictions with MILP to forecast high-compute execution times and minimize idle server intervals.",
          impact: "Delivered 15% ROI",
          tech: ["Bi-LSTM", "MILP", "Optimization", "Resource Scheduling"],
        },
        {
          title: "A/B Testing & Model Validation",
          description: "Executed live A/B testing to compare the Bi-LSTM ensemble against legacy ARIMA and Prophet models, providing empirical validation before production rollout.",
          impact: "Proved 15% lift in operational efficiency",
          tech: ["A/B Testing", "ARIMA", "Prophet", "Statistical Validation"],
        },
        {
          title: "Production MLOps with MLflow",
          description: "Implemented a production MLOps lifecycle using the MLflow Model Registry to automate retraining and versioning, integrating automated Power BI dashboards to monitor real-time model-drift.",
          impact: "Reduced deployment cycles by 35%",
          tech: ["MLflow", "Model Registry", "Power BI", "MLOps"],
        },
        {
          title: "RAG Application for Root Cause Analysis",
          description: "Pioneered a POC RAG application using LangChain, ChromaDB, and Llama 2 to automate Root Cause Analysis of forecasting anomalies, enabling natural language querying of inventory drivers.",
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
