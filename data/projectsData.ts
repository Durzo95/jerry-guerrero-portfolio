import { IconType } from "react-icons";
import { 
  FaPython, 
  FaJs, 
  FaReact, 
  FaDatabase, 
  FaGithub, 
  FaExternalLinkAlt,
  FaServer,
  FaChartLine 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPostgresql, 
  SiMysql,
  SiPowerbi,
  SiMicrosoftexcel,
  SiPowershell
} from "react-icons/si";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  technologies: Array<{
    name: string;
    icon: IconType;
    color: string;
  }>;
  features: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
  status: "completed" | "in-progress" | "planned";
  category: "automation" | "web-development" | "data-analysis" | "management";
}

const projectsData: Project[] = [
  {
    id: "data-automation-platform",
    title: "Student Information System Automation",
    description: "Comprehensive automation platform for managing student and staff data across multiple SIS platforms serving 80,000+ students.",
    longDescription: "Built a robust automation system that handles complex data imports, transformations, and validations across 4 different Student Information Systems in multiple states. The platform processes enrollment data, staff assignments, and geographic boundary information with 99.9% accuracy.",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "SQL Server", icon: FaDatabase, color: "text-blue-500" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-600" },
      { name: "PowerShell", icon: SiPowershell, color: "text-blue-400" },
      { name: "REST APIs", icon: FaServer, color: "text-green-500" }
    ],
    features: [
      "Automated daily data imports for 80,000+ student records",
      "Real-time data validation and error reporting",
      "Multi-state compliance and data formatting",
      "Reduced manual processing time by 85%",
      "Custom API integrations with 4 different SIS platforms"
    ],
    status: "completed",
    category: "automation"
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations and mobile-first design.",
    longDescription: "Designed and developed a professional portfolio website to showcase my technical skills and projects. Features include smooth scrolling navigation, responsive design, and modern UI components with accessibility in mind.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" },
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" }
    ],
    features: [
      "Responsive design for all device sizes",
      "Smooth scrolling navigation with active section detection",
      "Modern glassmorphism UI design",
      "SEO optimized with Next.js static generation",
      "Accessible design with proper ARIA labels"
    ],
    githubUrl: "https://github.com/Durzo95/jerry-guerrero-portfolio",
    liveUrl: "https://www.jerryguerrero.com/",
    status: "completed",
    category: "web-development"
  },
  {
    id: "data-analytics-dashboard",
    title: "Educational Data Analytics Dashboard",
    description: "Interactive Power BI dashboard providing insights into student performance, enrollment trends, and operational metrics for school administrators.",
    longDescription: "Created comprehensive analytics dashboards that provide real-time insights into student performance, attendance patterns, and enrollment trends. Used by administrators across 4 states to make data-driven decisions affecting 80,000+ students.",
    technologies: [
      { name: "Power BI", icon: SiPowerbi, color: "text-yellow-500" },
      { name: "SQL", icon: FaDatabase, color: "text-blue-500" },
      { name: "Excel", icon: SiMicrosoftexcel, color: "text-green-600" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Data Analysis", icon: FaChartLine, color: "text-purple-500" }
    ],
    features: [
      "Real-time student performance tracking",
      "Enrollment trend analysis across multiple states",
      "Automated report generation and distribution",
      "Interactive visualizations for 9,000+ staff users",
      "Custom KPI monitoring and alerting system"
    ],
    status: "completed",
    category: "data-analysis"
  },
  {
    id: "team-management-system",
    title: "Team Management & Training Platform",
    description: "Digital platform for managing team workflows, training materials, and performance tracking for Data Services department.",
    longDescription: "Developed a comprehensive management system to streamline team operations, track training progress, and monitor performance metrics. Supports a team of Application Admin, Data Analyst, and Help Desk Clerk across multiple projects.",
    technologies: [
      { name: "JavaScript", icon: FaJs, color: "text-yellow-400" },
      { name: "SQL", icon: FaDatabase, color: "text-blue-500" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Excel", icon: SiMicrosoftexcel, color: "text-green-600" }
    ],
    features: [
      "Team workflow automation and tracking",
      "Training module management and progress tracking",
      "Performance metrics dashboard",
      "Goal setting and achievement monitoring",
      "Resource allocation and project management"
    ],
    status: "in-progress",
    category: "management"
  },
  {
    id: "api-integration-framework",
    title: "Multi-Platform API Integration Framework",
    description: "Reusable framework for integrating with various educational software APIs, standardizing data exchange across platforms.",
    longDescription: "Built a flexible framework that standardizes API communications across different educational platforms. Handles authentication, rate limiting, error handling, and data transformation for seamless integration.",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "REST APIs", icon: FaServer, color: "text-green-500" },
      { name: "JSON", icon: FaJs, color: "text-yellow-400" },
      { name: "SQL", icon: FaDatabase, color: "text-blue-500" }
    ],
    features: [
      "Standardized API communication protocols",
      "Automatic retry and error handling",
      "Rate limiting and request optimization",
      "Data transformation and validation",
      "Comprehensive logging and monitoring"
    ],
    status: "completed",
    category: "automation"
  },
  {
    id: "modern-web-app",
    title: "Next.js Learning Projects",
    description: "Collection of modern web applications built while learning advanced React patterns, server-side rendering, and modern development practices.",
    longDescription: "Series of projects focused on mastering modern web development technologies including Next.js, TypeScript, and advanced React patterns. Each project explores different aspects of full-stack development.",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
      { name: "TypeScript", icon: SiTypescript, color: "text-blue-400" },
      { name: "React", icon: FaReact, color: "text-cyan-400" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-teal-400" }
    ],
    features: [
      "Server-side rendering and static generation",
      "Advanced React hooks and patterns",
      "TypeScript for type safety",
      "Modern CSS with Tailwind utilities",
      "Performance optimization techniques"
    ],
    githubUrl: "https://github.com/Durzo95",
    status: "in-progress",
    category: "web-development"
  }
];

export default projectsData; 