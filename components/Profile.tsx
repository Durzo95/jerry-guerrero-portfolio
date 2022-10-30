import React from "react";
import Image from "next/image";
import SocialLink from "./SocialLink";
import socialMediaData from "../data/socialMediaData";
import { FaFacebook, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="w-1/3 h-max py-8 bg-gray-900 rounded-2xl shadow-2xl text-white">
      {/* The name */}
      <h1 className="text-4xl font-bold text-center">Jerry Guerrero</h1>
      {/* The title */}
      <h2 className="text-2xl text-center text-gray-400 mt-4">
        Application Manager
      </h2>
      {/* The social media links */}
      <div className="flex flex-row gap-4 justify-center mt-8">
        {/* Loop through socialMediaData */}
        {socialMediaData.map((socialMedia, i) => (
          <SocialLink key={i} href={socialMedia.href} Icon={socialMedia.Icon} />
        ))}
      </div>
    </div>
  );
}
