import { MdDownload } from "react-icons/md";

export default function DownloadCV() {
  return (
    <div className="flex justify-center">
      <a
        href="https://drive.google.com/file/d/1WFWc1VWiRnBJo3a_qeW8HO-z7Bk4Y1OB/view?usp=share_link"
        download={"Gerardo Guerrero Resume.pdf"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center transform transition duration-500 hover:scale-105 hover:bg-blue-500">
          <MdDownload className="w-6 h-6 mr-2" />
          <span>Download Resume</span>
        </button>
      </a>
    </div>
  );
}
