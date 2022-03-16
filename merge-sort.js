const { arrayGenerator } = require("./utils");
let iterator = 0;

function merge(firstValue, secondValue) {
  const sortedArray = [];
  while (firstValue.length && secondValue.length) {
    iterator++;
    if (firstValue[0] < secondValue[0]) sortedArray.push(firstValue.shift());
    else sortedArray.push(secondValue.shift());
  }
  return sortedArray.concat(firstValue.slice().concat(secondValue.slice()));
}

function mergeSort(input) {
  if (input.length < 2) return input;
  const middle = Math.floor(input.length / 2);
  const firstHalf = input.slice(0, middle);
  const secondHalf = input.slice(middle);

  const sortedFirstHalf = mergeSort(firstHalf);
  const sortedSecondHalf = mergeSort(secondHalf);

  return merge(sortedFirstHalf, sortedSecondHalf);
}

const array = arrayGenerator(1048576);

console.time();
mergeSort(array);
console.timeEnd();
console.log("Iterações: ", iterator);
