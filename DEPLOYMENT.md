# 🚀 Deployment Guide

This guide will help you deploy your AI Engineer portfolio to various platforms.

## 📋 Pre-Deployment Checklist

Before deploying, make sure you've:

- [ ] Updated all personal information (name, email, links)
- [ ] Replaced placeholder content with your actual experience
- [ ] Added your resume PDF to `/public/resume.pdf`
- [ ] Updated GitHub, LinkedIn, and social media links
- [ ] Customized the AI chatbot knowledge base
- [ ] Tested the site locally (`npm run dev`)
- [ ] Built the production version (`npm run build`)
- [ ] Checked all links work correctly
- [ ] Verified responsive design on mobile/tablet
- [ ] Optimized images (if you added any)

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

**Pros**: Instant deployment, automatic HTTPS, great performance, free tier

**Steps**:

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Sign up/login with GitHub
4. Click "New Project"
5. Import your repository
6. Vercel auto-detects Vite config
7. Click "Deploy"

**Custom Domain** (optional):
1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records as instructed

**Build Settings**:
```
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

### Option 2: Netlify

**Pros**: Easy setup, continuous deployment, free SSL, form handling

**Steps**:

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Sign up/login
4. Click "Add new site" > "Import an existing project"
5. Connect to GitHub
6. Select your repository
7. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
8. Click "Deploy site"

**Custom Domain**:
1. Go to Site Settings > Domain management
2. Add custom domain
3. Update DNS records

### Option 3: GitHub Pages

**Pros**: Free hosting, integrated with GitHub, simple

**Steps**:

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/portfolio",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/portfolio/', // Your repo name
  plugins: [react()],
});
```

4. Deploy:
```bash
npm run deploy
```

5. Enable GitHub Pages:
   - Go to Settings > Pages
   - Select `gh-pages` branch
   - Save

### Option 4: AWS S3 + CloudFront

**Pros**: Scalable, fast CDN, full control

**Steps**:

1. Build the project:
```bash
npm run build
```

2. Create S3 bucket:
   - Go to AWS Console > S3
   - Create bucket (e.g., `portfolio.yourdomain.com`)
   - Enable static website hosting
   - Set index document: `index.html`
   - Set error document: `index.html`

3. Upload files:
```bash
aws s3 sync dist/ s3://your-bucket-name --delete
```

4. Configure CloudFront:
   - Create distribution
   - Origin: Your S3 bucket
   - Default root object: `index.html`
   - Enable HTTPS
   - Add custom domain (optional)

5. Update bucket policy for public access

### Option 5: Azure Static Web Apps

**Pros**: Free tier, integrated CI/CD, global CDN

**Steps**:

1. Push code to GitHub
2. Go to Azure Portal
3. Create "Static Web App"
4. Connect to GitHub repository
5. Configure:
   - App location: `/`
   - Api location: (leave empty)
   - Output location: `dist`
6. Azure creates GitHub Actions workflow automatically
7. Deploy

## 🔧 Configuration

### Environment Variables

If you need environment variables (analytics, APIs):

Create `.env` file:
```
VITE_GOOGLE_ANALYTICS_ID=your-ga-id
VITE_API_ENDPOINT=your-api-endpoint
```

Access in code:
```typescript
const analyticsId = import.meta.env.VITE_GOOGLE_ANALYTICS_ID;
```

**Important**: All Vite env vars must start with `VITE_`

### Build Optimization

Already configured in `vite.config.ts`:
- Code splitting
- Tree shaking
- Minification
- Compression

For further optimization:
```typescript
// vite.config.ts
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react', 'motion'],
        },
      },
    },
  },
});
```

## 🔍 SEO Setup

