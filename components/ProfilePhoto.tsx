import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="absolute left-[50%] transform translate-x-[-50%] mt-[-140px]">
      <Image
        src="/Headshot.png"
        alt="Jerry Guerrero"
        width={300}
        height={300}
        className="bg-blue-800 rounded-2xl shadow-2xl"
      />
    </div>
  );
}
