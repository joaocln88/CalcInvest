export const createAccumArray = (contributionArray, initialAmount) => {
  const accumArray = contributionArray.map(
    (contribution, index, array) =>
      Math.round(
        array.slice(0, index + 1).reduce((a, b) => a + b, initialAmount) * 100,
      ) / 100,
  );

  return accumArray;
};
