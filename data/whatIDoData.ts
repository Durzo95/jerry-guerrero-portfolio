// an object that holds the social media links
import { MdSettings, MdSecurity } from "react-icons/md";
import { FaCode, FaCogs, FaRocket, FaUsers, FaChartLine } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { VscDebugConsole } from "react-icons/vsc";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillCode } from "react-icons/ai";
import { IconType } from "react-icons";

// the social media links
const whatIDoData: Array<{
  Icon: IconType;
  title: string;
  description: string;
  tailwindColor: string;
}> = [
  {
    Icon: FaRocket,
    title: "Enterprise Automation",
    description: "Automated 15,000+ user accounts and eliminated thousands of hours of manual work across 4 SIS platforms",
    tailwindColor: "text-blue-500",
  },
  {
    Icon: FaChartLine,
    title: "Cost-Saving Solutions",
    description: "Replaced expensive licensed tools with custom solutions, delivering tens of thousands in annual savings",
    tailwindColor: "text-green-500",
  },
  {
    Icon: MdSecurity,
    title: "Compliance & Risk Management",
    description: "Safeguard district ratings through automated TEA data syncing and geographic boundary management",
    tailwindColor: "text-red-500",
  },
  {
    Icon: FaUsers,
    title: "High-Performance Leadership",
    description: "Lead multi-state operations supporting 89,000+ users with 97%+ satisfaction across 5,000+ annual tickets",
    tailwindColor: "text-purple-500",
  },
];

export default whatIDoData;
