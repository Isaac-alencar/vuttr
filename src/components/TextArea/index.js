import styles from "./styles.module.css";

function TextArea({ name, label, ...textAreaProps }) {
  return (
    <div className={styles.inputBlock}>
      <label htmlFor={label}>{name}</label>
      <textarea id={label} placeholder={name} required {...textAreaProps} />
    </div>
  );
}

export default TextArea;
