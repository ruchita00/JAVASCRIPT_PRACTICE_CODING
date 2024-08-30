const cache = {};

function findSum(a, b) {
  const key = `${a},${b}`;

  if (cache[key] !== undefined) {
    console.log("value is cache");
    return cache[key];
  }
  const sum = a + b;
  cache[key] = sum;
  console.log("return new value");
  return sum;
}
console.log(findSum(2, 3));
console.log(findSum(2, 3));
console.log(findSum(2, 5));
