import { useContext } from "react";

import api from "../../services/api";

import { RemoveToolModalContext } from "../../context/toggleModalContext";
import ButtonPrimary from "../Buttons/ButtonPrimary";
import ButtonSecondary from "../Buttons/ButtonSecondary";

import styles from "./styles.module.css";

function RemoveToolModal() {
  const {
    isDisplaying,
    setIsDisplaying,
    objectToDelete: { title, id },
  } = useContext(RemoveToolModalContext);

  async function handleDelteTool() {
    const response = await api.delete(`/${id}`);
    if (response.status === 200) {
      alert(`${title} was removed with sucessfully`);
      window.location.href = "/";
    }
  }

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
        <p>Are you sure you want remove {title} ?</p>
        <div className={styles.buttons}>
          <ButtonSecondary
            innerText="Cancel"
            onClick={() => setIsDisplaying(false)}
          />
          <ButtonPrimary innerText="Yes, remove" onClick={handleDelteTool} />
        </div>
      </div>
    </div>
  );
}

export default RemoveToolModal;
