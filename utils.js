module.exports.arrayGenerator = (length) => {
  const arr = [];
  while (arr.length < length) {
    const number = Math.floor(Math.random() * length) + 1;
    if (arr.indexOf(number) === -1) arr.push(number);
  }
  return arr;
};
