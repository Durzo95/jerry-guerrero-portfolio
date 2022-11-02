import React from "react";
import MainBodyTitle from "./MainBodyTitle";
import MainBodyAboutCard from "./MainBodyAboutCard";
import { MdSettings } from "react-icons/md";
import { FaCode } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { VscDebugConsole } from "react-icons/vsc";
export default function MainBody() {
  return (
    <>
      <div className="h-max w-2/3 bg-gray-900 rounded-2xl shadow-2xl py-8 px-6">
        {/* About Me Title */}
        <MainBodyTitle title="About Me" />
        <div className="text-gray-400 mb-8 text-lg">
          I am a Computer Science graduate working as the Data Applications
          Manager for IDEA Public Schools. Currently managing the Applications
          team to administrate 4 Student Information Systems (SIS) in 4
          different states with a grand total of over 9,000 school admins and
          80,000 students.
          <div className="mt-4" /> {/* Line Break */}
          My technical skills involve working with Python, SQL, and JavaScript.
          With these tools I have solved and automated complex processes for the
          organization. This includes the imports of student data from the
          student registration platform to the SIS systems, the automation of
          our staff accounts, and boundary checks to make sure we are only
          enrolling students within our district boundary.
          <div className="mt-4" /> {/* Line Break */}
          For soft skills, I have experience in managing our applications team
          through clear communication of our goals, processes, and training. We
          have not only been able to meet our goals but exceed them every year.
        </div>
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
            description=""
          />
        </div>
      </div>
    </>
  );
}
