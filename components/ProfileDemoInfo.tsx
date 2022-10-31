import React from "react";
import { IoSchool } from "react-icons/io5";

export default function ProfileDemoInfo() {
  return (
    <div className="m-8 p-8 bg-gray-800 rounded-2xl">
      <div className="flex flex-row gap-2">
        {/* The icon on the row */}
        <div className="flex-col">
          <div className="rounded-lg bg-gray-900 p-2">
            <IoSchool size={32} />
          </div>
        </div>
        {/* The text on the row */}
        <div className="flex-col">
          <div className="text-md font-bold text-gray-400">Education</div>
          <div className="text-white text-lg">Computer Science, Bachelor</div>
        </div>
      </div>
    </div>
  );
}
