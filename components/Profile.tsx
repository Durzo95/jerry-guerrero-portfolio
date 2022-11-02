import React from "react";
import ProfileTitle from "./ProfileTitle";
import ProfileSocialLink from "./ProfileSocialLink";
import ProfileDemoInfo from "./ProfileDemoInfo";
import DownloadCV from "./DownloadCV";

export default function Profile() {
  return (
    <div className="w-1/3 max-w-md min-w-[28rem] h-max p-8 bg-gray-900 rounded-2xl shadow-2xl text-white">
      {/* Profile Title */}
      <ProfileTitle />
      {/* The social media links */}
      <ProfileSocialLink />
      {/* The Profile demographic overview */}
      <ProfileDemoInfo />
      {/* The download resume button */}
      <DownloadCV />
    </div>
  );
}
