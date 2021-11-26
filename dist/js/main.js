var calculator = {
    firstNumber: 0,
    secondNumber: 0,
    read: function () {
        this.firstNumber = +prompt("Enter first number");
        this.secondNumber = +prompt("Enter second number: ");
    },
    sum: function () {
        return this.firstNumber + this.secondNumber;
    },
    mul: function () {
        return +this.firstNumber * +this.secondNumber;
    },
};
var ladder = {
    step: 0,
};
console.log("Hello World");
//# sourceMappingURL=main.js.map