"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.binarySearch = exports.linearSearch = void 0;
function linearSearch(array, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === value) {
            return i;
        }
    }
    return -1;
}
exports.linearSearch = linearSearch;
function binarySearch(array, value) {
    var lowIndex = 0;
    var highIndex = array.length - 1;
    while (lowIndex <= highIndex) {
        var midIndex = Math.floor((highIndex + lowIndex) / 2);
        if (array[midIndex] === value) {
            return midIndex;
        }
        else if (value > array[midIndex]) {
            lowIndex = midIndex;
        }
        else {
            highIndex = midIndex;
        }
    }
    return -1;
}
exports.binarySearch = binarySearch;
//# sourceMappingURL=search.js.map