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
for (let current = 20; current < 40; current++) {
  if (current % 7 === 0) {
    console.log(current);
    break;
    ``;
  }
}
