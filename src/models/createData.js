import { arrToObjArr } from "./arrToObjArr";
import { createAccumArray } from "./createAccumArray";
import { createContributionArray } from "./createContributionArray";
import { createDateArray } from "./createDateArray";
import { createMonthArray } from "./createMonthArray";
import { createYearArray } from "./createYearArray";
import { createInterAndTotArray } from "./createInterAndTotArray";
import { parseData } from "./parseData";

export const createData = (inputData) => {
  //Parse form data to the correct format:
  console.log({ inputData });
  const formData = parseData(inputData);

  const { duration, durationLen } = formData;
  const monthArray = createMonthArray(duration, durationLen);

  const yearArray = createYearArray(monthArray);

  const dateArray = createDateArray(monthArray);

  const {
    contribution,
    inflation,
    contributionInflationIncrease,
    contributionIncrease,
    contributionIncreaseValue,
  } = formData;
  const contributionArray = createContributionArray(
    yearArray,
    contribution,
    contributionInflationIncrease,
    inflation,
    contributionIncrease,
    contributionIncreaseValue,
  );
  console.log({ contributionArray });

  const { initialAmount } = formData;
  const accumulatedArray = createAccumArray(contributionArray, initialAmount);

  const { rateOfReturn } = formData;
  const { interestArray, totalArray } = createInterAndTotArray(
    initialAmount,
    rateOfReturn,
    contributionArray,
  );

  const data = arrToObjArr(
    monthArray,
    yearArray,
    dateArray,
    contributionArray,
    accumulatedArray,
    interestArray,
    totalArray,
  );

  return data;
};
