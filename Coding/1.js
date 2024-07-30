//hoisting example

console.log("value of age is", age); //undefined
var age = 20;
console.log("value of age is", age); //20

/*

 this particular process known as hoisting

*/

// age = 100;
// console.log("value of age is", age);
// let age = 30;

//reference error cannot access age before initilization

age = 100;
console.log("value of age is", age); //100
var age = 30;
console.log("value of age is", age); //30

//var ke case me hositing working fine

/**
 * in case of let and const there is concept known as temporal dead zone
 * let and const is hosited but it is hosited in the temporal
 * dead zone
 * when ever we try to access variables before initilization
 * using let and const then temporal dead zone occur
 * and we are getting error cannot access age before initilization
 */

/**
 * how function works in hositing
 */

myFun();

var myFun = function () {
  console.log("First");
};

myFun();

function myFun() {
  console.log("second");
}
myFun();

//second first first

/** example of iffe with hoisting*/
var variable = 10;
(() => {
  console.log(variable);
  variable = 20;
  console.log(variable);
})();

console.log(variable);
var variable = 30;
console.log(variable);

//10 20 20 30

/**
 *
 */

foo = 30;
console.log("FOO", foo); //30
var foo = 100;
console.log("FOO", foo); //100

/**
 * in this example whenever initially global execution variable
 * defined as undefined but var b in inside the function
 * so in the global execution context we are considering only
 * variable a as undefined
 */

// a = 10;
// (() => {
//   b = 100;
//   console.log(a); //10
//   var b = 100;
//   a = 20;
//   console.log(a); //20
// })();

// console.log(b); // getting an error b is not defined because
// // b code execution is finished inthe function
// console.log(a);
// var a = 30;

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}
//all the value is getting 10 but using let

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(i), 0);
}
/** 
 * output
 * 0
1.js:99 1
1.js:99 2
1.js:99 3
1.js:99 4
1.js:99 5
1.js:99 6
1.js:99 7
1.js:99 8
1.js:99 9

because let hamesha locally work krta hai 
har ek iteration me vo naya scope banata hai
and var use krne me vo varibale hai vo globally work krta hai 
 */
