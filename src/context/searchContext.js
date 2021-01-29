import { createContext, useContext, useState } from "react";

export const ToolsListContext = createContext({});

export const ToolsListProvider = (props) => {
  const [toolsList, setToolsList] = useState([]);

  return (
    <ToolsListContext.Provider value={{ toolsList, setToolsList }}>
      {props.children}
    </ToolsListContext.Provider>
  );
};

export const InputSearchContext = createContext({});

export const InputSearchProvider = (props) => {
  const [isTagSearchEnabled, setIsTagSearchEnebled] = useState(false);

  return (
    <InputSearchContext.Provider
      value={{ isTagSearchEnabled, setIsTagSearchEnebled }}
    >
      {props.children}
    </InputSearchContext.Provider>
  );
};
