"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sum = exports.add = void 0;
var log = function (message, userId) {
    var time = new Date().toLocaleTimeString();
    console.log(time, message, userId || "Not signed in");
};
function add(a, b) {
    return a + b;
}
exports.add = add;
//rest parameters
function sum(numbers) {
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
exports.sum = sum;
//# sourceMappingURL=function.js.map