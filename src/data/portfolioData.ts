import { NavItem, ExperienceItem, EducationItem, CareerPath, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: "Hillary Onyango",
  firstName: "Hillary",
  lastName: "Onyango",
  year: "2026",
  title: "IT Graduate | Freelancer | Investing in Health & Self-Development",
  roleHeadline: "IT Graduate & Freelance Technology Professional",
  bio: "Information Technology graduate building practical digital solutions across web development, technical support, and IT systems.",
  location: "Rongo, Migori County, Kenya",
  country: "Kenya",
  email: "onyangohillary15@gmail.com",
  linkedin: "linkedin.com/in/hillary-onyango-402947415",
  linkedinUrl: "https://www.linkedin.com/in/hillary-onyango-402947415",
  currentRole: {
    title: "Data Research Analyst",
    type: "Freelance",
    period: "2022 — Present",
  },
  lookingFor: [
    "Application Support",
    "Technical Support Engineering",
    "Full-Stack Internships"
  ],
  techStack: [
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "REST APIs",
    "Git",
    "Linux",
    "Windows",
    "TCP/IP",
    "Active Directory",
    "Troubleshooting"
  ]
};

export const NAV_ITEMS: NavItem[] = [
  { id: "hero", number: "01", label: "Home" },
  { id: "about", number: "02", label: "About" },
  { id: "experience", number: "03", label: "Experience" },
  { id: "expertise", number: "04", label: "Expertise" },
  { id: "focus-education", number: "05", label: "Education & Direction" },
  { id: "contact", number: "06", label: "Contact" },
];

export const ABOUT_PILLARS = [
  {
    title: "Web Development Foundation",
    description: "Architecting responsive, performant web applications using modern JavaScript, React, and REST APIs with attention to clean code standards."
  },
  {
    title: "IT Systems & Diagnostics",
    description: "Hands-on experience in hardware assembly, OS deployment, user access management, and rapid troubleshooting of critical system faults."
  },
  {
    title: "Networks & Administration",
    description: "Practical grasp of TCP/IP protocol suites, network configurations, Active Directory directory services, and Linux/Windows environments."
  },
  {
    title: "Data Analysis & Databases",
    description: "Designing relational database schemas with SQL, optimizing queries, and delivering precise technical and qualitative data research."
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Data Research Analyst",
    company: "Freelance",
    period: "2022 — Present",
    type: "Freelance",
    description: "Conducting systematic data gathering, analytical research, validation, and qualitative synthesis. Transforming unstructured datasets into structured insights for technical problem-solving.",
    skills: ["Data Analysis", "SQL", "Research Methodologies", "Qualitative Synthesis"]
  },
  {
    id: "exp-2",
    role: "Freelance Writer",
    company: "Independent",
    period: "2020 — Present",
    type: "Freelance",
    description: "Producing concise, well-structured technical documentation, analytical writeups, and clear guides communicating complex technical topics to diverse audiences.",
    skills: ["Technical Writing", "Documentation", "Research", "Communication"]
  },
  {
    id: "exp-3",
    role: "Attache",
    company: "Rongo University",
    period: "September 2024 — December 2024",
    location: "Migori County, Kenya",
    type: "On-site Attachment",
    description: "Assisted university IT operations, supported campus computer lab networks, resolved hardware/software user incidents, and participated in systems maintenance.",
    skills: ["Campus IT Support", "Network Maintenance", "Hardware Diagnostics", "User Assistance"]
  },
  {
    id: "exp-4",
    role: "Hardware Software Technician",
    company: "Technical Services",
    period: "2018 — 2020",
    location: "Rongo",
    type: "Technical Specialist",
    description: "Performed component-level hardware diagnostics, device repairs, operating system installations, driver configurations, and hands-on client technical troubleshooting.",
    skills: ["Hardware Repair", "OS Deployment", "System Diagnostics", "Customer Support"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "WEB DEVELOPMENT",
    skills: [
      { name: "JavaScript", description: "Modern ES6+ syntax, asynchronous programming, DOM manipulation" },
      { name: "React", description: "Component architecture, hooks, state management, SPA design" },
      { name: "Node.js", description: "Backend runtime, server scripting, middleware integration" },
      { name: "SQL", description: "Relational database querying, schema structuring, data integrity" },
      { name: "REST APIs", description: "Endpoint design, HTTP protocol, JSON serialization, integration" },
      { name: "Git", description: "Version control, branching workflows, collaborative repositories" },
      { name: "Responsive Web Development", description: "Mobile-first layouts, flexible grids, cross-browser compatibility" }
    ]
  },
  {
    category: "IT SUPPORT & SYSTEMS",
    skills: [
      { name: "Linux Administration", description: "CLI navigation, permissions, shell utilities, package management" },
      { name: "Windows Administration", description: "System configuration, registry, Group Policy, service control" },
      { name: "TCP/IP", description: "Subnetting, routing basics, DNS/DHCP configuration, packet flow" },
      { name: "Active Directory", description: "User account management, access permissions, domain services" },
      { name: "Network Troubleshooting", description: "Diagnostic utilities (ping, traceroute, netstat), connectivity resolution" },
      { name: "Technical Support", description: "Helpdesk workflow, issue escalation, incident documentation" },
      { name: "System Troubleshooting", description: "Root-cause fault isolation, error logs analysis, patch updates" },
      { name: "Database Management", description: "Relational data stores, backup procedures, query tuning" }
    ]
  }
];

export const EDUCATION_LIST: EducationItem[] = [
  {
    id: "edu-1",
    institution: "KCA University",
    degree: "Bachelor of Science — Information Technology",
    period: "September 2021 — July 2026",
    details: "Comprehensive coursework in software engineering, database systems, computer networking, operating systems, information systems security, and systems analysis."
  },
  {
    id: "edu-2",
    institution: "Testimony School",
    degree: "High School / Secondary Diploma Programs",
    period: "2014 — 2017",
    details: "Secondary education foundation with strong emphasis on sciences, mathematics, and analytical reasoning."
  }
];

export const CAREER_PATHS: CareerPath[] = [
  {
    id: "career-1",
    title: "APPLICATION SUPPORT",
    tag: "Production Reliability",
    description: "Bridging the gap between users and software products by isolating bugs, triaging application errors, verifying API payloads, and ensuring uninterrupted service uptime.",
    keySkills: ["Incident Triaging", "API Debugging", "Log Analysis", "SLA Adherence"]
  },
  {
    id: "career-2",
    title: "TECHNICAL SUPPORT ENGINEERING",
    tag: "Systems & Infrastructure",
    description: "Delivering second-tier technical resolution for complex network protocols, Active Directory domain configurations, operating systems, and client-server hardware.",
    keySkills: ["Network Diagnostics", "OS Diagnostics", "Root Cause Analysis", "User Support"]
  },
  {
    id: "career-3",
    title: "FULL-STACK DEVELOPMENT",
    tag: "Product Engineering",
    description: "Crafting end-to-end web applications combining robust backend services, structured SQL databases, and responsive, accessible React user interfaces.",
    keySkills: ["React / JavaScript", "Node.js Services", "SQL Databases", "Clean Code Architecture"]
  }
];
