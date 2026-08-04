import { CertItem, StackCategory, Project } from "@/types/globalTypes";

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

export const mockProjects: Project[] = [
  {
    id: 1,
    title: "Dental Appointment Scheduling System",
    description: "This web application streamlines dental appointment scheduling while integrating an AI-powered diagnostic feature. Using a Convolutional Neural Network (CNN) trained via Teachable Machine, the AI detects teeth images to detect common conditions such as decay, gingivitis, and malocclusion. Patients receive instant image-based dental insights, recommended actions, and service suggestions—enhancing both accessibility and early detection in oral healthcare.",
    image: ['/projects/Dental/img-1.webp', '/projects/Dental/img-2.webp', '/projects/Dental/img-3.webp', '/projects/Dental/img-4.webp', '/projects/Dental/img-5.webp', '/projects/Dental/img-6.webp', '/projects/Dental/img-7.webp'],
    features: [
      "AI-Powered Dental Appointments: An all-in-one system for booking appointments and detecting dental issues a CNN-based image analysis trained with Teachable Machine.",
      "AI Dental Recommendations: Trained via Teachable Machine, the AI model detects dental conditions from images and automatically provides suitable service recommendations along with a suggested appointment date and time.",
      "CNN-Based Severity Classification: Beyond detecting whether a dental condition exists, the CNN model classifies the severity level (e.g., mild, moderate, severe) of decay, staining, or malocclusion—supporting more tailored treatment planning.",
      "Dynamic Time Slot Optimization: The system automatically adjusts available time slots based on dentist workload, real-time cancellations, and AI-predicted appointment durations depending on the complexity of detected conditions.",
      "Confidence-Based Classification Thresholding: To minimize false positives, the system classifies a condition only if the prediction confidence exceeds a set threshold (e.g., 85%). If confidence is low, the system may flag the case as “Uncertain” and prompt for a professional review.",
      "Dental Charting & Treatment Planning: Dentis can create and manage digital dental charts, document conditions, and plan treatments for each patient.",
      "Expense Tracking (Chart.js): Visualizes dental service expenses over time using Chart.js for better financial monitoring and transparency.",
      "Smart Notifications via SIM and Email: The system includes automated SMS (SIM-based) and email notifications. Patients receive real-time updates such as appointment confirmations, reminders, and rescheduling alerts—ensuring they are always informed and prepared. This feature reduces no-shows, improves clinic efficiency, and offers a more professional, reliable patient experience.",
    ],

    techStack: ["PHP", "Teachable Machine", "MySQL", "AJAX", "jQuery", "Bootstrap", "PHPMailer", "Chart.js", "Hostinger"],
    size: "large"
  },
  {
    id: 2,
    title: "RTU IPCRs",
    description: "The Individual Performance Commitment and Review (IPCR) System is a secure and dynamic platform designed to streamline performance evaluation processes within an organization. It automates the generation of IPCR records, sends real-time email notifications upon record updates, and provides live performance tracking for improved transparency. With dedicated access levels for HR personnel, Department Heads, Employees, and the Super Admin, the system ensures efficient management, accountability, and data integrity across all users.",
    image: ["/projects/Rtu/img-1.webp", "/projects/Rtu/img-2.webp", "/projects/Rtu/img-3.webp", "/projects/Rtu/img-4.webp", "/projects/Rtu/img-5.webp", "/projects/Rtu/img-7.webp", "/projects/Rtu/img-6.webp", "/projects/Rtu/img-8.webp", "/projects/Rtu/img-9.webp"],
    features: [
      "Uses the App Router with API Routes and Server Actions to manage authentication, business logic, and database operations in a single application.",
      "Stores employee profiles, IPCR records, evaluations, and historical performance data in a centralized NoSQL database.",
      "Provides dedicated dashboards and permissions for HR, Department Heads, Employees, and the Super Admin to ensure secure workflows.",
      "Uses Chart.js to display real-time charts, summaries, and performance trends for employees and departments.",
      "Integrates Nodemailer to send email notifications whenever IPCR records are submitted, reviewed, approved, or updated.",
      "Utilizes SheetJS to generate, import, and export IPCR records in Excel format for reporting and documentation.",
      "Implements secure login, protected pages, and server-side authorization to safeguard sensitive employee information.",
      "Guides users through each evaluation stage with status tracking and controlled progression from self-assessment to final approval.",
      "Records user actions, timestamps, and record changes to improve accountability, transparency, and compliance.",
      "Optimized for fast performance, responsive design, and seamless deployment using the Next.js and Vercel ecosystem."
    ],
    techStack: ["Next.js", "MongoDB", "ShadCN", "SheetJS", "Node mailer", "Chart.js", "Vercel"],
    size: "large"
  },
  {
    id: 3,
    title: "Subnet IPv4 Calculator",
    description: "Subnet IPv4 Calculator: Enter an IP address, desired hosts or subnets, and get detailed results including octets, binary format, network class, subnet mask, CIDR, borrowed bits, subnet increment, network ID, usable host range, broadcast address, and more — everything you need for accurate subnetting",
    image: "/projects/img-5.webp",
    features: [
      "Accepts IPv4 input, required number of hosts and required number of subnets",
      "Calculates and displays the correct octets and shows binaryrepresentation of the IP address",
      "Identifies the Network Class (A, B, and C) and Displays New Subnet Binary Format ",
      "Computes the Maximum Number of Hosts per subnet and Maximum Number of Networks",
      "Calculates the Usable Hosts per subnet and displays the Subnet Increment value",
    ],
    techStack: ["Boostrap", "React", "Vite", "Netlify"],
    size: "small"
  },
  {
    id: 4,
    title: "Beautyshine",
    description: "Beautéshine cosmetics is a modern web-based application designed to bring you closer to your beauty goals with just a few clicks. Whether you're shopping for high-quality skincare, makeup essentials, or exclusive beauty bundles, BeautéShine offers a seamless, user-friendly experience tailored to your lifestyle. With integrated features like Stripe checkout, real-time product updates, and personalized recommendations, our platform makes beauty shopping smarter, faster, and more enjoyable. Discover, shop, and shine all in one place.",
    image: "/projects/img-2.webp",
    features: [
      "Seamless Stripe Integration: Users can securely purchase beauty products using Stripe, providing a fast and hassle-free checkout experience.",
      "Wishlist and Favorites Feature: Shoppers can save their favorite products in a personal wishlist for future purchases or gift ideas.",
      "Promotional Banners & Discount Codes: Highlight ongoing sales or limited-time offers with eye-catching banners and support for user-applied discount codes at checkout.",
      "Loyalty Rewards Program: Registered customers earn points for every purchase, which can be redeemed for discounts or exclusive products",
      "Blog or Beauty Tips Section: Features articles on skincare routines, makeup tutorials, product spotlights, and seasonal beauty trends to engage users.",
      "Product Comparison Tool: Allows users to select multiple products and compare their ingredients, sizes, prices, and reviews side by side."
    ],
    techStack: ["Next.js", "Node.js", "MongoDB", "MUI", "Stripe", "Vercel",],
    size: "small"
  },
  {
    id: 5,
    title: "Gusstenberg",
    description: "The Gusstenberg system is a desktop-based application developed using Java, designed to streamline and automate payroll operations within an organization. It ensures accurate salary computation by integrating employee records, attendance data, tax rules, and government contributions. With built-in PDF payslip generation, the system simplifies payroll documentation and distribution.",
    image: ["/projects/Gusstenberg/img-1.webp", "/projects/Gusstenberg/img-2.webp", "/projects/Gusstenberg/img-3.webp", "/projects/Gusstenberg/img-4.webp", "/projects/Gusstenberg/img-5.webp", "/projects/Gusstenberg/img-6.webp", "/projects/Gusstenberg/img-7.webp",],
    features: [
      "Role-Based Access Control: Admins, HR personnel, and managers have designated access levels to view or modify payroll data securely.",
      "Payroll Computation: Accurately calculates gross pay, deductions, benefits, taxes, and net pay based on employee data and attendance.",
      "PDF Payslip Generation & Export: Instantly generates detailed payslips in PDF format for each employee, ready for printing or digital distribution.",
      "Customizable Salary Structures: Supports various salary types (hourly, daily, monthly) and allows flexible benefit and deduction setup.",
      "One-Click Bulk Payroll Processing: Processes payroll for all employees in a department or the entire company with a single action.",
    ],
    techStack: ["Java", "SWT", "SQLite"],
    size: "small"
  },
  {
    id: 6,
    title: "QCA Foundation",
    description: "This web application, developed for the QCA Foundation, is designed to streamline the borrowing of school tools and equipment, while also offering a class scheduling feature for efficient resource and time management. The system aims to improve the overall organization and accessibility of academic materials, allowing students and teachers to borrow tools seamlessly through a digital platform. By integrating a user-friendly interface and real-time scheduling, the application ensures that tools are available when needed and that class schedules are well-organized and conflict-free. Whether it's reserving lab equipment or managing classroom use, this system supports the foundation's mission to enhance educational experiences through effective digital solutions.",
    image: ["/projects/QCA/img-1.webp", "/projects/QCA/img-2.webp", "/projects/QCA/img-3.webp", "/projects/QCA/img-4.webp", "/projects/QCA/img-5.webp", "/projects/QCA/img-6.webp", "/projects/QCA/img-7.webp", "/projects/QCA/img-8.webp",],
    features: [
      "Smart Borrowing System with Real-Time Availability: Students and teachers can view tool availability in real-time and request to borrow items. The system prevents double bookings by updating inventory instantly.",
      "Automated Class Scheduler with Conflict Detection: Faculty can create and manage class schedules, the system automatically detects scheduling conflicts for classrooms, tools, or instructors and suggests alternatives.",
      "Borrowing History and Usage Analytics: Admin can access borrowing logs with dates, duration, and item usage statistics to track frequently used tools.",
      "RBAC: Different user roles (Admin, Teacher, Staff) have customized dashboards and permissions, ensuring security and clarity in operations.",
      "Automated Notifications and Reminders: The system sends email reminders for upcoming return deadlines, overdue items, or upcoming scheduled classes involving borrowed tools."
    ],
    techStack: ["PHP", "MySQL", "FullCalendar.js", "AJAX", "jQuery", "Bootstrap", "PHPMailer", "Hostinger"],
    size: "small"
  },
  {
    id: 7,
    title: "Kōhī",
    description: "Kōhī is a web-based coffee ordering system designed to streamline the customer experience and enhance the efficiency of café operations. Through a user-friendly interface, customers can conveniently browse the menu, customize their orders, and place them online. he system integrates real-time order management, secure checkout, and responsive design, making it accessible across devices. Kōhī aims to modernize traditional coffee shop services by embracing digital solutions that cater to today's fast-paced, tech-driven lifestyle.",
    image: ["/projects/Kohi/img-1.webp", "/projects/Kohi/img-2.webp", "/projects/Kohi/img-3.webp", "/projects/Kohi/img-4.webp", "/projects/Kohi/img-5.webp", "/projects/Kohi/img-6.webp", "/projects/Kohi/img-7.webp", "/projects/Kohi/img-8.webp", "/projects/Kohi/img-9.webp",],
    features: [
      "Real-Time Order Status Tracker: Once an order is placed, users can track its progress in real-time (e.g., 'Under process', 'Ready for Pickup', 'Out for Delivery').",
      "Dynamic Menu Management (Admin Panel): Admin can easily update menu items, prices, availability, and images through a secure backend—no coding required.",
      "Order History: Admin can view a comprehensive history of all customer orders, including details such as order items, payment method (e.g., PayPal), status, timestamps, and customer information. ",
      "Customer Feedback and Ratings: After every transaction, users can rate their drink and leave feedback, helping Kōhī improve product quality and service.",
    ],
    techStack: ["PHP", "MySQL", "AJAX", "jQuery", "Bootstrap", "PayPal SDK"],
    size: "large"
  },
];
