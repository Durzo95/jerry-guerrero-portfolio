import React from "react";
import demoInfoData from "../data/demoInfoData";
import ProfileDemoInfoRow from "./ProfileDemoInfoRow";

export default function ProfileDemoInfo() {
  return (
    <div className="mt-6 mb-6">
      <h3 className="text-white text-sm font-semibold mb-3 text-center">Professional Overview</h3>
      <div className="bg-gray-800 rounded-xl p-4 space-y-3 border border-gray-700">
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
    </div>
  );
}
