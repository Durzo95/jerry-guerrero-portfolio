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
    <div className="w-1/2 rounded-lg bg-gray-800 p-6 flex gap-4">
      <div className="flex flex-col">
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
