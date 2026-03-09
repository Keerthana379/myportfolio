import React, { useEffect, useState } from "react";

const metrics = [
  {
    label: "Platform Bugs Resolved",
    value: "100+",
    text: "Improved product stability and overall user experience at Kore.ai.",
  },
  {
    label: "Production Tickets",
    value: "50+",
    text: "Reduced issue backlog by 70% through proactive support and triage.",
  },
  {
    label: "REST APIs Built",
    value: "10+",
    text: "Delivered backend APIs using Node.js and Express.js for key features.",
  },
  {
    label: "Post-Launch Issues",
    value: "-30%",
    text: "Reduced rollout issues through integration testing and cross-team support.",
  },
];

const caseStudies = [
  {
    slug: "rapido-waiting-charges",
    tags: ["Product Design", "User Experience"],
    title: "Improving Fare Transparency in Rapido to Reduce Ride Fare Disputes",
    problem: "Users surprised by waiting charges added only at ride end.",
    decision: "Implement real-time charge visibility during the ride.",
    outcome: "40% reduction in fare disputes and improved user trust.",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&h=500&fit=crop",
  },
  {
    slug: "swiggy-food-discovery",
    tags: ["Product Strategy", "Personalization"],
    title: "Improving Food Discovery in Swiggy to Reduce Decision Fatigue",
    problem: "Users spend too long browsing thousands of options before ordering.",
    decision: "Introduce personalized quick picks and mood-based discovery.",
    outcome: "30% faster ordering and 15% higher conversion rate.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=500&fit=crop",
  },
  {
    slug: "linkedin-job-recommendations",
    tags: ["Machine Learning", "Personalization"],
    title: "Improving Job Recommendations on LinkedIn to Increase Job Discovery Relevance",
    problem: "Job recommendations often irrelevant to user skills and career goals.",
    decision: "Implement skill-based matching and intent-driven personalization.",
    outcome: "20% higher CTR and 15% increase in job applications.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=500&fit=crop",
  },
];

const artifacts = [
  {
    title: "PRD Snapshot",
    text: "Problem statement, user persona, assumptions, and success metrics.",
    icon: "📋",
  },
  {
    title: "Prioritization Matrix",
    text: "Impact vs effort scoring to justify what gets built first.",
    icon: "📊",
  },
  {
    title: "Roadmap Slice",
    text: "Now, next, later roadmap with dependencies and delivery risks.",
    icon: "🗺️",
  },
  {
    title: "Experiment Plan",
    text: "Hypothesis, metric, and decision criteria for rollout and iteration.",
    icon: "🧪",
  },
];

const skills = [
  "Product Discovery",
  "Prioritization",
  "Roadmapping",
  "Stakeholder Alignment",
  "SQL Basics",
  "Jira",
  "Figma",
  "Agile Delivery",
];

const workExperience = [
  {
    company: "Kore.ai",
    role: "Associate Engineer",
    location: "Hyderabad, TG",
    period: "May 2024 - Present",
    highlights: [
      "Resolved 100+ platform bugs and improved product stability.",
      "Solved 50+ production tickets and reduced backlog by 70%.",
      "Built 10+ REST APIs and reduced post-launch issues by 30%.",
    ],
  },
  {
    company: "Kore.ai",
    role: "Full Stack Developer Intern",
    location: "Hyderabad, TG",
    period: "Sep 2023 - May 2024",
    highlights: [
      "Built backend modules and UI enhancements that improved satisfaction by 30%.",
      "Resolved 35+ UI bugs and improved release quality.",
      "Supported CI/CD and bug triage, reducing deployment time by 20%.",
    ],
  },
];

