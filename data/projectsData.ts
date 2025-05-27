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
  SiPowershell,
  SiOracle
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
  category: "automation" | "web-development" | "management" | "analytics";
}

const projectsData: Project[] = [
  {
    id: "automated-user-provisioning",
    title: "Automated User Account Creation System",
    description: "Enterprise automation system that automatically created user accounts for over 15,000 users across multiple Student Information Systems, eliminating manual provisioning and reducing processing time from weeks to hours.",
    longDescription: "Developed a comprehensive user provisioning automation that processes new student and staff data from HR systems and automatically creates accounts across 4 different SIS platforms (PowerSchool, Clever, Google Workspace, and Active Directory). The system handles role assignments, security groups, and compliance requirements while maintaining 99.9% accuracy and processing over 1,000 accounts per hour during peak enrollment periods.",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "PowerShell", icon: SiPowershell, color: "text-blue-400" },
      { name: "REST APIs", icon: FaServer, color: "text-green-500" },
      { name: "Active Directory", icon: FaServer, color: "text-blue-600" }
    ],
    features: [
      "Automated account creation for 15,000+ users across PowerSchool, Clever, Google Workspace, and Active Directory",
      "Multi-platform SIS integration with real-time data synchronization",
      "Role-based access control and security group assignment based on job classifications",
      "Real-time error handling with Slack notifications and automated retry mechanisms",
      "Compliance validation with TEA requirements and comprehensive audit trail generation",
      "Reduced manual provisioning time from 3-4 weeks to 2-3 hours",
      "Custom dashboard for monitoring account creation status and error reporting"
    ],
    category: "automation"
  },
  {
    id: "geographic-boundary-sync",
    title: "Geographic Enrollment Boundary Integration",
    description: "Automated system syncing geographic enrollment boundaries with OpenStreetMap and TEA data to ensure accurate student assignments and compliance.",
    longDescription: "Built a critical automation system that integrates with OpenStreetMap and Texas Education Agency (TEA) data to maintain accurate geographic enrollment boundaries. This system ensures students are assigned to correct schools and maintains district compliance with state regulations.",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "REST APIs", icon: FaServer, color: "text-green-500" },
      { name: "GIS", icon: FaChartLine, color: "text-green-600" },
      { name: "TEA APIs", icon: FaServer, color: "text-orange-500" }
    ],
    features: [
      "OpenStreetMap integration for real-time boundary updates",
      "TEA data synchronization for compliance",
      "Automated student assignment validation",
      "Geographic data processing and transformation",
      "Compliance risk elimination and audit reporting",
      "Safeguards district rating through accurate assignments"
    ],
    category: "automation"
  },
  {
    id: "help-desk-operation",
    title: "Enterprise Help Desk Management System",
    description: "Lead help desk operation managing 5,000+ tickets annually with 97%+ customer satisfaction across 4 states supporting 89,000+ users.",
    longDescription: "Manage and optimize a high-volume help desk operation that provides technical support for Student Information Systems across Texas, Florida, and Ohio. Implemented processes and systems that maintain exceptional customer satisfaction while handling complex technical issues.",
    technologies: [
      { name: "Ticketing System", icon: FaChartLine, color: "text-purple-500" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "Power BI", icon: SiPowerbi, color: "text-yellow-500" },
      { name: "Excel", icon: SiMicrosoftexcel, color: "text-green-600" },
      { name: "Process Management", icon: FaServer, color: "text-blue-500" }
    ],
    features: [
      "5,000+ tickets processed annually",
      "97%+ customer satisfaction rating",
      "Multi-state support operations (TX, FL, OH)",
      "Performance metrics and reporting dashboards",
      "Team training and knowledge management",
      "Escalation procedures and quality assurance"
    ],
    category: "management"  
  },
  {
    id: "covid-response-system",
    title: "COVID-19 Remote Learning Infrastructure",
    description: "Led critical team effort to transition 80,000+ students and 9,000+ staff to fully online learning in just 4 weeks during COVID-19 pandemic.",
    longDescription: "Helped architect and implement the complete digital transformation that took IDEA Public Schools fully online during the COVID-19 pandemic. Managed system scaling, user provisioning, and technical support for the largest remote learning deployment in the organization's history.",
    technologies: [
      { name: "System Administration", icon: FaServer, color: "text-blue-500" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "PowerShell", icon: SiPowershell, color: "text-blue-400" },
      { name: "Network Management", icon: FaServer, color: "text-green-500" },
      { name: "Help Desk", icon: FaChartLine, color: "text-purple-500" }
    ],
    features: [
      "Complete infrastructure scaling for 89,000+ users",
      "System performance monitoring and optimization",
      "Created the Onsite vs Online Attendance Dashboard",
      "Updated our SIS to support remote learning",
      "Successfully completed transition in 4 weeks"
    ],
    category: "management"
  },
  {
    id: "covid-attendance-dashboard",
    title: "COVID-19 Onsite vs Online Attendance Analytics Dashboard",
    description: "Critical Power BI dashboard tracking student attendance patterns during COVID-19 pandemic, comparing onsite vs online learning effectiveness across 80,000+ students for district leadership decision-making.",
    longDescription: "Developed a comprehensive Power BI dashboard during the COVID-19 pandemic to track and analyze student attendance patterns across onsite and online learning modalities. The dashboard provided district leadership with real-time insights into attendance trends, engagement patterns, and learning effectiveness to inform critical decisions about school reopening strategies and hybrid learning models. Featured comparative analytics, demographic breakdowns, and predictive modeling to support data-driven pandemic response.",
    technologies: [
      { name: "Power BI", icon: SiPowerbi, color: "text-yellow-500" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "Excel", icon: SiMicrosoftexcel, color: "text-green-600" },
      { name: "PowerShell", icon: SiPowershell, color: "text-blue-400" },
      { name: "REST APIs", icon: FaServer, color: "text-green-500" }
    ],
    features: [
      "Real-time attendance tracking for 80,000+ students across onsite and online modalities",
      "Comparative analysis dashboards showing attendance patterns by learning mode",
      "Demographic breakdowns by grade level, campus, and socioeconomic factors",
      "Weekly and monthly trend analysis",
      "Interactive visualizations for district leadership presentations",
      "Campus-level drill-down capabilities for principals and administrators"
    ],
    category: "analytics"
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "Responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations.",
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
      "Accessible design with proper ARIA labels"
    ],
    githubUrl: "https://github.com/Durzo95/jerry-guerrero-portfolio",
    liveUrl: "https://www.jerryguerrero.com/",
    category: "web-development"
  }
];

export default projectsData; 