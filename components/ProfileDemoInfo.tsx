import React from "react";
import { IoSchool } from "react-icons/io5";

export default function ProfileDemoInfo() {
  return (
    <div className="m-8 p-8 bg-gray-800 rounded-2xl">
      <div className="flex flex-row">
        <div className="flex flex-col">
          <h3 className="rounded-lg bg-gray-900 p-2">
            <IoSchool size={32} />
          </h3>
        </div>
      </div>
    </div>
  );
}
