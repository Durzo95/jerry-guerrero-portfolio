import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <body className="h-screen bg-gray-800 pb-16 pt-32">
      <Head>
        <title>Jerry Guerrero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Holding the content, set the flex row */}
      <div className="flex flex-row gap-12">
        {/* Left side of the page, the profile */}
        <div className="w-1/3 h-max py-8 bg-gray-900 rounded-2xl shadow-2xl text-white">
          {/* The name */}
          <h1 className="text-4xl font-bold text-center">Jerry Guerrero</h1>
          {/* The title */}
          <h2 className="text-2xl text-center text-gray-400 mt-4">
            Application Manager
          </h2>
          {/* The social media links */}
          <div className="flex flex-row gap-4 justify-center mt-8">
            <a
              href="https://www.linkedin.com/in/gerardo-guerrero2/"
              className="bg-gray-700 rounded-md p-2"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={32}
                height={32}
              />
            </a>
            <a
              href="https://github.com/Durzo95"
              className="bg-gray-700 rounded-md p-2"
            >
              <Image src="/github.svg" alt="Github" width={32} height={32} />
            </a>
            <a
              href="mailto: jerry.guerrero95@gmail.com"
              className="bg-gray-700 rounded-md p-2"
            >
              <Image src="/email.svg" alt="Email" width={32} height={32} />
            </a>
          </div>
        </div>
        {/* Right side of the page, the content */}
        <div className="h-max w-2/3 bg-gray-900 rounded-2xl shadow-2xl text-gray-400 py-8 px-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper
          pharetra elementum. In aliquet enim in orci tempus tempus. In orci
          quam, pellentesque quis blandit eget, fermentum ut magna. Aenean
          mollis metus tincidunt magna ultricies accumsan. In hac habitasse
          platea dictumst. Proin molestie diam tincidunt nisi placerat euismod.
          Mauris erat eros, blandit quis dignissim ut, luctus posuere lacus.
          Fusce ex augue, placerat non laoreet vel, aliquam non sapien. Maecenas
          eget sollicitudin nisl, eget eleifend tellus. Aliquam commodo magna
          odio, non lacinia dolor vulputate eget. Phasellus posuere blandit
          lectus, ut condimentum quam egestas quis. Ut congue, odio a consequat
          placerat, libero enim posuere nibh, lobortis fermentum turpis diam nec
          nibh. Curabitur et pretium nisi. Proin efficitur dui ullamcorper
          sapien imperdiet ornare. Aliquam erat volutpat. Donec laoreet
        </div>
      </div>
    </body>
  );
};

export default Home;
