import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="flex justify-center mb-4">
      <Image
        src="/Headshot.png"
        alt="Jerry Guerrero"
        width={300}
        height={300}
        className="bg-blue-800 rounded-2xl shadow-2xl"
        placeholder="blur"
        blurDataURL="/Headshot.png"
      />
    </div>
  );
}
