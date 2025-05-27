import React from "react";

interface Props {
  title: string;
}

export default function MainBodyTitle(prop: Props) {
  const titleId = `${prop.title.toLowerCase().replace(/\s+/g, '-')}-title`;
  
  return (
    <h1 
      id={titleId}
      className="text-white mb-4 text-4xl font-bold text-left"
    >
      {prop.title}
    </h1>
  );
}
