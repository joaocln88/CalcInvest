import { yearsToMonths, addMonths, format } from "date-fns";

export const timeWindow = (duration) => {
  const durationInMonths = yearsToMonths(duration);
  let durantionArray = [...Array(durationInMonths).keys()];

  const today = new Date();
  durantionArray = durantionArray
    .map((key) => addMonths(today, key))
    .map((date) => format(date, "MMM-yyyy"));

  return durantionArray;
};
