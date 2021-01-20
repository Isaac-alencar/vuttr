import { useContext } from "react";

import { RemoveToolModalContext } from "../../context/toggleModalContext";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";

import styles from "./styles.module.css";

function RemoveToolModal() {
  const { isDisplaying, setIsDisplaying } = useContext(RemoveToolModalContext);

  return (
    <div
      className={
        isDisplaying === true
          ? styles.modalContainerBlurActive
          : styles.modalContainerBlur
      }
    >
      <div className={styles.modalContainer}>
        <div className={styles.title}>
          <strong>
            <span>✘</span>
            Remove tool
          </strong>
          <div
            className={styles.closeModal}
            onClick={() => setIsDisplaying(false)}
          />
        </div>
        <p>Are you sure you want remove [...tool] ?</p>
        <div className={styles.buttons}>
          <ButtonSecondary
            innerText="Cancel"
            onClick={() => setIsDisplaying(false)}
          />
          <ButtonPrimary innerText="Yes, remove" />
        </div>
      </div>
    </div>
  );
}

export default RemoveToolModal;
