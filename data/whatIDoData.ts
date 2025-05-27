// an object that holds the social media links
import { MdSettings } from "react-icons/md";
import { FaCode, FaCogs } from "react-icons/fa";
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
    Icon: AiOutlineCloudServer,
    title: "App Administration",
    description: "Manage multiple applications and databases",
    tailwindColor: "text-blue-600",
  },
  {
    Icon: AiFillCode,
    title: "Automations",
    description: "Solving complex and critical processes with code",
    tailwindColor: "text-green-600",
  },
  {
    Icon: FaCogs,
    title: "Custom Tech Solutions",
    description: "Building tailored plugins and integrations that replace expensive licensed tools",
    tailwindColor: "text-orange-500",
  },
  {
    Icon: BsFillPersonFill,
    title: "Management",
    description: "Leading teams of App Administrators and Analysts",
    tailwindColor: "text-indigo-600",
  },
];

export default whatIDoData;
