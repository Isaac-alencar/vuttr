import styles from "./styles.module.css";

function SearchInput({ name, ...inputProps }) {
  return (
    <input placeholder={name} {...inputProps} className={styles.searchBar} />
  );
}

export default SearchInput;
