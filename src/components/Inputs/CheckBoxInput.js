import styles from "./styles.module.css";

function CheckBoxInput({ name, label, ...checkBoxProps }) {
  return (
    <div className={styles.checkbox} {...checkBoxProps}>
      <input type="checkbox" id={name} className={styles.checkboxInput} />
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
    </div>
  );
}

export default CheckBoxInput;
