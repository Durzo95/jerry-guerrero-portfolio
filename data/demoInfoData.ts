// an object that holds the demographic info data
import {
  MdComputer,
  MdWork,
} from "react-icons/md";
import { FaGraduationCap, FaUsers } from "react-icons/fa";
import { IconType } from "react-icons";
import profileData from "./profileData";

// the demographic info data
const demoInfoData: Array<{ Icon: IconType; text: string; subText: string }> = [
  {
    Icon: MdWork,
    text: profileData.personal.title,
    subText: "Current Role",
  },
  {
    Icon: MdComputer,
    text: profileData.organization.company,
    subText: "Organization",
  },
  {
    Icon: FaGraduationCap,
    text: profileData.education.fullEducation,
    subText: "Education",
  },
  {
    Icon: FaUsers,
    text: profileData.organization.scale,
    subText: "Scale of Operations",
  },
];

export default demoInfoData;
