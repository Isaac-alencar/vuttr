import { useContext, useState } from "react";

import api from "../../services/api";

import { ModalContext } from "../../context/toggleModalContext";

import Input from "../Inputs/FormInput";
import TextArea from "../TextArea";

import styles from "./styles.module.css";

function AddToolModal() {
  const { isOpen, setIsOpen } = useContext(ModalContext);

  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");

  async function handleSubmitInput(e) {
    e.preventDefault();

    const splitedTags = tags.split(" ");
    const response = await api.post("", {
      title,
      link,
      description,
      tags: splitedTags,
    });

    if (response.status === 201) {
      alert("Tool created with sucessfuly");
    }
    setIsOpen(false);
    window.location.href = "/";
  }

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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Input
            name="Tool Link"
            label="tool_link"
            value={link}
            onChange={(e) => setLink(e.target.value)}
          />
          <TextArea
            name="Tool description"
            label="tool_description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Input
            name="Tags"
            label="tool_tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <button onClick={(e) => handleSubmitInput(e)}>Add tool</button>
        </form>
      </div>
    </div>
  );
}

export default AddToolModal;
