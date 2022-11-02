// an object that holds the social media links
import { MdSettings } from "react-icons/md";
import { FaCode } from "react-icons/fa";
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
    description: "Solving complex and citical processes with code",
    tailwindColor: "text-green-600",
  },
  {
    Icon: FaCode,
    title: "Web Development",
    description: "Learning new technologies and frameworks",
    tailwindColor: "text-pink-600",
  },
  {
    Icon: BsFillPersonFill,
    title: "Management",
    description: "Leading App Administrator and Data Analysts",
    tailwindColor: "text-indigo-600",
  },
];

export default whatIDoData;
