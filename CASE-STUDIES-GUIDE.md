# Case Studies Guide

## Overview
Your portfolio now includes individual case study pages with detailed content, all styled with the same modern dark theme.

## Pages Created

### 1. Case Studies Overview (`case-studies.html`)
- Grid view of all case studies
- Clickable cards that link to individual pages
- Same dark theme and animations as main portfolio

### 2. Release Confidence Initiative (`release-confidence.html`)
- Full case study with detailed sections
- Hero image with gradient overlay
- Metrics showcase
- Navigation to other case studies

### 3. Setup Friction Reduction (`setup-friction-reduction.html`)
- Comprehensive breakdown of the onboarding improvement project
- Impact metrics and learnings
- Navigation between case studies

### 4. Backlog Clarity Framework (`backlog-clarity-framework.html`)
- Detailed explanation of the prioritization framework
- Impact-priority matrix breakdown
- Results and key learnings

## Features

### Consistent Design
- Dark theme with indigo/purple accents
- Gradient text effects on headings
- Glassmorphism cards with glow effects
- Animated background orbs
- Scroll progress indicator
- Back-to-top floating button

### Navigation
- Each case study has previous/next navigation
- Back to portfolio and case studies overview links
- Smooth scroll behavior throughout

### Content Structure
Each case study includes:
- Hero section with image and tags
- Overview with challenge statement
- Context & Problem section
- Approach breakdown
- Results & Impact with metrics
- Key Learnings
- What I'd Do Differently
- Navigation to other case studies
- CTA section

### Interactive Elements
- Hover effects on all cards
- Animated metrics boxes
- Highlight boxes for key insights
- Social links in footer
- Responsive design for mobile

## Customization

### Update Content
Edit the HTML files directly to update:
- Case study titles and descriptions
- Images (replace Unsplash URLs)
- Metrics and numbers
- Learnings and insights

### Update Images
Replace the Unsplash URLs with your own:
```html
<img src="YOUR_IMAGE_URL" alt="Case Study Title" />
```

Or use local images:
1. Create a `public/images` folder
2. Add your images there
3. Reference them: `<img src="/images/your-image.jpg" alt="..." />`

### Update Styling
All styles are in `case-studies.css` which imports from `src/styles.css`
- Modify colors in CSS variables
- Adjust spacing and typography
- Customize animations

## Build & Deploy

### Development
```bash
npm run dev
```
Visit:
- Main portfolio: http://localhost:5173
- Case studies: http://localhost:5173/case-studies.html
- Individual cases: http://localhost:5173/release-confidence.html

### Production Build
```bash
npm run build
```

All HTML files will be built to the `dist` folder:
- dist/index.html
- dist/case-studies.html
- dist/release-confidence.html
- dist/setup-friction-reduction.html
- dist/backlog-clarity-framework.html

### Preview Production Build
```bash
npm run preview
```

## Tips

1. **Keep it real**: Use actual metrics and outcomes from your work
2. **Tell a story**: Each case study should have a clear narrative arc
3. **Show your thinking**: Explain why you made certain decisions
4. **Be honest**: Include what you'd do differently
5. **Use visuals**: Add screenshots, diagrams, or charts where relevant
6. **Update regularly**: Keep case studies current as you gain more experience

## Next Steps

1. Replace placeholder images with real project screenshots
2. Update metrics with actual data from your work
3. Add more case studies as you complete projects
4. Consider adding:
   - Process diagrams
   - Before/after comparisons
   - User feedback quotes
   - Technical architecture diagrams
