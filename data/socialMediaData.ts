// an object that holds the social media links
import { FaGithub, FaMailBulk, FaLinkedinIn } from 'react-icons/fa'
import { IconType } from "react-icons";

// interface of the social media links
interface SocialMedia {
    href: string
    Icon: IconType
}

type SocialMediaData = {
    [key: string]: SocialMedia
}

// the social media links
const socialMediaData: SocialMediaData = {
    github: {
        href: 'https://www.linkedin.com/in/gerardo-guerrero2/',
        Icon: FaGithub
    },
    linkedin: {
        href: 'https://www.linkedin.com/in/gerardo-guerrero2/',
        Icon: FaLinkedinIn
    },
    email: {
        href: 'mailto: jerry.guerrero95@gmail.com',
        Icon: FaMailBulk
}
// const socialMediaData = [
//     {

//         href: "https://www.linkedin.com/in/gerardo-guerrero2/",
//         Icon: <FaLinkedinIn size={32} style={{ color: "0077b5" }} />,
//     },
//     {
//         href: "https://github.com/Durzo95",
//         Icon: <FaGithub size={32} style={{}} />,

//     },
//     {
//         href: "mailto: jerry.guerrero95@gmail.com",
//         Icon: <FaMailBulk size={32} style={{}} />,

//     },
// ]

export default socialMediaData