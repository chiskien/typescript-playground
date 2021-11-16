//1. implement slice
function slice<T>(array: T[], beginningIndex: number, endingIndex: number): T[] {
  if (!beginningIndex && !endingIndex) {
    return array;
  } else if (!endingIndex) {
    endingIndex = array.length;
  }
  let partArray: T[] = [];
  for (let i = beginningIndex; i < endingIndex; i++) {
    partArray.push(array[i]);
  }
  return partArray;
}

console.table(slice<number>([123, 14, 124, 1, 55, 26, 4, 7, 21, 5, 2], 1, 4));
