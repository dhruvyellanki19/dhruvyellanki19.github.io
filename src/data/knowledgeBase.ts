export const knowledgeBase = {
    identity: {
        name: "Dhruv's Assistant",
        role: "AI Portfolio Assistant",
        purpose: "To answer questions about Sai Dhruv Yellanki's professional background, skills, and projects, and to facilitate contact.",
        creator: "Sai Dhruv Yellanki"
    },
    profile: {
        name: "Sai Dhruv Yellanki",
        title: "AI Engineer & Data Scientist",
        education: "Master's in Data Science from University of Maryland (UMD), Baltimore County (3.81/4.0 GPA). Bachelor's in Computer Science.",
        location: "Baltimore, MD / Washington DC Metro Area",
        email: "saidhruvyellanki@gmail.com",
    },
    experience: [
        {
            company: "Aurelius Tech & Talent Solutions",
            role: "AI Engineer",
            period: "June 2025 - Present",
            details: "Architected a GraphRAG pipeline using SurrealDB and Azure OpenAI text-embedding-3, reducing manual research time by 65% with <500ms latency. Fine-tuned a GPT-OSS-20B orchestrator with LangGraph driving GPT-4 multi-agent framework, achieving 81% F1-score. Engineered a DSPy declarative logic layer for hybrid model ensemble, increasing reasoning precision by 19%. Developed Context Graphs in SurrealDB for agentic audit trails, reducing hallucinations by 22%. Integrated OpenMemory for salience-based retrieval (96% recall, 30% fewer redundant tokens). Deployed containerized CI/CD with Docker and Kubernetes, ensuring 99.6% uptime."
        },
        {
            company: "Watzmann Consulting",
            role: "Data Analyst – Predictive Analytics & Machine Learning",
            period: "June 2023 - June 2024",
            details: "Built ETL pipelines on Azure Databricks with PySpark and Delta Lake Medallion Architecture for 200K+ records. Developed XGBoost + Bi-LSTM demand forecasting ensemble (MAE <0.6, 12% accuracy improvement). Designed MILP + Bi-LSTM workload optimization delivering 15% ROI. Ran A/B tests against ARIMA and Prophet baselines proving 15% operational lift. Implemented MLflow MLOps lifecycle and Power BI model-drift dashboards, cutting deployment cycles by 35%. Built a POC RAG app with LangChain, ChromaDB, and Llama 2 for root cause analysis, reducing investigation time by 45%."
        },
        {
            company: "Ramphal Technologies",
            role: "Data Science Intern",
            period: "December 2022 - May 2023",
            details: "Spearheaded a real-time RabbitMQ + PostgreSQL event pipeline ingesting 10,000+ telemetry events per second streamed to Tableau for sub-second monitoring. Trained an LSTM + XGBoost hybrid ensemble to forecast application latency, reducing request delay by 7.5ms. Built automated Tableau health-drift dashboards, cutting reporting latency by 30%."
        }
    ],
    projects: [
        {
            name: "Enterprise RAG System",
            description: "Built a multi-agent retrieval system handling 100K+ queries daily with 94% accuracy using LangChain and Pinecone."
        },
        {
            name: "RLHF Fine-tuning Framework",
            description: "Developed an end-to-end pipeline for Reinforcement Learning from Human Feedback, achieving 30% performance improvement on specific domain tasks."
        },
        {
            name: "Multi-Agent Orchestration Platform",
            description: "Orchestrated 12 specialized AI agents to solve complex workflows with an 89% success rate."
        },
        {
            name: "Healthcare Predictive Analytics",
            description: "Created ML models for patient outcome prediction, deployed in a HIPAA-compliant environment."
        }
    ],
    skills: {
        languages: ["Python", "SQL", "JavaScript", "TypeScript", "C++"],
        ai_ml: ["PyTorch", "TensorFlow", "Scikit-learn", "LangChain", "Hugging Face", "OpenAI API", "LlamaIndex"],
        cloud_devops: ["AWS", "Azure", "Docker", "Kubernetes", "CI/CD", "Git"],
        data: ["Pandas", "NumPy", "Spark", "PostgreSQL", "MongoDB", "Pinecone"]
    },
    socials: {
        linkedin: "linkedin.com/in/dhruvyellanki",
        github: "github.com/dhruvyellanki",
        portfolio: "dhruvyellanki.com"
    }
};
