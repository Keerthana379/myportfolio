# PM Portfolio Website (React)

This is a **modern, dark-themed Product Manager portfolio** built with React + Vite featuring stunning animations, interactive elements, and detailed case study pages.

## Stack
- React 18
- Vite 5
- Modern CSS with glassmorphism and gradient effects
- Static HTML pages for case studies

## Features
✨ **Dark Theme** - Professional dark mode with vibrant accent colors
🎨 **Gradient Effects** - Beautiful gradient text and glowing elements
🎭 **Interactive Cards** - Hover effects with glow, scale, and border animations
📸 **Case Study Pages** - Individual detailed pages for each case study
📊 **Animated Metrics** - Eye-catching metric cards with radial glow effects
🎯 **Scroll Progress** - Top progress bar showing scroll position
⬆️ **Back to Top** - Floating button that appears on scroll
🌟 **Floating Orbs** - Animated background gradient orbs
💫 **Smooth Animations** - Reveal-on-scroll and micro-interactions throughout
🔗 **Navigation** - Seamless navigation between case studies

## Project Structure
```
├── index.html                          # Main portfolio (React app)
├── case-studies.html                   # Case studies overview
├── release-confidence.html             # Individual case study
├── setup-friction-reduction.html       # Individual case study
├── backlog-clarity-framework.html      # Individual case study
├── case-studies.css                    # Case study specific styles
├── src/
│   ├── App.jsx                         # Main React component
│   ├── main.jsx                        # React entry point
│   └── styles.css                      # Main stylesheet
└── vite.config.js                      # Vite configuration
```

## Run locally
From `/Users/keerthana/Documents/Playground/pm-portfolio-website`:

```bash
npm install
npm run dev
```

Then open the local URL shown by Vite (typically `http://localhost:5173`).

Visit:
- Main portfolio: http://localhost:5173
- Case studies: http://localhost:5173/case-studies.html
- Individual cases: http://localhost:5173/release-confidence.html

## Build
```bash
npm run build
npm run preview
```

## Design Highlights
- **Color Palette**: Deep navy background with indigo/purple accents and warm orange highlights
- **Typography**: Gradient text effects on headings for visual impact
- **Cards**: Glassmorphism with gradient borders and glow effects on hover
- **Buttons**: Gradient backgrounds with shine animation
- **Icons**: Animated emoji icons with scale and rotation effects
- **Timeline**: Gradient line with pulsing dots
- **Skills**: Interactive chips with glow effects
- **Case Studies**: Full-page layouts with hero images, metrics, and detailed content

## Case Studies
Each case study includes:
- Hero section with featured image
- Problem statement and context
- Approach and decision-making process
- Detailed execution steps
- Results with visual metrics
- Key learnings and reflections
- Navigation to other case studies

See `CASE-STUDIES-GUIDE.md` for detailed documentation.

## Files
- `index.html` - React entry shell
- `case-studies.html` - Case studies overview page
- `release-confidence.html` - Release Confidence Initiative case study
- `setup-friction-reduction.html` - Setup Friction Reduction case study
- `backlog-clarity-framework.html` - Backlog Clarity Framework case study
- `package.json` - scripts/dependencies
- `vite.config.js` - Vite config with multi-page setup
- `src/main.jsx` - app bootstrap
- `src/App.jsx` - portfolio page and components
- `src/styles.css` - complete design system with dark theme
- `case-studies.css` - case study specific styles

## Personalization checklist
Update these in `src/App.jsx`:
- Name/branding
- Case study copy, images, and measured outcomes
- Contact email, phone, and location
- LinkedIn and GitHub URLs
- Resume link (replace YOUR_RESUME_ID with your Google Drive file ID)
- Case study images (replace Unsplash URLs with your own)

Update case study HTML files:
- Replace placeholder content with your actual projects
- Update metrics with real data
- Add your own images and screenshots
- Customize learnings and insights

## Deployment
The portfolio can be deployed to:
- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages
- Any static hosting service

All pages will be built to the `dist` folder and are ready to deploy.
