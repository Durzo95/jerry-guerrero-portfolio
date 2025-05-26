import React from "react";
import MainBodyAboutMe from "./MainBodyAboutMe";
import MainBodyWhatIDo from "./MainBodyWhatIDo";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";

export default function MainBody() {
  return (
    <main className="h-max w-full bg-gray-900 sm:rounded-2xl shadow-2xl py-8 px-6 max-w-4xl">
      {/* About Me */}
      <section id="about">
        <MainBodyAboutMe />
      </section>
      {/* What I do */}
      <section id="what-i-do">
        <MainBodyWhatIDo />
      </section>
      {/* Projects */}
      <ProjectsSection />
      {/* Contact */}
      <ContactSection />
    </main>
  );
}
