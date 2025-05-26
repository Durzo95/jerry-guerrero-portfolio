import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";
import socialMediaData from "../data/socialMediaData";

export default function SocialLink() {
  return (
    <div className="mt-6 mb-6">
      <h3 className="text-white text-sm font-semibold mb-3 text-center">Connect With Me</h3>
      <div className="flex flex-row gap-3 justify-center">
        {/* Loop through socialMediaData */}
        {socialMediaData.map((socialMedia, i) => (
          <a
            key={i}
            href={socialMedia.href}
            className="bg-gray-800 rounded-lg p-3 transform transition duration-300 hover:scale-110 hover:bg-gray-700 border border-gray-600 hover:border-gray-500"
            target="_blank"
            rel="noopener noreferrer"
            title={socialMedia.href.includes('linkedin') ? 'LinkedIn' : socialMedia.href.includes('github') ? 'GitHub' : 'Email'}
          >
            <socialMedia.Icon
              size={24}
              style={{ color: socialMedia.color }}
            />
          </a>
        ))}
      </div>
    </div>
  );
}
