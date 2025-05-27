import type { NextPage } from "next";
import Head from "next/head";
import Profile from "../components/Profile";
import MainBody from "../components/MainBody";
import Navigation from "../components/Navigation";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Gerardo Guerrero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <main className="min-h-screen bg-gray-800 pt-16">
        {/* Hero Section with Profile */}
        <section className="lg:flex lg:justify-center py-4 px-4 lg:py-8 lg:px-10">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-12 gap-4 lg:gap-8">
              {/* Left side - Profile (Sticky on desktop) */}
              <div className="col-span-12 lg:col-span-4 xl:col-span-4">
                <div className="lg:sticky lg:top-24">
                  <Profile />
                </div>
              </div>
              {/* Right side - Main Content */}
              <div className="col-span-12 lg:col-span-8 xl:col-span-8">
                <MainBody />
              </div>
            </div>
          </div>
        </section>
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
