# ⚡ Quick Start Guide

Get your AI Engineer portfolio up and running in **15 minutes**.

## 🎯 Goal

Transform this template into your personal portfolio showcasing your AI/ML expertise.

## ✅ Prerequisites

- Node.js 16+ installed ([download](https://nodejs.org))
- Text editor (VS Code recommended)
- GitHub account (for deployment)
- Your resume as PDF

## 🚀 5-Step Launch

### Step 1: Setup (2 minutes)

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open in browser
# Visit: http://localhost:5173
```

You should see the portfolio template running!

### Step 2: Update Personal Info (5 minutes)

Open these files and update with your information:

**`/src/app/components/Hero.tsx`** (Lines 48-56):
```tsx
// Change name
<span className="block text-white">Your Full Name</span>

// Change specialties
Specializing in <span className="text-blue-400">Your Specialty 1</span>
```

**`/src/app/components/Contact.tsx`** (Lines 18-45):
```tsx
// Update email, LinkedIn, GitHub, location
const contactLinks = [
  {
    icon: Mail,
    value: "your.email@example.com",
    link: "mailto:your.email@example.com",
  },
  // ... update others
];
```

**All Social Links** - Search and replace:
- `https://github.com/saidhruv` → `https://github.com/YOURUSERNAME`
- `https://linkedin.com/in/saidhruv` → `https://linkedin.com/in/YOURUSERNAME`
- `sai.dhruv@example.com` → `your.email@example.com`

### Step 3: Add Your Content (5 minutes)

**Add Resume**:
1. Export your resume as PDF
2. Save it as `/public/resume.pdf`

**Quick Content Updates**:

Edit `/src/app/components/About.tsx`:
- Replace the story paragraphs with your journey (lines 52-75)

Edit `/src/app/components/Experience.tsx`:
- Update the `experiences` array with your work history (starting line 12)

Edit `/src/app/components/Projects.tsx`:
- Update the `projects` array with your projects (starting line 11)

### Step 4: Test (2 minutes)

```bash
# Check it looks good
npm run dev

# Test these:
✓ Navigation works
✓ All sections visible
✓ Contact links open correctly
✓ Resume downloads
✓ Chatbot responds
✓ Mobile view looks good (toggle device in browser)
```

### Step 5: Deploy (1 minute)

**Easiest: Vercel**

```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial portfolio"
git remote add origin https://github.com/YOURUSERNAME/portfolio.git
git push -u origin main

# 2. Go to vercel.com
# 3. Sign in with GitHub
# 4. Click "Import Project"
# 5. Select your repository
# 6. Click "Deploy"
```

**Done!** Your portfolio is live at `yourproject.vercel.app`

## 🎨 Optional Customizations

### Change Colors (2 minutes)

Find and replace these gradient classes:

**Current**: Blue → Purple
```tsx
from-blue-500 to-purple-500
from-blue-400 to-purple-400
```

**Green theme**:
```tsx
from-green-500 to-teal-500
from-green-400 to-teal-400
```

**Orange theme**:
```tsx
from-orange-500 to-red-500
from-orange-400 to-red-400
```

### Add Google Analytics (3 minutes)

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Create `/index.html` in `/` and add:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Your Name | AI Engineer</title>
    
    <!-- Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
    <script>
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_ID');
    </script>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

## 🔧 Common Issues & Fixes

### Issue: npm install fails
```bash
# Clear cache and retry
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Issue: Page is blank
```bash
# Check browser console (F12) for errors
# Usually a syntax error in your edits
# Undo recent changes
```

### Issue: Resume won't download
```bash
# Make sure file exists
ls public/resume.pdf

# If not, add your resume there
```

### Issue: Links don't work
- Check you updated ALL occurrences of social links
- Search entire project for "saidhruv" and replace

## 📋 Customization Checklist

Before going live, verify:

- [ ] Name updated everywhere
- [ ] Email updated
- [ ] LinkedIn link updated
- [ ] GitHub link updated
- [ ] Location updated
- [ ] Resume PDF added
- [ ] About section has your story
- [ ] Experience shows your roles
- [ ] Projects show your work
- [ ] Skills reflect your expertise
- [ ] Contact form tested
- [ ] All navigation links work
- [ ] Mobile view looks good
- [ ] Deployed successfully

## 📚 Learn More

For detailed customization:
- **CUSTOMIZATION.md** - Complete personalization guide
- **DEPLOYMENT.md** - Advanced deployment options
- **README.md** - Full documentation
- **SUMMARY.md** - Portfolio overview

## 💬 Pro Tips

1. **Keep it Real**: Only include projects you can discuss in detail
2. **Show Impact**: Always include metrics (accuracy, speed, savings)
3. **Stay Current**: Update regularly with new projects
4. **Mobile First**: Most recruiters view on phones
5. **Load Fast**: Don't add huge images
6. **Test Forms**: Make sure contact form works
7. **LinkedIn**: Link your portfolio in your LinkedIn "Featured" section
8. **GitHub**: Pin your best projects matching your portfolio
9. **Resume Match**: Ensure portfolio and resume tell same story
10. **Keywords**: Include AI/ML keywords naturally

## 🎯 Success in 15 Minutes

You now have:
✅ Professional AI engineer portfolio
✅ Responsive design
✅ Interactive features
✅ SEO optimized
✅ Deployed and live
✅ Ready to share with recruiters

## 🚀 Next Actions

**Right Now**:
1. Share portfolio URL on LinkedIn
2. Add to resume header
3. Email to recruiters you're in conversation with

**This Week**:
1. Get feedback from peers
2. Test on multiple devices
3. Add more detailed project descriptions

**This Month**:
1. Write blog posts to add to writing section
2. Update with new projects
3. Track analytics to see what resonates

## 📧 Share Your Success!

Built something cool? Modified it in interesting ways? Share it!

Remember: This portfolio demonstrates your ability to:
- Understand AI/ML systems
- Build production applications
- Present technical work clearly
- Think about user experience

**It's not just a portfolio—it's proof of your engineering skills.**

---

**Questions?** Check the detailed guides:
- CUSTOMIZATION.md for content updates
- DEPLOYMENT.md for hosting options
- README.md for technical details

**Let's build your career! 🚀**
