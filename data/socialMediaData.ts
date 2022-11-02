// an object that holds the social media links
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IconType } from "react-icons";

// the social media links
const socialMediaData: Array<{ href: string; Icon: IconType; color: string }> =
  [
    {
      href: "https://www.linkedin.com/in/gerardo-guerrero2/",
      Icon: FaLinkedinIn,
      color: "0077b5",
    },
    {
      href: "https://github.com/Durzo95",
      Icon: FaGithub,
      color: "c6ced6",
    },
    {
      href: "mailto: jerry.guerrero95@gmail.com",
      Icon: SiGmail,
      color: "ca473a",
    },
  ];

export default socialMediaData;
