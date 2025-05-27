import React, { useState, useMemo } from "react";
import MainBodyTitle from "./MainBodyTitle";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import projectsData from "../data/projectsData";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
      return categoryMatch;
    });
  }, [selectedCategory]);

  return (
    <div id="projects">
      <MainBodyTitle title="Projects" />
      <div className="text-gray-400 text-lg">
        
        {/* Project Filters */}
        <ProjectFilter
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-1 grid-cols-1 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500">No projects found matching the selected filters.</p>
              <button
                onClick={() => {
                  setSelectedCategory("all");
                }}
                className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>


      </div>
    </div>
  );
} 