import React from "react";
import MainBodyTitle from "./MainBodyTitle";

export default function MainBodyAboutMe() {
  return (
    <>
      {/* About Me Title */}
      <MainBodyTitle title="About Me" />
      <div className="text-gray-400 mb-8 text-lg">
        I am a Computer Science graduate working as the Data Applications
        Manager for IDEA Public Schools. Currently managing the Applications
        team to administrate 4 Student Information Systems (SIS) in 4 different
        states with a grand total of over 9,000 school admins and 80,000
        students.
        <div className="mt-4" /> {/* Line Break */}
        My technical skills involve working with Python, SQL, and JavaScript.
        With these tools I have solved and automated complex processes for the
        organization. This includes the imports of student data from the student
        registration platform to the SIS systems, the automation of our staff
        accounts, and boundary checks to make sure we are only enrolling
        students within our district boundary.
        <div className="mt-4" /> {/* Line Break */}
        For soft skills, I have experience in managing our applications team
        through clear communication of our goals, processes, and training. We
        have not only been able to meet our goals but exceed them every year.
      </div>
    </>
  );
}
