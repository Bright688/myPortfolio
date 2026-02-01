"use client";

import Image from "next/image";
import { useState } from "react";

const experience = [
  {
    role: "Software Developer",
    location: "Abidjan, Ivory Coast (Hybrid)",
    highlights: [
      "Built and deployed 3+ full-stack websites in a month using FastAPI, ReactJS, NextJS, NodeJS, Python, and JavaScript.",
      "Designed scalable system architectures with multiple applications, dozens of API endpoints, and concurrent users.",
      "Wrote reusable code, executed tests, resolved production bugs, and coordinated across multiple Git repositories.",
    ],
  },
  {
    role: "Software Developer | Technical Writer",
    location: "London, UK (Remote)",
    highlights: [
      "Delivered backend-driven web applications with FastAPI, structured schemas, and modular service layers.",
      "Collaborated in code reviews and maintained multiple repos with Git workflows.",
      "Produced 10+ technical documents including system specs, API docs, and troubleshooting guides.",
    ],
  },
  {
    role: "AI Research Engineer (ML & DL)",
    location: "London, UK (Remote)",
    highlights: [
      "Designed, trained, and optimized 7+ AI models including humanizers, text detectors, and phishing systems.",
      "Built end-to-end ML pipelines covering preprocessing, feature engineering, training, and evaluation.",
      "Ran applied research experiments and improved model robustness and deployment readiness.",
    ],
  },
  {
    role: "Data Scientist | Technical Writer",
    location: "UK (Remote)",
    highlights: [
      "Analyzed 10,000+ records across 20+ projects using Python, R, SAS, SPSS, Excel, and Tableau.",
      "Built analysis workflows, predictive models, and automation scripts for research teams.",
      "Authored documentation, research reports, and academic papers that supported publications.",
    ],
  },
];

const projects = [
  {
    name: "Adinkra Fellowship",
    url: "https://adinkrafellowship.com",
    description:
      "Responsive fellowship website with application forms and improved international applicant UX.",
  },
  {
    name: "PosiWorks",
    url: "https://posiworks.org",
    description:
      "Interactive platform with dynamic content management and multi-device responsive design.",
  },
  {
    name: "CoinWatch + API",
    url: "https://coinwatch.richardseshie.com",
    description:
      "Cryptocurrency tracking platform with real-time data dashboards and optimized REST endpoints.",
  },
  {
    name: "Athena R&T Solution",
    url: "https://anthenart.com",
    description:
      "End-to-end e-commerce experience with product catalog, secure checkout, and UX optimization.",
  },
  {
    name: "ProofStream Lite",
    url: "https://proofstreamlite.onrender.com/",
    description:
      "Document verification platform for secure storage, retrieval, and validation of records.",
  },
  {
    name: "Intelligent Hybrid Phishing Detection System",
    url: "https://intelligent-hybrid-phishing-detector.onrender.com/",
    description:
      "Hybrid ML phishing detection with real-time URL and text scanning interface.",
  },
  {
    name: "Task Management Web Application",
    url: "https://taskmanagementapp-4vfh.onrender.com/",
    description:
      "Full-stack task management platform with auth, CRUD workflows, and teamwork efficiency.",
  },
  {
    name: "100% Anime",
    url: "https://anime-sw4u.onrender.com/",
    description:
      "Dynamic anime discovery platform for streaming and content exploration.",
  },
];

const publications = [
  {
    title:
      "Secure Wireless Design for a Multi-Tier Enterprise: Practical Flaws, Tests, and a Defence-In-Depth Proposal",
    venue: "Journal of Network and Computer Applications (2026)",
    url: "https://doi.org/10.5281/zenodo.18436229",
  },
  {
    title: "Scoops2GO Secure Development Cycle",
    venue: "Zenodo (2026)",
    url: "https://doi.org/10.5281/zenodo.18433126",
  },
  {
    title:
      "Entrepreneurial Pathways And University-Affiliated Incubators: A Mixed-Methods Study on Green And Deep Technologies In Scandinavia",
    venue: "Zenodo (2024)",
    url: "https://doi.org/10.5281/zenodo.13840975",
  },
  {
    title:
      "Web Design vs. Web Development: Which One Do You Really Need?",
    venue: "Anthenart.com (2026)",
    url: "https://www.anthenart.com/blog/3",
  },
];

