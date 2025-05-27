import React from "react";
import MainBodyTitle from "./MainBodyTitle";

export default function MainBodyAboutMe() {
  return (
    <article>
      {/* About Me Title */}
      <MainBodyTitle title="About Me" />
      <div className="text-gray-400 mb-8 text-lg leading-relaxed">
        <p className="mt-4">
          I'm Gerardo Guerrero, a Data Applications Manager at IDEA Public Schools and Computer Science 
          graduate. I lead a high-performing team that manages four enterprise-level Student Information 
          Systems supporting 80,000+ students and 9,000+ staff across Texas, Florida, and Ohio.
        </p>
        <p className="mt-4">
          I specialize in building automation pipelines using Python, Oracle SQL, and JavaScript 
          that deliver measurable impact. My work has eliminated thousands of hours of 
          manual work, replaced licensed external tools yielding cost savings in the tens 
          of thousands of dollars, and automatically created user accounts for over 15,000 users in the district. 
          From automating registration processes to syncing geographic enrollment boundaries 
          with OpenStreetMap and TEA data, I design solutions that safeguard our district 
          rating and eliminate compliance risks.
        </p>
        <p className="mt-4">
          Beyond automation, I drive systems uptime across multiple server arrays, conduct 
          monthly security audits, manage disaster recovery planning, and lead a help desk 
          operation that closes over 5,000 tickets annually with 97%+ satisfaction. I was 
          a critical member of the team that took the district fully online during COVID 
          in just four weeks.
        </p>
        <p className="mt-4">
          Off the clock, I dive into fantasy novels, build out my home server stack, 
          and lose time to Monster Hunter.
        </p>
      </div>
    </article>
  );
}
