# 🚀 Julio Martínez - Professional Data Scientist CV

A modern and professional personal website built with **Astro** and **TypeScript**, designed to showcase my profile as a Data Scientist.

## ✨ Features

- 🎨 **Modern Design**: Clean and professional UI with colors inspired by LinkedIn
- 📱 **Responsive**: Mobile-first design with optimized breakpoints
- ⚡ **Performance**: Astro for maximum speed and SEO
- 🎭 **Animations**: Subtle and professional micro-interactions
- ♿ **Accessible**: Meets AA/AAA contrast standards
- 🔧 **TypeScript**: Typed and maintainable code
- 🎯 **SEO Optimized**: Meta tags, Open Graph and semantic structure

## 🛠️ Technologies

- **Framework**: [Astro](https://astro.build) (v5.13.2)
- **Language**: TypeScript
- **Styles**: Pure CSS with CSS variables
- **Deploy**: Vercel, Netlify, or any static hosting

## 🚀 Installation

### Prerequisites

- Node.js 18+
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repository>
   cd juliomo89
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run in development**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:4321
   ```

## 📁 Project Structure

```
juliomo89/
├── public/                 # Static files
│   ├── images/            # Project images
│   ├── resume.pdf         # CV mock
│   └── favicon.svg        # Custom favicon
├── src/
│   ├── components/        # Reusable components
│   ├── data/             # Profile mock data
│   ├── layouts/          # Page layouts
│   ├── pages/            # Application pages
│   └── styles/           # Organized CSS styles
├── astro.config.mjs      # Astro configuration
├── package.json           # Dependencies and scripts
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Customization

### Colors

Colors are defined in `src/styles/variables.css`:

```css
:root {
  --color-primary: #0A66C2;    /* LinkedIn Blue */
  --color-accent: #00B4D8;     /* Soft Cyan */
  --color-dark: #0F172A;       /* Dark Gray */
  --color-light: #F8FAFC;      /* Off White */
}
```

### Personal Profile

Edit `src/data/profile.ts` to change:

- Name and role
- Bio and description
- Social links
- Technical skills
- Statistics

### Projects

Modify `src/data/projects.ts` to:

- Add/edit projects
- Change descriptions
- Update links
- Modify skills

### Images

**Replace the placeholder images:**

1. **Avatar**: `public/images/avatar.jpg`
   - Recommended: Professional photo 300x300px
   - Format: JPG, PNG or WebP

2. **Projects**: `public/images/project-1.jpg` to `project-4.jpg`
   - Recommended: 800x600px
   - Suggested themes:
     - `project-1.jpg`: Data visualization, charts
     - `project-2.jpg`: Healthcare, medical dashboards
     - `project-3.jpg`: Business analytics, pipelines
     - `project-4.jpg`: BI dashboards, KPIs

3. **Open Graph**: `public/images/og-image.jpg`
   - Recommended: 1200x630px
   - Banner with name and role

**Get real images:**
- [Unsplash](https://unsplash.com) - High-quality free photos
- [Pexels](https://pexels.com) - Royalty-free images
- [Pixabay](https://pixabay.com) - Free visual resources

## 📱 Available Scripts

```bash
npm run dev      # Development server
npm run build    # Production build
npm run preview  # Preview the build
```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Astro

2. **Automatic configuration**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

### Netlify

1. **Connect repository**
   - Go to [netlify.com](https://netlify.com)
   - "New site from Git"
   - Select your repository

2. **Configuration**
   - Build command: `npm run build`
   - Publish directory: `dist`

### GitHub Pages

1. **Configure GitHub Actions**
   - Create `.github/workflows/deploy.yml`
   - Use the `peaceiris/actions-gh-pages` action

2. **Enable Pages**
   - Settings > Pages
   - Source: GitHub Actions

## 🔧 Advanced Configuration

### Environment Variables

Create `.env` for local configurations:

```env
PUBLIC_SITE_URL=https://yourdomain.com
PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Analytics

For Google Analytics, add to `Layout.astro`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Contact Form

The current form is frontend only. For real functionality:

1. **EmailJS** (Easy to implement)
2. **Formspree** (No backend)
3. **Netlify Forms** (With Netlify)
4. **Custom API** (Node.js, Python, etc.)

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🎯 SEO

- Optimized meta tags
- Open Graph for social networks
- HTML5 semantic structure
- Automatic sitemap
- Configured robots.txt

## 🐛 Troubleshooting

### Error: "Cannot find module"

```bash
rm -rf node_modules package-lock.json
npm install
```

### Error: "Port already in use"

```bash
npm run dev -- --port 3001
```

### Build fails in production

```bash
npm run build --verbose
```

## 🤝 Contributions

1. Fork the project
2. Create a branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is under the MIT License. See `LICENSE` for more details.

## 🙏 Acknowledgments

- [Astro](https://astro.build) for the amazing framework
- [Inter Font](https://rsms.me/inter/) for the typography
- [Heroicons](https://heroicons.com) for the SVG icons

## 📞 Contact

- **Email**: julioonmartinez@gmail.com
- **LinkedIn**: [julioonmartinez](https://www.linkedin.com/in/julio-cesar-martinez-ortega-515690319/)
- **GitHub**: [julioonmartinez](https://github.com/julioonmartinez)

---

⭐ **If this project helps you, give it a star on GitHub!**
