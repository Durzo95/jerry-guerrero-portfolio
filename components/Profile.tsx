import React from "react";
import ProfileTitle from "./ProfileTitle";
import ProfileSummary from "./ProfileSummary";
import ProfileSkills from "./ProfileSkills";
import ProfileSocialLink from "./ProfileSocialLink";
import ProfileDemoInfo from "./ProfileDemoInfo";
import ProfileDownloadCV from "./ProfileDownloadCV";
import ProfilePhoto from "./ProfilePhoto";

export default function Profile() {
  return (
    <article className="h-max p-6 bg-gray-900 rounded-2xl shadow-2xl text-white border border-gray-700">
      {/* Profile image */}
      <ProfilePhoto />
      {/* Profile Title */}
      <ProfileTitle />
      {/* Professional Summary */}
      <ProfileSummary />
      {/* Core Skills */}
      <ProfileSkills />
      {/* The social media links */}
      <ProfileSocialLink />
      {/* The Profile demographic overview */}
      <ProfileDemoInfo />
      {/* The download resume button */}
      <ProfileDownloadCV />
    </article>
  );
}
