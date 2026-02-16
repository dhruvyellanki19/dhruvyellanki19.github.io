import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, BookOpen, Users } from "lucide-react";
import { Badge } from "./ui/badge";

export function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const education = [
        {
            school: "University of Maryland",
            degree: "Master of Science in Data Science",
            period: "August 2024 - May 2026",
            location: "College Park, MD, USA",
            coursework: [
                "Probability and Statistics",
                "Principles of Machine Learning",
                "Principles of Data Science",
                "Big Data Systems",
                "Algorithms",
                "Data Modeling and Representation",
                "Natural Language Processing",
                "Deep Learning",
                "Communication in Data Science",
                "Advanced Machine Learning",
            ],
            activities: [],
        },
        {
            school: "SRM Institute of Science and Technology",
            degree: "Bachelor of Technology in Computer Science and Business Systems",
            period: "June 2019 - May 2024",
            location: "Chennai, TN, India",
            coursework: [
                "Data Mining",
                "Machine Learning",
                "Natural Language Processing",
                "Artificial Intelligence",
                "Database Management System",
                "Statistical Modelling",
                "Computational Statistics (R Language)",
                "Data Structures and Algorithms",
                "Operation Research",
                "Object Oriented Programming",
                "Operations Systems",
                "IT Project Management",
            ],
            activities: [
                "Led the AI and Data Science Club, organizing 10+ workshops and fostering a collaborative environment. Delivered speeches, trained 10+ students on resume building and job search strategies, and provided mentorship in data science.",
            ],
        },
    ];

    return (
        <section
            id="education"
            ref={ref}
            className="relative py-24 bg-transparent overflow-hidden"
        >
            <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-6xl font-semibold text-foreground tracking-tight mb-6">
                        Education.
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light">
                        Academic foundation and specialized coursework.
                    </p>
                </motion.div>

                {/* Education Cards */}
                <div className="space-y-12">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                            className="bg-white rounded-3xl p-8 md:p-10 border border-black/5 hover:border-black/10 hover:shadow-lg transition-all duration-300 shadow-sm relative overflow-hidden"
                        >
                            {/* Decorative Background Icon */}
                            <GraduationCap className="absolute -top-6 -right-6 w-32 h-32 text-black/5 rotate-12" />

                            <div className="relative z-10">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-foreground mb-1">
                                            {edu.school}
                                        </h3>
                                        <div className="text-lg text-blue-600 font-medium">
                                            {edu.degree}
                                        </div>
                                    </div>
                                    <div className="flex flex-col md:items-end gap-2 text-sm text-gray-500">
                                        <div className="flex items-center gap-1.5">
                                            <Calendar className="w-4 h-4" />
                                            {edu.period}
                                        </div>
                                        <div className="flex items-center gap-1.5">
                                            <MapPin className="w-4 h-4" />
                                            {edu.location}
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    {/* Coursework */}
                                    <div>
                                        <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                                            <BookOpen className="w-4 h-4" />
                                            Relevant Coursework
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {edu.coursework.map((course, cIndex) => (
                                                <Badge
                                                    key={cIndex}
                                                    variant="secondary"
                                                    className="bg-gray-100/80 text-gray-600 hover:bg-gray-200 border-transparent font-normal"
                                                >
                                                    {course}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Activities */}
                                    {edu.activities.length > 0 && (
                                        <div>
                                            <h4 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gray-500 mb-3">
                                                <Users className="w-4 h-4" />
                                                Activities & Societies
                                            </h4>
                                            <ul className="list-disc list-inside space-y-1 text-gray-600 leading-relaxed">
                                                {edu.activities.map((activity, aIndex) => (
                                                    <li key={aIndex}>{activity}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
