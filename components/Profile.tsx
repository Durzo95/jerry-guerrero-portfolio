import React from "react";
import ProfileSocialLink from "./ProfileSocialLink";
import socialMediaData from "../data/socialMediaData";
import ProfileDemoInfo from "./ProfileDemoInfo";

export default function Profile() {
  return (
    <div className="w-1/3 max-w-md min-w-[28rem] h-max py-8 bg-gray-900 rounded-2xl shadow-2xl text-white">
      {/* The name */}
      <h1 className="text-4xl font-bold text-center">Jerry Guerrero</h1>
      {/* The title */}
      <h2 className="text-2xl text-center text-gray-400 mt-4">
        Application Manager
      </h2>
      {/* The social media links */}
      <ProfileSocialLink />
      {/* The Profile demographic overview */}
      <ProfileDemoInfo />
    </div>
  );
}
