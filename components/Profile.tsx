import React from "react";
import ProfileSocialLink from "./ProfileSocialLink";
import socialMediaData from "../data/socialMediaData";
import ProfileDemoInfo from "./ProfileDemoInfo";

export default function Profile() {
  return (
    <div className="w-1/3 h-max py-8 bg-gray-900 rounded-2xl shadow-2xl text-white">
      {/* The name */}
      <h1 className="text-4xl font-bold text-center">Jerry Guerrero</h1>
      {/* The title */}
      <h2 className="text-2xl text-center text-gray-400 mt-4">
        Application Manager
      </h2>
      {/* The social media links */}
      <div className="flex flex-row gap-4 justify-center mt-8">
        {/* Loop through socialMediaData */}
        {socialMediaData.map((socialMedia, i) => (
          <ProfileSocialLink
            key={i}
            href={socialMedia.href}
            Icon={socialMedia.Icon}
            color={socialMedia.color}
          />
        ))}
      </div>
      {/* The Profile demographic overview */}
      <ProfileDemoInfo />
    </div>
  );
}
