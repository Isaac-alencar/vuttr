import { useContext, useEffect } from "react";

import Head from "next/head";

import api from "../services/api";

import {
  ModalProvider,
  RemoveToolModalProvider,
} from "../context/toggleModalContext";

import { ToolsListContext } from "../context/searchContext";

import AddToolModal from "../components/AddToolModal";
import RemoveToolModal from "../components/RemoveToolModal";
import Header from "../components/Header";
import ToolCard from "../components/ToolCard";

import indexStyle from "../styles/index.module.css";

export default function Home() {
  const { toolsList, setToolsList } = useContext(ToolsListContext);

  useEffect(() => {
    getToolsList();
  }, []);

  async function getToolsList() {
    const response = await api.get();
    setToolsList(response.data);
  }

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
          {toolsList &&
            toolsList.map((tool) => {
              return (
                <ToolCard
                  key={tool.id}
                  title={tool.title}
                  link={tool.link}
                  description={tool.description}
                  tags={tool.tags}
                  id={tool.id}
                />
              );
            })}
        </RemoveToolModalProvider>
      </div>
    </ModalProvider>
  );
}
