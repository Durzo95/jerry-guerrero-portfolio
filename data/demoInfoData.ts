// an object that holds the social media links
import {
  MdComputer,
  MdEmail,
  MdLocationPin,
  MdSchool,
  MdPhone,
  MdWork,
  MdGroups,
} from "react-icons/md";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { IconType } from "react-icons";

// the social media links
const demoInfoData: Array<{ Icon: IconType; text: string; subText: string }> = [
  {
    Icon: MdWork,
    text: "Data Applications Manager",
    subText: "Current Role",
  },
  {
    Icon: MdComputer,
    text: "IDEA Public Schools",
    subText: "Organization",
  },
  {
    Icon: FaGraduationCap,
    text: "Computer Science, UTRGV",
    subText: "Education",
  },
  {
    Icon: FaUsers,
    text: "89,000+ Users Supported",
    subText: "Scale of Operations",
  },
];

export default demoInfoData;
