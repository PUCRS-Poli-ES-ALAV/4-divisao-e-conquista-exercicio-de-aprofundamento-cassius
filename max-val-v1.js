const { arrayGenerator } = require("./utils");
let iterator = 0;

function maxVal(array) {
  let max = array[0];
  for (const number of array) {
    iterator++;
    if (number > max) max = number;
  }
  console.log(max);
  return max;
}

console.time();
maxVal(arrayGenerator(2048));
console.timeEnd();
console.log(iterator);
