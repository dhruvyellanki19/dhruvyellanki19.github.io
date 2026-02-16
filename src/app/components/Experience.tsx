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
      role: "AI Engineer Intern",
      period: "June 2025 - Present",
      location: "Ellicott City, MD",
      type: "Internship",
      highlights: [
        {
          title: "Automated Proposal Generation System",
          description: "Architected an automated proposal generation system using an LLM-based RAG pipeline by integrating Azure OpenAI text-embedding-3 and pgvector.",
          impact: "Reduced document retrieval time by 65% while maintaining a 500ms latency",
          tech: ["Azure OpenAI", "pgvector", "RAG", "LLM"],
        },
        {
          title: "Multi-Agent Chain-of-Thought Framework",
          description: "Orchestrated a multi-agent Chain-of-Thought framework to drive the proposal system by fine-tuning a GPT-OSS-20B orchestrator to coordinate GPT-4 agents.",
          impact: "Zchieved 79% precision and 74% recall in compliance detection",
          tech: ["GPT-4", "GPT-OSS-20B", "Multi-Agent", "Fine-tuning"],
        },
        {
          title: "Production LLMOps Workflows",
          description: "Streamlined production LLMOps workflows for the proposal platform using Docker and Kubernetes to develop containerized CI/CD pipelines.",
          impact: "Shortened release cycles by 40% and ensured 95% system uptime",
          tech: ["Docker", "Kubernetes", "CI/CD", "LLMOps"],
        },
        {
          title: "High-Throughput Document Processing",
          description: "Optimized document processing throughput by 35% for the proposal system by implementing Redis semantic caching and distributed processing to integrate unstructured data in real-time.",
          impact: "Optimized throughput by 35%",
          tech: ["Redis", "Distributed Systems", "Real-time Processing"],
        },
      ],
    },
    {
      company: "Watzmann Consulting",
      role: "Data Analyst – Predictive Analytics & ML",
      period: "June 2023 - June 2024",
      location: "Hyderabad, India",
      type: "Full-time",
      highlights: [
        {
          title: "Demand Forecasting Ensemble",
          description: "Developed a high-performance demand forecasting ensemble using XGBoost and Bi-LSTM models for 200K+ records.",
          impact: "Improved sales prediction accuracy by 12% (MAE < 0.6) to optimize inventory levels and reduce staffing overhead",
          tech: ["XGBoost", "Bi-LSTM", "Ensemble Methods", "Predictive Analytics"],
        },
        {
          title: "Workload Optimization System",
          description: "Architected a workload optimization system that paired Bi-LSTM runtime forecasts with Mixed-Integer Linear Programming (MILP).",
          impact: "Reduced idle compute time by 18% and significantly cut infrastructure costs",
          tech: ["Bi-LSTM", "MILP", "Optimization", "Resource Scheduling"],
        },
        {
          title: "End-to-End MLOps Pipeline",
          description: "Operationalized end-to-end model retraining and deployment by implementing MLOps pipelines with MLflow and Azure Machine Learning.",
          impact: "Boosted model reliability and operational efficiency by 15% using real-time Power BI monitoring",
          tech: ["MLflow", "Azure ML", "MLOps", "Power BI"],
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
          title: "Flight Delay Prediction Models",
          description: "Developed and fine-tuned flight delay prediction models using PyTorch, XGBoost, and clustering techniques.",
          impact: "12% improvement in simulation accuracy, 7.5-minute reduction in delays",
          tech: ["PyTorch", "XGBoost", "Clustering", "Predictive Modeling"],
        },
        {
          title: "Real-Time Event Stream Pipeline",
          description: "Architected a real-time pipeline using RabbitMQ and PostGIS to stream and process 10,000+ flight events per second, reducing false positives in congestion alerts.",
          impact: "Improved system throughput, reduced false positives",
          tech: ["RabbitMQ", "PostGIS", "Real-time Streaming", "Data Engineering"],
        },
        {
          title: "Operational Dashboards",
          description: "Created Tableau dashboards to track flight metrics and congestion patterns, enhancing data accessibility for stakeholders.",
          impact: "Reduced manual reporting time by 30%, increased accessibility by 25%",
          tech: ["Tableau", "Data Visualization", "Business Intelligence"],
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
