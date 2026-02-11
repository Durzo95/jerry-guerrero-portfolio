import type { NextPage } from "next";
import Head from "next/head";
import Profile from "../components/Profile";
import MainBody from "../components/MainBody";
import Navigation from "../components/Navigation";
import profileData from "../data/profileData";
import { uiText } from "../data/uiText";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>{profileData.personal.fullName} - {profileData.personal.title}</title>
        <meta name="description" content={`${profileData.personal.fullName} is a ${profileData.personal.title} at ${profileData.organization.company}, specializing in automation, enterprise systems, and educational technology solutions.`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content={profileData.personal.fullName} />
        <meta name="keywords" content="Data Applications Manager, Automation, Python, Oracle SQL, Educational Technology, Student Information Systems" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.jerryguerrero.com/" />
        <meta property="og:title" content={`${profileData.personal.fullName} - ${profileData.personal.title}`} />
        <meta property="og:description" content={`${profileData.personal.fullName} is a ${profileData.personal.title} at ${profileData.organization.company}, specializing in automation, enterprise systems, and educational technology solutions.`} />
        <meta property="og:image" content="https://www.jerryguerrero.com/preview.png" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.jerryguerrero.com/" />
        <meta property="twitter:title" content={`${profileData.personal.fullName} - ${profileData.personal.title}`} />
        <meta property="twitter:description" content={`${profileData.personal.fullName} is a ${profileData.personal.title} at ${profileData.organization.company}, specializing in automation, enterprise systems, and educational technology solutions.`} />
        <meta property="twitter:image" content="https://www.jerryguerrero.com/preview.png" />
      </Head>
      <Navigation />
      <div className="min-h-screen bg-gray-800 pt-16">
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-blue-600 text-white px-4 py-2 rounded-lg z-50"
        >
          {uiText.skipToContent}
        </a>

        {/* Hero Section with Profile */}
        <section className="lg:flex lg:justify-center py-4 px-4 lg:py-8 lg:px-10">
          <div className="max-w-7xl w-full">
            <div className="grid grid-cols-12 gap-4 lg:gap-8">
              {/* Left side - Profile (Sticky on desktop) */}
              <aside
                className="col-span-12 lg:col-span-4 xl:col-span-4"
                aria-label={uiText.profile.ariaLabel}
              >
                <div className="lg:sticky lg:top-24">
                  <Profile />
                </div>
              </aside>
              {/* Right side - Main Content */}
              <div
                id="main-content"
                className="col-span-12 lg:col-span-8 xl:col-span-8"
              >
                <MainBody />
              </div>
            </div>
          </div>
        </section>
      </div>
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
