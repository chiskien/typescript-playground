const log = (message: string, userId?: string) => {
  let time = new Date().toLocaleTimeString();
  console.log(time, message, userId || "Not signed in");
};
export function add(a: number, b: number) {
  return a + b;
}

//rest parameters
export function sum(numbers: number[]): number {
  return numbers.reduce((total, n) => total + n, 0);
}
