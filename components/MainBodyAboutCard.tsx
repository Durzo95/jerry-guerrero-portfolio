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
    <div className="relative rounded-xl bg-gray-800 p-6 hover:bg-gray-750 transition-all duration-300 border border-gray-700 hover:border-gray-600 shadow-lg hover:shadow-xl h-full flex flex-col">
      {/* Subtle accent line */}
      <div className={`absolute top-0 left-0 w-full h-1 rounded-t-xl bg-gradient-to-r from-${prop.tailwindColor.split('-')[1]}-500 to-${prop.tailwindColor.split('-')[1]}-400`}></div>
      
      {/* Header with icon and title */}
      <div className="flex items-start gap-4 mb-4">
        <div className="flex-shrink-0">
          <div className={`bg-gray-900 p-4 rounded-xl border border-gray-600 shadow-inner`}>
            <prop.Icon size={28} className={`${prop.tailwindColor} drop-shadow-sm`} />
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-white text-xl font-bold mb-2 leading-tight">{prop.title}</h3>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-gray-300 leading-relaxed text-base flex-grow">
        {prop.description}
      </p>
    </div>
  );
}