const certifications = [
  "Fullstack Web Developer — NECA in partner with Unites Integrated Limited",
  "Software Engineering — Power Learn Project Africa",
  "Python, Information Technology Specialist — Certiport",
  "Oracle SQL Concepts and Commands — EDUCBA",
  "Tableau Training — Skillup",
  "R Programming — Johns Hopkins University",
  "Python Specialization — University of Michigan",
  "Capstone: Retrieving, Processing, and Visualizing Data with Python — University of Michigan",
];

const skills = [
  {
    category: "Software and Web Development",
    items: [
      "Languages: Python, JavaScript, Dart, PHP",
      "Frameworks & Libraries: FastAPI, Django, NodeJS, NextJS, ReactJS, Flutter, Laravel",
      "Frontend Technologies: HTML5, CSS3, Tailwind CSS, Responsive Design",
      "Backend & APIs: RESTful APIs, Authentication & Authorization, MVC & Service-Layer Architecture",
      "Databases & Storage: PostgreSQL, MySQL, SQLite, Firebase",
      "DevOps & Deployment: Docker, CI/CD Pipelines, AWS, Firebase, Hostinger VPS, Cloudflare",
    ],
  },
  {
    category: "Machine Learning & Deep Learning",
    items: [
      "ML Frameworks & Libraries: Scikit-learn, XGBoost, AutoML",
      "Deep Learning Frameworks: TensorFlow, Keras, PyTorch",
      "NLP & Speech: Hugging Face Transformers, Whisper / DeepSpeech",
      "Computer Vision: OpenCV",
      "Model Development: Feature Engineering, Model Training, Hyperparameter Tuning, Evaluation Metrics",
      "MLOps & Deployment: Model Pipelines, Inference APIs, Performance Monitoring",
    ],
  },
  {
    category: "Data Science",
    items: [
      "Data Analysis & Statistics: Python (Pandas, NumPy), R, SAS, SPSS",
      "Data Visualization: Tableau, Power BI, Matplotlib, Seaborn",
      "Data Processing: Data Cleaning, Transformation, Feature Engineering",
      "Statistical Methods: Descriptive & Inferential Statistics, Hypothesis Testing",
      "Predictive Analytics: Regression, Classification, Time Series Analysis",
      "Reporting & Insights: Research Reports, Dashboards, Data-Driven Decision Support",
    ],
  },
  {
    category: "Cloud Deployment",
    items: [
      "Cloud Platforms: AWS, Firebase",
      "Server & Hosting: Hostinger VPS, Linux Server Management",
      "Containerization: Docker",
      "CI/CD & Automation: GitHub Actions, CI/CD Pipelines",
      "Networking & Security: Cloudflare, SSL/TLS Configuration",
      "Deployment Practices: Environment Configuration, Scaling, Monitoring, Maintenance",
    ],
  },
  {
    category: "Cybersecurity",
    items: [
      "Network Analysis & Traffic Inspection: Wireshark, tcpdump",
      "Penetration Testing & Exploitation: Kali Linux, Metasploit",
      "Reconnaissance & Threat Intelligence: Nmap, Shodan",
      "Web & API Security Testing: Burp Suite, OWASP Top 10 practices",
      "Vulnerability Assessment: Nessus (basic), manual vulnerability analysis",
      "Security Research & Analysis: Log analysis, malware traffic inspection, phishing analysis",
    ],
  },
  {
    category: "Writing",
    items: [
      "Technical Writing: System Documentation, API Docs, User Guides, Troubleshooting Manuals",
      "Research Writing: Academic Papers, Methodology Sections, Literature Reviews",
      "Content Writing: Web Content, Blogs, Product Documentation",
      "Editing & Quality Assurance: Proofreading, Clarity Optimization, Style Consistency",
      "Documentation Tools: Markdown, Microsoft Word, Google Docs",
      "AI-Assisted Writing: ChatGPT, Claude AI (for drafting, refinement, and review)",
    ],
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top,#fff4e6_0%,#f6f3ee_45%,#efe8dd_100%)] text-foreground">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-[conic-gradient(from_120deg,#f6c08b,#f0e2c9,#f6c08b)] opacity-40 blur-2xl" />
      <div className="absolute -bottom-48 left-0 h-96 w-96 rounded-full bg-[radial-gradient(circle_at_center,#f4d1a6,#f6f3ee)] opacity-60 blur-2xl" />

      <main className="relative mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-28 sm:gap-24 sm:px-10">
        <nav className="fixed inset-x-0 top-0 z-30 border-b border-black/5 bg-white/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 text-sm font-semibold text-black/70 sm:px-10">
            <a href="#" className="text-black">
              Portfolio
            </a>
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-3 py-2 text-xs uppercase tracking-[0.22em] text-[color:var(--muted)] transition hover:border-black/30 hover:text-black md:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
            >
              Menu
              <span className="text-base">{menuOpen ? "✕" : "☰"}</span>
            </button>
            <div
              id="primary-navigation"
              className="hidden items-center gap-5 text-xs uppercase tracking-[0.22em] text-[color:var(--muted)] md:flex"
            >
              <a className="transition hover:text-black" href="#experience">
                Experience
              </a>
              <a className="transition hover:text-black" href="#projects">
                Projects
              </a>
              <a className="transition hover:text-black" href="#skills">
                Skills
              </a>
              <a
                className="transition hover:text-black"
                href="#awards-publications"
              >
                Achievements
              </a>
              <a className="transition hover:text-black" href="#certifications">
                Certifications
              </a>
              <a className="transition hover:text-black" href="#contact">
                Contact
              </a>
            </div>
          </div>
          <div
            className={`border-t border-black/5 bg-white/95 px-6 py-4 text-xs uppercase tracking-[0.22em] text-[color:var(--muted)] shadow-[0_18px_40px_-30px_rgba(0,0,0,0.35)] transition md:hidden ${
              menuOpen ? "block" : "hidden"
            }`}
          >
            <div className="flex flex-col gap-4">
              <a
                className="transition hover:text-black"
                href="#experience"
                onClick={() => setMenuOpen(false)}
              >
                Experience
              </a>
              <a
                className="transition hover:text-black"
                href="#projects"
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </a>
              <a
                className="transition hover:text-black"
                href="#skills"
                onClick={() => setMenuOpen(false)}
              >
                Skills
              </a>
              <a
                className="transition hover:text-black"
                href="#awards-publications"
                onClick={() => setMenuOpen(false)}
              >
                Achievements
              </a>
              <a
                className="transition hover:text-black"
                href="#certifications"
                onClick={() => setMenuOpen(false)}
              >
                Certifications
              </a>
              <a
                className="transition hover:text-black"
                href="#contact"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </div>
        </nav>
        <header className="flex flex-col items-start justify-between gap-10 pt-6 lg:flex-row lg:items-center sm: mt-24">
          <div className="animate-fade-up max-w-2xl">
            <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
              Software Developer • AI Research Engineer • Data Scientist
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              <span className="font-[var(--font-display)]">
                Akaraiwe Bright Chidozie
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[color:var(--muted)] text-justify">
              Software Developer, AI Research Engineer, Data Scientist, and
              Technical Writer with 5+ years of experience delivering 50+ global
              projects across the UK, US, Ghana, and Ivory Coast. I build
              scalable full-stack platforms, ML systems, and research-grade
              documentation that translate complex ideas into real products.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/Tech Akaraiwe Bright Chidoziemain.pdf"
                className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_30px_-16px_rgba(196,111,45,0.8)] transition hover:translate-y-[-2px] hover:bg-[color:var(--accent-dark)]"
              >
                Download CV
              </a>
              <a
                href="mailto:akaraiwebright9@gmail.com"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/80 transition hover:border-black/30 hover:text-black"
              >
                Contact Me
              </a>
              <a
                href="https://github.com/Bright688"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/80 transition hover:border-black/30 hover:text-black"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/bright-akaraiwe/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-semibold text-black/80 transition hover:border-black/30 hover:text-black"
              >
                LinkedIn
              </a>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                { label: "Years Experience", value: "5+" },
                { label: "Projects Delivered", value: "50+" },
                { label: "Countries Served", value: "4+" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-black/5 bg-white/70 px-5 py-4 shadow-[0_18px_40px_-24px_rgba(0,0,0,0.3)]"
                >
                  <p className="text-sm text-[color:var(--muted)]">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex w-full max-w-sm animate-fade-in justify-center">
            <div className="absolute -left-6 top-12 h-32 w-32 rounded-3xl border border-white/40 bg-white/60 shadow-[0_20px_50px_-32px_rgba(0,0,0,0.35)] backdrop-blur" />
            <div className="absolute -right-4 bottom-10 h-24 w-24 animate-float rounded-full bg-[color:var(--accent)]/80 blur-[40px]" />
            <div className="relative rounded-[32px] border border-white/70 bg-white/70 p-4 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.4)] backdrop-blur">
              <Image
                src="/profilepic.jpeg"
                alt="Akaraiwe Bright Chidozie"
                width={420}
                height={520}
                priority
                className="h-auto w-full rounded-[24px] object-cover"
              />
            </div>
          </div>
        </header>

        <section id="experience" className="animate-fade-up">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Experience
              </p>
              <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
                Building scalable software and research systems
              </h2>
            </div>
           
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-2 text-justify">
            {experience.map((role) => (
              <article
                key={`${role.role}-${role.location}`}
                className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.35)]"
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-sm text-[color:var(--muted)]">
                  <span>{role.location}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{role.role}</h3>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--muted)]">
                  {role.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="animate-fade-up">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Selected Projects
              </p>
              <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
                Product-focused builds with measurable outcomes
              </h2>
            </div>
          
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 text-justify">
            {projects.map((project) => (
              <a
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl border border-black/5 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.35)] transition hover:-translate-y-1"
              >
                <div className="flex items-center justify-between text-sm text-[color:var(--muted)]">
                  <span className="uppercase tracking-[0.2em] text-xs">
                    Project
                  </span>
                  <span className="text-[color:var(--accent)]">Visit</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold group-hover:text-[color:var(--accent-dark)]">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--muted)]">
                  {project.description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="animate-fade-up">
          <div className="rounded-[40px] border border-black/5 bg-white/80 p-10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
              Technical Skills
            </p>
            <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
              Full-spectrum expertise across software, data, and research
            </h2>
            <div className="mt-8 grid gap-6 lg:grid-cols-2 text-justify">
              {skills.map((skill) => (
                <div
                  key={skill.category}
                  className="rounded-3xl border border-black/5 bg-white/80 p-6 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.35)]"
                >
                  <h3 className="mt-3 text-lg font-semibold text-foreground">
                    {skill.category}
                  </h3>
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-[color:var(--muted)]">
                    {skill.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="awards-publications"
          className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="animate-fade-up rounded-[32px] border border-black/5 bg-white/80 p-8 shadow-[0_26px_60px_-40px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
              Key Achievements
            </p>
            <h2 className="mt-3 text-2xl font-semibold font-[var(--font-display)]">
              Highlights across software, AI, and data delivery
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-[color:var(--muted)] text-justify">
              <li>
                Delivered 50+ production-ready software, AI, and data projects
                across UK, US, Ghana, and Ivory Coast, supporting startups,
                research teams, and global clients.
              </li>
              <li>
                Designed, trained, and deployed 7+ AI/ML systems, including
                phishing detection engines, AI text humanizers, and content
                authenticity models with real-time interfaces.
              </li>
              <li>
                Built and shipped scalable full-stack platforms using FastAPI,
                React, NextJS, and NodeJS, including 3+ complete applications
                delivered within one month.
              </li>
              <li>
                Analyzed and modeled 10,000+ records across 20+ projects,
                producing predictive insights, automation workflows, and
                data-driven research outputs.
              </li>
              <li>
                Architected modular backend systems with dozens of API
                endpoints, concurrent-user support, and clean service-layer
                design for long-term scalability.
              </li>
              <li>
                Authored 10+ technical and research documents, including system
                specifications, API documentation, and academic-style reports
                supporting publication and product delivery.
              </li>
            </ul>
          </div>
          <div className="animate-fade-up rounded-[32px] border border-black/5 bg-white/80 p-8 shadow-[0_26px_60px_-40px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
              Publications
            </p>
            <ul className="mt-4 space-y-4 text-sm text-[color:var(--muted)] text-justify">
              {publications.map((pub) => (
                <li key={pub.title}>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-foreground transition hover:text-[color:var(--accent-dark)]"
                  >
                    {pub.title}
                  </a>
                  <p className="mt-1">{pub.venue}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="certifications" className="animate-fade-up">
          <div className="rounded-[32px] border border-black/5 bg-white/80 p-8 shadow-[0_26px_60px_-40px_rgba(0,0,0,0.35)]">
            <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
              Certifications
            </p>
            <div className="mt-4 grid gap-3 text-sm text-[color:var(--muted)] md:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="rounded-2xl border border-black/5 bg-white/70 px-4 py-3"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="animate-fade-up rounded-[36px] border border-black/5 bg-white/90 p-10 shadow-[0_30px_70px_-40px_rgba(0,0,0,0.35)]"
        >
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-[color:var(--muted)]">
                Let&apos;s Connect
              </p>
            <h2 className="mt-3 text-3xl font-semibold font-[var(--font-display)]">
              Ready for your next product build or research project
            </h2>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a
                className="rounded-full bg-[color:var(--accent)] px-6 py-3 text-center font-semibold text-white transition hover:bg-[color:var(--accent-dark)]"
                href="mailto:akaraiwebright@gmail.com"
              >
                akaraiwebright@gmail.com
              </a>
              <a
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-center font-semibold text-black/80 transition hover:border-black/30 hover:text-black"
                href="https://wa.me/2348145647420"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 32 32"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M16.04 3C9.36 3 3.98 8.38 3.98 15.06c0 2.39.7 4.71 2.03 6.7L4 29l7.39-1.94a12.1 12.1 0 0 0 4.64.93h.01c6.68 0 12.06-5.38 12.06-12.06S22.72 3 16.04 3zm0 21.9h-.01a9.92 9.92 0 0 1-4.23-.95l-.3-.13-4.38 1.15 1.17-4.26-.14-.33a9.9 9.9 0 0 1-1.05-4.32c0-5.47 4.46-9.93 9.94-9.93 5.47 0 9.93 4.46 9.93 9.93 0 5.48-4.46 9.94-9.93 9.94z" />
                    <path d="M21.53 18.45c-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.18.2-.35.23-.65.08-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.6.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.64-.94-2.24-.25-.6-.5-.52-.68-.53-.18-.01-.38-.01-.58-.01-.2 0-.52.08-.8.38-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.89 1.23 3.09.15.2 2.12 3.23 5.14 4.53.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.28-.2-.58-.35z" />
                  </svg>
                  +234 814 564 7420
                </span>
              </a>
              <a
                className="rounded-full border border-black/10 bg-white px-6 py-3 text-center font-semibold text-black/80 transition hover:border-black/30 hover:text-black"
                href="tel:+2250502273642"
              >
                <span className="inline-flex items-center justify-center gap-2">
                  <svg
                    className="h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.85 21 3 13.15 3 3a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.24 1.01l-2.2 2.2z" />
                  </svg>
                  +225 05 02 27 36 42
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
