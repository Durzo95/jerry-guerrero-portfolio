import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <body className="h-screen bg-gradient-to-br from-gray-700 to-gray-800">
      <Head>
        <title>Jerry Guerrero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* div that pads the screen on all sides */}
      <div className="h-full px-16 pb-16 pt-32">
        {/* div that contains the content */}
        <div className="h-full bg-gray-900 rounded-3xl shadow-2xl"></div>
      </div>
    </body>
  );
};

export default Home;
