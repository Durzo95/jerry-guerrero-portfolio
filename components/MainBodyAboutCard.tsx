import React from "react";
import { IconType } from "react-icons";
import { MdSettings } from "react-icons/md";

interface Props {
  Icon: IconType;
  title: string;
  description: string;
  tailwindColor: string;
}

export default function MainBodyAboutCard(prop: Props) {
  return (
    <div className="rounded-lg bg-gray-800 p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-gray-600">
      {/* Header with icon and title */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <div className="bg-gray-900 p-3 rounded-lg">
            <prop.Icon size={32} className={prop.tailwindColor} />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-white text-xl font-bold mb-2">{prop.title}</h3>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-gray-400 leading-relaxed">
        {prop.description}
      </p>
    </div>
  );
}
