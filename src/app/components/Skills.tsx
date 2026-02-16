import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
    Code2,
    Database,
    Brain,
    Cloud,
    Globe,
    Settings,
    Terminal,
    Layers,
    Cpu,
    Bot,
    TrendingUp,
    Activity,
    GitMerge,
    Rocket,
    Search,
    Zap,
    LayoutDashboard,
    Library
} from "lucide-react";
import {
    SiPython, SiPostgresql, SiMongodb, SiRedis, SiDocker, SiKubernetes,
    SiPytorch, SiTensorflow, SiScikitlearn, SiApachespark,
    SiAmazon, SiGit, SiTableau,
    SiJavascript, SiTypescript, SiCplusplus, SiDatabricks, SiTerraform,
    SiGnubash, SiLinux, SiMysql, SiR, SiFastapi, SiMlflow, SiGrafana, SiGithubcopilot,
    SiPlotly, SiDash, SiSpacy, SiNumpy, SiPandas,
} from "react-icons/si";
import { FaMicrosoft, FaChartBar, FaChartLine, FaJava, FaReact } from "react-icons/fa";

export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    // Apple Design System Colors (Dark Mode)
    const colors = {
        blue: "text-[#2997ff]",
        purple: "text-[#bf5af2]",
        pink: "text-[#ff375f]",
        red: "text-[#ff453a]",
        orange: "text-[#ff9f0a]",
        yellow: "text-[#ffd60a]",
        green: "text-[#30d158]",
        teal: "text-[#64d2ff]",
        indigo: "text-[#5e5ce6]",
        gray: "text-[#86868b]",
        white: "text-[#f5f5f7]",
    };

    const skillCategories = [
        {
            title: "Programming Languages",
            icon: Code2,
            description: "Core languages for development and data analysis.",
            skills: [
                { name: "Python", icon: SiPython, color: colors.blue },
                { name: "SQL", icon: Database, color: colors.purple },
                { name: "R", icon: SiR, color: colors.indigo },
                { name: "C++", icon: SiCplusplus, color: colors.blue },
                { name: "JavaScript", icon: SiJavascript, color: colors.yellow },
                { name: "TypeScript", icon: SiTypescript, color: colors.blue },
                { name: "Java", icon: FaJava, color: colors.orange },
                { name: "Bash", icon: SiGnubash, color: colors.gray },
            ]
        },
        {
            title: "Libraries & Frameworks",
            icon: Library,
            description: "Powerful Python ecosystem for AI, ML, and Data Viz.",
            skills: [
                { name: "Pandas", icon: SiPandas, color: colors.indigo },
                { name: "NumPy", icon: SiNumpy, color: colors.blue },
                { name: "Scikit-learn", icon: SiScikitlearn, color: colors.orange },
                { name: "PySpark", icon: SiApachespark, color: colors.orange },
                { name: "TensorFlow", icon: SiTensorflow, color: colors.orange },
                { name: "PyTorch", icon: SiPytorch, color: colors.red },
                { name: "SpaCy", icon: SiSpacy, color: colors.teal },
                { name: "NLTK", icon: Brain, color: colors.gray },
                { name: "Matplotlib", icon: FaChartLine, color: colors.orange },
                { name: "Seaborn", icon: FaChartBar, color: colors.purple },
                { name: "Plotly", icon: SiPlotly, color: colors.green },
                { name: "Dash", icon: SiDash, color: colors.blue },
            ]
        },
        {
            title: "Databases",
            icon: Database,
            description: "Scalable storage solutions for modern applications.",
            skills: [
                { name: "PostgreSQL", icon: SiPostgresql, color: colors.blue },
                { name: "MySQL", icon: SiMysql, color: colors.teal },
                { name: "MongoDB", icon: SiMongodb, color: colors.green },
                { name: "Redis", icon: SiRedis, color: colors.red },
                { name: "Neo4j", icon: Database, color: colors.orange },
                { name: "Qdrant", icon: Database, color: colors.purple },
                { name: "FAISS", icon: Search, color: colors.blue },
                { name: "ChromaDB", icon: Database, color: colors.yellow },
                { name: "AstraDB", icon: Cloud, color: colors.green },
                { name: "pgvector", icon: SiPostgresql, color: colors.blue },
            ]
        },
        {
            title: "Tools & Technologies",
            icon: Settings,
            description: "DevOps, Cloud, and Data Visualization platforms.",
            skills: [
                { name: "Docker", icon: SiDocker, color: colors.blue },
                { name: "Kubernetes", icon: SiKubernetes, color: colors.blue },
                { name: "Azure (ML, DevOps)", icon: FaMicrosoft, color: colors.blue },
                { name: "AWS (Bedrock)", icon: SiAmazon, color: colors.orange },
                { name: "MLflow", icon: SiMlflow, color: colors.blue },
                { name: "FastAPI", icon: SiFastapi, color: colors.teal },
                { name: "vLLM", icon: Zap, color: colors.yellow },
                { name: "Git", icon: SiGit, color: colors.red },
                { name: "Power BI", icon: FaChartBar, color: colors.yellow },
                { name: "Tableau", icon: SiTableau, color: colors.orange },
                { name: "Grafana", icon: SiGrafana, color: colors.orange },
                { name: "CI/CD", icon: Rocket, color: colors.green },
                { name: "GitHub Copilot", icon: SiGithubcopilot, color: colors.white },
                { name: "Power Platform", icon: FaMicrosoft, color: colors.purple },
            ]
        },
        {
            title: "Machine Learning & Analytics",
            icon: TrendingUp,
            description: "Advanced analytics and model lifecycle management.",
            skills: [
                { name: "Predictive Modeling", icon: Activity, color: colors.blue },
                { name: "Deep Learning", icon: Brain, color: colors.purple },
                { name: "Time Series (Prophet/ARIMA)", icon: TrendingUp, color: colors.green },
                { name: "MLOps", icon: Settings, color: colors.orange },
                { name: "Model Stacking", icon: Layers, color: colors.pink },
                { name: "Model Monitoring", icon: Activity, color: colors.teal },
                { name: "Anomaly Detection", icon: Search, color: colors.red },
                { name: "Hyperparameter Tuning", icon: Settings, color: colors.purple },
                { name: "Cross-validation", icon: GitMerge, color: colors.blue },
            ]
        },
        {
            title: "AI & LLM Engineering",
            icon: Bot,
            description: "Generative AI, NLP, and Agentic workflows.",
            skills: [
                { name: "NLP (NER, Transformers)", icon: Database, color: colors.blue },
                { name: "Fine-tuning (LoRA/QLoRA)", icon: Settings, color: colors.purple },
                { name: "RLHF (PPO & DPO)", icon: Brain, color: colors.red },
                { name: "RAG", icon: Search, color: colors.green },
                { name: "LangChain", icon: Layers, color: colors.white },
                { name: "LlamaIndex", icon: Database, color: colors.orange },
                { name: "LangSmith", icon: Settings, color: colors.blue },
                { name: "Recursive Language Modeling", icon: Bot, color: colors.teal },
                { name: "Context Graphs", icon: GitMerge, color: colors.purple },
                { name: "LangGraph", icon: GitMerge, color: colors.pink },
                { name: "AutoGen", icon: Bot, color: colors.teal },
                { name: "Prompt Engineering", icon: Terminal, color: colors.yellow },
                { name: "Inference (vLLM)", icon: Zap, color: colors.red },
            ]
        }
    ];

    return (
        <section
            id="skills"
            ref={ref}
            className="relative py-20 md:py-32 bg-transparent overflow-hidden"
        >
            {/* Background Elements - Subtle Apple Style Glows */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100/50 rounded-full blur-3xl opacity-50" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-5xl md:text-7xl font-semibold text-foreground tracking-tight mb-6">
                        Technical Arsenal.
                    </h2>
                    <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">
                        A curated stack of technologies for building intelligent, scalable systems.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-black/5 rounded-3xl p-8 hover:border-black/10 hover:shadow-lg transition-all duration-300 group flex flex-col h-full shadow-sm"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-12 h-12 rounded-2xl bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
                                    <category.icon className="w-6 h-6 text-foreground" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-semibold text-foreground">{category.title}</h3>
                                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-3 content-start">
                                {category.skills.map((skill, sIndex) => (
                                    <div
                                        key={sIndex}
                                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 border border-black/5 hover:border-black/10 hover:bg-gray-100 transition-all cursor-default"
                                    >
                                        <skill.icon className={`w-4 h-4 ${skill.color}`} />
                                        <span className="text-sm text-gray-600 font-medium">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
