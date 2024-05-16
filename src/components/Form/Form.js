import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { createData } from "../../models/createData";
import styles from "./styles.module.css";
import FormBasic from "../FormBasic/FormBasic";
import FormAdvanced from "../FormAdvanced/FormAdvanced";
import { formFields } from "./formFields";

//Extract default values from form fields:
const defaultValuesArr = formFields.reduce((acc, curr) => {
  const tempArr = [];
  if ("input" in curr) {
    tempArr.push({
      [curr.input.name]: curr.input.defaultValue,
    });
  }
  if ("select" in curr) {
    tempArr.push({
      [curr.select.name]: curr.select.defaultValue,
    });
  }
  if ("checkbox" in curr) {
    tempArr.push({
      [curr.checkbox.name]: curr.checkbox.defaultValue,
    });
  }
  return [...acc, ...tempArr];
}, []);

//Set default values to expected format on YUP
const defaultValues = Object.assign({}, ...defaultValuesArr);

const schema = yup.object({
  initial_amount: yup
    .string()
    .required("Campo necessário")
    .matches(/^\d+(\.\d{1,2})?$/, "Valor ou formato inválido"),
  contribution: yup
    .string()
    .required("Campo necessário")
    .matches(/^\d+(\.\d{1,2})?$/, "Valor ou formato inválido"),
  rate_of_return: yup
    .string()
    .required("Campo necessário")
    .matches(
      /^(\d{0,2}(\.\d{1,2})?|100(\.00?)?)$/,
      "Valor ou formato inválido",
    ),
  duration: yup
    .string()
    .required("Campo necessário")
    .matches(/^[1-9]\d*$/, "Valor ou formato inválido"),
  inflation: yup
    .string()
    .matches(
      /^(\d{0,2}(\.\d{1,2})?|100(\.00?)?)$/,
      "Valor ou formato inválido",
    ),
  contribution_increase_value: yup
    .string()
    .matches(
      /^(\d{0,2}(\.\d{1,2})?|100(\.00?)?)$/,
      "Valor ou formato inválido",
    ),
});

const Form = ({ setData }) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
  });
  const { register, watch, handleSubmit } = methods;

  const watchAdvanced = watch("advanced", false);

  const onSubmit = (data) => {
    setData(createData(data));
  };

  return (
    <main className={styles.section}>
      <h1 className={styles.title}>Planejamento Financeiro</h1>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <FormBasic formFields={formFields} />
          {/* <div className={styles.advanced}>
            <input type="checkbox" id="advanced" {...register("advanced")} />
            <label id="advanced">Explorar recursos avançadas</label>
          </div> */}

          {watchAdvanced && <FormAdvanced formFields={formFieldsAdvanced} />}
          <input type="submit" className={styles.button} />
        </form>
      </FormProvider>
    </main>
  );
};

export default Form;
