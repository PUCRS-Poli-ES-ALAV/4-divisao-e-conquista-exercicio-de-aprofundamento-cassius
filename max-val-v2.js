const { arrayGenerator } = require("./utils");
let iterator = 0;

function max(arg1, arg2) {
  return arg1 > arg2 ? arg1 : arg2;
}

function maxVal(array) {
  iterator++
  if (end - init < 2) {
    return max(array[init], array[end]);
  }

  const middle = Math.floor((init + end) / 2);
  const firstValue = maxVal(array, init, middle);
  const secondValue = maxVal(array, middle + 1, end);
  console.log(firstValue, secondValue);
  return max(firstValue, secondValue);
}

const arrayLength = 20

console.log(maxVal(arrayGenerator(arrayLength), 0, arrayLength - 1));
