import { useContext, useState } from "react";
import { ModalContext } from "../../context/toggleModalContext";

import Input from "../Input";
import TextArea from "../TextArea";

import styles from "./styles.module.css";

function AddToolModal() {
  const [toolName, setToolName] = useState("");

  const { isOpen, setIsOpen } = useContext(ModalContext);

  return (
    <div
      className={
        isOpen === true
          ? styles.modalContainerBlurActive
          : styles.modalContainerBlur
      }
    >
      <div className={styles.modalContainer}>
        <div className={styles.title}>
          <strong>
            <span>+</span>Add New Tool
          </strong>
          <div className={styles.closeModal} onClick={() => setIsOpen(false)} />
        </div>
        <form>
          <Input
            name="Tool Name"
            label="tool_name"
            onChange={(e) => setToolName(e.target.value)}
          />
          <Input name="Tool Link" label="tool_link" />
          <TextArea name="Tool description" label="tool_description" />
          <Input name="Tags" label="tool_tags" />
          <button onClick={() => console.log(toolName)}>Add tool</button>
        </form>
      </div>
    </div>
  );
}

export default AddToolModal;
