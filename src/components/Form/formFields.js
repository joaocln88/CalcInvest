export const formFields = [
  {
    label: "Capital Inicial",
    input: {
      name: "initial_amount",
      id: "initialAmount",
      defaultValue: "3000",
      unit: "R$",
    },
    advanced: false,
  },
  {
    label: "Aportes Mensais",
    input: {
      name: "contribution",
      id: "contribution",
      defaultValue: "100",
      unit: "R$",
    },
    advanced: false,
  },
  {
    label: "Taxa da Aplicação",
    input: {
      name: "rate_of_return",
      id: "rateOfReturn",
      unit: "%",
    },
    select: {
      name: "rate_of_return_len",
      id: "rateOfReturnLen",
      options: ["m", "y"],
      optionsText: ["Mensal", "Anual"],
      defaultValue: "y",
    },
    advanced: false,
  },
  {
    label: "Período da Aplicação",
    input: {
      name: "duration",
      id: "duration",
      defaultValue: "",
      unit: "t",
    },
    select: {
      name: "duration_len",
      id: "durationLen",
      options: ["m", "y"],
      optionsText: ["Meses", "Anos"],
      defaultValue: "y",
    },
    advanced: false,
  },
  {
    label: "Inflação",
    input: {
      name: "inflation",
      id: "inflation",
      defaultValue: "0",
    },
    select: {
      name: "inflation_len",
      id: "inflationLen",
      options: ["m", "y"],
      optionsText: ["Mensal", "Anual"],
      defaultValue: "y",
    },
    advanced: true,
  },
  {
    label: "Corrigir Aportes pela inflação anual",
    checkbox: {
      name: "contribution_inflation_increase",
      id: "contributionInflationIncrease",
      defaultValue: false,
    },
    advanced: true,
  },
  {
    label: "Utilizar crescimento anual dos aportes",
    input: {
      name: "contribution_increase_value",
      id: "contributionIncreaseValue",
      defaultValue: "0",
    },
    checkbox: {
      name: "contribution_increase",
      id: "contributionIncrease",
      defaultValue: false,
    },
    advanced: true,
  },
];
