import Tags from "../Tags";
import styles from "./styles.module.css";

function TechCard() {
  return (
    <div className={styles.container}>
      <div className={styles.linkTitle}>
        <a className={styles.title}>
          <strong>Notion</strong>
        </a>
        <button>x remove</button>
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
