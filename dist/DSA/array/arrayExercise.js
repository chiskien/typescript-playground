//1. implement slice
function slice(array, beginningIndex, endingIndex) {
    if (!beginningIndex && !endingIndex) {
        return array;
    }
    else if (!endingIndex) {
        endingIndex = array.length;
    }
    var partArray = [];
    for (var i = beginningIndex; i < endingIndex; i++) {
        partArray.push(array[i]);
    }
    return partArray;
}
console.table(slice([123, 14, 124, 1, 55, 26, 4, 7, 21, 5, 2], 1, 4));
//# sourceMappingURL=arrayExercise.js.map