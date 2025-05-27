import React, { useState } from "react";
import { Project } from "../data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <article 
      className="rounded-lg bg-gray-800 p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-gray-600"
      aria-labelledby={`project-title-${project.id}`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 
            id={`project-title-${project.id}`}
            className="text-white text-xl font-bold mb-2"
          >
            {project.title}
          </h3>
          <div className="flex items-center gap-2 mb-3">
            <span 
              className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs capitalize"
              aria-label={`Project category: ${project.category.replace("-", " ")}`}
            >
              {project.category.replace("-", " ")}
            </span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 ml-4" role="group" aria-label="Project links">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <FaGithub size={16} className="text-white" aria-hidden="true" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg transition-colors"
              aria-label={`View ${project.title} live website`}
            >
              <FaExternalLinkAlt size={16} className="text-white" aria-hidden="true" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 mb-4 leading-relaxed">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2 text-sm">Technologies Used</h4>
        <div 
          className="flex flex-wrap gap-2"
          role="list"
          aria-label="Technologies used in this project"
        >
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-gray-700 px-2 py-1 rounded text-sm"
              role="listitem"
              aria-label={`Technology: ${tech.name}`}
            >
              <tech.icon className={tech.color} size={14} aria-hidden="true" />
              <span className="text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features (shown when expanded) */}
      {isExpanded && (
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2 text-sm">Key Features</h4>
          <ul className="space-y-1" aria-label="Project features">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 mt-1" aria-hidden="true">•</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Expand/Collapse Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
        aria-expanded={isExpanded}
        aria-controls={`project-details-${project.id}`}
        aria-label={isExpanded ? `Hide additional details for ${project.title}` : `Show additional details for ${project.title}`}
      >
        {isExpanded ? (
          <>
            <span>Show Less</span>
            <FaChevronUp size={12} aria-hidden="true" />
          </>
        ) : (
          <>
            <span>Show More</span>
            <FaChevronDown size={12} aria-hidden="true" />
          </>
        )}
      </button>
    </article>
  );
} 