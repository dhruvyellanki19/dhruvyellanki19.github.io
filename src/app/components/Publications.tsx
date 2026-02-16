import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { BookOpen, ExternalLink, Award } from "lucide-react";

export function Publications() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const publications = [
        {
            title: "Speech Emotion Recognition using LSTM Model",
            venue: "Research Publication",
            year: "2023",
            description: "Deep learning approach for recognizing emotions from speech using LSTM networks",
            link: "#",
            type: "Research Paper"
        },
    ];

    return (
        <section
            id="publications"
            ref={ref}
            className="relative py-24 bg-transparent overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem]" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl sm:text-5xl mb-4 font-semibold text-foreground">
                        Publications
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4" />
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Academic research and publications in AI and machine learning
                    </p>
                </motion.div>

                {/* Publications Grid */}
                <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {publications.map((pub, index) => (
                        <motion.div
                            key={index}
                            className="bg-white border border-black/5 rounded-2xl p-8 hover:shadow-xl hover:border-black/10 transition-all group cursor-pointer shadow-sm"
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            onClick={() => window.open(pub.link, "_blank")}
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center border border-purple-100">
                                        <BookOpen className="w-6 h-6 text-purple-600" />
                                    </div>
                                    <div>
                                        <span className="text-xs px-2 py-1 rounded-md bg-purple-50 text-purple-600 border border-purple-100 font-medium">
                                            {pub.type}
                                        </span>
                                    </div>
                                </div>
                                <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-black transition-colors" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl text-foreground font-semibold mb-3 group-hover:text-purple-600 transition-colors">
                                {pub.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                {pub.description}
                            </p>

                            {/* Meta */}
                            <div className="flex items-center gap-2 text-sm text-gray-500">
                                <Award className="w-4 h-4" />
                                <span>{pub.venue}</span>
                                <span>•</span>
                                <span>{pub.year}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Note for more publications */}
                <motion.div
                    className="text-center mt-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <p className="text-gray-500 text-sm">
                        More publications coming soon...
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
