import { CertItem, StackCategory } from "@/types/globalTypes";

export const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
];

export const CertItems: CertItem[] = [
  {
    title: "DevNet Associate",
    subtitle: "Cisco Networking Academy",
    icon: "/certificates/img-2.webp",
    rotate: -15,
    href: "https://www.credly.com/badges/ca60dd11-f8bd-4f7b-8de5-a950db314e8b/public_url",
    certificate: "/certificates/DevNet Associate.pdf",
  },
  {
    title: "Cybersecurity Essentials",
    subtitle: "Cisco Networking Academy",
    icon: "/certificates/img-3.webp",
    rotate: 5,
    href: "https://www.credly.com/badges/c57eacd4-fcd9-444c-a608-3963290fbdd8/public_url",
    certificate: "/certificates/Cybersecurity Essentials.pdf",
  },
  {
    title: "JSE2 - JavaScript Essentials 2",
    subtitle: "Cisco & JS Institute",
    icon: "/certificates/img-9.webp",
    rotate: 25,
    href: "https://www.credly.com/badges/75514c33-c55a-4ccf-a3b1-fb23d1f7ae08/public_url",
    certificate: "/certificates/JavaScript_Essentials_2_certificate.pdf",
  },
  {
    title: "CPP - Advanced Programming in C++",
    subtitle: "Cisco Networking Academy",
    icon: "",
    rotate: -5,
    href: "",
    certificate: "/certificates/CPP - Advanced Programming in C++.pdf",
  },
  {
    title: "CPA - Programming Essentials in C++",
    subtitle: "Cisco Networking Academy",
    icon: "",
    rotate: 15,
    href: "",
    certificate: "/certificates/CPA - Programming Essentials in C++.pdf",
  },
  {
    title: "CCNAv7: Introduction to Networks",
    subtitle: "Cisco Networking Academy",
    icon: "/certificates/img-8.webp",
    rotate: -10,
    href: "https://www.credly.com/badges/bae858a6-b85e-44bf-bb16-bddca0720e39/public_url",
    certificate: "/certificates/Introduction to Networks.pdf",
  },
  {
    title: "Network Security",
    subtitle: "Cisco Networking Academy",
    icon: "/certificates/img-7.webp",
    rotate: 10,
    href: "https://www.credly.com/badges/7c20cadc-b942-47fa-9e57-fe8d4befa9bf/public_url",
    certificate: "/certificates/Network Security.pdf",
  },
  {
    title: "Emerging Technologies Workshop - Model Driven Programmability",
    subtitle: "Cisco Networking Academy",
    icon: "",
    rotate: -20,
    href: "",
    certificate:
      "/certificates/Emerging_Technologies_Workshop_-_Model_Driven_Programmability_certificate.pdf",
  },
  {
    title: "JavaScript Essentials 1",
    subtitle: "Cisco & OpenEDG Institute",
    icon: "/certificates/img-1.webp",
    rotate: 20,
    href: "https://www.credly.com/badges/3d46908c-feaa-4dcb-9924-5c756f45714b/public_url",
    certificate: "/certificates/JavaScript Essentials 1.pdf",
  },
  {
    title: "Introduction to Cybersecurity",
    subtitle: "Cisco Networking Academy",
    icon: "/certificates/img-5.webp",
    rotate: -8,
    href: "https://www.credly.com/badges/fa8795ee-f246-492b-b658-343d958c28f4/public_url",
    certificate: "/certificates/Introduction to Cybersecurity.pdf",
  },
  {
    title: "CCNAv7: Switching, Routing, and Wireless Essentials",
    subtitle: "Cisco Networking Academy",
    icon: "/certificates/img-6.webp",
    rotate: 8,
    href: "https://www.credly.com/badges/a87ee30c-0450-49c8-8a8d-d3d3365b793e/public_url",
    certificate:
      "/certificates/Switching, Routing, and Wireless Essentials.pdf",
  },
  {
    title: "CCNA: Enterprise Networking, Security & Automation",
    subtitle: "Cisco Networking Academy",
    icon: "/certificates/img-4.webp",
    rotate: -12,
    href: "https://www.credly.com/badges/3b144662-b92a-46c0-9ef0-a5e996272736/public_url",
    certificate:
      "/certificates/Enterprise Networking, Security, and Automation.pdf",
  },
  {
    title: "Anti-Money Laundering and Counter-Terrorism Financing",
    subtitle: "AMLC – AML/CTF",
    icon: "/certificates/img-10.webp",
    rotate: 12,
    href: "",
    certificate: "/certificates/AML-CTF.pdf",
  },
  {
    title: "AMA University - Internship",
    subtitle: "AMA University",
    icon: "",
    rotate: 0,
    href: "",
    certificate: "/certificates/OJT COC - LLOYD S. NIM .pdf",
  },
];

