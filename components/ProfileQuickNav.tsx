import React from "react";
import { MdPerson, MdWork, MdCode, MdEmail } from "react-icons/md";

export default function ProfileQuickNav() {
  const navItems = [
    { id: "about", label: "About", icon: MdPerson },
    { id: "what-i-do", label: "Skills", icon: MdWork },
    { id: "projects", label: "Projects", icon: MdCode },
    { id: "contact", label: "Contact", icon: MdEmail },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <div className="mt-6 mb-6">
      <h3 className="text-white text-sm font-semibold mb-3 text-center">Quick Navigation</h3>
      <div className="grid grid-cols-2 gap-2">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className="flex items-center gap-2 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors text-sm text-gray-300 hover:text-white"
          >
            <item.icon size={16} />
            <span>{item.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
} 