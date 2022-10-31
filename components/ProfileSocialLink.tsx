import React from "react";
import Image from "next/image";
import { IconType } from "react-icons";

interface SocialLinkProps {
  href: string;
  Icon: IconType;
  color?: string;
}

export default function SocialLink({ href, Icon, color }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="bg-gray-800 rounded-md p-2 transform transition duration-500 hover:scale-125 hover:bg-blue-900"
    >
      <Icon size={32} style={{ color: color }} />
    </a>
  );
}
