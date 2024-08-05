/**
 * Hositing:
 * Hoisting is phenomena in js where you can access variables and
 * functions before initilizations without any errors
 */

getName();
console.log(x);
console.log(getName);

var x = 7;
function getName() {
  console.log("hello js");
}
console.log(getName);
