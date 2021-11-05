export function filter(array: number[], f: { (index: any): boolean }): number[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    if (f(item)) {
      result.push(item);
    }
  }
  return result;
}
type Filter = {
  (array: number[], f: (index: number) => boolean): number[];
};
