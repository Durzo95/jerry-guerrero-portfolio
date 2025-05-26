import React, { useState } from "react";
import { Project } from "../data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "bg-green-600";
      case "in-progress":
        return "bg-yellow-600";
      case "planned":
        return "bg-blue-600";
      default:
        return "bg-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Completed";
      case "in-progress":
        return "In Progress";
      case "planned":
        return "Planned";
      default:
        return "Unknown";
    }
  };

  return (
    <div className="rounded-lg bg-gray-800 p-6 hover:bg-gray-750 transition-colors duration-300 border border-gray-700 hover:border-gray-600">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
          <div className="flex items-center gap-2 mb-3">
            <span className={`${getStatusColor(project.status)} text-white px-2 py-1 rounded text-xs font-medium`}>
              {getStatusText(project.status)}
            </span>
            <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs capitalize">
              {project.category.replace("-", " ")}
            </span>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex gap-2 ml-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 hover:bg-gray-600 p-2 rounded-lg transition-colors"
              title="View on GitHub"
            >
              <FaGithub size={16} className="text-white" />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-500 p-2 rounded-lg transition-colors"
              title="View Live Site"
            >
              <FaExternalLinkAlt size={16} className="text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-gray-400 mb-4 leading-relaxed">
        {isExpanded ? project.longDescription : project.description}
      </p>

      {/* Technologies */}
      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2 text-sm">Technologies Used</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-1 bg-gray-700 px-2 py-1 rounded text-sm"
            >
              <tech.icon className={tech.color} size={14} />
              <span className="text-gray-300">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Features (shown when expanded) */}
      {isExpanded && (
        <div className="mb-4">
          <h4 className="text-white font-semibold mb-2 text-sm">Key Features</h4>
          <ul className="space-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="text-gray-400 text-sm flex items-start">
                <span className="text-blue-400 mr-2 mt-1">•</span>
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
      >
        {isExpanded ? (
          <>
            <span>Show Less</span>
            <FaChevronUp size={12} />
          </>
        ) : (
          <>
            <span>Show More</span>
            <FaChevronDown size={12} />
          </>
        )}
      </button>
    </div>
  );
} 