// an object that holds the social media links
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { IconType } from "react-icons";
import profileData from "./profileData";

// the social media links
const socialMediaData: Array<{ href: string; Icon: IconType; color: string }> =
  [
    {
      href: profileData.contact.linkedin,
      Icon: FaLinkedinIn,
      color: "0077b5",
    },
    {
      href: profileData.contact.github,
      Icon: FaGithub,
      color: "c6ced6",
    },
    {
      href: `mailto: ${profileData.contact.email}`,
      Icon: SiGmail,
      color: "ca473a",
    },
  ];

export default socialMediaData;
