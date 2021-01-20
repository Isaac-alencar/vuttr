import { useContext } from "react";
import { ModalContext } from "../../context/toggleModalContext";

import FloatActionButton from "../Buttons/FloatActionButton";

import styles from "./styles.module.css";

function SearchBar() {
  const { _, setIsOpen } = useContext(ModalContext);

  return (
    <div className={styles.actions}>
      <div className={styles.inputBlock}>
        <input type="text" placeholder="Search" className={styles.searchBar} />
        <div className={styles.checkbox}>
          <input
            type="checkbox"
            id="checkbox"
            className={styles.checkboxInput}
          />
          <label htmlFor="checkbox" className={styles.label}>
            Search in tags only
          </label>
        </div>
      </div>
      {/* 
        The generic `<ButtonPrimary />` is not used, because
        on min size screen the floatActionButton is used instead of it.
        So, we got to apply display none on `<ButtonPrimary />`,
        this affects others places on he is used.
       */}
      <button onClick={() => setIsOpen(true)} className={styles.button}>
        + Add
      </button>
      <FloatActionButton innerText="+" onClick={() => setIsOpen(true)} />
    </div>
  );
}

export default SearchBar;
