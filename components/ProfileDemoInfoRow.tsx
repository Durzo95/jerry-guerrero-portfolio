import React from "react";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  subText: string;
  text: string;
  lastRow: boolean;
}

export default function ProfileDemoInfoRow(prop: Props) {
  return (
    <>
      <div className="flex flex-row gap-3 items-center">
        {/* The icon on the row */}
        <div className="flex-shrink-0">
          <div className="rounded-lg bg-gray-900 p-2">
            <prop.Icon size={20} className="text-gray-300" />
          </div>
        </div>
        {/* The text on the row */}
        <div className="flex-1 min-w-0">
          <h2 className="text-xs text-gray-400 mb-1">{prop.subText}</h2>
          <h1 className="text-white text-sm font-medium truncate">{prop.text}</h1>
        </div>
      </div>
      {/* Bottom border, only if not the last element*/}
      {!prop.lastRow && (
        <div className="border-b border-gray-700" />
      )}
    </>
  );
}
