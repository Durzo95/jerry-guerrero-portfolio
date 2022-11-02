import React from "react";

interface Props {
  title: string;
}

export default function MainBodyTitle(prop: Props) {
  return (
    <h1 className="text-white mb-4 text-4xl font-bold text-left">
      {prop.title}
    </h1>
  );
}
