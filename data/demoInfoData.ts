// an object that holds the social media links
import { MdComputer, MdEmail, MdLocationPin, MdSchool } from "react-icons/md";
import { IconType } from "react-icons";

// the social media links
const demoInfoData: Array<{ Icon: IconType; text: string; subText: string }> = [
  {
    Icon: MdComputer,
    text: "Data Services - IDEA Public Schools",
    subText: "Current Employment",
  },
  {
    Icon: MdSchool,
    text: "Computer Science, Bachelor 2020",
    subText: "Education",
  },
  {
    Icon: MdEmail,
    text: "Jerry.Guerrero95@gmail.com",
    subText: "Email",
  },
  {
    Icon: MdLocationPin,
    text: "McAllen, Texas",
    subText: "Location",
  },
];

export default demoInfoData;
