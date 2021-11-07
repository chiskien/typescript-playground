import { add } from "./function";
import { filter } from "./polymorphism";

let array = [2, 4, 15, 61, 78, 745];
let subArray = filter(array, (index) => index < 3);
console.table(subArray);

enum Employee {
  ProjectManager,
  FrontendDeveloper,
  BackendDeveloper,
  Tester,
  ScrumMaster,
  ProductOwner,
  BusinessAnalyst,
  UXUIDesigner,
}
console.log(Employee[2]);
