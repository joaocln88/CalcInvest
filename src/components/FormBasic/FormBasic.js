import React from "react";

import FormLineBasic from "../FormLineBasic/FormLineBasic";

const FormBasic = ({ formFields }) => {
  return (
    <>
      {formFields.map(
        (formField) =>
          !formField.advanced && (
            <div>
              <FormLineBasic fields={formField} />
            </div>
          ),
      )}
    </>
  );
};

export default FormBasic;
