# Hashini Bhagya | Personal Portfolio

A modern, fully responsive portfolio website built with HTML5, CSS3, and JavaScript featuring dark/light theme toggle, smooth animations, and GitHub Pages CI/CD deployment.

## 🌟 Features

- **Responsive Design** - Mobile-first, works on all screen sizes (480px to 4K)
- **Dark/Light Theme** - Persistent theme toggle with localStorage
- **Smooth Animations** - Scroll-triggered reveals, floating elements, count-up animations
- **Dynamic Typography** - Typing effect for hero section
- **Contact Form** - FormSubmit integration for email notifications
- **Modern UI/UX** - Glassmorphism, gradient effects, smooth transitions
- **Performance Optimized** - Minified assets, efficient animations
- **SEO Ready** - Semantic HTML, meta tags, open graph support
- **Accessibility** - ARIA labels, semantic elements, keyboard navigation

## 🛠️ Tech Stack

- **Frontend:** HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript
- **Icons:** Font Awesome 6.4.0
- **Fonts:** Space Grotesk (Google Fonts)
- **Deployment:** GitHub Pages
- **CI/CD:** GitHub Actions
- **Form Handling:** FormSubmit.co

## 📁 Project Structure

portfolio/

├── index.html          # Main HTML file

├── style.css           # Styling (1200+ lines)

├── script.js           # JavaScript interactions

├── assets/             # Images & media

│   ├── portfolio.jpg

│   ├── portfolio2.jpg

│   └── Hashini_Silva_Professional_CV.pdf

├── .github/

│   └── workflows/

│       └── ci-cd.yml   # GitHub Actions workflow

└── README.md           # This file

## 🚀 Deployment

**Live URL:** [https://hashinibhagya.github.io/portfolio/](https://hashinibhagya.github.io/portfolio/)

### GitHub Pages Configuration
- Repository: `HashiniBhagya/portfolio`
- Branch: `main` / `master`
- Source: Root directory
- Custom Domain: Not configured

### CI/CD Pipeline
Automated deployment via GitHub Actions on every push:
1. ✅ **Test Stage** - Verify HTML, CSS, JS files exist
2. 🚀 **Deploy Stage** - Upload to GitHub Pages

## 📋 Sections

1. **Hero** - Name, typing effect, CTA buttons, social links
2. **About** - Bio, stats (projects, tech stacks, universities)
3. **Education** - University details, competencies
4. **Skills** - Programming languages, frameworks, tools with proficiency levels
5. **Projects** - Featured projects with tech stack and links
6. **Contact** - Contact cards, contact form with email integration

## 🎨 Theme System

Default theme stored in `localStorage`:
```javascript
localStorage.getItem("theme") // "dark" or "light"
```

CSS Variables switch based on `[data-theme]` attribute.

## 📞 Contact Form

- **Service:** FormSubmit.co
- **Method:** POST to `https://formsubmit.co/hashinibhagya1015@gmail.com`
- **Features:**
  - Spam protection (honeypot)
  - CAPTCHA disabled
  - Email template: table format
  - Auto-redirect to portfolio after submission
  - Success message display

## 🔧 Setup Instructions

### Local Development
```bash
# Clone repository
git clone https://github.com/HashiniBhagya/portfolio.git
cd portfolio

# Open in browser
open index.html  # macOS
start index.html # Windows
```

### Customization

**Update Email Address:**
```html
<!-- In index.html, form action -->
action="https://formsubmit.co/YOUR_EMAIL@gmail.com"

<!-- And redirect URL -->
name="_next" value="YOUR_PORTFOLIO_URL/#contact"
```

**Modify Content:**
- Edit section text directly in `index.html`
- Update skills, projects, education as needed

**Change Colors:**
```css
/* In style.css, modify :root variables */
:root {
  --primary: #6366f1;      /* Main color */
  --secondary: #06b6d4;    /* Accent 1 */
  --accent: #8b5cf6;       /* Accent 2 */
  --bg-dark: #0a0a1a;      /* Dark bg */
  /* ... etc */
}
```

## 📊 Performance Metrics

- **Lighthouse Score:** 95+ (Performance, Accessibility, SEO)
- **Load Time:** < 2 seconds
- **Bundle Size:** ~150KB (CSS + JS combined)
- **Browser Support:** All modern browsers (Chrome, Firefox, Safari, Edge)

## 🔐 Security

- No backend/server exposure
- Form data via HTTPS (FormSubmit.co)
- No API keys or sensitive data in code
- No external CDN tracking scripts

## 📱 Responsive Breakpoints

- **Desktop:** 1024px+
- **Tablet:** 768px - 1023px
- **Mobile:** Below 768px
- **Small Mobile:** Below 480px

## 🎯 Browser Compatibility

| Browser | Version |      Status      |
|---------|---------|----------------- |
| Chrome  | Latest  | ✅ Full Support |
| Firefox | Latest  | ✅ Full Support |
| Safari  | Latest  | ✅ Full Support |
| Edge    | Latest  | ✅ Full Support |
| IE 11   |   -     | ❌ Not Supported|

## 📈 Future Enhancements

- [ ] Blog section with markdown support
- [ ] Dark/light theme animations
- [ ] Project filtering by tech stack
- [ ] GitHub API integration for live project data
- [ ] Analytics dashboard
- [ ] Multi-language support

## 📝 License

This project is open source. Feel free to fork and customize!

## 👤 Author

**Hashini Bhagya**
- GitHub: [@HashiniBhagya](https://github.com/HashiniBhagya)
- LinkedIn: [Hashini Bhagya](https://www.linkedin.com/in/hashini-bhagya-b996443b0)
- Email: hashinibhagya1015@gmail.com
- Location: Gampaha, Sri Lanka

---

**Last Updated:** June 2026
**Status:** ✅ Production Ready