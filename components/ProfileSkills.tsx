import React from "react";
import { FaJs, FaGraduationCap } from "react-icons/fa";
import { SiPowerbi, SiMicrosoftexcel, SiPython, SiOracle } from "react-icons/si";

export default function ProfileSkills() {
      const skills = [
      { name: "Python", icon: SiPython, color: "text-yellow-400" },
    { name: "Oracle SQL", icon: SiOracle, color: "text-red-500" },
    { name: "Power BI", icon: SiPowerbi, color: "text-yellow-500" },
    { name: "Excel", icon: SiMicrosoftexcel, color: "text-green-600" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-300" },
    { name: "SIS Admin", icon: FaGraduationCap, color: "text-purple-400" },
  ];

  return (
    <div className="mt-6 mb-6">
      <h3 className="text-white text-sm font-semibold mb-3 text-center">Core Technologies</h3>
      <div 
        className="grid grid-cols-3 gap-2"
        role="list"
        aria-label="Technical skills and core technologies"
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            role="listitem"
            aria-label={`Skill: ${skill.name}`}
          >
            <skill.icon className={`${skill.color} mb-1`} size={20} aria-hidden="true" />
            <span className="text-gray-300 text-xs text-center">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
} 