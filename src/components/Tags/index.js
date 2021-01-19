import React from "react";

import styles from "./styles.module.css";

function Tags() {
  const tags = [
    "organization",
    "planning",
    "collaboration",
    "writing",
    "calendar",
  ];

  return (
    <div className={styles.toolsTag}>
      {tags &&
        tags.map((tag, index) => {
          return <span key={index}>#{tag}</span>;
        })}
    </div>
  );
}

export default Tags;
