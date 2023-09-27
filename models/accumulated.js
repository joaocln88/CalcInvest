export const accumulated = (contributions, initialInvestment) => {
  const accum = [];

  for (let index = 0; index < contributions.length; index++) {
    if (index === 0) {
      accum[index] = contributions[index] + initialInvestment;
    } else {
      accum[index] = contributions[index] + accum[index - 1];
    }
  }

  return accum;
};
