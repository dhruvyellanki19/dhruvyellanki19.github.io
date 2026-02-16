import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle, X, Send, Sparkles, Mail, Briefcase, Code, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

import { getSmartResponse, determineIntent } from "../../utils/chatLogic";
import { toast } from "sonner";

interface Message {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
  type?: "text" | "options";
  options?: string[];
}

export function AIChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi there! I'm Dhruv's Assistant. I can answer questions about his work, or help you send him a message directly. How can I help?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [view, setView] = useState<"chat" | "email">("chat");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Email Form State
  const [emailForm, setEmailForm] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, view]);

  const handleSend = async (text: string = inputValue) => {
    if (!text.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: text,
      sender: "user",
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Determine Intent
    const intent = determineIntent(text);

    if (intent === "EMAIL_REQUEST") {
      setTimeout(() => {
        setIsTyping(false);
        setMessages((prev) => [
          ...prev,
          {
            id: Date.now().toString(),
            text: "Sure! I can help you send an email to Dhruv. Please fill out the form below.",
            sender: "bot",
            timestamp: new Date(),
          },
        ]);
        setView("email");
      }, 800);
      return;
    }

    // Smart Response
    setTimeout(() => {
      const responseText = getSmartResponse(text);
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 500);
  };

  const sendEmail = async (e: React.FormEvent) => {
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
          name: emailForm.name,
          email: emailForm.email,
          message: emailForm.message,
          _subject: `New Message from Portfolio (Assistant): ${emailForm.name}`
        }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message || 'Failed to send');

      toast.success("Message sent successfully!");
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        text: "I've sent your message to Dhruv! He'll get back to you at " + emailForm.email + " soon.",
        sender: "bot",
        timestamp: new Date()
      }]);

      setEmailForm({ name: "", email: "", message: "" });
      setView("chat");

    } catch (error) {
      console.error("Email failed:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  const predefinedQuestions = [
    { icon: Briefcase, text: "Work Experience" },
    { icon: Code, text: "Tech Stack" },
    { icon: GraduationCap, text: "Education" },
    { icon: Mail, text: "Send Email" },
  ];

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-xl border-2 border-white/20"
        >
          {isOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />}
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-2rem)] h-[600px] bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col font-sans"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-5 flex items-center gap-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/5 opacity-50" />
              <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10 backdrop-blur-sm relative z-10">
                <Sparkles className="w-6 h-6 text-blue-300" />
              </div>
              <div className="flex-1 relative z-10">
                <h3 className="text-white font-semibold text-lg">Dhruv's Assistant</h3>
                <p className="text-xs text-gray-300 flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Online & Ready to help
                </p>
              </div>
              {view === "email" && (
                <Button variant="ghost" size="icon" onClick={() => setView("chat")} className="text-white/70 hover:text-white hover:bg-white/10 relative z-10">
                  <X className="w-5 h-5" />
                </Button>
              )}
            </div>

            {/* Chat View */}
            {view === "chat" ? (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50/50 scroll-smooth">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {message.sender === "bot" && (
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mr-2 border border-blue-200 shadow-sm shrink-0">
                          <Sparkles className="w-4 h-4 text-blue-600" />
                        </div>
                      )}

                      <div
                        className={`max-w-[80%] rounded-2xl px-5 py-3 shadow-sm text-sm leading-relaxed ${message.sender === "user"
                          ? "bg-blue-600 text-white rounded-br-none"
                          : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                          }`}
                      >
                        {message.text}
                      </div>
                    </motion.div>
                  ))}

                  {isTyping && (
                    <motion.div className="flex justify-start items-center gap-2 pl-2" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <Sparkles className="w-4 h-4 text-gray-400" />
                      </div>
                      <div className="bg-gray-100 rounded-full px-4 py-2 flex gap-1">
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
                        <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"></span>
                      </div>
                    </motion.div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Suggestions / Input */}
                <div className="p-4 bg-white border-t border-gray-100">
                  <div className="flex gap-2 overflow-x-auto pb-3 no-scrollbar mb-2">
                    {predefinedQuestions.map((q, i) => (
                      <button
                        key={i}
                        onClick={() => handleSend(q.text)}
                        className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-full text-xs font-medium text-gray-600 transition-colors whitespace-nowrap"
                      >
                        <q.icon className="w-3 h-3" />
                        {q.text}
                      </button>
                    ))}
                  </div>
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      handleSend();
                    }}
                    className="flex gap-2 items-center"
                  >
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Ask anything..."
                      className="flex-1 bg-gray-50 border-gray-200 focus:ring-blue-500 rounded-full px-4 py-5"
                    />
                    <Button
                      type="submit"
                      size="icon"
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full h-10 w-10 shrink-0 shadow-md"
                      disabled={!inputValue.trim()}
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </>
            ) : (
              // Email Form View
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex-1 flex flex-col p-6 bg-gray-50/50 overflow-y-auto"
              >
                <div className="mb-6 text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 className="text-gray-900 font-semibold">Send a Message</h4>
                  <p className="text-sm text-gray-500">I'll send this directly to Dhruv's inbox.</p>
                </div>

                <form onSubmit={sendEmail} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-700 ml-1">Your Name</label>
                    <Input
                      required
                      placeholder="John Doe"
                      value={emailForm.name}
                      onChange={e => setEmailForm({ ...emailForm, name: e.target.value })}
                      className="bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-700 ml-1">Your Email</label>
                    <Input
                      required
                      type="email"
                      placeholder="john@example.com"
                      value={emailForm.email}
                      onChange={e => setEmailForm({ ...emailForm, email: e.target.value })}
                      className="bg-white"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-medium text-gray-700 ml-1">Message</label>
                    <Textarea
                      required
                      placeholder="Hi Dhruv, I'd like to reach out about..."
                      value={emailForm.message}
                      onChange={e => setEmailForm({ ...emailForm, message: e.target.value })}
                      className="bg-white min-h-[120px]"
                    />
                  </div>

                  <div className="pt-2 flex gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1"
                      onClick={() => setView("chat")}
                    >
                      Cancel
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                      disabled={isSending}
                    >
                      {isSending ? (
                        <span className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 animate-spin" /> Sending...
                        </span>
                      ) : "Send Message"}
                    </Button>
                  </div>
                </form>
              </motion.div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
