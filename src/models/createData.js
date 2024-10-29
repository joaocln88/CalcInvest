import { addMonths, format } from "date-fns";

export const createData = (inputData) => {
  console.log({ inputData });
  const { initialAmount, duration, initialContribution, rateOfReturn } =
    inputData;
  const data = [];
  let contribution = initialContribution;
  let totalAccumulated = initialAmount;
  let accumulatedContribution = initialAmount;

  const durantionInMonths = 12 * duration;
  for (let i = 1; i <= durantionInMonths; i++) {
    contribution = getContribution(i, initialContribution);
    accumulatedContribution = getAccumulatedContribution(
      contribution,
      accumulatedContribution,
    );
    totalAccumulated = getTotalAccumulated(
      totalAccumulated,
      rateOfReturn,
      contribution,
    );

    const item = {
      id: i,
      month: getMonth(i),
      contribution: contribution,
      accumulated_contribution: accumulatedContribution,
      total_accumulated: totalAccumulated,
    };
    data.push(item);
  }

  return data;
};

function getMonth(id) {
  const today = new Date();
  return format(addMonths(today, id), "MMM-yyyy");
}

function getYear(id) {
  const year = id % 12 !== 0 ? Math.floor(id / 12) : Math.floor(id / 12) - 1;
  return year;
}

function getContribution(id, contribution, contribuitionIncrease = 0) {
  if (contribuitionIncrease === 0) return contribution;

  const year = getYear(id);
  /*contribution *
          (1 +
            contributionInflationIncrease * inflation +
            contributionIncrease * contributionIncreaseValue) **
            year */
  return contribution * (1 + contribuitionIncrease) ** year;
}

function getAccumulatedContribution(
  currentContribution,
  previousAccumulatedContribution,
) {
  return currentContribution + previousAccumulatedContribution;
}

function getTotalAccumulated(prevAccumulated, rateOfReturn, contribuition) {
  const monthlyRateOfReturn = (1 + rateOfReturn) ** (1 / 12) - 1;

  return prevAccumulated * (1 + monthlyRateOfReturn) + contribuition;
}
