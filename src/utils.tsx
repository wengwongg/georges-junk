export const convertNumberTo2Dp = (num: number) => num.toFixed(2);

export const truncateString = (str: string, length: number) => {
  if (str.length <= length) return str;
  return `${str.substring(0, length)}...`;
};

export function chunkArray<T>(array: T[], chunkSize: number): T[][] {
  const result: T[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }

  return result;
}
