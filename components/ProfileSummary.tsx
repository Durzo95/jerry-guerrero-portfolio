import React from "react";

export default function ProfileSummary() {
  return (
    <div className="mt-6 mb-6 text-center">
      {/* Key Stats */}
      <div 
        className="grid grid-cols-3 gap-3 mt-4"
        role="list"
        aria-label="Key professional statistics"
      >
        <div className="bg-gray-800 rounded-lg p-3" role="listitem">
          <div className="text-blue-400 text-lg font-bold" aria-label="80,000 plus students served">80K+</div>
          <div className="text-gray-400 text-xs">Students Served</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3" role="listitem">
          <div className="text-green-400 text-lg font-bold" aria-label="9,000 plus staff users">15K+</div>
          <div className="text-gray-400 text-xs">Staff Users</div>
        </div>
        <div className="bg-gray-800 rounded-lg p-3" role="listitem">
          <div className="text-purple-400 text-lg font-bold" aria-label="4 states">4</div>
          <div className="text-gray-400 text-xs">States</div>
        </div>
      </div>
    </div>
  );
} 