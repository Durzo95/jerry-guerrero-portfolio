// an object that holds the social media links
import { MdComputer, MdLocationPin, MdSchool, MdPhone } from "react-icons/md";
import { IconType } from "react-icons";

// the social media links
const demoInfoData: Array<{ Icon: IconType; text: string; subText: string }> = [
  {
    Icon: MdComputer,
    text: "IDEA Public Schools",
    subText: "Current Employment",
  },
  {
    Icon: MdSchool,
    text: "Computer Science",
    subText: "Education",
  },
  {
    Icon: MdPhone,
    text: "(956) 240-5995",
    subText: "Phone",
  },
  {
    Icon: MdLocationPin,
    text: "McAllen, Texas",
    subText: "Location",
  },
];

export default demoInfoData;
