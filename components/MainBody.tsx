import React from "react";
import MainBodyAboutMe from "./MainBodyAboutMe";
import MainBodyWhatIDo from "./MainBodyWhatIDo";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

export default function MainBody() {
  return (
    <main className="space-y-6 lg:space-y-8" role="main" aria-label="Main content">
      {/* About Me Section */}
      <section 
        id="about" 
        className="bg-gray-900 rounded-2xl shadow-2xl py-6 px-6 lg:py-8 lg:px-8 border border-gray-700"
        aria-labelledby="about-title"
      >
        <MainBodyAboutMe />
      </section>
      
      {/* What I do Section */}
      <section 
        id="what-i-do" 
        className="bg-gray-900 rounded-2xl shadow-2xl py-6 px-6 lg:py-8 lg:px-8 border border-gray-700"
        aria-labelledby="what-i-do-title"
      >
        <MainBodyWhatIDo />
      </section>
      
      {/* Projects Section */}
      <section 
        className="bg-gray-900 rounded-2xl shadow-2xl py-6 px-6 lg:py-8 lg:px-8 border border-gray-700"
        aria-labelledby="projects-title"
      >
        <ProjectsSection />
      </section>
      
      {/* Contact Section */}
      <section 
        className="bg-gray-900 rounded-2xl shadow-2xl py-6 px-6 lg:py-8 lg:px-8 border border-gray-700"
        aria-labelledby="contact-title"
      >
        <ContactSection />
      </section>
    </main>
  );
}
