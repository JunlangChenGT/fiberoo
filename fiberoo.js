function fib() {
  let thing1 = 1;
  let thing2 = 1;
  const fiboNums = [];
  fiboNums.push(thing1);
  fiboNums.push(thing2);
  let thing3;
  for (let i = 3; i < 51; i++) {
    thing3 = thing1 + thing2;
    fiboNums.push(thing3);
    thing1 = thing2;
    thing2 = thing3;
  }
  return fiboNums;
}

console.log(fib());

function numsToStrings(array) {
  return _.map(array, function (num) { return num.toString(); });
}

console.log(numsToStrings(fib()));

function numEvenNums(array) {
  const asdf = _.filter(array, function (num) { return num % 2 === 0; });
  return asdf.length;
}

console.log(numEvenNums(fib()));
