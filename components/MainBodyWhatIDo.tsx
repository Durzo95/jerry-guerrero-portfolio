import MainBodyTitle from "./MainBodyTitle";
import MainBodyAboutCard from "./MainBodyAboutCard";
import { MdSettings } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { VscDebugConsole } from "react-icons/vsc";

export default function MainBodyWhatIDo() {
  return (
    <>
      <MainBodyTitle title="What I do" />
      {/* A Two column flex */}
      <div className="flex flex-row gap-8">
        {/* Left column */}
        <MainBodyAboutCard
          Icon={MdSettings}
          title="App Administration"
          description="Manage multiple applications and databases"
        />
        {/* Right column */}
        <MainBodyAboutCard
          Icon={VscDebugConsole}
          title="Automations"
          description="lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem"
        />
      </div>
    </>
  );
}
