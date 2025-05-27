import { IconType } from "react-icons";
import { 
  FaPython, 
  FaJs, 
  FaReact, 
  FaDatabase, 
  FaServer,
  FaChartLine,
  FaMapMarkedAlt,
  FaFileAlt,
  FaCloud 
} from "react-icons/fa";
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiPowerbi,
  SiMicrosoftexcel,
  SiOracle,
  SiMicrosoftteams
} from "react-icons/si";
import { MdVpnKey } from "react-icons/md";

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
    title: "Automated User Account Management System",
    description: "Designed, created, and implemented an automation that created, updated, and deactivated user accounts for over 15,000 users in our SIS platform, reducing yearly account problem tickets from thousands to a few hundred.",
    longDescription: "Developed a comprehensive user account management automation that processes user data and automatically creates, updates, and deactivates accounts across our SIS platform. This process used to be done manually before this data sync was created, dramatically reducing our operational burden and improving data accuracy. The automation continues to save thousands of man hours every year, contributing significantly to overall operational efficiency.",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "SIS APIs", icon: FaServer, color: "text-green-500" },
      { name: "Data Sync", icon: FaDatabase, color: "text-blue-600" }
    ],
    features: [
      "Automated account creation, updates, and deactivation for 15,000+ users",
      "Reduced yearly account problem tickets from thousands to a few hundred",
      "Saves thousands of man hours annually",
      "Eliminates manual account management processes",
      "Improves data accuracy and consistency",
      "Contributes significantly to overall operational efficiency"
    ],
    category: "automation"
  },
  {
    id: "geographic-boundary-automation",
    title: "OpenStreetMaps & TEA Boundary Integration",
    description: "Python script leveraging OpenStreetMaps API and TEA attendance boundaries data to identify alternative schools for students, replacing a licensed external tool and yielding cost savings in the tens of thousands of dollars.",
    longDescription: "Developed a Python script that integrates with the OpenStreetMaps API and TEA attendance boundaries dataset to identify alternative schools for students based on their residence. The script retrieves Campus ID and Residence Code for data submissions to Texas, aligning with their school boundary datasets. This automation replaced a licensed external tool, yielding cost savings in the tens of thousands of dollars and is currently applied to both existing and incoming students in our SIS applications.",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "OpenStreetMaps API", icon: FaMapMarkedAlt, color: "text-green-500" },
      { name: "TEA APIs", icon: FaServer, color: "text-orange-500" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" }
    ],
    features: [
      "Identifies alternative schools for students based on residence",
      "Retrieves Campus ID and Residence Code for TEA data submissions",
      "Replaced licensed external tool, saving thousands of dollars",
      "Applied to both existing and incoming students in SIS applications",
      "Ensures all students fall within attendance boundaries",
      "Safeguards district rating with TEA, eliminating boundary non-compliance risks",
      "Automatically imports Campus ID of Residence, saving State Reporting team processing time"
    ],
    category: "automation"
  },
  {
    id: "registration-platform-sync",
    title: "Automatic Registration Platform to SIS Sync",
    description: "Automated synchronization system that brings students from our registration platform directly to our SIS platforms, eliminating manual data transfer and ensuring seamless student enrollment processes.",
    longDescription: "Developed an automatic registration sync system that seamlessly transfers student data from our registration platform to our SIS platforms. This automation eliminates the need for manual data entry and ensures that student information flows directly from registration to the appropriate SIS applications, maintaining data integrity and significantly reducing processing time.",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "Registration APIs", icon: FaServer, color: "text-green-500" },
      { name: "SIS Integration", icon: FaDatabase, color: "text-blue-600" }
    ],
    features: [
      "Automatic synchronization from registration platform to SIS platforms",
      "Eliminates manual data transfer processes",
      "Ensures seamless student enrollment workflows",
      "Maintains data integrity across platforms",
      "Reduces processing time and human error",
      "Streamlines the entire registration to enrollment pipeline"
    ],
    category: "automation"
  },
  {
    id: "attendance-intervention-platform",
    title: "Attendance Intervention Platform Implementation",
    description: "Implementation and integration of an attendance notification platform with our SIS to automatically notify parents about student attendance and provide analytics insights for intervention strategies.",
    longDescription: "Managed the comprehensive implementation of an Attendance Intervention Platform that integrates with our Student Information System to automatically notify parents about their student's attendance patterns. The project required API integration between our SIS and the attendance notification platform, automated account provisioning processes, and the development of analytics capabilities to provide insights for attendance intervention strategies. This system enables proactive communication with families and data-driven decision making for improving student attendance rates.",
    technologies: [
      { name: "API Integration", icon: FaServer, color: "text-green-500" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Analytics Platform", icon: FaChartLine, color: "text-blue-600" }
    ],
    features: [
      "SIS integration with attendance notification platform via API and csv import",
      "Automated parent notification system for student attendance",
      "Automated account creation and provisioning for the platform",
      "Analytics and insights dashboard for attendance intervention strategies",
      "Real-time attendance data synchronization",
      "Data-driven attendance intervention capabilities"
    ],
    category: "management"
  },
  {
    id: "student-distance-validation",
    title: "Student Campus Distance Validation System",
    description: "Python script that reads over 60,000 students' address data and calculates driving distance to their campus, ensuring compliance with Texas Department of Education's 50-mile requirement.",
    longDescription: "Created a Python script to read over 60,000 students' address data and calculate the driving distance to their campus. The system ensures students are no more than 50 miles away from their campus, as required by the Texas Department of Education. This automation streamlined the compliance verification task for over 120 SIS and Registrars across all IDEA School District campuses.",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Mapping APIs", icon: FaMapMarkedAlt, color: "text-green-500" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "Distance Calculation", icon: FaChartLine, color: "text-blue-600" }
    ],
    features: [
      "Processes address data for over 60,000 students",
      "Calculates driving distance to assigned campus",
      "Ensures compliance with TEA's 50-mile requirement",
      "Automated compliance verification for 120+ SIS and Registrars",
      "Covers all IDEA School District campuses",
      "Eliminates manual distance verification processes"
    ],
    category: "automation"
  },
  {
    id: "family-engagement-automation",
    title: "Family Engagement & Withdrawal Packet Automation",
    description: "Automated processes for Family Engagement and auto-generating withdrawal packets to eliminate manual steps and improve operational efficiency.",
    longDescription: "Developed automated processes to streamline Family Engagement workflows and auto-generate withdrawal packets, eliminating manual steps that were previously time-consuming and error-prone. This automation improved operational efficiency and ensured consistent processing of family engagement activities and student withdrawal procedures.",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "Document Generation", icon: FaServer, color: "text-green-500" },
      { name: "Process Automation", icon: FaDatabase, color: "text-blue-600" }
    ],
    features: [
      "Automated Family Engagement workflow processes",
      "Auto-generation of withdrawal packets",
      "Eliminated manual processing steps",
      "Improved operational efficiency",
      "Consistent processing of family engagement activities",
      "Streamlined student withdrawal procedures"
    ],
    category: "automation"
  },
  {
    id: "powerschool-ui-update-project",
    title: "PowerSchool SIS UI Update Implementation",
    description: "Led comprehensive communication and project management for PowerSchool SIS UI update, coordinating change management for 15,000+ users across multiple internal communication channels.",
    longDescription: "Managed the complete implementation and communication strategy for a major PowerSchool SIS user interface update affecting 15,000+ users across the organization. Led cross-functional teams to ensure smooth transition, created comprehensive documentation and training materials, established SharePoint sites for resource management, and coordinated multi-channel communication campaigns to prepare users for the significant system changes. The project required extensive stakeholder management, user training coordination, and change management strategies to minimize disruption to daily operations.",
    technologies: [
      { name: "SharePoint", icon: FaServer, color: "text-blue-500" },
      { name: "PowerSchool SIS", icon: FaDatabase, color: "text-green-600" },
      { name: "Project Management", icon: FaChartLine, color: "text-purple-500" },
      { name: "Documentation", icon: FaFileAlt, color: "text-orange-500" }
    ],
    features: [
      "Comprehensive communication strategy for 15,000+ users",
      "Multi-channel internal communication campaigns",
      "Created extensive documentation and training materials",
      "Established SharePoint sites for resource management",
      "Cross-functional team coordination and stakeholder management",
      "Change management strategies to minimize operational disruption",
      "User training coordination and support during transition",
      "Successful implementation of major SIS UI overhaul"
    ],
    category: "management"
  },
  {
    id: "powerschool-cloud-migration",
    title: "PowerSchool Cloud Migration Project",
    description: "Leading the systems migration of PowerSchool SIS from on-premise to cloud infrastructure, managing communication, project coordination, and ensuring secure IT connectivity through VPN implementation.",
    longDescription: "Currently managing the comprehensive migration of our PowerSchool SIS from on-premise infrastructure to cloud-based hosting. This critical project involves coordinating with multiple stakeholders, managing communication across all departments, and ensuring seamless transition with minimal downtime. Key responsibilities include project management coordination, stakeholder communication, and working closely with our IT team to establish secure VPN connectivity to the new cloud environment. The migration requires careful planning to maintain data integrity, system performance, and user access throughout the transition process.",
    technologies: [
      { name: "Cloud Infrastructure", icon: FaCloud, color: "text-cyan-400" },
      { name: "PowerSchool SIS", icon: FaDatabase, color: "text-green-600" },
      { name: "VPN Configuration", icon: MdVpnKey, color: "text-red-500" },
      { name: "Project Management", icon: FaChartLine, color: "text-purple-500" }
    ],
    features: [
      "Migration from on-premise to cloud infrastructure",
      "Cross-departmental communication and stakeholder management",
      "Project coordination and timeline management",
      "VPN connectivity setup for secure IT team access",
      "Data integrity and system performance monitoring",
      "Minimal downtime transition planning",
      "User access continuity during migration",
      "Stress testing and validation of new system"
    ],
    category: "management"
  },
  {
    id: "covid-attendance-automation",
    title: "COVID-19 Automated Attendance System",
    description: "Python automation using Microsoft Teams data to automatically mark student attendance during COVID, eliminating the need for teachers to manually take attendance and providing campus reporting capabilities.",
    longDescription: "Created and implemented an automated process using Python that allowed teachers to not have to worry about taking attendance during COVID years. The process used data from Microsoft Teams to identify students who were in attendance and marked them present for the appropriate class. Additionally, the automation had reporting built in to allow campuses to identify when students were showing up to class online. This automation was later used after COVID years for Virtual School in the 21-22 school year.",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "Microsoft Teams API", icon: SiMicrosoftteams, color: "text-purple-500" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "Reporting", icon: FaChartLine, color: "text-blue-600" }
    ],
    features: [
      "Automated attendance marking using Microsoft Teams data",
      "Eliminated manual attendance taking for teachers during COVID",
      "Identified students in attendance and marked them present automatically",
      "Built-in reporting for campuses to track online class attendance",
      "Extended use for Virtual School in 21-22 school year",
      "Streamlined remote learning attendance processes"
    ],
    category: "automation"
  },
  {
    id: "covid-response-system",
    title: "COVID-19 Remote Learning Infrastructure",
    description: "Critical team member in taking the district fully online during COVID in four weeks, implementing automated processes and system scaling for 80,000+ students and 9,000+ staff.",
    longDescription: "Was a critical member of the team that took the district fully online during COVID in four weeks. Helped architect and implement the complete digital transformation that took IDEA Public Schools fully online during the COVID-19 pandemic. Managed system scaling, user provisioning, and technical support for the largest remote learning deployment in the organization's history.",
    technologies: [
      { name: "Python", icon: FaPython, color: "text-yellow-400" },
      { name: "System Administration", icon: FaServer, color: "text-blue-500" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "Microsoft Teams", icon: SiMicrosoftteams, color: "text-purple-500" }
    ],
    features: [
      "Complete district transition to online learning in 4 weeks",
      "Infrastructure scaling for 89,000+ users",
      "Automated attendance processes using Microsoft Teams data",
      "System performance monitoring and optimization",
      "Technical support for largest remote learning deployment in organization history",
      "Successful implementation during critical pandemic response"
    ],
    category: "management"
  },
  {
    id: "covid-attendance-dashboard",
    title: "COVID-19 Onsite vs Online Attendance Dashboard",
    description: "Critical analytics dashboard tracking student attendance patterns during COVID-19 pandemic, comparing onsite vs online learning effectiveness across 80,000+ students for district leadership decision-making.",
    longDescription: "Created the Onsite vs Online Attendance Dashboard during the COVID-19 pandemic to track and analyze student attendance patterns across onsite and online learning modalities. The dashboard provided district leadership with real-time insights into attendance trends, engagement patterns, and learning effectiveness to inform critical decisions about school reopening strategies and hybrid learning models.",
    technologies: [
      { name: "Power BI", icon: SiPowerbi, color: "text-yellow-500" },
      { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
      { name: "Excel", icon: SiMicrosoftexcel, color: "text-green-600" },
      { name: "Data Analytics", icon: FaChartLine, color: "text-blue-600" }
    ],
    features: [
      "Real-time attendance tracking for 80,000+ students across onsite and online modalities",
      "Comparative analysis dashboards showing attendance patterns by learning mode",
      "District leadership insights for critical decision-making",
      "Support for school reopening strategies and hybrid learning models",
      "Interactive visualizations for executive presentations"
    ],
    category: "analytics"
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    description: "Responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring smooth animations and comprehensive accessibility features.",
    longDescription: "Designed and developed a professional portfolio website to showcase my technical skills and projects. Features include smooth scrolling navigation, responsive design, modern UI components, and comprehensive accessibility features with proper ARIA labels for screen readers.",
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
      "Comprehensive accessibility features with proper ARIA labels",
      "Modern UI components and animations",
      "Professional showcase of technical skills and projects"
    ],
    githubUrl: "https://github.com/Durzo95/jerry-guerrero-portfolio",
    liveUrl: "https://www.jerryguerrero.com/",
    category: "web-development"
  }
];

export default projectsData; 