import MainBodyTitle from "./MainBodyTitle";
import MainBodyAboutCard from "./MainBodyAboutCard";
import { MdSettings } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { VscDebugConsole } from "react-icons/vsc";
import whatIDoData from "../data/whatIDoData";

export default function MainBodyWhatIDo() {
  return (
    <div>
      <MainBodyTitle title="What I do" />
      <div className="text-gray-400 text-lg">
        <p className="mt-4 mb-8">
          Here are the key areas where I focus my expertise and drive impact across the organization.
        </p>
        
        {/* Two column grid matching project section style */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
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
      </div>
    </div>
  );
}
