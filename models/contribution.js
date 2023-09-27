import { yearsToMonths } from "date-fns";

export const contribution = (
  duration,
  monthlyContribution,
  inflation,
  payRaise,
) => {
  const durationInMonths = yearsToMonths(duration);
  let contributionArray = [...Array(durationInMonths).keys()];

  const monthlyInflation = (1 + inflation) ** (1 / 12) - 1;
  const monthlyPayRaise = (1 + payRaise) ** (1 / 12) - 1;

  //Method 1:
  // const start = performance.now();
  // for (let index = 0; index < contributionArray.length; index++) {
  //   if (index === 0) {
  //     contributionArray[index] =
  //       monthlyContribution * (1 + monthlyInflation) * (1 + monthlyPayRaise);
  //   } else {
  //     contributionArray[index] =
  //       contributionArray[index - 1] *
  //       (1 + monthlyInflation) *
  //       (1 + monthlyPayRaise);
  //   }
  // }
  // const end = performance.now();
  // const elapsed = end - start;
  // console.log(`myFunction took ${elapsed} milliseconds to execute`);

  //Method 2:
  contributionArray = contributionArray.map(
    (key) =>
      monthlyContribution *
      (1 + monthlyInflation) ** (key + 1) *
      (1 + monthlyPayRaise) ** (key + 1),
  );

  return contributionArray;
};
