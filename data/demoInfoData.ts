// an object that holds the social media links
import { IoSchool } from "react-icons/io5";
import { MdComputer, MdEmail } from "react-icons/md";
import { IconType } from "react-icons";

// the social media links
const demoInfoData: Array<{ Icon: IconType; text: string; subText: string }> = [
  {
    Icon: MdComputer,
    text: "Four Years of Experience",
    subText: "Work Experience",
  },
  {
    Icon: IoSchool,
    text: "Computer Science, Bachelor 2020",
    subText: "Education",
  },
  {
    Icon: MdEmail,
    text: "Jerry.Guerrero95@gmail.com",
    subText: "Email",
  },
];

export default demoInfoData;
