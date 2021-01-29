import styles from "./styles.module.css";

function FormInput({ name, label, ...inputProps }) {
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

export default FormInput;
