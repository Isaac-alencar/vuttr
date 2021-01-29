import styles from "./styles.module.css";

function ButtonPrimary({ id, innerText, ...buttonProps }) {
  return (
    <button id={id} className={styles.ButtonPrimaryStyles} {...buttonProps}>
      {innerText}
    </button>
  );
}
export default ButtonPrimary;
