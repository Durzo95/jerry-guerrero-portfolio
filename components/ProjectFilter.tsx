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
    { value: "web-development", label: "Web Development" },
    { value: "management", label: "Management" },
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
    </div>
  );
} 