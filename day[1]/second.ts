const callibrationValues: number[] = [];
const input = await Deno.readTextFile('day[1]/input.txt').then((input) =>
  input.split('\n')
);

const objectKeys = <Obj extends object>(obj: Obj) => {
  return Object.keys(obj) as (keyof Obj)[];
};

const digits = {
  one: 'o1e',
  two: 't2o',
  three: 't3e',
  four: 'f4r',
  five: 'f5e',
  six: 's6x',
  seven: 's7n',
  eight: 'e8t',
  nine: 'n9n',
} as const;

const findCallibrationValues = (input: string): number => {
  let parsedInput = input;
  const keys = objectKeys(digits);

  keys.forEach((digit) => {
    parsedInput = parsedInput.replaceAll(digit, digits[digit]);
  });

  console.log(parsedInput);
  const numbers = parsedInput.split('').filter((char) => Number(char));
  return Number(numbers[0] + numbers[numbers.length - 1]);
};

input.forEach((input) => {
  callibrationValues.push(findCallibrationValues(input));
});

console.log(callibrationValues);

const totalSum = callibrationValues.reduce((prev, curr) => prev + curr, 0);

console.log(totalSum);
