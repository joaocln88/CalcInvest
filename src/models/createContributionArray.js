export const createContributionArray = (
  yearArray,
  contribution,
  contributionInflationIncrease,
  inflation,
  contributionIncrease,
  contributionIncreaseValue,
) => {
  const monthlyInflation = inflation ? (1 + inflation) ** (1 / 12) - 1 : 0;
  console.log({ inflation });
  // const monthlyPayRaise = (1 + payRaise) ** (1 / 12) - 1;

  const contributionArray = yearArray.map(
    (year) =>
      Math.round(
        contribution *
          (1 +
            contributionInflationIncrease * inflation +
            contributionIncrease * contributionIncreaseValue) **
            year *
          100,
      ) / 100,
  );

  return contributionArray;
};
