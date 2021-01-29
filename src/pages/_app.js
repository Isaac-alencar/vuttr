import {
  InputSearchProvider,
  ToolsListProvider,
} from "../context/searchContext";

import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ToolsListProvider>
      <InputSearchProvider>
        <Component {...pageProps} />
      </InputSearchProvider>
    </ToolsListProvider>
  );
}

export default MyApp;
