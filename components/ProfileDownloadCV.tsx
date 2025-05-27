import { MdDownload } from "react-icons/md";
import profileData from "../data/profileData";

export default function DownloadCV() {
  return (
    <div className="mt-6">
      <a
        href={profileData.contact.resumeUrl}
        download={`${profileData.personal.fullName} Resume.pdf`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
        aria-label={`Download ${profileData.personal.fullName}'s resume as PDF`}
      >
        <button 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg inline-flex items-center justify-center transform transition duration-300 hover:scale-105 border border-blue-500 hover:border-blue-400"
          aria-describedby="download-description"
        >
          <MdDownload className="w-5 h-5 mr-2" aria-hidden="true" />
          <span>Download Resume</span>
        </button>
      </a>
      <div id="download-description" className="sr-only">
        Download {profileData.personal.fullName}'s professional resume in PDF format
      </div>
    </div>
  );
}
