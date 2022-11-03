import React from "react";
import MainBodyAboutMe from "./MainBodyAboutMe";
import MainBodyWhatIDo from "./MainBodyWhatIDo";

export default function MainBody() {
  return (
    <>
      <div className="h-max w-full lg:w-2/3 bg-gray-900 rounded-2xl shadow-2xl py-8 px-6">
        {/* About Me */}
        <MainBodyAboutMe />
        {/* What I do */}
        <MainBodyWhatIDo />
      </div>
    </>
  );
}