function useRevealOnScroll() {
  useEffect(() => {
    const nodes = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach((node) => node.classList.add("visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -4% 0px" }
    );

    nodes.forEach((node, idx) => {
      node.style.transitionDelay = `${Math.min(idx * 35, 220)}ms`;
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);
}

function InteractiveCard({ className = "", children, ...props }) {
  return (
    <article className={`hover-card ${className}`.trim()} {...props}>
      {children}
    </article>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const currentYear = new Date().getFullYear();

  useRevealOnScroll();

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <div className="bg-orb bg-orb-a" aria-hidden="true" />
      <div className="bg-orb bg-orb-b" aria-hidden="true" />
      
      {showBackToTop && (
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          ↑
        </button>
      )}

      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand">
            Keerthana Singareddy
          </a>
          <button
            className="menu-btn"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            Menu
          </button>
          <nav className={`site-nav ${menuOpen ? "open" : ""}`}>
            <a href="/case-studies.html" onClick={() => setMenuOpen(false)}>
              Case Studies
            </a>
            <a href="#artifacts" onClick={() => setMenuOpen(false)}>
              Artifacts
            </a>
            <a href="#experience" onClick={() => setMenuOpen(false)}>
              Experience
            </a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>
              Skills
            </a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>
              Contact
            </a>
            <a className="btn btn-small" href="#contact" onClick={() => setMenuOpen(false)}>
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero section">
          <div className="container hero-grid">
            <div>
              <p className="eyebrow">Associate Software Engineer → Aspiring Product Manager</p>
              <h1>I build product outcomes with engineering depth and customer focus.</h1>
              <p className="lead">
                Full Stack Developer with hands-on experience in building APIs, improving platform reliability,
                and delivering measurable outcomes. I am now transitioning into Product Management to own
                problem discovery, prioritization, and product impact end-to-end.
              </p>
              <div className="hero-actions">
                <a className="btn" href="/case-studies.html">
                  View Case Studies
                </a>
                <a className="btn btn-ghost" href="https://drive.google.com/file/d/YOUR_RESUME_ID/view" target="_blank" rel="noreferrer">
                  Download Resume
                </a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Impact Highlights">
              <h2>Why I can do PM from day one</h2>
              <ul>
                <li>Resolved 100+ platform bugs with strong prioritization</li>
                <li>Solved 50+ production issues while balancing urgency and quality</li>
                <li>Built 10+ APIs and supported cross-functional rollouts</li>
                <li>Improved delivery outcomes through measurable execution</li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="section metrics">
          <div className="container card-grid four">
            {metrics.map((item) => (
              <article key={item.label} className="hover-card card metric-card">
                <p className="label">{item.label}</p>
                <p className="value">{item.value}</p>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="case-studies">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Featured Case Studies</p>
              <h2>Evidence of product thinking in engineering work</h2>
            </div>
            <div className="card-grid three">
              {caseStudies.map((study) => (
                <a key={study.title} href={`/${study.slug}.html`} className="case-card-link">
                  <InteractiveCard className="case-card">
                    <div className="case-image">
                      <img src={study.image} alt={study.title} />
                    </div>
                    <div className="case-content">
                      <div className="case-top">
                        {study.tags.map((tag) => (
                          <span key={tag} className="pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3>{study.title}</h3>
                      <p>
                        <strong>Problem:</strong> {study.problem}
                      </p>
                      <p>
                        <strong>Decision:</strong> {study.decision}
                      </p>
                      <p>
                        <strong>Outcome:</strong> {study.outcome}
                      </p>
                      <span className="case-link">
                        Open Case Study →
                      </span>
                    </div>
                  </InteractiveCard>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="artifacts">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Product Artifacts</p>
              <h2>How I structure product decisions</h2>
            </div>
            <div className="card-grid four">
              {artifacts.map((artifact) => (
                <InteractiveCard key={artifact.title} className="tile">
                  <div className="artifact-icon">{artifact.icon}</div>
                  <h3>{artifact.title}</h3>
                  <p>{artifact.text}</p>
                </InteractiveCard>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="container">
            <div className="skills-panel">
              <p className="eyebrow">PM Skill Stack</p>
              <h2>Built through software engineering ownership</h2>
              <p className="lead compact">
                My edge is product thinking backed by engineering realism. I understand technical constraints,
                delivery tradeoffs, and how to ship iterative value.
              </p>
              <div className="tags">
                {skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="experience">
          <div className="container">
            <div className="section-head">
              <p className="eyebrow">Career Timeline</p>
              <h2>My work experience</h2>
            </div>
            <div className="exp-timeline">
              {workExperience.map((item) => (
                <article key={`${item.company}-${item.role}`} className="exp-item">
                  <div className="exp-meta">
                    <p className="exp-period">{item.period}</p>
                    <p className="exp-location">{item.location}</p>
                  </div>
                  <div className="exp-content hover-card">
                    <h3>{item.company}</h3>
                    <p className="exp-role">{item.role}</p>
                    <ul className="exp-list">
                      {item.highlights.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta" id="contact">
          <div className="container">
            <InteractiveCard className="cta-inner reveal">
              <p className="eyebrow">Open to Opportunities</p>
              <h2>Hiring for APM/PM roles? Let’s talk.</h2>
              <p>
                I am looking for roles where I can combine product thinking and engineering execution to ship
                meaningful user value.
              </p>
              <div className="hero-actions">
                <a className="btn" href="mailto:skeerthanareddy379@gmail.com">
                  skeerthanareddy379@gmail.com
                </a>
                <a className="btn btn-ghost" href="https://www.linkedin.com/in/keerthanareddy379/" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
              <p className="contact-line">+91 9618407793 | Hyderabad, Telangana</p>
            </InteractiveCard>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container">
          <p>
            © {currentYear} Keerthana Singareddy. Product Manager Portfolio.
          </p>
        </div>
      </footer>
    </>
  );
}
