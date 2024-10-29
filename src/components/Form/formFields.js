export const formFields = [
  {
    label: "Capital Inicial",
    input: {
      name: "initial_amount",
      id: "initialAmount",
      unit: "R$",
    },
    optional: false,
  },
  {
    label: "Aportes Mensais",
    input: {
      name: "initial_contribution",
      id: "initialContribution",
      unit: "R$",
    },
    optional: false,
  },
  {
    label: "Taxa da Aplicação",
    input: {
      name: "rate_of_return",
      id: "rateOfReturn",
      unit: "%",
    },
    optional: false,
  },
  {
    label: "Período da Aplicação",
    input: {
      name: "duration",
      id: "duration",
      defaultValue: "",
      unit: "t",
    },
    optional: false,
  },
  // {
  //   label: "Inflação",
  //   input: {
  //     name: "inflation",
  //     id: "inflation",
  //     defaultValue: "0",
  //   },
  //   select: {
  //     name: "inflation_len",
  //     id: "inflationLen",
  //     options: ["m", "y"],
  //     optionsText: ["Mensal", "Anual"],
  //     defaultValue: "y",
  //   },
  //   advanced: true,
  // },
  // {
  //   label: "Corrigir Aportes pela inflação anual",
  //   checkbox: {
  //     name: "contribution_inflation_increase",
  //     id: "contributionInflationIncrease",
  //     defaultValue: false,
  //   },
  //   advanced: true,
  // },
  // {
  //   label: "Utilizar crescimento anual dos aportes",
  //   input: {
  //     name: "contribution_increase_value",
  //     id: "contributionIncreaseValue",
  //     defaultValue: "0",
  //   },
  //   checkbox: {
  //     name: "contribution_increase",
  //     id: "contributionIncrease",
  //     defaultValue: false,
  //   },
  //   advanced: true,
  // },
];
