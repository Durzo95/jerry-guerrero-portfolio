import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import socialMediaData from "../data/socialMediaData";

export default function SocialLink() {
  return (
    <div className="flex flex-row gap-4 justify-center mt-8">
      {/* Loop through socialMediaData */}
      {socialMediaData.map((socialMedia, i) => (
        <a
          href={socialMedia.href}
          className="bg-gray-800 rounded-md p-2 transform transition duration-500 hover:scale-125 hover:bg-blue-900"
          target="_blank"
          rel="noopener noreferrer"
        >
          <socialMedia.Icon size={32} style={{ color: socialMedia.color }} />
        </a>
      ))}
    </div>
  );
}
