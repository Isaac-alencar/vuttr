import { useContext } from "react";
import { RemoveToolModalContext } from "../../context/toggleModalContext";
import Tags from "../Tags";

import styles from "./styles.module.css";

function ToolCard({ title, link, description, tags }) {
  const { _, setIsDisplaying } = useContext(RemoveToolModalContext);

  return (
    <div className={styles.container}>
      <div className={styles.linkTitle}>
        <a className={styles.title} href={link}>
          <strong>{title}</strong>
        </a>
        <button onClick={() => setIsDisplaying(true)}>✘ remove</button>
      </div>
      <p className={styles.descriptionTool}>{description}</p>
      <Tags tags={tags} />
    </div>
  );
}

export default ToolCard;
