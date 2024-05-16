import React from "react";
import styles from "./styles.module.css";

const Label = ({ id, children }) => {
  return (
    <label className={styles.label} htmlFor={id}>
      {children}
    </label>
  );
};

export default Label;
