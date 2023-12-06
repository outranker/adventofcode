export function findDuplicates<T extends string | number>(arr: T[]): T[] {
  return arr.filter((item, index) => arr.indexOf(item) !== index);
}
