import { addMonths, format } from "date-fns";

export const createDateArray = (monthArray) => {
  const today = new Date();
  const dateArray = monthArray
    .map((key) => addMonths(today, key))
    .map((date) => format(date, "MMM-yyyy"));

  return dateArray;
};
