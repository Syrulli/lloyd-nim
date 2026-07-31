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
    href: "#",
  },
  {
    title: "Cybersecurity Essentials",
    subtitle: "Cisco Networking Academy",
    icon: "/certificates/img-3.webp",
    rotate: 5,
    href: "#",
  },
  {
    title: "JSE2 - JavaScript 2",
    subtitle: "Cisco & JS Institute",
    icon: "/certificates/img-9.webp",
    rotate: 25,
    href: "#",
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