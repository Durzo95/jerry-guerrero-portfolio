import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Profile from "../components/Profile";
import MainBody from "../components/MainBody";

const Home: NextPage = () => {
  return (
    <body className="min-h-screen bg-gray-800 py-32 px-10">
      <Head>
        <title>Jerry Guerrero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Holding all the content, set the flex row */}
      <div className="flex flex-row gap-8">
        {/* Left side of the page, the profile */}
        <Profile />
        {/* Right side of the page, the content */}
        <MainBody />
      </div>
    </body>
  );
};

export default Home;
