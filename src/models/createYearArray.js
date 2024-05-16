export const createYearArray = (monthArray) => {
  return monthArray.map((month) =>
    month % 12 !== 0 ? Math.floor(month / 12) : Math.floor(month / 12) - 1,
  );
};
