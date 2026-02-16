# 🎨 Customization Guide

This guide helps you personalize the portfolio with your own information, branding, and content.

## 🚀 Quick Start Customization

### 1. Update Personal Information

#### Hero Section (`/src/app/components/Hero.tsx`)

```tsx
// Line 48: Update your name
<span className="block text-white">Your Full Name</span>

// Line 53-56: Update your specialties
Specializing in <span className="text-blue-400">Your Specialty 1</span>,{" "}
<span className="text-purple-400">Your Specialty 2</span>,{" "}
<span className="text-pink-400">Your Specialty 3</span>

// Lines 62-66: Update metrics
const metrics = [
  { value: "X+", label: "Years Experience" },
  { value: "Y+", label: "Projects Completed" },
  { value: "Z", label: "Industries Served" },
];
```

#### Navigation (`/src/app/components/Navigation.tsx`)

```tsx
// Line 51: Update logo/initials
<span className="text-xl font-bold...">
  YourInitials
</span>

// Line 92: Update resume filename
link.download = "Your_Name_Resume.pdf";

// Lines 101-107: Update social links
onClick={() => window.open("https://github.com/yourusername", "_blank")}
onClick={() => window.open("https://linkedin.com/in/yourusername", "_blank")}
```

### 2. Update About Section

#### About Component (`/src/app/components/About.tsx`)

Replace the entire story section with your own narrative:

```tsx
// Lines 52-75: Update your personal story
<p className="text-lg leading-relaxed">
  Your introduction here...
</p>
<p className="text-lg leading-relaxed">
  Your experience summary...
</p>
```

Update highlights (lines 14-41):
```tsx
const highlights = [
  {
    icon: YourIcon,
    title: "Your Strength 1",
    description: "Your description...",
  },
  // Add more...
];
```

### 3. Update Experience

#### Experience Component (`/src/app/components/Experience.tsx`)

Replace the experiences array (starting line 12):

```tsx
const experiences = [
  {
    company: "Your Company Name",
    role: "Your Role",
    period: "Start - End",
    location: "City, State",
    type: "Full-time",
    highlights: [
      {
        title: "Project/Achievement Name",
        description: "What you built and how...",
        impact: "Quantified result",
        tech: ["Tool1", "Tool2", "Tool3"],
      },
      // Add more highlights...
    ],
  },
  // Add more experiences...
];
```

**Tips for Writing Experience**:
- Use action verbs: Built, Architected, Designed, Implemented
- Include metrics: "Increased X by Y%", "Processed Z requests/day"
- Show business impact: cost savings, efficiency gains, revenue growth
- List relevant tech stack for each project

### 4. Update Projects

#### Projects Component (`/src/app/components/Projects.tsx`)

Replace projects array (starting line 11):

```tsx
const projects = [
  {
    category: "llm", // or "mlops", "ml", "data", "nlp"
    icon: YourIcon,
    title: "Project Name",
    tagline: "One-line description",
    description: "Detailed description of the problem and solution...",
    tech: ["Tech1", "Tech2", "Tech3"],
    metrics: [
      { label: "Metric Name", value: "Value" },
      { label: "Metric Name", value: "Value" },
      { label: "Metric Name", value: "Value" },
    ],
    highlights: [
      "Key achievement 1",
      "Key achievement 2",
      "Technical highlight 3",
      "Business impact 4",
    ],
    github: "https://github.com/yourusername/project",
    demo: "https://demo.yourproject.com", // Optional
  },
  // Add more projects...
];
```

**Project Categories**:
- `llm`: LLM & RAG projects
- `mlops`: MLOps & deployment
- `ml`: Machine learning & analytics
- `data`: Data engineering
- `nlp`: NLP projects

### 5. Update Skills

#### Skills Component (`/src/app/components/Skills.tsx`)

Update skill categories (starting line 10):

```tsx
const skillCategories = [
  {
    icon: IconName,
    title: "Skill Category Name",
    color: "from-blue-500 to-cyan-500", // Gradient colors
    skills: [
      { 
        name: "Skill Name", 
        level: 90, // 0-100
        tools: "Tool1, Tool2, Tool3" 
      },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

Update programming languages (line 87):
```tsx
const programmingLanguages = [
  { name: "Language", level: 95 },
  // Add more...
];
```

### 6. Update Blog/Writing

#### Blog Component (`/src/app/components/Blog.tsx`)

Replace posts array (starting line 11):

```tsx
const posts = [
  {
    title: "Article Title",
    excerpt: "Brief description of the article...",
    date: "YYYY-MM-DD",
    readTime: "X min read",
    category: "Category Name",
    tags: ["Tag1", "Tag2", "Tag3"],
    link: "https://medium.com/@yourusername/article",
  },
  // Add more posts...
];
```

Update publications (line 62):
```tsx
const publications = [
  {
    title: "Publication Title",
    venue: "Conference/Journal Name",
    year: "2024",
    link: "https://link-to-publication.com",
  },
  // Add more...
];
```

### 7. Update Contact Information

#### Contact Component (`/src/app/components/Contact.tsx`)

Update contact links (starting line 18):

```tsx
const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    link: "https://linkedin.com/in/yourusername",
    color: "from-blue-600 to-blue-400",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "github.com/yourusername",
    link: "https://github.com/yourusername",
    color: "from-gray-700 to-gray-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Your City, State",
    link: null,
    color: "from-purple-500 to-pink-500",
  },
];
```

### 8. Update AI Chatbot Knowledge Base

#### AI Chatbot Component (`/src/app/components/AIChatbot.tsx`)

Update knowledge base (starting line 35):

```tsx
const knowledgeBase = {
  experience: [
    "Your experience summary 1",
    "Your experience summary 2",
  ],
  skills: [
    "Your skills summary 1",
    "Your skills summary 2",
  ],
  projects: [
    "Project 1: Description and impact",
    "Project 2: Description and impact",
  ],
  education: [
    "Your education background",
  ],
  contact: [
    "How to reach you",
    "What opportunities you're open to",
  ],
};
```

### 9. Add Your Resume PDF

1. Create/export your resume as PDF
2. Name it: `Your_Name_Resume.pdf`
3. Place it in `/public/resume.pdf`
4. Update download filename in Navigation and Contact components

## 🎨 Branding & Design Customization

### Color Scheme

Update gradient colors throughout components:

**Current scheme**: Blue-Purple-Pink

To change to a different scheme, find and replace:
```tsx
// Replace these classes throughout components:
from-blue-500 to-purple-500
from-blue-400 to-purple-400
from-purple-500 to-pink-500

