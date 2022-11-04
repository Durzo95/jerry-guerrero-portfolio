import React from "react";
import ProfileTitle from "./ProfileTitle";
import ProfileSocialLink from "./ProfileSocialLink";
import ProfileDemoInfo from "./ProfileDemoInfo";
import ProfileDownloadCV from "./ProfileDownloadCV";
import ProfilePhoto from "./ProfilePhoto";

export default function Profile() {
  return (
    <div className="lg:max-w-md h-max p-8 bg-gray-900 sm:rounded-2xl shadow-2xl text-white">
      {/* Profile image */}
      <ProfilePhoto />
      {/* Profile Title */}
      <ProfileTitle />
      {/* The social media links */}
      <ProfileSocialLink />
      {/* The Profile demographic overview */}
      <ProfileDemoInfo />
      {/* The download resume button */}
      <ProfileDownloadCV />
    </div>
  );
}
