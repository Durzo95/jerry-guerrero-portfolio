import React from "react";

export default function ProfileSummary() {
  return (
    <div className="mt-6 mb-6 text-center">
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        Experienced Data Applications Manager with expertise in automation, 
        team leadership, and full-stack development. Passionate about solving 
        complex problems with innovative technology solutions.
      </p>
      
      {/* Key Stats */}
      <div className="grid grid-cols-3 gap-3 mt-4">
        <div className="bg-gray-800 rounded-lg p-3">
          <div className="text-blue-400 text-lg font-bold">80K+</div>
          <div className="text-gray-400 text-xs">Students Served</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3">
          <div className="text-green-400 text-lg font-bold">9K+</div>
          <div className="text-gray-400 text-xs">Staff Users</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3">
          <div className="text-purple-400 text-lg font-bold">4</div>
          <div className="text-gray-400 text-xs">States</div>
        </div>
      </div>
    </div>
  );
} 