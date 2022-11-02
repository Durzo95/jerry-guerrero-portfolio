import MainBodyTitle from "./MainBodyTitle";
import MainBodyAboutCard from "./MainBodyAboutCard";
import { MdSettings } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { VscDebugConsole } from "react-icons/vsc";
import whatIDoData from "../data/whatIDoData";

export default function MainBodyWhatIDo() {
  return (
    <>
      <MainBodyTitle title="What I do" />
      {/* A Two column grid */}
      <div className="grid grid-cols-2 gap-8 px-4">
        {whatIDoData.map((data, i) => (
          <MainBodyAboutCard
            key={i}
            Icon={data.Icon}
            title={data.title}
            description={data.description}
            tailwindColor={data.tailwindColor}
          />
        ))}
      </div>
    </>
  );
}
