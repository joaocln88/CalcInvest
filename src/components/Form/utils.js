export function checkIsValid(value, type) {
  const regex = {
    currency: /^\d+(\.\d{1,2})?$/,
    percentage: /^(\d{0,2}(\.\d{1,2})?|100(\.00?)?)$/,
    integer: /^[1-9]\d*$/,
  };

  return regex[type].test(value);
}
