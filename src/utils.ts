export const replaceSpaceWithDashes = (str: string) => str.replace(/\s/g, "-");

export const convertNumberTo2Dp = (num: number) => num.toFixed(2);

export const generateRandomKey = () => Math.random().toString(36).substring(7);
