export const arrToObjArr = (...args) => {
  const sizeArgs = args.length;
  const rows = args[0].length;
  const arrKeys = [
    "month_id",
    "year_id",
    "date",
    "contribution",
    "accumulated",
    "interest",
    "total",
  ];
  const dataTable = [];
  let dataObj = {};

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < sizeArgs; j++) {
      dataObj = { ...dataObj, [arrKeys[j]]: args[j][i] };
    }
    dataTable.push(dataObj);
  }

  return dataTable;
};
