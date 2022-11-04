import React from "react";
import MainBodyTitle from "./MainBodyTitle";

export default function MainBodyAboutMe() {
  return (
    <article>
      {/* About Me Title */}
      <MainBodyTitle title="About Me" />
      <div className="text-gray-400 mb-8 text-lg">
        <p className="mt-4">
          I am a Computer Science graduate working as the Data Applications
          Manager for IDEA Public Schools in their Data Services department.
          Currently managing a team of an Application Admin, Data Analyst, and a
          Help Desk Clerk to administrate 4 Student Information Systems (SIS) in
          4 different states with a grand total of over 9,000 school staff users
          and 80,000 students.
        </p>
        <p className="mt-4">
          My technical skills involve working with Python, SQL, and JavaScript.
          With these tools I have solved and automated complex processes for the
          organization. This includes the imports of student, staff, and geo
          boundary data.
        </p>
        <p className="mt-4">
          For soft skills, I have experience in managing our team through clear
          communication of our goals, processes, and training. We have not only
          been able to meet our goals but exceed them every year.
        </p>
        <p className="mt-4">
          In my spare time I like to play video games, watch content on Youtube,
          and read fantasy books.
        </p>
      </div>
    </article>
  );
}
