export const createInterAndTotArray = (
  initialAmount,
  rateOfReturn,
  contributionArray,
) => {
  const interestArray = [];
  const totalArray = [];
  const monthlyRateOfReturn = (1 + rateOfReturn) ** (1 / 12) - 1;

  contributionArray.map((contribution, index) => {
    if (index === 0) {
      interestArray.push(initialAmount * monthlyRateOfReturn);
      totalArray.push(initialAmount + interestArray[0] + contribution);
    } else {
      interestArray.push(totalArray[index - 1] * monthlyRateOfReturn);
      totalArray.push(
        totalArray[index - 1] + interestArray[index] + contribution,
      );
    }
  });
  return { interestArray, totalArray };
};
