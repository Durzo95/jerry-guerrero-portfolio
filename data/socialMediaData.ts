// an object that holds the social media links
import { FaGithub, FaMailBulk, FaLinkedinIn } from "react-icons/fa";
import { IconType } from "react-icons";

// the social media links
const socialMediaData: Array<{ href: string; Icon: IconType }> = [
  {
    href: "https://www.linkedin.com/in/gerardo-guerrero2/",
    Icon: FaGithub,
  },
  {
    href: "https://www.linkedin.com/in/gerardo-guerrero2/",
    Icon: FaLinkedinIn,
  },
  {
    href: "mailto: jerry.guerrero95@gmail.com",
    Icon: FaMailBulk,
  },
];

export default socialMediaData;
