import { useContext } from "react";
import { RemoveToolModalContext } from "../../context/toggleModalContext";
import Tags from "../Tags";

import styles from "./styles.module.css";

function TechCard() {
  const { _, setIsDisplaying } = useContext(RemoveToolModalContext);

  return (
    <div className={styles.container}>
      <div className={styles.linkTitle}>
        <a className={styles.title}>
          <strong>Notion</strong>
        </a>
        <button onClick={() => setIsDisplaying(true)}>✘ remove</button>
      </div>
      <p className={styles.descriptionTool}>
        All in one tool to organize teams and ideas. Write, plan, collaborate,
        and get organized.
      </p>
      <Tags />
    </div>
  );
}

export default TechCard;
