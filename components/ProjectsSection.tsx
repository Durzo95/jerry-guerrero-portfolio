import React, { useState, useMemo } from "react";
import MainBodyTitle from "./MainBodyTitle";
import ProjectCard from "./ProjectCard";
import ProjectFilter from "./ProjectFilter";
import projectsData from "../data/projectsData";

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");

  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const categoryMatch = selectedCategory === "all" || project.category === selectedCategory;
      const statusMatch = selectedStatus === "all" || project.status === selectedStatus;
      return categoryMatch && statusMatch;
    });
  }, [selectedCategory, selectedStatus]);

  return (
    <section id="projects" className="mt-12">
      <MainBodyTitle title="Projects" />
      <div className="text-gray-400 text-lg">
        <p className="mt-4 mb-8">
          Here are some of the key projects I've worked on, showcasing my technical skills 
          and problem-solving abilities across automation, web development, data analysis, and team management.
        </p>
        
        {/* Project Filters */}
        <ProjectFilter
          selectedCategory={selectedCategory}
          selectedStatus={selectedStatus}
          onCategoryChange={setSelectedCategory}
          onStatusChange={setSelectedStatus}
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
                  setSelectedStatus("all");
                }}
                className="mt-4 bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>

        {/* Project Stats */}
        <div className="mt-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-white">{projectsData.length}</div>
            <div className="text-gray-400 text-sm">Total Projects</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-400">
              {projectsData.filter(p => p.status === "completed").length}
            </div>
            <div className="text-gray-400 text-sm">Completed</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-yellow-400">
              {projectsData.filter(p => p.status === "in-progress").length}
            </div>
            <div className="text-gray-400 text-sm">In Progress</div>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-400">
              {projectsData.filter(p => p.category === "automation").length}
            </div>
            <div className="text-gray-400 text-sm">Automation</div>
          </div>
        </div>
      </div>
    </section>
  );
} 