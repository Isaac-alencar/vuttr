import { createContext, useState } from "react";

export const ModalContext = createContext({});

export const ModalProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export const RemoveToolModalContext = createContext({});

export const RemoveToolModalProvider = (props) => {
  const [isDisplaying, setIsDisplaying] = useState(false);

  return (
    <RemoveToolModalContext.Provider value={{ isDisplaying, setIsDisplaying }}>
      {props.children}
    </RemoveToolModalContext.Provider>
  );
};
