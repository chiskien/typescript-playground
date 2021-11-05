"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polymorphism_1 = require("./polymorphism");
var array = [2, 4, 15, 61, 78, 745];
var subArray = (0, polymorphism_1.filter)(array, function (index) { return index < 3; });
console.table(subArray);
//# sourceMappingURL=index.js.map