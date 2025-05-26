import type { NextPage } from "next";
import Head from "next/head";
import Profile from "../components/Profile";
import MainBody from "../components/MainBody";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Jerry Guerrero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="lg:flex lg:justify-center h-full min-h-screen bg-gray-800 sm:py-8 sm:px-4 lg:py-32 lg:px-10 pt-16">
        {/* Holding all the content, set the grid */}
        <div className="grid grid-cols-12 sm:gap-8 ">
          {/* Left side of the page, the profile */}
          <div className="col-span-12 lg:col-span-4">
            <Profile />
          </div>
          {/* Right side of the page, the content */}
          <div className="col-span-12 lg:col-span-8">
            <MainBody />
          </div>
        </div>
      </main>
    </>
  );
};

// Makes it so the index page renders at build time, allowing it to cache in a CDN and be served faster
export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}

export default Home;
