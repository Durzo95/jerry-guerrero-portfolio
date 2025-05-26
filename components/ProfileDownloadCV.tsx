import { MdDownload } from "react-icons/md";

export default function DownloadCV() {
  return (
    <div className="mt-6">
      <a
        href="https://drive.google.com/file/d/1WFWc1VWiRnBJo3a_qeW8HO-z7Bk4Y1OB/view?usp=share_link"
        download={"Gerardo Guerrero Resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full"
      >
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg inline-flex items-center justify-center transform transition duration-300 hover:scale-105 border border-blue-500 hover:border-blue-400">
          <MdDownload className="w-5 h-5 mr-2" />
          <span>Download Resume</span>
        </button>
      </a>
    </div>
  );
}
