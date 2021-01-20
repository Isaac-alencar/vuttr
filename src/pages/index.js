import Head from "next/head";

import {
  ModalProvider,
  RemoveToolModalProvider,
} from "../context/toggleModalContext";

import AddToolModal from "../components/AddToolModal";
import RemoveToolModal from "../components/RemoveToolModal";
import Header from "../components/Header";
import ToolCard from "../components/ToolCard";

import indexStyle from "../styles/index.module.css";

export default function Home() {
  return (
    <ModalProvider>
      <div className={indexStyle.container}>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <AddToolModal />
        <Header />
        <RemoveToolModalProvider>
          <RemoveToolModal />
          <ToolCard />
        </RemoveToolModalProvider>
      </div>
    </ModalProvider>
  );
}
