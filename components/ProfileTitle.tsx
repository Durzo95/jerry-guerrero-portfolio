import profileData from "../data/profileData";

export default function ProfileTitle() {
  return (
    <div className="text-center mb-6">
      {/* The name */}
      <h1 className="text-3xl font-bold text-white mb-2">{profileData.personal.fullName}</h1>
      {/* The title */}
      <h2 className="text-lg text-blue-400 font-semibold mb-2">
        {profileData.personal.title}
      </h2>
      {/* Tagline */}
      <p className="text-gray-400 text-sm">
        {profileData.personal.tagline}
      </p>
    </div>
  );
}
