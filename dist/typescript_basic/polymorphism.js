"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = void 0;
function filter(array, f) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        var item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
}
exports.filter = filter;
//# sourceMappingURL=polymorphism.js.map