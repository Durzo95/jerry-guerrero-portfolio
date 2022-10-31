export default function DownloadCV() {
  return (
    <div className="flex justify-center">
      <button className="bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center transform transition duration-500 hover:scale-125 hover:bg-blue-500">
        <svg
          className="fill-current w-4 h-4 mr-2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
        </svg>
        <span>Download Resume</span>
      </button>
    </div>
  );
}
