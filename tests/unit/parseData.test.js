const inputData = require("../../mocks/inputData");
const parseData = require("../../src/models/parseData");

const parsedData = parseData(inputData);

test("Function parseData should return an Object", () => {
  expect(parsedData).toBeInstanceOf(Object);
});

test("Function parseData should return an Object containing specific keys", () => {
  expect(parsedData).toEqual(
    expect.objectContaining({
      initialAmount: expect.any(Number),
      contribution: expect.any(Number),
      rateOfReturn: expect.any(Number),
      rateOfReturnLen: expect.any(String),
      duration: expect.any(Number),
      durationLen: expect.any(String),
      inflation: expect.any(Number),
      inflationLen: expect.any(String),
      contributionInflationIncrease: expect.any(Number),
      contributionIncrease: expect.any(Number),
      contributionIncreaseValue: expect.any(Number),
    }),
  );
});
