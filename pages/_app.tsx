import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MyApp({ Component, pageProps }: AppProps) {
  // This is done to prevent a hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <main className={inter.className}>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
