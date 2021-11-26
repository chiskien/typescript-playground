let calculator = {
  firstNumber: 0,
  secondNumber: 0,
  read() {
    this.firstNumber = +prompt("Enter first number");
    this.secondNumber = +prompt("Enter second number: ");
  },
  sum() {
    return this.firstNumber + this.secondNumber;
  },
  mul() {
    return +this.firstNumber * +this.secondNumber;
  },
};
let ladder = {
  step: 0,
};
console.log("Hello World");
