import React from "react";
import { IoSchool } from "react-icons/io5";
import demoInfoData from "../data/demoInfoData";
import ProfileDemoInfoRow from "./ProfileDemoInfoRow";

export default function ProfileDemoInfo() {
  return (
    <div className="my-8 p-8 bg-gray-800 rounded-2xl flex flex-col gap-4">
      {/* Loop through demoInfoData */}
      {demoInfoData.map((demoInfo, i, arr) => (
        <ProfileDemoInfoRow
          key={i}
          Icon={demoInfo.Icon}
          subText={demoInfo.subText}
          text={demoInfo.text}
          lastRow={i === arr.length - 1}
        />
      ))}
    </div>
  );
}
