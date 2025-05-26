import React from "react";

interface ProjectFilterProps {
  selectedCategory: string;
  selectedStatus: string;
  onCategoryChange: (category: string) => void;
  onStatusChange: (status: string) => void;
}

export default function ProjectFilter({
  selectedCategory,
  selectedStatus,
  onCategoryChange,
  onStatusChange,
}: ProjectFilterProps) {
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "automation", label: "Automation" },
    { value: "web-development", label: "Web Development" },
    { value: "data-analysis", label: "Data Analysis" },
    { value: "management", label: "Management" },
  ];

  const statuses = [
    { value: "all", label: "All Status" },
    { value: "completed", label: "Completed" },
    { value: "in-progress", label: "In Progress" },
    { value: "planned", label: "Planned" },
  ];

  return (
    <div className="mb-8 flex flex-wrap gap-4 items-center">
      <div className="text-white font-semibold">Filter by:</div>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category.value
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      {/* Status Filter */}
      <div className="flex flex-wrap gap-2">
        {statuses.map((status) => (
          <button
            key={status.value}
            onClick={() => onStatusChange(status.value)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedStatus === status.value
                ? "bg-green-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
            }`}
          >
            {status.label}
          </button>
        ))}
      </div>
    </div>
  );
} 