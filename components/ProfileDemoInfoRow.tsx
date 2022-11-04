import React from "react";
import demoInfoData from "../data/demoInfoData";
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
      <div className="flex flex-row gap-2">
        {/* The icon on the row */}
        <div className="flex-col">
          <div className="rounded-lg bg-gray-900 p-2">
            <prop.Icon size={32} />
          </div>
        </div>
        {/* The text on the row */}
        <div className="flex-col">
          <h2 className="text-md text-gray-400 my-[-3px]">{prop.subText}</h2>
          <h1 className="text-white text-md">{prop.text}</h1>
        </div>
      </div>
      {/* Bottom border, only if not the last element*/}
      {!prop.lastRow && (
        <div className="border-b border-gray-700 my-[-0.3rem]" />
      )}
    </>
  );
}
