import React from "react";
import { IoSchool } from "react-icons/io5";
import demoInfoData from "../data/demoInfoData";

export default function ProfileDemoInfo() {
  return (
    <div className="m-8 p-8 bg-gray-800 rounded-2xl flex flex-col gap-4">
      {/* Loop through demoInfoData */}
          <div className="flex flex-row gap-2" key={i}>
          {/* The icon on the row */}
          <div className="flex-col">
            <div className="rounded-lg bg-gray-900 p-2">
              <demoInfo.Icon size={32} />
            </div>
          </div>
          {/* The text on the row */}
          <div className="flex-col">
            <div className="text-md text-gray-400 my-[-3px]">
              {demoInfo.subText}
            </div>
            <div className="text-white text-md">{demoInfo.text}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
