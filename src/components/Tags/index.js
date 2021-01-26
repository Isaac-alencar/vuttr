import React from "react";

import styles from "./styles.module.css";

function Tags({ tags }) {
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
