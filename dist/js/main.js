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
for (var current = 20; current < 40; current++) {
    if (current % 7 === 0) {
        console.log(current);
        break;
    }
}
//# sourceMappingURL=main.js.map