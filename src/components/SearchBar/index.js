import styles from "./styles.module.css";

function SearchBar() {
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
      <button className={styles.button}>+ Add</button>
      <div className={styles.floatActionButton}>+</div>
    </div>
  );
}

export default SearchBar;
