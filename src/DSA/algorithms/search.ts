export function linearSearchM<T>(array: T[], value: T): number {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    } else {
      return -1;
    }
  }
}
export function binarySearch<T>(array: T[], value: T) {
  let lowIndex = 0;
  let highIndex = array.length - 1;
  while (lowIndex <= highIndex) {
    let midIndex = Math.floor((highIndex + lowIndex) / 2);
    if (array[midIndex] === value) {
      return midIndex;
    } else if (value > array[midIndex]) {
      lowIndex = midIndex;
    } else {
      highIndex = midIndex;
    }
  }
  return -1;
}
