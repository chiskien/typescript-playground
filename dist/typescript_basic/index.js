"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var polymorphism_1 = require("./polymorphism");
var array = [2, 4, 15, 61, 78, 745];
var subArray = (0, polymorphism_1.filter)(array, function (index) { return index < 3; });
console.table(subArray);
var Employee;
(function (Employee) {
    Employee[Employee["ProjectManager"] = 0] = "ProjectManager";
    Employee[Employee["FrontendDeveloper"] = 1] = "FrontendDeveloper";
    Employee[Employee["BackendDeveloper"] = 2] = "BackendDeveloper";
    Employee[Employee["Tester"] = 3] = "Tester";
    Employee[Employee["ScrumMaster"] = 4] = "ScrumMaster";
    Employee[Employee["ProductOwner"] = 5] = "ProductOwner";
    Employee[Employee["BusinessAnalyst"] = 6] = "BusinessAnalyst";
    Employee[Employee["UXUIDesigner"] = 7] = "UXUIDesigner";
})(Employee || (Employee = {}));
console.log(Employee[2]);
//# sourceMappingURL=index.js.map