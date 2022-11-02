import React from "react";
import { IconType } from "react-icons";
import { MdSettings } from "react-icons/md";

interface Props {
  Icon: IconType;
  title: string;
  description: string;
}

export default function MainBodyAboutCard(prop: Props) {
  return (
    <div className="w-1/2 border-2 border-gray-500 rounded-lg bg-gray-800 text-white p-6 flex gap-2">
      <div className="flex flex-col w-1/3 h-full">
        <prop.Icon size={56} className="align-top text-blue-600" />
      </div>
      <div className="flex flex-col">
        <div className="text-white text-2xl font-bold justify-start">
          {prop.title}
        </div>
        <div className="text-gray-400 text-lg">{prop.description}</div>
      </div>
    </div>
  );
}
