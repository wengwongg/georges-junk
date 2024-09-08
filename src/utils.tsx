export const convertNumberTo2Dp = (num: number) => num.toFixed(2);

export const truncateString = (str: string, length: number) => {
  if (str.length <= length) return str;
  return `${str.substring(0, length)}...`;
};
