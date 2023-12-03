const callibrationValues: number[] = [];
const input = await Deno.readTextFile('day[1]/input.txt').then((input) =>
  input.split('\n')
);

const findCallibrationValues = (input: string): number => {
  const numbers = input.split('').filter((char) => Number(char));
  return Number(numbers[0] + numbers[numbers.length - 1]);
};

input.forEach((input) => {
  callibrationValues.push(findCallibrationValues(input));
});

const totalSum = callibrationValues.reduce((prev, curr) => prev + curr, 0);

console.log(totalSum);
