import React from "react";
import MainBodyTitle from "./MainBodyTitle";

export default function MainBodyAboutMe() {
  return (
    <article>
      {/* About Me Title */}
      <MainBodyTitle title="About Me" />
      <div className="text-gray-400 mb-8 text-lg leading-relaxed">
        <p className="mt-4">
          I'm Gerardo Guerrero, a Computer Science graduate and the Data Applications 
          Manager at IDEA Public Schools. I lead a high-performing team that manages 
          four enterprise-level Student Information Systems supporting 80,000+ students 
          and 9,000+ staff across Texas, Louisiana, Florida, and Ohio.
        </p>
        <p className="mt-4">
          I specialize in building and managing automation pipelines using Python, SQL, 
          and JavaScript. My work has eliminated thousands of hours of manual labor, 
          replaced costly vendor tools, and ensured compliance with strict state education 
          standards. From automating re-registration and user provisioning to syncing 
          geographic enrollment boundaries with OpenStreetMap and TEA data, I design 
          solutions that deliver real operational value.
        </p>
        <p className="mt-4">
          Beyond code, I drive systems uptime, security audits, disaster recovery planning, 
          and a help desk operation that closes over 5,600 tickets annually with 97%+ 
          satisfaction. I also built and launched a commercial site for a private client 
          using Next.js, React, and Tailwind.
        </p>
        <p className="mt-4">
          Off the clock, I dive into fantasy novels, build out my home server stack, 
          and lose time to Monster Hunter.
        </p>
      </div>
    </article>
  );
}
