import Image from "next/image";

export default function ProfilePhoto() {
  return (
    <figure className="flex justify-center mb-6">
      <Image
        src="/Headshot.png"
        alt="Professional headshot of Gerardo Guerrero, Data Applications Manager"
        width={200}
        height={200}
        className="bg-blue-800 rounded-2xl shadow-2xl"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPj/HwADBwL+hD3DxgAAAABJRU5ErkJggg=="
      />
    </figure>
  );
}
