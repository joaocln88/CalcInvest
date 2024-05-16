import React from "react";
import { useFormContext } from "react-hook-form";

const Checkbox = ({ name }) => {
  const { register } = useFormContext();
  return (
    <>
      <input type="checkbox" {...register(name)} />
    </>
  );
};

export default Checkbox;
