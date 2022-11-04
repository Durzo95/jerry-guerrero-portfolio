import React from "react";
import MainBodyAboutMe from "./MainBodyAboutMe";
import MainBodyWhatIDo from "./MainBodyWhatIDo";

export default function MainBody() {
  return (
    <>
      <div className="h-max w-full bg-gray-900 sm:rounded-2xl shadow-2xl py-8 px-6">
        {/* About Me */}
        <MainBodyAboutMe />
        {/* What I do */}
        <MainBodyWhatIDo />
      </div>
    </>
  );
}
