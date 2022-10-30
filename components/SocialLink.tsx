import React from "react";
import Image from "next/image";

interface SocialLinkProps {
  href: string;
  src: string;
  alt: string;
}

export default function SocialLink({ href, src, alt }: SocialLinkProps) {
  return (
    <a
      href={href}
      className="bg-gray-700 rounded-md p-2 transform transition duration-500 hover:scale-125 hover:bg-gray-800"
    >
      <Image src={src} alt={alt} width={32} height={32} />
    </a>
  );
}
