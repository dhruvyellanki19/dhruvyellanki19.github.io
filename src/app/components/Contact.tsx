import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Sparkles, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function Contact() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [isSending, setIsSending] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSending(true);

        try {
            // Use FormSubmit.co for direct email without backend
            const response = await fetch("https://formsubmit.co/ajax/saidhruvyellanki@gmail.com", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    name: formState.name,
                    email: formState.email,
                    message: formState.message,
                    _subject: `New Message from Portfolio (Contact Layout): ${formState.name}`
                }),
            });

            const result = await response.json();

            if (!response.ok) throw new Error(result.message || "Failed");

            toast.success("Message sent successfully!");
            setFormState({ name: "", email: "", message: "" });

        } catch (error) {
            console.error("Email failed:", error);
            toast.error("Something went wrong. Please try again.");
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section id="contact" className="py-20 bg-white relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-blue-50 to-transparent opacity-50 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 text-blue-600 text-sm font-medium mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Get in Touch</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900">
                        Let's build something <span className="text-blue-600">extraordinary.</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Whether you have a project in mind, a question about AI, or just want to connect, I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-gray-50 p-8 rounded-3xl border border-gray-100">
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <a href="mailto:saidhruvyellanki@gmail.com" className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <Mail className="w-6 h-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
                                        <span className="text-lg font-medium text-gray-900">saidhruvyellanki@gmail.com</span>
                                    </div>
                                </a>

                                <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-white transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                        <MapPin className="w-6 h-6 text-indigo-600" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-1">Location</label>
                                        <span className="text-lg font-medium text-gray-900">United States</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16" />
                            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full blur-xl -ml-12 -mb-12" />

                            <h3 className="text-xl font-semibold mb-3 relative z-10">Use the AI Assistant</h3>
                            <p className="text-blue-100 mb-6 relative z-10">
                                Need a quick answer? Chat with my AI assistant in the bottom right corner. It can answer questions about my experience and skills instantly.
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 ml-1">Name</label>
                                <Input
                                    required
                                    placeholder="John Doe"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 ml-1">Email</label>
                                <Input
                                    required
                                    type="email"
                                    placeholder="john@example.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    className="h-12 bg-gray-50 border-gray-200 focus:bg-white transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
                                <Textarea
                                    required
                                    placeholder="Tell me about your project..."
                                    value={formState.message}
                                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                    className="min-h-[160px] bg-gray-50 border-gray-200 focus:bg-white transition-colors resize-none"
                                />
                            </div>

                            <Button
                                type="submit"
                                disabled={isSending}
                                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-base font-medium shadow-lg shadow-blue-600/20 transition-all hover:shadow-blue-600/30 hover:-translate-y-0.5"
                            >
                                {isSending ? (
                                    <span className="flex items-center gap-2">
                                        <Sparkles className="w-5 h-5 animate-spin" /> Sending...
                                    </span>
                                ) : (
                                    <span className="flex items-center gap-2">
                                        Send Message <Send className="w-4 h-4" />
                                    </span>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
