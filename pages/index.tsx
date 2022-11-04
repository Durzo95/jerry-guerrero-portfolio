import type { NextPage } from "next";
import Head from "next/head";
import Profile from "../components/Profile";
import MainBody from "../components/MainBody";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jerry Guerrero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-full min-h-screen bg-gray-800 sm:py-8 sm:px-4 lg:py-32 lg:px-10">
        {/* Holding all the content, set the flex row */}
        <div className="grid grid-cols-12 sm:gap-8">
          {/* Left side of the page, the profile */}
          <div className="col-span-12 lg:col-span-4">
            <Profile />
          </div>
          {/* Right side of the page, the content */}
          <div className="col-span-12 lg:col-span-8">
            <Navbar />
            <MainBody />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
