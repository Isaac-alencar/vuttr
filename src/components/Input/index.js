import styles from "./styles.module.css";

function Input({ name, label, ...inputProps }) {
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={label}>{name}</label>
      <input
        id={label}
        type="text"
        placeholder={name}
        required
        {...inputProps}
      />
    </div>
  );
}

export default Input;