// With your preferred colors:
from-green-500 to-teal-500
from-orange-500 to-red-500
from-indigo-500 to-violet-500
```

**Popular color combinations**:
- Tech: `blue → cyan`
- Creative: `purple → pink`
- Energetic: `orange → red`
- Nature: `green → teal`
- Professional: `blue → indigo`

### Typography

Update font in `/src/styles/fonts.css`:

```css
/* Replace Inter with your preferred font */
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;500;600;700;800;900&display=swap');

* {
  font-family: 'YourFont', -apple-system, ...;
}
```

**Recommended fonts**:
- Modern: Inter, Poppins, DM Sans
- Professional: Roboto, Open Sans, Lato
- Elegant: Playfair Display, Merriweather, Crimson Text
- Tech: Fira Code, JetBrains Mono, Source Code Pro

### Animations

Adjust animation speeds in components:

```tsx
// Slower animations
transition={{ duration: 1.0 }} // Default: 0.6

// Faster animations
transition={{ duration: 0.3 }} // Default: 0.6

// Remove animations
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
// Change to:
// (no initial/animate props)
```

### Background Effects

Customize gradient orbs in Hero and other sections:

```tsx
// Adjust size
w-96 h-96 // Default: 96 (384px)
w-64 h-64 // Smaller
w-128 h-128 // Larger (if you define this size)

// Adjust colors
bg-blue-500/20 // Current
bg-purple-500/30 // Different color/opacity

// Adjust blur
blur-3xl // Current
blur-xl // Less blur
blur-[100px] // Custom blur
```

## 📝 Content Writing Tips

### Experience Section
```
Format:
[Action Verb] + [What you built] + [How/Technology] + [Impact/Result]

Good Example:
"Architected production RAG system using LangChain and GPT-4, processing 100K+ daily queries with 94% accuracy"

Avoid:
"Worked on RAG system"
```

### Project Descriptions
```
Structure:
1. Problem: What challenge were you solving?
2. Solution: What did you build?
3. Technical: What technologies/approaches?
4. Impact: What was the result?

Good Example:
"Built real-time fraud detection system to identify suspicious transactions in financial networks. Implemented ensemble ML models using XGBoost and Isolation Forest, deployed on AWS with Kafka streaming. Detected $5M+ in fraudulent activity with 98% precision."
```

### Metrics to Include
- Scale: "100K+ queries", "10M records", "1000 users"
- Performance: "94% accuracy", "sub-second latency", "99.9% uptime"
- Business Impact: "$2M saved", "30% reduction", "2x faster"
- Efficiency: "Reduced time from weeks to hours"

## 🖼️ Adding Images

### Project Screenshots

1. Add images to `/public/images/`:
```
/public
  /images
    project1.png
    project2.png
```

2. Import in component:
```tsx
<img src="/images/project1.png" alt="Project name" />
```

### Profile Photo

Add to Hero or About section:

```tsx
<img 
  src="/images/profile.jpg" 
  alt="Your name"
  className="w-48 h-48 rounded-full border-4 border-blue-500"
/>
```

## 🔧 Advanced Customization

### Add New Section

1. Create component:
```tsx
// /src/app/components/NewSection.tsx
export function NewSection() {
  return (
    <section id="newsection" className="py-24 bg-black">
      {/* Your content */}
    </section>
  );
}
```

2. Import in App.tsx:
```tsx
import { NewSection } from "./components/NewSection";
```

3. Add to main:
```tsx
<NewSection />
```

4. Add to navigation:
```tsx
const navItems = [
  // existing items...
  { id: "newsection", label: "New Section" },
];
```

### Modify Layout

Change section widths:
```tsx
// Current max width
max-w-7xl mx-auto

// Wider
max-w-[1400px] mx-auto

// Narrower
max-w-5xl mx-auto

// Full width
w-full
```

### Add Third-Party Integrations

**Google Analytics**:
```html
<!-- Add to index.html <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

**Email Service** (Formspree, EmailJS):
```tsx
// In Contact.tsx handleSubmit
const response = await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  body: JSON.stringify(formData),
  headers: { 'Content-Type': 'application/json' },
});
```

## 🎯 SEO Customization

Update meta tags (create/edit `/index.html`):

```html
<title>Your Name | Your Title</title>
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Name | Your Title" />
<meta property="og:description" content="Your description" />
```

## ✅ Testing Your Changes

After making changes:

```bash
# 1. Start dev server
npm run dev

# 2. Check in browser
open http://localhost:5173

# 3. Test on mobile
# Use browser dev tools device emulation

# 4. Build production version
npm run build

# 5. Preview production build
npx vite preview
```

## 📚 Resources

- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Motion (Framer Motion) Docs](https://motion.dev/docs)
- [Lucide Icons](https://lucide.dev/icons)
- [Radix UI Components](https://www.radix-ui.com/primitives)

---

**Need help?** Check the component comments or refer to the original code structure!
