import { motion } from "motion/react";

export function Background() {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none bg-[#f5f5f7]">
            {/* Top Left - Blue/Purple Glow */}
            <motion.div
                className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-blue-200/40 blur-[100px]"
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, 20, 0],
                    y: [0, 20, 0],
                }}
                transition={{
                    duration: 15, // Slower animation
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ willChange: "transform" }}
            />

            {/* Bottom Right - Purple/Pink Glow */}
            <motion.div
                className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-purple-200/40 blur-[100px]"
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -30, 0],
                    y: [0, -30, 0],
                }}
                transition={{
                    duration: 20, // Slower animation
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ willChange: "transform" }}
            />

            {/* Center - Subtle Warm Glow */}
            <motion.div
                className="absolute top-[30%] left-[30%] w-[50%] h-[50%] rounded-full bg-indigo-100/40 blur-[100px]"
                animate={{
                    scale: [1, 1.05, 1],
                    x: [0, 20, 0],
                }}
                transition={{
                    duration: 18, // Slower animation
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{ willChange: "transform" }}
            />

            {/* Subtle Grid Pattern Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>
    );
}
