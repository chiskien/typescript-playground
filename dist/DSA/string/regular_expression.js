//Common Used regex
//Any numberic characters
var REG = /\d+/;
REG.test("123"); //return true
REG.test("123aafa"); //return true
REG.test("aafa"); //return false
//Only numberic characters
REG = /^\d+$/;
REG.test("123"); //true
REG.test("123a"); //false
REG.test("fdsafs"); //false
//# sourceMappingURL=regular_expression.js.map