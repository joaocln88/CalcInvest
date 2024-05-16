import React from "react";
import { useFormContext } from "react-hook-form";

import styles from "./styles.module.css";

const Select = ({ name, id, options, optionsText }) => {
  const { register } = useFormContext();
  return (
    <>
      <select {...register(name)} id={id} className={styles.select}>
        <option value={options[0]}>{optionsText[0]}</option>
        <option value={options[1]}>{optionsText[1]}</option>
      </select>
    </>
  );
};
export default Select;