### 1. Create `index.html` with meta tags

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Primary Meta Tags -->
    <title>Sai Dhruv Yellanki | AI Engineer</title>
    <meta name="title" content="Sai Dhruv Yellanki | AI Engineer" />
    <meta name="description" content="AI Engineer specializing in LLM systems, RAG architectures, and production ML. 5+ years building intelligent systems that create real-world impact." />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://yourportfolio.com/" />
    <meta property="og:title" content="Sai Dhruv Yellanki | AI Engineer" />
    <meta property="og:description" content="AI Engineer specializing in LLM systems, RAG architectures, and production ML." />
    <meta property="og:image" content="https://yourportfolio.com/preview.png" />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content="https://yourportfolio.com/" />
    <meta property="twitter:title" content="Sai Dhruv Yellanki | AI Engineer" />
    <meta property="twitter:description" content="AI Engineer specializing in LLM systems, RAG architectures, and production ML." />
    <meta property="twitter:image" content="https://yourportfolio.com/preview.png" />
    
    <!-- Favicon -->
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
```

### 2. Create `robots.txt` in `/public`:

```
User-agent: *
Allow: /

Sitemap: https://yourportfolio.com/sitemap.xml
```

### 3. Create `sitemap.xml` in `/public`:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://yourportfolio.com/</loc>
    <lastmod>2025-01-05</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

## 📊 Analytics Setup

### Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)

2. Add to `index.html`:
```html
<head>
  <!-- Google Analytics -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
  </script>
</head>
```

## 🔒 Security Best Practices

1. **HTTPS Only**: Ensure SSL certificate is active
2. **Content Security Policy**: Add headers
3. **No Sensitive Data**: Never commit API keys, passwords
4. **Input Validation**: Sanitize contact form inputs
5. **Rate Limiting**: If using backend APIs

## 🧪 Testing Before Deploy

```bash
# 1. Build production version
npm run build

# 2. Preview production build locally
npx vite preview

# 3. Check build output
ls -la dist/

# 4. Test on different devices
# - Desktop (Chrome, Firefox, Safari)
# - Mobile (iOS Safari, Android Chrome)
# - Tablet
```

## 📈 Performance Optimization

### Already Included:
- ✅ Code splitting
- ✅ Lazy loading
- ✅ Minification
- ✅ Tree shaking
- ✅ Modern bundling

### Additional Optimizations:

1. **Image Optimization**:
```bash
npm install sharp
# Compress images before adding to project
```

2. **Font Optimization**:
- Using Google Fonts with `display=swap`
- Already configured in `fonts.css`

3. **Caching**:
Add to `netlify.toml` or `vercel.json`:
```toml
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 🐛 Troubleshooting

### Build Fails

**Problem**: npm run build fails
**Solution**: 
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Blank Page After Deploy

**Problem**: Site shows blank page
**Solution**: Check browser console for errors. Usually:
- Wrong base URL in vite.config
- Missing environment variables
- React component errors

### Routing Issues

**Problem**: Direct URLs return 404
**Solution**: Configure redirects

For Netlify, create `_redirects` in `/public`:
```
/*    /index.html   200
```

For Vercel, create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/" }
  ]
}
```

## 📝 Post-Deployment

1. **Test Everything**:
   - All navigation links
   - Contact form
   - Download resume button
   - External links (GitHub, LinkedIn)
   - Mobile responsiveness

2. **Submit to Search Engines**:
   - [Google Search Console](https://search.google.com/search-console)
   - Submit sitemap

3. **Monitor Performance**:
   - [PageSpeed Insights](https://pagespeed.web.dev/)
   - [GTmetrix](https://gtmetrix.com/)
   - [WebPageTest](https://www.webpagetest.org/)

4. **Share Your Portfolio**:
   - Update LinkedIn
   - Update GitHub README
   - Add to resume
   - Share on social media

## 🎯 Custom Domain Setup

### Buy a Domain

Recommended registrars:
- Namecheap
- Google Domains
- Cloudflare Registrar

### Configure DNS

For Vercel/Netlify:
1. Add A record: `@` → Platform IP
2. Add CNAME: `www` → Platform URL

Wait 24-48 hours for DNS propagation.

## 🔄 Continuous Deployment

Both Vercel and Netlify offer automatic deployments:

1. Push to main branch → Auto deploy
2. Pull requests → Preview deployments
3. Rollback → Previous deployments accessible

## 📞 Support

For deployment issues:
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Netlify**: [netlify.com/support](https://netlify.com/support)
- **AWS**: [AWS Documentation](https://docs.aws.amazon.com/)

---

**Ready to deploy?** Choose a platform above and follow the steps!

Your portfolio will be live and impressing recruiters in minutes. 🚀