export const Techstack = [
  "TypeScript", "React", "Next.js", "Tailwind", "Node.js", "MySQL",
  "MongoDB", "SQLite", "Laravel", "WAMP", "MERN", "Postman",
  "Jenkins", "Git", "Gitlab", "Cognito", "Keycloak", "Visual Studio Code",
];

export const TestimonialProfiles = [
  {
    id: 0,
    image: "/testimonials/img-1.webp",
  },
  {
    id: 1,
    image: "/testimonials/img-2.webp",
  },
  {
    id: 2,
    image: "/testimonials/img-3.webp",
  },
  {
    id: 3,
    image: "/testimonials/img-4.webp",
  },
  {
    id: 4,
    image: "/testimonials/img-5.webp",
  },
  {
    id: 5,
    image: "/testimonials/img-6.webp",
  },
  {
    id: 6,
    image: "/testimonials/img-7.webp",
  },
  {
    id: 7,
    image: "/testimonials/img-8.webp",
  },
];

export const ExperienceMeta = [
  { role: "Full Stack Developer", org: "Fortune Pay (Easypay global EMI Corp.)", years: "AUG 2025 - PRESENT" },
  { role: "Freelance Developer", org: "Rizal Technological University (RTU)", years: "APR 2025 - JUL 2025 " },
  { role: "Freelance Developer", org: "Quezon City Academy Foundation", years: "JUL 2025 - SEP 2025" },
  { role: "Internship", org: "AMA University", years: "Nov 2024" },
  { role: "Lead Back-End Developer", org: "APPCON Competition", years: "2023" },
  { role: "Front-End Developer", org: "MLQU University", years: "2022" },
  { role: "Collaborative Freelancing", org: "Lazy Developers", years: "2021" },
];

export const StackItem: StackCategory[] = [
  {
    key: "frontend",
    label: "Frontend",
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue.js",
      "Next.js",
      "Tailwind",
      "Bootstrap",
      "Shadcn",
      "Material UI",
      "AJAX",
      "jQuery",
      "Vite",
      "SCSS",
      "next-intl",
    ],
  },
  {
    key: "mobile",
    label: "Mobile",
    items: [
      "Flutter",
      "Dart",
      "GetX",
      "Redux",
      "React Native",
    ],
  },
  {
    key: "backendData",
    label: "Backend & Data",
    items: [
      "WAMP",
      "MERN",
      "RESTful",
      "PHP",
      "Laravel",
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "SQLite",
      "OAuth",
      "JWT",
    ]
  },
  {
    key: "ml/ai",
    label: "Machine Learning / AI",
    items: [
      "Tensorflow.js",
      "Teachable Machine",
      "OpenAI",
    ],
  },
  {
    key: "testingApi",
    label: "Testing & API",
    items: [
      "Jest",
      "Postman",
      "Swagger",
    ],
  },
  {
    key: "devTools",
    label: "DevOps & Cloud",
    items: [
      "Vercel",
      "Netlify",
      "Hostinger",
      "Jenkins",
      "Github",
      "Gitlab",
      "Gitlab CI",
      "Git",
    ],
  },
  {
    key: "security/identity",
    label: "Security & Identity",
    items: [
      "Okta",
      "Auth0",
      "Cognito",
      "Keycloak",
    ],
  },
];