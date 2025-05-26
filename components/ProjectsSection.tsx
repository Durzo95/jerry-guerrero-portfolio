import React from "react";
import MainBodyTitle from "./MainBodyTitle";

export default function ProjectsSection() {
  return (
    <section id="projects" className="mt-12">
      <MainBodyTitle title="Projects" />
      <div className="text-gray-400 text-lg">
        <p className="mt-4">
          This section will showcase my key projects and technical achievements.
          Coming soon with detailed project descriptions, technologies used, and live demos.
        </p>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-8">
          {/* Placeholder project cards */}
          <div className="rounded-lg bg-gray-800 p-6">
            <h3 className="text-white text-xl font-bold mb-2">Data Automation Platform</h3>
            <p className="text-gray-400 mb-4">
              Automated student and staff data imports across multiple SIS platforms
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Python</span>
              <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">SQL</span>
              <span className="bg-purple-600 text-white px-2 py-1 rounded text-sm">APIs</span>
            </div>
          </div>
          
          <div className="rounded-lg bg-gray-800 p-6">
            <h3 className="text-white text-xl font-bold mb-2">Portfolio Website</h3>
            <p className="text-gray-400 mb-4">
              Modern responsive portfolio built with Next.js and TypeScript
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">Next.js</span>
              <span className="bg-blue-400 text-white px-2 py-1 rounded text-sm">TypeScript</span>
              <span className="bg-teal-600 text-white px-2 py-1 rounded text-sm">Tailwind</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 