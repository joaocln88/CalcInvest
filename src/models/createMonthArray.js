export const createMonthArray = (duration, durationLen) => {
  const durationInMonths = durationLen === "y" ? duration * 12 : duration;

  return [...Array(durationInMonths).keys()].map((i) => i + 1);
};
