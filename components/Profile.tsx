import React from "react";
import ProfileTitle from "./ProfileTitle";
import ProfileSocialLink from "./ProfileSocialLink";
import ProfileDemoInfo from "./ProfileDemoInfo";
import ProfileDownloadCV from "./ProfileDownloadCV";
import ProfilePhoto from "./ProfilePhoto";
import ProfileQuickNav from "./ProfileQuickNav";

export default function Profile() {
  return (
    <article className="h-max p-6 bg-gray-900 rounded-2xl shadow-2xl text-white border border-gray-700">
      {/* Profile image */}
      <ProfilePhoto />
      {/* Profile Title */}
      <ProfileTitle />
      {/* The social media links */}
      <ProfileSocialLink />
      {/* Quick Navigation */}
      <ProfileQuickNav />
      {/* The Profile demographic overview */}
      <ProfileDemoInfo />
      {/* The download resume button */}
      <ProfileDownloadCV />
    </article>
  );
}
