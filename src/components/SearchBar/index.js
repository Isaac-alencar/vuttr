import { useContext, useState } from "react";

import api from "../../services/api";

import { ModalContext } from "../../context/toggleModalContext";
import {
  InputSearchContext,
  ToolsListContext,
} from "../../context/searchContext";

import FloatActionButton from "../Buttons/FloatActionButton";
import ButtonPrimary from "../Buttons/ButtonPrimary";

import styles from "./styles.module.css";
import SearchInput from "../Inputs/SearchInput";
import CheckBoxInput from "../Inputs/CheckBoxInput";

function SearchBar() {
  const [value, setValue] = useState("");

  const { _, setIsOpen } = useContext(ModalContext);

  const { isTagSearchEnabled, setIsTagSearchEnebled } = useContext(
    InputSearchContext
  );
  const { setToolsList } = useContext(ToolsListContext);

  async function searchTool(e) {
    let response;
    if (isTagSearchEnabled === false && e.key === "Enter") {
      response = await api.get(`?q=${value}`);
      setToolsList(response.data);
    } else if (isTagSearchEnabled === true && e.key === "Enter") {
      response = await api.get(`?tags_like=${value}`);
      setToolsList(response.data);
    }
  }

  return (
    <div className={styles.actions}>
      <div className={styles.inputBlock}>
        <SearchInput
          name="Search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={searchTool}
        />
        <CheckBoxInput
          checked={isTagSearchEnabled}
          onChange={() => setIsTagSearchEnebled(!isTagSearchEnabled)}
          label="Search in tags only"
          name="checkbox"
        />
      </div>
      <ButtonPrimary
        innerText="+ Add"
        id="add_tool"
        onClick={() => setIsOpen(true)}
      />
      <FloatActionButton innerText="+" onClick={() => setIsOpen(true)} />
    </div>
  );
}

export default SearchBar;
