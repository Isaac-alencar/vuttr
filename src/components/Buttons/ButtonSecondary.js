import styles from "./styles.module.css";

function ButtonSecondary({ innerText, ...buttonProps }) {
  return (
    <button className={styles.ButtonSecondaryStyles} {...buttonProps}>
      {innerText}
    </button>
  );
}
export default ButtonSecondary;
