import { knowledgeBase } from "../data/knowledgeBase";

type Intent = "GREETING" | "CONTACT" | "EXPERIENCE" | "PROJECTS" | "SKILLS" | "EDUCATION" | "UNKNOWN" | "EMAIL_REQUEST";

export const determineIntent = (input: string): Intent => {
    const lowerInput = input.toLowerCase();

    // Email/Contact Request - High Priority
    if (
        lowerInput.includes("send mail") ||
        lowerInput.includes("send email") ||
        lowerInput.includes("write an email") ||
        (lowerInput.includes("contact") && lowerInput.includes("him"))
    ) {
        return "EMAIL_REQUEST";
    }

    // General Contact Info
    if (lowerInput.includes("email") || lowerInput.includes("contact") || lowerInput.includes("reach") || lowerInput.includes("linkedin") || lowerInput.includes("github")) return "CONTACT";

    // Greetings
    if (lowerInput.match(/\b(hi|hello|hey|greetings|hola)\b/)) return "GREETING";

    // Categories
    if (lowerInput.includes("experience") || lowerInput.includes("work") || lowerInput.includes("job") || lowerInput.includes("intern")) return "EXPERIENCE";
    if (lowerInput.includes("project") || lowerInput.includes("built") || lowerInput.includes("create") || lowerInput.includes("portfolio")) return "PROJECTS";
    if (lowerInput.includes("skill") || lowerInput.includes("tech") || lowerInput.includes("stack") || lowerInput.includes("program") || lowerInput.includes("language")) return "SKILLS";
    if (lowerInput.includes("education") || lowerInput.includes("study") || lowerInput.includes("studing") || lowerInput.includes("degree") || lowerInput.includes("school") || lowerInput.includes("college") || lowerInput.includes("university") || lowerInput.includes("master") || lowerInput.includes("gpa")) return "EDUCATION";

    return "UNKNOWN";
};

export const getSmartResponse = (input: string): string => {
    const intent = determineIntent(input);
    const lowerInput = input.toLowerCase();

    switch (intent) {
        case "GREETING":
            return "Hello! I'm Dhruv's Assistant. I can tell you about his work, skills, or even help you send him an email directly. How can I help?";

        case "CONTACT":
            return `You can reach Dhruv at ${knowledgeBase.profile.email}. He is ${knowledgeBase.profile.availability}. Would you like me to send him an email for you? Just say "send email".`;

        case "EMAIL_REQUEST":
            return "I can send an email to Dhruv for you! Please enter your details in the form below.";

        case "EXPERIENCE":
            // Check for specific companies
            if (lowerInput.includes("aurelius")) {
                const aurelius = knowledgeBase.experience.find(e => e.company === "Aurelius");
                return `At Aurelius, Dhruv is an ${aurelius?.role}. He is ${aurelius?.details}`;
            }
            return `Dhruv has ${knowledgeBase.experience[1].details} Currently, he is an ${knowledgeBase.experience[0].role} at ${knowledgeBase.experience[0].company}.`;

        case "PROJECTS":
            if (lowerInput.includes("rag")) return knowledgeBase.projects.find(p => p.name.includes("RAG"))?.description || "";
            if (lowerInput.includes("agent")) return knowledgeBase.projects.find(p => p.name.includes("Agent"))?.description || "";
            return `Dhruv has built several impactful projects, including:
1. ${knowledgeBase.projects[0].name}: ${knowledgeBase.projects[0].description}
2. ${knowledgeBase.projects[2].name}: ${knowledgeBase.projects[2].description}
Would you like to know more about a specific one?`;

        case "SKILLS":
            if (lowerInput.includes("python") || lowerInput.includes("coding")) return `Dhruv is proficient in ${knowledgeBase.skills.languages.join(", ")}.`;
            if (lowerInput.includes("ai") || lowerInput.includes("ml")) return `In AI/ML, he uses ${knowledgeBase.skills.ai_ml.join(", ")}.`;
            if (lowerInput.includes("cloud") || lowerInput.includes("deploy")) return `For deployment, he specializes in ${knowledgeBase.skills.cloud_devops.join(", ")}.`;
            return `Dhruv's technical stack includes:
- Languages: ${knowledgeBase.skills.languages.slice(0, 3).join(", ")}
- AI/ML: ${knowledgeBase.skills.ai_ml.slice(0, 4).join(", ")}
- Cloud: ${knowledgeBase.skills.cloud_devops.join(", ")}
He specializes in building scalable AI systems.`;

        case "EDUCATION":
            return `${knowledgeBase.profile.education} He is based in ${knowledgeBase.profile.location}.`;

        case "UNKNOWN":
        default:
            // Simple fallback matching
            if (lowerInput.includes("who are you")) return knowledgeBase.identity.purpose;
            if (lowerInput.includes("location") || lowerInput.includes("where")) return `Dhruv is currently based in ${knowledgeBase.profile.location}.`;

            return "That's a great question. I am trained on Dhruv's professional background. You can ask about his experience, specific projects like his RAG system, his tech stack, or simple say 'send email' to contact him.";
    }
};
