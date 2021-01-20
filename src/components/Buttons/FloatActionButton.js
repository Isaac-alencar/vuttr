import styles from "./styles.module.css";

function FloatActionButton({ innerText, ...buttonProps }) {
  return (
    <div className={styles.floatActionButton} {...buttonProps}>
      {innerText}
    </div>
  );
}

export default FloatActionButton;
