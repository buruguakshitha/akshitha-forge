import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Github, Linkedin, Code2, Mail, Phone, MapPin, Download, ArrowRight,
  Briefcase, GraduationCap, Award, Sparkles, Cpu, Database, Brain, Wrench,
  ExternalLink, Calendar, Trophy
} from "lucide-react";
import profileImg from "../assets/akki-themed.jpg";
import resumeAsset from "../assets/resume.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
      meta: [
      { title: "Burugu Akshitha — Data Science Student Portfolio" },
      { name: "description", content: "Computer Science & Data Science undergraduate building intelligent solutions in AI, ML and software development." },
      { property: "og:title", content: "Burugu Akshitha — Data Science Student" },
      { property: "og:description", content: "Portfolio of Burugu Akshitha — CS & Data Science undergrad, Data Science Student." },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Code2, href: "https://leetcode.com", label: "LeetCode" },
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
};

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,92vw)]"
    >
      <div className="glass rounded-2xl px-5 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="h-9 w-9 rounded-lg grid place-items-center font-bold text-primary-foreground"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
            BA
          </span>
          <span className="hidden sm:inline font-semibold tracking-wide">Akshitha</span>
        </a>
        <ul className="hidden md:flex items-center gap-1">
          {NAV.map(n => (
            <li key={n.href}>
              <a href={n.href} className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground rounded-lg transition-colors">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact"
           className="group inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.03]"
           style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
          Let's Connect <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </motion.nav>
  );
}

function Particles() {
  const items = Array.from({ length: 24 });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const size = 2 + Math.random() * 4;
        const delay = Math.random() * 12;
        const dur = 12 + Math.random() * 14;
        const left = Math.random() * 100;
        return (
          <span key={i}
            className="absolute bottom-0 rounded-full"
            style={{
              left: `${left}%`,
              width: size, height: size,
              background: "oklch(0.7 0.27 22)",
              boxShadow: "0 0 12px oklch(0.7 0.27 22 / 80%)",
              animation: `particle ${dur}s linear ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}

function Hero() {
  const stats = [
    { v: "3+", l: "Projects Completed" },
    { v: "1", l: "Internship" },
    { v: "8.98", l: "CGPA" },
  ];
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute inset-0" style={{ background: "var(--gradient-radial)" }} />
      <Particles />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div>
          <motion.div {...fadeUp}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs uppercase tracking-[0.18em] text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Computer Science & Data Science Undergraduate
          </motion.div>
          <motion.h1 {...fadeUp} transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display font-extrabold text-5xl sm:text-6xl lg:text-7xl leading-[0.95]">
            <span className="block text-muted-foreground text-2xl sm:text-3xl font-medium mb-2">Hi, I'm</span>
            <span className="block">BURUGU</span>
            <span className="block text-gradient glow-text">AKSHITHA</span>
          </motion.h1>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.12 }}
            className="mt-5 text-sm sm:text-base text-primary/90 font-medium">
            Data Science Student · Software Developer · Problem Solver
          </motion.p>
          <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-4 text-muted-foreground max-w-xl leading-relaxed">
            Computer Science and Data Science undergraduate skilled in Python, Java, Machine
            Learning, and Software Development. Experienced in developing AI-driven solutions
            through internships and projects, with a strong passion for Artificial Intelligence,
            Data Science, and problem-solving..
          </motion.p>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-8 flex flex-wrap gap-3">
            <a href="#projects"
               className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03]"
               style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-lg)" }}>
              View Projects <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href={resumeAsset.url} download="FINAL_RESUME1.pdf"
               className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold hover:border-primary/60 transition-colors">
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {stats.map(s => (
              <div key={s.l} className="glass rounded-xl p-4 hover:border-primary/50 transition-colors">
                <div className="text-2xl font-bold text-gradient">{s.v}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.36 }}
            className="mt-8 flex items-center gap-3">
            {SOCIAL.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label}
                 className="glass h-11 w-11 grid place-items-center rounded-xl hover:text-primary hover:border-primary/60 transition-all hover:-translate-y-0.5">
                <s.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-[26rem]">
          <div className="absolute -inset-6 rounded-full opacity-60 blur-3xl"
               style={{ background: "var(--gradient-primary)" }} />
          <div className="relative aspect-square rounded-full p-[3px]"
               style={{
                 background: "var(--gradient-primary)",
                 boxShadow: "0 0 40px color-mix(in oklab, var(--color-primary) 55%, transparent), 0 0 90px color-mix(in oklab, var(--color-primary) 35%, transparent)",
                 animation: "float 6s ease-in-out infinite",
               }}>
            <div className="relative h-full w-full overflow-hidden rounded-full bg-background ring-1 ring-primary/40">
              <img src={profileImg} alt="Burugu Akshitha" width={1024} height={1024}
                   className="h-full w-full object-cover object-center" />
            </div>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 glass rounded-xl px-4 py-2 flex items-center gap-3 whitespace-nowrap">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse shadow-[0_0_12px_var(--color-primary)]" />
              <span className="text-xs font-mono text-muted-foreground">$ status: building_the_future...</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Section({ id, eyebrow, title, children }: { id: string; eyebrow: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div {...fadeUp} className="mb-14 text-center">
          <div className="text-xs uppercase tracking-[0.3em] text-primary mb-3">{eyebrow}</div>
          <h2 className="text-4xl sm:text-5xl font-extrabold">{title}</h2>
          <div className="mx-auto mt-4 h-px w-24" style={{ background: "var(--gradient-primary)" }} />
        </motion.div>
        {children}
      </div>
    </section>
  );
}

function About() {
  const info = [
    { k: "Name", v: "Burugu Akshitha" },
    { k: "Degree", v: "B.Tech CS & Data Science" },
    { k: "College", v: "CMR College of Engg. & Tech." },
    { k: "Location", v: "Hyderabad, India" },
    { k: "Graduation", v: "2027" },
    { k: "CGPA", v: "8.98" },
  ];
  return (
    <Section id="about" eyebrow="Who I Am" title="About Me">
      <div className="grid lg:grid-cols-2 gap-10 items-start">
        <motion.div {...fadeUp} className="space-y-5 text-muted-foreground leading-relaxed">
          <p>
            Computer Science and Data Science undergraduate skilled in Python, Java, Machine
            Learning, and Software Development. Experienced in developing AI-driven solutions
            through internships and projects, with a strong passion for Artificial Intelligence,
            Data Science, and problem-solving.
          </p>
        </motion.div>
        <motion.div {...fadeUp} className="grid sm:grid-cols-2 gap-3">
          {info.map(i => (
            <div key={i.k} className="glass rounded-xl p-5 hover:border-primary/50 transition-colors">
              <div className="text-[11px] uppercase tracking-widest text-primary">{i.k}</div>
              <div className="mt-1 font-semibold">{i.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}

function Skills() {
  const groups = [
    { icon: Cpu, title: "Programming Languages", items: ["Java", "Python", "C", "SQL"] },
    { icon: Brain, title: "Libraries & Frameworks", items: ["OpenCV", "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Keras"] },
    { icon: Database, title: "Core Concepts", items: ["OOP", "DSA", "Machine Learning", "DBMS", "Artificial Intelligence", "Problem Solving"] },
    { icon: Wrench, title: "Tools & Platforms", items: ["Git", "GitHub", "VS Code", "Arduino IDE"] },
  ];
  return (
    <Section id="skills" eyebrow="Tech Arsenal" title="Skills & Stack">
      <div className="grid sm:grid-cols-2 gap-5">
        {groups.map((g, idx) => (
          <motion.div key={g.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.08 }}
            className="glass rounded-2xl p-6 group hover:border-primary/60 transition-all hover:-translate-y-1"
            style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-10 w-10 grid place-items-center rounded-xl text-primary-foreground"
                   style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                <g.icon className="h-5 w-5" />
              </div>
              <h3 className="font-semibold text-lg">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map(it => (
                <span key={it}
                  className="rounded-lg px-3 py-1.5 text-xs font-medium border border-primary/20 bg-primary/5 hover:bg-primary/15 hover:border-primary/60 transition-colors">
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const PROJECTS = [
  {
    title: "COVID-19 Face Mask Detection",
    tech: ["Python", "OpenCV", "TensorFlow", "Keras"],
    desc: "Trained a CNN to detect face-mask compliance in real-time video feeds with 96% accuracy. Real-time inference with OpenCV and data augmentation for improved generalization.",
    features: ["Real-time detection", "CNN model", "96% accuracy", "OpenCV pipeline"],
    accent: "AI · Vision",
  },
  {
    title: "Cyberbullying Detection System",
    tech: ["Python", "ML", "NLP", "Scikit-learn"],
    desc: "Machine learning–based system that identifies harmful content in text using NLP preprocessing, sentiment analysis, and supervised text classification.",
    features: ["Text classification", "NLP preprocessing", "Sentiment analysis", "Harmful-content flagging"],
    accent: "NLP · ML",
  },
  {
    title: "Sentinel Striker — Autonomous Target Detection",
    tech: ["Arduino UNO", "Embedded C", "Ultrasonic Sensors"],
    desc: "Automated target detection using ultrasonic sensors on Arduino UNO. Embedded firmware processes sensor data and triggers a servo-controlled response mechanism.",
    features: ["Object detection", "Embedded firmware", "Sensor integration", "Hardware ↔ software"],
    accent: "Embedded · IoT",
  },
];

function Projects() {
  return (
    <Section id="projects" eyebrow="Selected Work" title="Featured Projects">
      <div className="grid lg:grid-cols-3 gap-6">
        {PROJECTS.map((p, idx) => (
          <motion.article key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: idx * 0.1 }}
            className="glass rounded-2xl p-6 flex flex-col group hover:border-primary/60 hover:-translate-y-1 transition-all"
            style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="relative h-40 rounded-xl mb-5 overflow-hidden grid-bg"
                 style={{ background: "linear-gradient(135deg, oklch(0.15 0.02 20), oklch(0.08 0.01 20))" }}>
              <div className="absolute inset-0 opacity-60" style={{ background: "var(--gradient-radial)" }} />
              <div className="absolute inset-0 grid place-items-center">
                <Sparkles className="h-12 w-12 text-primary opacity-80" style={{ filter: "drop-shadow(0 0 12px var(--color-primary))" }} />
              </div>
              <span className="absolute top-3 left-3 glass rounded-md px-2 py-1 text-[10px] uppercase tracking-widest text-primary">
                {p.accent}
              </span>
            </div>
            <h3 className="font-semibold text-lg leading-snug">{p.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            <ul className="mt-4 grid grid-cols-2 gap-1.5 text-xs text-muted-foreground">
              {p.features.map(f => (
                <li key={f} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-primary" /> {f}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tech.map(t => (
                <span key={t} className="rounded-md px-2 py-1 text-[10px] font-mono border border-primary/20 bg-primary/5">{t}</span>
              ))}
            </div>
            <div className="mt-5 flex gap-2 pt-4 border-t border-white/5">
              <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg glass px-3 py-2 text-xs font-medium hover:border-primary/60 transition-colors">
                <Github className="h-3.5 w-3.5" /> Code
              </a>
              <a href="#" className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-primary-foreground transition-all hover:scale-[1.02]"
                 style={{ background: "var(--gradient-primary)" }}>
                <ExternalLink className="h-3.5 w-3.5" /> Demo
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Journey" title="Professional Experience">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 top-2 bottom-2 w-px" style={{ background: "var(--gradient-primary)" }} />
        <motion.div {...fadeUp} className="relative pl-14">
          <span className="absolute left-0 top-2 h-8 w-8 rounded-full grid place-items-center"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
            <Briefcase className="h-4 w-4 text-primary-foreground" />
          </span>
          <div className="glass rounded-2xl p-6" style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-xl font-semibold">Python Development Intern</h3>
              <span className="text-xs glass rounded-md px-2 py-1 inline-flex items-center gap-1.5">
                <Calendar className="h-3 w-3 text-primary" /> Jan 2025 – Mar 2025
              </span>
            </div>
            <div className="text-primary font-medium mt-1">Infotact Solutions</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {[
                "Developed Python automation scripts for structured data processing.",
                "Reduced manual effort through targeted automation pipelines.",
                "Optimized script performance and improved efficiency by 15%.",
                "Followed strong coding standards and documentation practices.",
              ].map(t => (
                <li key={t} className="flex gap-2"><span className="text-primary mt-1">▸</span>{t}</li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

function Education() {
  const items = [
    { school: "CMR College of Engineering and Technology", degree: "B.Tech — Computer Science & Data Science", time: "2023 – 2027", score: "CGPA 8.98" },
    { school: "Narayana Junior College", degree: "Intermediate Education (MPC)", time: "2021 – 2023", score: "CGPA 9.74" },
  ];
  return (
    <Section id="education" eyebrow="Academics" title="Education">
      <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {items.map((e, i) => (
          <motion.div key={e.school} {...fadeUp} transition={{ duration: 0.6, delay: i * 0.1 }}
            className="glass rounded-2xl p-6 hover:border-primary/60 transition-colors">
            <div className="flex items-center gap-3 mb-3">
              <span className="h-10 w-10 rounded-xl grid place-items-center text-primary-foreground"
                    style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-xs glass rounded-md px-2 py-1">{e.time}</span>
            </div>
            <h3 className="font-semibold text-lg">{e.school}</h3>
            <p className="text-sm text-muted-foreground mt-1">{e.degree}</p>
            <div className="mt-3 inline-flex items-center gap-2 text-primary font-medium">
              <Trophy className="h-4 w-4" /> {e.score}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Certifications() {
  const certs = [
    {
      title: "Salesforce Certified Agentforce Specialist",
      org: "Salesforce",
      year: "2025",
      category: "Artificial Intelligence & CRM",
      subs: [],
    },
    {
      title: "AI Foundation and Advanced AI Program",
      org: "Hexart",
      year: "2025",
      category: "Artificial Intelligence",
      subs: [],
    },
    {
      title: "Google Cloud Generative AI Program",
      org: "Google Cloud & L4G",
      year: "2025",
      category: "Cloud Computing & Generative AI",
      subs: [],
    },
    {
      title: "Cisco Networking Academy Certifications",
      org: "Cisco Networking Academy",
      year: "2025",
      category: "Networking, Data Science & Cyber Security",
      subs: ["Networking Basics", "Introduction to Data Science", "Cyber Security Essentials"],
    },
  ];
  return (
    <Section id="certifications" eyebrow="Credentials" title="Certifications">
      <div className="grid sm:grid-cols-2 gap-5 max-w-5xl mx-auto">
        {certs.map((c, i) => (
          <motion.div key={c.title} {...fadeUp} transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:border-primary/60 transition-all hover:-translate-y-0.5"
            style={{ boxShadow: "var(--shadow-elegant)" }}>
            <div className="flex items-center gap-3 mb-3">
              <span className="h-10 w-10 rounded-xl grid place-items-center text-primary-foreground shrink-0"
                    style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                <Award className="h-5 w-5" />
              </span>
              <span className="text-xs glass rounded-md px-2 py-1">{c.year}</span>
            </div>
            <h3 className="font-semibold text-lg leading-snug">{c.title}</h3>
            <p className="text-sm text-primary font-medium mt-1">{c.org}</p>
            <p className="text-xs text-muted-foreground mt-1">{c.category}</p>
            {c.subs.length > 0 && (
              <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                {c.subs.map(s => (
                  <li key={s} className="flex items-center gap-2">
                    <span className="h-1 w-1 rounded-full bg-primary shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" eyebrow="Get In Touch" title="Let's Build Something Amazing Together">
      <p className="-mt-8 mb-12 text-center text-muted-foreground max-w-2xl mx-auto">
        I'm always open to discussing new opportunities, innovative projects, internships, and collaborations.
      </p>
      <div className="max-w-2xl mx-auto">
        <motion.div {...fadeUp} className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: "buruguakshitha457@gmail.com", href: "mailto:buruguakshitha457@gmail.com" },
            { icon: Phone, label: "Phone", value: "+91 93819 35580", href: "tel:+919381935580" },
            { icon: MapPin, label: "Location", value: "Hyderabad, India" },
          ].map(c => (
            <a key={c.label} href={c.href ?? "#"}
               className="glass rounded-xl p-5 flex items-center gap-4 hover:border-primary/60 hover:-translate-y-0.5 transition-all block">
              <span className="h-11 w-11 rounded-xl grid place-items-center text-primary-foreground shrink-0"
                    style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
                <c.icon className="h-5 w-5" />
              </span>
              <div>
                <div className="text-[11px] uppercase tracking-widest text-muted-foreground">{c.label}</div>
                <div className="font-medium">{c.value}</div>
              </div>
            </a>
          ))}
          <div className="glass rounded-xl p-5">
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground mb-3">Find Me Online</div>
            <div className="flex gap-2">
              {SOCIAL.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                   className="glass h-11 w-11 grid place-items-center rounded-xl hover:text-primary hover:border-primary/60 transition-all">
                  <s.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}


function Footer() {
  return (
    <footer className="relative mt-10 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-3">
          <span className="h-8 w-8 rounded-lg grid place-items-center font-bold text-primary-foreground text-xs"
                style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>BA</span>
          <span>© 2026 Burugu Akshitha. All Rights Reserved.</span>
        </div>
        <div className="font-mono text-xs text-primary/80">// Code. Learn. Innovate. Create Impact.</div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
