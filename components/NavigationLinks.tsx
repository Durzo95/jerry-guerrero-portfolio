import React from "react";
import navigationLinks from "../data/navigationLinksData";

export default function NavigationLink() {
  return (
    <div className="flex flex-row gap-4 justify-center text-gray-100">
      {/* Loop through socialMediaData */}
      {navigationLinks.map((navLink, i) => (
        <a
          key={i}
          // href={navLink.href}
          className="bg-gray-800 rounded-2xl p-4 transform transition duration-500 hover:bg-blue-900 hover:cursor-pointer min-w-[7rem] flex flex-col items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <navLink.Icon key={i} size={48} />
          <div className="py-2">{navLink.text}</div>
        </a>
      ))}
    </div>
  );
}
