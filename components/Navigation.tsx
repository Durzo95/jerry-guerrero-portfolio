import React from "react";
import navigationLinks from "../data/navigationLinks";

export default function Navigation() {
  return (
    <div className="h-max w-full bg-gray-900 sm:rounded-2xl shadow-2xl py-8 px-6 max-w-md mb-6">
      <div className="flex flex-row gap-4 justify-center">
        {/* Loop through socialMediaData */}
        {navigationLinks.map((navLink, i) => (
          <a
            key={i}
            href={navLink.href}
            className="bg-gray-800 rounded-md p-2 transform transition duration-500 hover:scale-125 hover:bg-blue-900"
            target="_blank"
            rel="noopener noreferrer"
          >
            <navLink.Icon key={i} size={32} style={{ color: "gray" }} />
          </a>
        ))}
      </div>
    </div>
  );
}
