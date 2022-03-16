const { arrayGenerator } = require("./utils");
let iterator = 0;

function max(arg1, arg2) {
  return arg1 > arg2 ? arg1 : arg2;
}

function maxVal(array, init, end, at) {
  if (end - init < 2) {
    return max(array[init], array[end]);
  }

  const middle = Math.floor((init + end) / 2);
  const firstValue = maxVal(array, init, middle);
  console.log(middle, end);
  const secondValue = maxVal(array, middle + 1, end);
  return max(firstValue, secondValue);
}

console.log(maxVal(arrayGenerator(20), 0, 20));
