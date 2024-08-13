//1
// const arr = [1, 2, 3, 4, 5, 6];

// const findsecondlargesecondsmall = (arr) => {
//   if (arr.length < 2) {
//     return "length should grether than 2";
//   }

//   let small = Infinity;
//   let secondSmall = Infinity;
//   let large = -Infinity;
//   let secondLarge = -Infinity;

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > large) {
//       large = arr[i];
//     }
//   }
// };

//2
// function fruit() {
//   console.log(name);
//   console.log(price);
//   var name = "apple";
//   let price = 20;
// }
// fruit();

//ans undefined, cannot access price before initilization

//3
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
//ans is 3 times 3 because var is in global scope so it will print
//immediately and settimout take some time to print output

//4
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}
/**
 * ans is 0 1 2
 * because let only have block so every setimeout it has
 * different value
 */

/**
 * 5. ans = 1
 * whenever we are putting + sign any boolean or string value
 * it will converted to the number
 * so the output will be 1
 * and its type is number
 *
 */
console.warn(+true);
console.warn(typeof +true);

/**
 * 6 ans=false and type is boolean
 *  negation before string gives opposite value which is false
 *  and its type is boolean
 *
 * and if we want to make it true we need to apply double
 * negation mark
 *
 */
console.warn(!"anil"); //false
console.warn(!!"aniul"); //true
console.warn(typeof !"anil");

/**
 * 7.
 *
 */

let data = "size";
const bird = {
  size: "small",
};
console.warn(bird[data]); //small
console.warn(bird["size"]); //small
console.warn(bird.size); //small
console.warn(bird.data); //undefined

/**
 * 8
 */
let c = { name: "peter" };
let d;
d = c;
c.name = "anil";
console.log(d.name); //anil

/**9 */
function sum(a, b) {
  return a + b;
}
console.log(sum(1, "2")); //12

/**
 *9
 */

let number = 0;
console.log(number++); //0
console.log(++number); //2
console.log(number); //2

/**
 * 10
 */

function getAge(...args) {
  console.log(typeof args); //object
}
getAge(21);

/**
 * 11: age is not  defined if we are used strict mode
 * without string mode it print 21
 */

function getName() {
  //   "use strict";
  age = 21;
  console.log(age);
}
getName();

/**
 * 12 eval make string value into numeric value
 */

const sum1 = eval("10*10+5");
console.log(sum1); //105

/**
 * 13
 * how long is cool_secret accessible
 * when ever i will close the tab or close the browser
 * that period of time it is accessible but if it in
 * sesssion storage it will be accessible till month
 *
 * and you can set the value manually
 */
sessionStorage.setItem("cool_secret", 123);

/**
 * 14
 */
const obj = { 1: "a", hello: "b", 3: "c" };
console.log(obj.hasOwnProperty("1")); //true
console.warn(obj.hasOwnProperty(1)); //true

//but in case string value as key
console.log(obj.hasOwnProperty("hello")); //true
// console.warn(obj.hasOwnProperty(hello)); //error hello is not defined

/**
 * 15
 * a value override by next value but the position of a value
 * will be the same
 */
const obj1 = { a: "one", b: "two", a: "repeat" };
console.log(obj1); //{a: 'repeat', b: 'two'}

/**
 * 16
 * 1
 * 2
 * 4
 */

for (let i = 1; i < 5; i++) {
  if (i == 3) continue;
  console.log(i);
}

/**
 * 17
 * first
 * third
 * second
 */

const foo = () => console.log("first");
const bar = () => setTimeout(() => console.log("second"));
const baz = () => console.log("third");

bar();
foo();
baz();

/**
 * 18
 */

<div onclick="console.log(`first div`)">
  <div onclick="console.log(`second div`)">
    <button onclick="console.log(`button`)">click!</button>;
  </div>
</div>;
