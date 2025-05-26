import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <figure className="flex justify-center mb-6">
      <Image
        src="/Headshot.png"
        alt="Gerardo Guerrero"
        width={200}
        height={200}
        className="bg-blue-800 rounded-2xl shadow-2xl"
        placeholder="blur"
        blurDataURL="/Headshot.png"
      />
    </figure>
  );
}
