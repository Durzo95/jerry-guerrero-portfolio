import React from "react";
import socialMediaData from "../data/socialMediaData";

export default function SocialLink() {
  const getSocialMediaName = (href: string) => {
    if (href.includes('linkedin')) return 'LinkedIn';
    if (href.includes('github')) return 'GitHub';
    if (href.includes('mailto')) return 'Email';
    return 'Social Media';
  };

  return (
    <div className="mt-6 mb-6">
      <h3 className="text-white text-sm font-semibold mb-3 text-center">Connect With Me</h3>
      <div 
        className="flex flex-row gap-3 justify-center"
        role="list"
        aria-label="Social media links"
      >
        {/* Loop through socialMediaData */}
        {socialMediaData.map((socialMedia, i) => {
          const platformName = getSocialMediaName(socialMedia.href);
          return (
            <a
              key={i}
              href={socialMedia.href}
              className="bg-gray-800 rounded-lg p-3 transform transition duration-300 hover:scale-110 hover:bg-gray-700 border border-gray-600 hover:border-gray-500"
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Connect with me on ${platformName}`}
              role="listitem"
            >
              <socialMedia.Icon
                size={24}
                style={{ color: socialMedia.color }}
                aria-hidden="true"
              />
            </a>
          );
        })}
      </div>
    </div>
  );
}
