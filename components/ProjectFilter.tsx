import React from "react";

interface ProjectFilterProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export default function ProjectFilter({
  selectedCategory,
  onCategoryChange,
}: ProjectFilterProps) {
  const categories = [
    { value: "all", label: "All Categories" },
    { value: "automation", label: "Automation" },
    { value: "management", label: "Management" },
    { value: "analytics", label: "Analytics" },
    { value: "web-development", label: "Web Development" },
  ];

  return (
    <div className="mb-8 flex flex-wrap gap-4 items-center">
      <div className="text-white font-semibold" id="filter-label">Filter by:</div>
      
      {/* Category Filter */}
      <div 
        className="flex flex-wrap gap-2"
        role="group"
        aria-labelledby="filter-label"
        aria-label="Filter projects by category"
      >
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => onCategoryChange(category.value)}
            className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category.value
                ? "bg-blue-600 text-white"
                : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
            }`}
            aria-pressed={selectedCategory === category.value}
            aria-label={`Filter projects by ${category.label}`}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
} 