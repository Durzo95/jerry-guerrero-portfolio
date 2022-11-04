import React from "react";
import MainBodyAboutMe from "./MainBodyAboutMe";
import MainBodyWhatIDo from "./MainBodyWhatIDo";

export default function MainBody() {
  return (
    <main className="h-max w-full bg-gray-900 sm:rounded-2xl shadow-2xl py-8 px-6 max-w-4xl">
      {/* About Me */}
      <MainBodyAboutMe />
      {/* What I do */}
      <MainBodyWhatIDo />
    </main>
  );
}
