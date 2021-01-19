import Head from "next/head";

import Header from "../components/Header";
import TechCard from "../components/TechCard";

import indexStyle from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={indexStyle.container}>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <TechCard />
    </div>
  );
}
