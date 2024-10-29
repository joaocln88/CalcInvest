import { createData } from "src/models/createData";

export default async function fintool(request, response) {
  const input_data = {
    initial_amount: 85000,
    contribution: 5000,
    rate_of_return: 0.12,
    duration: 5,
    // contribution_increase: false,
    // contribution_increase_value: 0,
    // contribution_inflation_increase: false,
    // duration_len: "y",
    // inflation: 0,
    // inflation_len: "y",
    // rate_of_return_len: "y",
  };

  const data = createData(
    input_data.initial_amount,
    input_data.duration,
    input_data.contribution,
    input_data.rate_of_return,
  );
  response.status(200).json(data);
}
