import styles from "./styles.module.css";

function ButtonPrimary({ innerText, ...buttonProps }) {
  return (
    <button className={styles.ButtonPrimaryStyles} {...buttonProps}>
      {innerText}
    </button>
  );
}
export default ButtonPrimary;
