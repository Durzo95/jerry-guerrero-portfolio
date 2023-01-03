import React from "react";
import NavigationLinks from "./NavigationLinks";

export default function Navigation() {
  return (
    <div className="h-max bg-gray-900 sm:rounded-2xl shadow-2xl py-8 px-6 max-w-md mb-6">
      <NavigationLinks />
    </div>
  );
}
