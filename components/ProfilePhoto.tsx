import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <div className="flex justify-center lg:absolute lg:left-[50%] lg:transform lg:translate-x-[-50%] lg:mt-[-140px]">
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
